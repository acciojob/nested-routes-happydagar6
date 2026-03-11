import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";


function ItemDetail() {
  const { categoryItem } = useParams();
  return (
    <div>
      <p>{categoryItem}</p>
    </div>
  )
}

function WomenCategory() {
  const itemList = ['Grooming', 'Shirt', 'Trouser', 'Jewellery'];
  return (
    <div>
      <p>Women Items:</p>
      <ul>
        {itemList.map((item) => (
          <li key={item}>
            <Link to={item}>{item}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  )
}

function Layout() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/women">Women</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}

function Home() {
  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="women" element={<WomenCategory />}>
            <Route path=":categoryItem" element={<ItemDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;