import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../Porducts";


export function useProducts() {
    return useContext(ProductsContext);
}

export function useCountries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();

                const currentCountries = data.map((country) => ({
                    name: country.name.common,
                    flagImage: country.flags.png,
                    code: country.cca2,
                    callingCode: `${country.idd.root}${country.idd.suffixes}`
                }));

                currentCountries.sort((a, b) => a.name.localeCompare(b.name));
                setCountries(currentCountries);
            } catch (error) {
                console.log('error while retriving the countries')
                setCountries([]);
            }
        }

        getCountries();
    }, [])

    return {
        countries
    }
}