import { useEffect, useState } from "react";
import { ProductCard } from "../../../components/";
import { getFeaturedProducts } from "../../../services";

export const FeaturedProducts = () => {
    const [products, setProucts] = useState([]);
    const url = "http://localhost:8000/featured_products";

    useEffect(()=>{

      const fetchData = async () => {
        const data = await getFeaturedProducts(url)
        setProucts(data); 
      }
      fetchData();
    },[url])


    return (
      <section className="my-20">
          <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
          <div className="flex flex-wrap justify-center lg:flex-row">
              {products.map((product)=>(
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
      </section>
    )
  }