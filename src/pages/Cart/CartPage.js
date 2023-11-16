import { useTitle } from "../../hooks/useTitle";
import { CartList } from "./components/CartList"
import { CartEmpty } from "./components/CartEmpty"
import { useCart } from "../../context";

export const CartPage = () => {
  useTitle("Cart")
  const { cartList } = useCart();

    return (
      <main>     
        {cartList.length !== 0 ? <CartList /> : <CartEmpty />}     
      </main>
    )
  }