// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import ProductDetails from './pages/ProductDeatails/ProductDeatails';
// import Navbar from './components/Navbar/Navbar';

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//       </Routes>
//     </Router>
//   );
// }

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import ProductDetails from './pages/ProductDeatails/ProductDeatails';


function App(){
  const router = createBrowserRouter([
    {path: '/', element: <Layout/> , children: [
      {path: '' , element: <Home/>},
      {path: '/product/:id', element: <ProductDetails/>}
    ]},

  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )

}
export default App;