import { useContext } from "react";
import { ProductsContext } from "../Porducts";


export function useProducts() {
    return useContext(ProductsContext);
}