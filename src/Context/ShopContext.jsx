import React, { createContext } from "react";
import all_product_data from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = { all_product: all_product_data }; // Assurez-vous que all_product est correctement défini

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
