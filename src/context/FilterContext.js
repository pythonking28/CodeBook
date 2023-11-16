import { createContext, useContext, useReducer} from "react"
import { FilterReducers } from "../reducers"

const filterInitialState = {
    productList:[],
    onlyInStock:false,
    bestSeller:false,
    sortBy:null,
    rating:null
}


const FilterContext = createContext(filterInitialState);


export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(FilterReducers, filterInitialState);

    function InitialProduct(products){
        dispatch({
            type:"PRODUCT_LIST",
            payload: {
                products
            }
        })
    }

    const bestSeller = (products) => {
        return state.bestSeller? products.filter((product)=> product.best_seller === true): products;
    }

    const inStock = (products) => {
        return state.onlyInStock? products.filter((product)=> product.in_stock === true): products;
    }

    const sortBy = (products) =>{
        if(state.sortBy === "lowtohigh"){
            return products.sort((a,b)=> Number(a.price) - Number(b.price));
        }
        if(state.sortBy === 'hightolow'){
            return products.sort((a,b) => Number(b.price) - Number(a.price));
        }
        return products;
    }

    const rating = (products) => {
        if(state.rating === "4STARSABOVE"){
            return products.filter((product) => product.rating >= 4);
        }
        if(state.rating === "3STARSABOVE"){
            return products.filter((product) => product.rating >= 3);
        }
        if(state.rating === "2STARSABOVE"){
            return products.filter((product) => product.rating >= 2);
        }
        if(state.rating === "1STARSABOVE"){
            return products.filter((product) => product.rating >= 1);
        }
        return products;
    } 

    const filteredProductList = rating(sortBy(inStock(bestSeller(state.productList))));


    const value = {
        state,
        dispatch,
        productList: filteredProductList,
        InitialProduct

    }

    return (
        <FilterContext.Provider value={value}> 
            {children}
        </FilterContext.Provider>
    )

}

export const useFilter = () =>{
    const context = useContext(FilterContext);
    return context;
}

