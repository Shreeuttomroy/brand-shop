import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import swal from "sweetalert";
import { useState } from "react";

function AddCart() {
  const data = useLoaderData();
  const [datas, setDatas] = useState(data);
  const handleDelete = (f) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://brand-show-server.vercel.app/addcart/${f}`, {
          method: "DELETE",
        })
          .then((e) => e.json())
          .then((e) => {
            if (e.deletedCount > 0) {
              const reamingdata = datas.filter((h) => h._id != f);
              setDatas(reamingdata);
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            }
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <>
      <div>
        <div className="w-full">
          <h1 className=" w-fit mx-auto my-5 font-bold text-2xl">My Carts</h1>
        </div>
        <div>
            {
                datas.length>0?
                <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {datas?.map((d) => (
                  <Cart handleDeletes={handleDelete} key={d._id} d={d}></Cart>
                ))}
              </div>:
              <div className=" text-4xl w-fit mx-auto h-[300px] font-black my-28 md:h-[500px]">No product found!</div>
            }
        </div>
      </div>
    </>
  );
}

export default AddCart;
