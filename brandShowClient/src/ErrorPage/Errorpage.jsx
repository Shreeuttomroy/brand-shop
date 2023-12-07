import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className=" text-xl font-bold text-center">
        <div className=" w-full">
          <h1 className="w-fit mx-auto text-4xl md:text-6xl my-10 font-extrabold">
            404
          </h1>
        </div>
        <div className="w-full">
          <div className=" w-fit mx-auto">
            <h2 className="text-4xl my-5">Page Not Found!</h2>
            <Link className="btn bg-slate-400" to={"/"}>Go to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
