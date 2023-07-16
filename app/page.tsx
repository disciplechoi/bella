import Image from 'next/image'
import {Hero, SearchBar, CustomFilter} from '@/components'


export default function Home() {
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

    </div>
   </main>
  )
}
