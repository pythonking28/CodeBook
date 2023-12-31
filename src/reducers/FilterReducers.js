export const FilterReducers = (state, action) => {
    const {type, payload} = action;

    switch(type){
        
        case "PRODUCT_LIST":
            return { productList: payload.products};
        
        case "SORT_BY":
            return {...state,sortBy:payload.sortBy};

        case "RATINGS":
            return {...state, rating:payload.rating};

        case "BEST_SELLER_ONLY":
            return {...state,bestSeller:payload.bestSeller};

        case "ONLY_ IN_STOCK":
            return {...state,onlyInStock:payload.onlyInStock};

        case "CLEAR_FILTER":
            return {...state, onlyInStock:false, bestSeller:false, sortBy:null, rating:null};

        default:
            throw new Error("No case Found");
    }

}


