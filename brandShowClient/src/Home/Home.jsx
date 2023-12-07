import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";
import Popular from "./Popular";

function Home() {
  const data = useLoaderData();
  const [dats,setData]= useState(null);
  const [pdata,setPdata]= useState(null);
  let pdatas;
  if (pdata) {
    pdatas = pdata.slice(0,9)
  }

  useEffect(()=>{
    const clearFunc =()=>{
        fetch('https://brand-show-server.vercel.app/brand')
        .then(res=> res.json())
        .then(res=> {
            setData(res)
        })
        .catch(e=>console.log(e))
    }
    clearFunc();
  },[])
  useEffect(()=>{
    const clearFunc =()=>{
        fetch('https://brand-show-server.vercel.app/products')
        .then(res=> res.json())
        .then(res=> {
            setPdata(res)
        })
        .catch(e=>console.log(e))
    }
    clearFunc();
  },[])

  return (
    <>
      {data && (
        <div>
          <div className="carousel w-full">
            <div
              id="slide1"
              className="carousel-item flex justify-around h-[300px] md:h-[500px] relative bg-[#0000000d] w-full">
              <div className="w-2/5 font-bold text-xl md:text-3xl flex justify-center">
                <h1 className=" w-full md:w-[300px] self-center">
                  We Are Provide Top Brands Product!
                </h1>
              </div>
              <img src={data[0]?.img} className="w-2/5" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn bg-[#0000001f] btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn bg-[#0000001f] btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item h-[300px] md:h-[500px] justify-around bg-[#0000000d] relative w-full">
              <div className="w-2/5 font-bold text-3xl flex justify-center">
                <h1 className=" w-[300px] self-center">
                  We Are Provide Top Brands Product!
                </h1>
              </div>
              <img src={data[1]?.img} className="w-2/5" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn bg-[#0000001f] btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn bg-[#0000001f] btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item h-[300px] md:h-[500px] justify-around bg-[#0000000d] relative w-full">
              <div className="w-2/5 font-bold text-3xl flex justify-center">
                <h1 className=" w-[300px] self-center">
                  We Are Provide Top Brands Product!
                </h1>
              </div>
              <img src={data[2]?.img} className="w-2/5" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn bg-[#0000001f] btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn bg-[#0000001f] btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className=" my-8">
            <div className=" w-full font-bold text-2xl">
              <h1 className="w-fit mx-auto">Our Top Brands</h1>
            </div>
            <div className=" w-full md:w-4/5 mx-auto grid grid-cols-2 md:grid-cols-3">
                {dats && (
                    dats.map(d=> <Brand key={d._id} d={d}></Brand>)
                )}
            </div>
          </div>
          <div>
            <div className="w-full flex text-2xl font-bold my-5 justify-center" ><h1>Most Popular</h1></div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {
                pdatas?.map(d=> <Popular key={d._id} d={d}></Popular>)
              }
            </div>
          </div>
          <div className=" py-10">
            <div className="w-full flex text-2xl font-bold my-6 justify-center"><h1>Our Client Feedback</h1></div>
            <div className=" w-full my-9">
              <div className=" w-3/5 text-lg font-medium mx-auto">
              Great services and super professional , was able to get my store up and running within 1 month from contact to go live date. Thank you for working with me despite the time difference!
              <p className=" ml-10 italic font-semibold">--Pantos</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
