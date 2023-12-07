

import { Link, useLoaderData } from "react-router-dom";
import Product from "./Product";

function Brands() {
  const products = useLoaderData();
  let slideProducts;
  if (products) {
    slideProducts = products.slice(0, 3);
  }

  return (
    <>
      {
        <div className="mb-8">
          <div className="carousel w-full">
            <div
              id="slide1"
              className="carousel-item flex justify-around h-[300px] md:h-[500px] relative bg-[#0000000d] w-full">
              <div className="w-2/5 font-bold text-5xl flex justify-center">
                <div className=" w-[300px] self-center">
                  <h1 className=" mx-auto w-fit">{slideProducts[0].name}</h1>
                  <Link to={""}>
                    <p className=" mx-auto my-8 text-white w-fit font-semibold text-xl bg-blue-500 py-3 px-2 rounded-lg">
                      Buy Now!
                    </p>{" "}
                  </Link>
                </div>
              </div>
              <img src={slideProducts[0]?.img} className="w-2/5" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item h-[300px] md:h-[500px] justify-around bg-[#0000000d] relative w-full">
              <div className="w-2/5 font-bold text-5xl flex justify-center">
                <div className=" w-[300px] self-center">
                  <h1 className=" mx-auto w-fit">{slideProducts[1].name}</h1>
                  <Link to={""}>
                    <p className=" mx-auto my-8 text-white w-fit font-semibold text-xl bg-blue-500 py-3 px-2 rounded-lg">
                      Buy Now!
                    </p>{" "}
                  </Link>
                </div>
              </div>
              <img src={slideProducts[1]?.img} className="w-2/5" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item h-[300px] md:h-[500px] justify-around bg-[#0000000d] relative w-full">
              <div className="w-2/5 font-bold text-5xl flex justify-center">
                <div className=" w-[300px] self-center">
                  <h1 className=" mx-auto w-fit">{slideProducts[2].name}</h1>
                  <Link to={""}>
                    <p className=" mx-auto my-8 text-white w-fit font-semibold text-xl bg-blue-500 py-3 px-2 rounded-lg">
                      Buy Now!
                    </p>{" "}
                  </Link>
                </div>
              </div>
              <img src={slideProducts[2]?.img} className="w-2/5" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full"> <h1 className="w-fit mx-auto font-extrabold text-3xl my-8">Products</h1></div>
            <div className=" w-11/12 gap-4 grid grid-cols-1 md:grid-cols-3 justify-between mx-auto">
                {products?.map(d=> <Product key={d._id} d={d}></Product>)}
            </div>
          </div>
        </div>
      }
      {/* <h1>{products[0].brand}</h1> */}
    </>
  );
}

export default Brands;
