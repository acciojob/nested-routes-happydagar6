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
    // 1. Cypress ko <main> tag chahiye tha, isliye isko main bana diya
    <main>
      {/* 2. Cypress ko menu ke liye <nav> tag chahiye tha */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/women">Women</Link></li>
        </ul>
      </nav>
      
      {/* 3. Cypress ko main > div chahiye jisme content render ho */}
      <div>
        <Outlet />
      </div>
    </main>
  )
}

function Home() {
  return (
    <div>
      <p>Index</p>
    </div>
  )
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