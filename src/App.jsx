import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts"
import About from "./pages/About";
import DetailProduct from "./pages/DetailProduct";



function App() {
  
  return (
   <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/produk" element={<AllProducts/>}/>
        <Route path="/tentang" element={<About/>}/>
        <Route path="/produk/:id" element={<DetailProduct/>}/>
      </Route>
   </Routes>
  )
}

export default App;
