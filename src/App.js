
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduk";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={
            <ProductList />
          } />  
          <Route path="/add" element={
            <AddProduct />
          } />
          <Route path="/edit/:id" element={
            <EditProduct />
          } />
        </Routes>
      </Router>
    </div>
  );
}


export default App;