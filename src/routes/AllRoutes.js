import { Routes, Route } from "react-router-dom"
import { DashboardPage, HomePage, Login, ProductsList, Register, PageNotFound } from "../pages"
import { ProductDetail } from "../pages/ProductDetails"
import { CartPage } from "../pages/Cart/CartPage"
import { OrderPage } from "../pages/Order/OrderPage"
import { ProtectedRoute } from "./ProtectedRoute" 



export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="productList" element={<ProductsList />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
            <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}
