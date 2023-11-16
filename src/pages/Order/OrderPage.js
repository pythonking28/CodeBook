import { useTitle } from "../../hooks/useTitle"; 
import { OrderSuccess } from "./components/OrderSuccess"
import { OrderFail } from "./components/OrderFail"
import { useLocation } from "react-router-dom";

export const OrderPage = () => {
  useTitle("Orders")
  const { state } = useLocation();
    return (
      state.status ? <OrderSuccess data={state.data} /> : <OrderFail />
    )
  }