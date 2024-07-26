import { createContext, useState } from "react";
import { categories, products } from "@app/data";


export const ProductsContext = createContext({});

export function ProductsProvider({ children }) {

    const [currentCategory, setCurrentCategory] = useState(null);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [currentProducts, setCurrentProducts] = useState(null);

    const onSetCurrentCategory = (category = {}) => {
        setCurrentCategory(category);
    }

    const onSetCurrentProduct = (product = {}) => {
        setCurrentProduct(product);
    }

    const onSetCurrentProducts = () => {
        const currentProducts = products.filter(products => products.categoryId === currentCategory.id);
        setCurrentProducts(currentProducts);
    }

    return (
        <ProductsContext.Provider
            value={{
                categories,
                currentCategory,
                currentProduct,
                currentProducts,
                onSetCurrentCategory,
                onSetCurrentProduct,
                onSetCurrentProducts
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}
