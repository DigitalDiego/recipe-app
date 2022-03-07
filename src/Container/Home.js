import React from 'react'
import {Nav} from "../Components"
import {Link} from "react-router-dom"
const Home = ({search, setSearch, recipes, handleIngredient}) => {
  return (
    <div className='md:flex'>
        <Nav search={search} setSearch={setSearch} handleIngredient={handleIngredient}/>
        <div className='w-full h-83vh mt-17v overflow-y-scroll flex flex-col justify-start items-center pt-1e md:w-75w md:h-screen md:mt-0 md:grid md:grid-cols-2 md:place-items-center'>
          {recipes === null ? null : recipes.map((item, index) => (
            <Link to={`/recipe/${item.id}`} key={index}>
              <div className='bg-emerald-100 h-140p w-400p rounded-lg flex border-2 border-solid border-slate-500 mb-1e'>
                <div className='w-150p h-full grid place-items-center px-2 py-2'>
                  <div className='w-full h-full border-2 border-slate-500 border-solid rounded-lg overflow-hidden' style={{backgroundImage:`url(${item.image})`, backgroundSize:"cover", backgroundPosition:"center"}}></div>
                </div>
                <div className='w-250p h-full grid place-items-center px-1'>
                  <p className='texts-stone-800 font-bold text-sm tracking-wide text-center'>{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Home