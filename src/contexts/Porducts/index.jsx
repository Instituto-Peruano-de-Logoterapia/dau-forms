import { createContext, useEffect, useState } from "react";
import { categories, products } from "@app/data";


export const ProductsContext = createContext({});

export function ProductsProvider({ children }) {

    const [currentCategory, setCurrentCategory] = useState(null);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [currentProducts, setCurrentProducts] = useState(null);
    const [gridItems, setGridItems] = useState(categories);

    let userAlreadyPayMe = false;
    const onSetCurrentCategory = (category = {}) => {
        setCurrentCategory(category);
    }

    const onSetCurrentProduct = (product = {}) => {
        setCurrentProduct(product);
    }

    const onSetCurrentProducts = (category = {}) => {
        const currentProducts = products.filter(products => products.categoryId === category.id);
        setCurrentProducts(currentProducts);
    }

    const onSetProducts = (state) => {
        setCurrentProducts(state);
    }

    const onSetGridItems = (currentItems) => {
        setGridItems(currentItems);
    }

    return (
        <ProductsContext.Provider
            value={{
                categories,
                currentCategory,
                currentProduct,
                currentProducts,
                userAlreadyPayMe,
                gridItems,
                onSetCurrentCategory,
                onSetCurrentProduct,
                onSetCurrentProducts,
                onSetProducts,
                onSetGridItems
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}
