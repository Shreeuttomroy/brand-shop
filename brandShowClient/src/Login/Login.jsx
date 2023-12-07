import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";

function Login() {
  const { signInWithPass, signInWithGoogle } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithPass(email, password)
      .then(() => {
        swal({
          title: "Login Success!",
          icon: "success",
          button: "Ok",
        });
      })
      .catch((e) => console.log(e));
  };

  const handlePopupLogin = () => {
    signInWithGoogle()
      .then((u) => {
        const { displayName, email, photoURL } = u.user;
        const name= displayName;
        const url= photoURL
        const data = {
          name,
          email,
          url,
        };
        fetch("https://brand-show-server.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then(() => {
            swal({text:"Login Successful!", icon:"success"})
          })
          .catch((e) => console.log(e));
      })
      .catch((d) => console.log(d));
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <label className="label justify-start ml-6 mb-4">
              No account,
              <Link
                className="label-text-alt link link-hover font-bold text-base"
                to={"/register"}
                replace={true}>
                Register Now!
              </Link>
            </label>
            <div className="w-full flex justify-center mb-10">
              <button className="btn btn-neutral" onClick={handlePopupLogin}>
                LogIn With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
