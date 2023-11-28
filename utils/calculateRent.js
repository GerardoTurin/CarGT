
export const calculateCarRent = (city_mpg, year) => {
    const basePricePerDay = 50; // Precio base por día...
    const mileageFactor = 0.1; // Adicional por millas
    const ageFactor = 0.05; // Adicional por año de antiguedad...

    //! Calcula el adicional por millas y antiguedad
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    //! Calcula el precio total por día...
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type, value) => {
    // Mostrar el valor de la URL
    const searchParams = new URLSearchParams(window.location.search);

    // Aqui se almacena el valor de la URL...
    searchParams.set(type, value);

    
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`; // Construye la URL con los parametros de busqueda...
    return newPathname;
};

export const deleteSearchParams = (type) => {
    
    const newSearchParams = new URLSearchParams(window.location.search);    // Nuevo objeto de busqueda...
    newSearchParams.delete(type.toLocaleLowerCase());   // Elimina el parametro de busqueda...

    // Nuevo pathname, con los parametros de busqueda...
    const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
    return newPathname;
};


