import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search } from "../Sections/Search";
import { DropdownLoggedIn, DropdownLoggedOut } from "../index";
import { useCart } from "../../context"

export const Header = () => {
    const[dark, setDark] = useState( JSON.parse(localStorage.getItem('dark')) || false);
    const[searchSection, setSearchSection] = useState(false);

    const [dropdowm, setDropdown] = useState(false);

    const { cartList } = useCart();


    useEffect(()=>{
        localStorage.setItem('dark',JSON.stringify(dark));
        if(dark){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    },[dark])
    return (
      <header>      
          <nav className="bg-white dark:bg-gray-900">
              <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                  <Link to="/" className="flex items-center">
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/006/800/199/small/creative-abstract-book-feather-logo-design-vector.jpg" className="mr-3 h-10" alt="CodeBook Logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
                  </Link>
                  <div className="flex items-center relative">
                      <span onClick={()=> setDark(!dark)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                      <span onClick={()=> setSearchSection(!searchSection)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                      <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                      <span className="text-2xl bi bi-cart-fill relative">
                          <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                      </span>                    
                      </Link>
                      <span onClick={()=>setDropdown(!dropdowm)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                      {dropdowm && (sessionStorage.getItem("token") ? <DropdownLoggedIn setDropdown={setDropdown} /> : <DropdownLoggedOut setDropdown={setDropdown} />)}
                  </div>
              </div>
          </nav>
          {searchSection && <Search setSearchSection={setSearchSection} />}

      </header>
    )
  }
