import "./App.css";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Outlet, useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();

  return (
    <>
      <Navbar></Navbar>
      {navigation.state == "loading" ? <div className=" w-full"> <p className=" font-extrabold w-fit mx-auto text-4xl">Loading</p></div> : <Outlet></Outlet>}
      <Footer></Footer>
    </>
  );
}

export default App;
