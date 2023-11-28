

import CarCard from '@/components/CarCard'
import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import ShowMore from '@/components/ShowMore'
import { fuels, yearsOfProduction } from '@/utils'
import { fetchCarsModel } from '@/utils/api'

export default async function Home({ searchParams }) {
    
    const allCars = await fetchCarsModel({ 
        manuFacturer: searchParams.manuFacturer || '',
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || '',
        model: searchParams.model || '',
        limit: searchParams.limit || 10,
    })
    console.log(allCars)

    const isDataVacia = !Array.isArray(allCars) || !allCars.length  // Si no es un array o si está vacío.

    return (
        <main className="overflow-hidden">
            <Hero />

            <div className="mt-12 padding-x padding-y max-width" id='discover'>
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">
                        Car Catalogue
                    </h1>
                    <p className="text-lg mt-4">
                        Explore the cars you might like 
                    </p>
                </div>

                <div className="home__filters">
                    <SearchBar />
                    
                    <div className="home__filter-container">
                        <CustomFilter title='fuel' options={ fuels }/>
                        <CustomFilter title='year' options={ yearsOfProduction }/>
                    </div>
                </div>

                {!isDataVacia ? (
                    <section>
                        <div className="home__cars-wrapper">
                            { allCars.map((car) => (
                                <CarCard key={car.id} car={car} /> 
                                ))
                            }
                        </div>
                        <ShowMore 
                            PageNumber={(searchParams.limit || 10) / 10}   // 10 es el número de elementos por página, se divide para saber el número de página.
                            isNextPage={(searchParams.limit || 10 ) > allCars.length}  // Si el límite es mayor a la cantidad de elementos, no hay más páginas.
                        />
                    </section>    
                    ) : (
                        <div className="home__error-container py-4">
                            <h2 className='text-black text-xl font-bold'>
                                No hay datos
                            </h2>
                        </div>
                    )
                }
                
            </div>
        </main>
    )
}
