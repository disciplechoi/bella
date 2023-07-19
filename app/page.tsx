import Image from 'next/image'
import {Hero, SearchBar, CustomFilter, PlantCard} from '@/components'
import { fetchPlants } from '@/utils'


export default async function Home() {
  const allPlants = await fetchPlants();

  // console.log(allPlants);

  const isDataEmpty = !Array.isArray(allPlants) || allPlants.length<1 || !allPlants;
   
  
  return (
   <main className="overflow-hidden">
    <Hero/>
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <div className="text-4xl font-extrabold">All Plants</div>
        <p>Explore the plants you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="year" />
          <CustomFilter title="year" />
        </div>
      </div>

      {!isDataEmpty? (
        <section>
          <div className="home__plants-wrapper">
            {allPlants?.slice(0,5).map((plant)=>(<PlantCard plant={plant}/>
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl">Oops, no results</h2>
          <p>{allPlants?.message}</p>
        </div>
      )

      }
    </div>
   </main>
  )
}
