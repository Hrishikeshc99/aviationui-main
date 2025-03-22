import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddProduct from "./components/AddProduct";
import StoreAccComponent from "./components/StoreAccComponent";
import LoginPage from "./components/LoginPage";
import ListProducts from "./components/ListProducts";
import ViewProduct from "./components/ViewProduct";
import EditProduct from "./components/EditProduct";
import SupplierRegistartion from "./components/SupplierRegistration";
import ProductList from "./components/ProductList";
import ViewSupplierRegis from "./components/ViewSupplierRegis";
import ViewStoreAcc from "./components/ViewStoreAcc";
import MaterialReceiptNoteForm from "./components/AddMaterialNote";
import ViewMaterialPage from "./components/ViewMaterialNotePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditMaterialNote from "./components/EditMaterialNote";
import EditStoreAcceptance from "./components/EditStoreAcceptance";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/Store" element={<StoreAccComponent />} />
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/listProducts" element={<ListProducts />} /> */}
          <Route path="/productList" element={<ProductList />} />
          <Route path="/viewProduct" element={<ViewProduct />} />
          <Route path="/editProduct/:productId" element={<EditProduct />} />
          <Route path="/storeAcceptance" element={<StoreAccComponent />} />
          <Route path="/editstoreAcceptance" element={<EditStoreAcceptance />} />
          <Route path="/viewstoreAcceptance" element={<ViewStoreAcc />} />
          <Route path="/editmaterial" element={<EditMaterialNote />} />
          <Route
            path="/SupplierRegistration"
            element={<SupplierRegistartion />}
          />
          <Route
            path="/ViewSupplierRegistration"
            element={<ViewSupplierRegis />}
          />
          <Route path="/materialPage" element={<MaterialReceiptNoteForm />} />
          <Route path="/viewmaterialPage" element={<ViewMaterialPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
