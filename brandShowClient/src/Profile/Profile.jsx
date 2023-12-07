import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Profile() {
  const { duser } = useContext(AuthContext);
  return (
    <>
      {duser && (
        <div className=" my-14 text-center">
          <div className="w-full">
            <img
              className="w-[200px] h-[200px] mx-auto rounded-full"
              src={duser?.url}
              alt=""
            />
          </div>
          <div className="text-xl font-semibold">
            <h1 className="my-5">Name: {duser?.name}</h1>
            <p>Email: {duser.email}</p>
          </div>
        </div>
      
      )}
    </>
  );
}

export default Profile;
