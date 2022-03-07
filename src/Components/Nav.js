import React from 'react'

const Nav = ({search, setSearch, handleIngredient}) => {
  return (
    <div className='w-full fixed top-0 right-0 z-10 bg-emerald-500 flex flex-col justify-center items-center h-17vh shadow-md md:w-25w md:relative md:h-screen'>
      <div className='w-full h-10vh grid place-items-center'>
        <h1 className='text-4xl font-bold text-slate-100 md:text-5xl md:mb-4'>Recipe.io</h1>
      </div>
      <form className='flex justify-center items-center h-5vh w-full md:flex md:flex-col' onSubmit={handleIngredient}>
        <input type="text" placeholder="Ingredient" value={search} onChange={event => setSearch(event.target.value)} className='w-280p h-28p rounded-md px-4 font-bold text-stone-800 placeholder:text-stone-800 border-none outline-none mr-4 md:mb-2 md:mr-0'/>
        <input type="submit" value="Search" className='w-80p text-center bg-slate-100 h-28p border-none outline-none rounded-md font-bold text-stone-800 cursor-pointer'/>
      </form>
    </div>
  )
}

export default Nav