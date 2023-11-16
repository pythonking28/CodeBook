import { useTitle } from "../../hooks/useTitle";
import { useEffect, useState } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getUserOrder } from "../../services";

export const DashboardPage = () => {
  useTitle("Dashboard");
  const [orders, setOrders] = useState([])

  useEffect(()=>{
    async function fetchOrder(){
      const data = await getUserOrder();
      setOrders(data)
    }
    fetchOrder();
  },[])

    return (
      <main>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        </section>

        <section>
        {orders.length !== 0 && orders.map(order=><DashboardCard key={order.id} order={order} />)}
        </section>

        <section>
        {orders.length === 0 && <DashboardEmpty />}
        </section>
      </main>
    )
  }