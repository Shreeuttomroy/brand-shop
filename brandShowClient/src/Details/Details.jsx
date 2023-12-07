import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

function Details() {
  const data = useLoaderData();
  const { name, img, brand, price, desc, category, rating } = data;
  const hanleaddcart = () => {
    fetch("https://brand-show-server.vercel.app/addcart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((e) => e.json())
      .then((e) => {
        if (e.insertedId) {
          swal("Good job!", "Succesfully Product Added!", "success");
        }else{
            swal('Already Added!')
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="w-11/12 mx-auto">
        <img className="w-full h-[300px] md:h-[700px]" src={img} alt={name} />
        <div className=" border-t-2 my-5">
          <h1 className=" text-2xl font-bold my-3">{name}</h1>
          <p className=" text-xl font-medium my-2">Brand: {brand}</p>
          <p className=" text-xl font-medium my-2">Type: {category}</p>
          <p className=" text-xl font-medium my-2">Price: {price}</p>
          <p className=" text-xl font-normal">
            <span className="text-xl font-medium">Description:</span> {desc}
          </p>
          <p className=" text-xl font-medium mt-4">Rating: {rating}</p>
        </div>
        <button
          onClick={hanleaddcart}
          className=" btn bg-blue-500 hover:bg-blue-800 text-white my-7">
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default Details;
