"use client";
import { useState } from "react";
import SearchManuFacturer from "./SearchManuFacturer";
import SearchButton from "./SearchButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
    const [manuFacturer, setManuFacturer] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter();

    const handleSearch = (evt) => {
        evt.preventDefault();
        
        if (manuFacturer === '' && model === '') {
            return alert('Debes ingresar al menos un criterio de búsqueda');
        }

        updateSearchParams( 
            model.toLocaleLowerCase(), 
            manuFacturer.toLocaleLowerCase() );
    };



    // Actualiza los parámetros de búsqueda en la URL
    const updateSearchParams = (model, manuFacturer) => {
        const searchParams = new URLSearchParams(window.location.search);   // Obtiene los parámetros de búsqueda de la URL


        // Si, al menos, uno de los parámetros de búsqueda no es vacío
        model 
            ? searchParams.set('model', model) // Agrega los parámetros de búsqueda a la URL
            : searchParams.delete('model');   // Agrega o elimina los parámetros de búsqueda de la URL

        manuFacturer
            ? searchParams.set('manuFacturer', manuFacturer)
            : searchParams.delete('manuFacturer');


        const newPathNombre = `${window.location.pathname}?${searchParams.toString()}`;  // Crea el nuevo path con los parámetros de búsqueda
        router.push(newPathNombre, {scroll: false});   // Redirecciona a la nueva URL
    };


    return (
        <form className="searchbar" onSubmit={ handleSearch }>
            <div className="searchbar__item">
                <SearchManuFacturer 
                    manuFacturer={ manuFacturer }
                    setManuFacturer={ setManuFacturer }
                />
                <SearchButton otrasClases='sm:hidden' />
            </div>
            <div className="searchbar__item">
                <Image src="/model-icon.png" width={ 25 } height={ 25 } alt='car model' className="absolute w-[20px h-[20px] ml-4"/>
                <input 
                    type="text" 
                    name="model" 
                    value={model} 
                    onChange={ (evt) => setModel(evt.target.value) }
                    placeholder="Modelo"
                    className="searchbar__input"
                />
                <SearchButton otrasClases="sm:hidden md:block" />
            </div>
        </form>
    )
}

export default SearchBar;