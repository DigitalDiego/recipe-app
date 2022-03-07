import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
const Recipe = () => {
  const {id} = useParams()
  const [instructions, setInstructions] = useState(null)
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_KEY}`)
      .then(res => {
        setInstructions(res.data)
      }).catch(error => console.log(error))
  }, [id])
  return (
    <div className='my-2 px-8'>
      {instructions === null ? "" : <div className='w-full'>
        <div className='w-full flex flex-col justify-center items-center mb-1'>
          <div className='w-full h-200p border-2 border-solid border-gray-500 rounded-lg overflow-hidden mb-1 md:w-500p md:h-320p'>
            <img src={instructions.image} alt="food" className='w-full h-full object-cover'/>
          </div>
          <div className='w-full grid place-items-center'>
            <h1 className='font-bold text-center text-xl md:text-2xl'>{instructions.title}</h1>
          </div>
        </div>
        <div className='w-full flex flex-start items-center flex-col'>
          <div>
            <div className='w-full grid place-items-center my-2'>
              <h1 className='font-bold bg-emerald-100 px-2 rounded-md md:text-xl'>Ingredients</h1>
            </div>
            <ul className='list-square'>
              {instructions.extendedIngredients.map((item, index) => (
                <li className='font-bold md:mb-1' key={index}>{item.original}</li>
              ))}
            </ul>
          </div>
          <div className='w-full grid place-items-center'>
            <div className='w-full grid place-items-center my-2'>
              <h1 className='font-bold bg-emerald-100 px-2 rounded-md md:text-xl'>Instructions</h1>
            </div>
            <ol className='list-roman md:w-1/2'>
              {instructions.analyzedInstructions[0].steps.map((item, index) => (
                <li className='font-bold md:mb-1' key={index}>{item.step}</li>
              ))}
            </ol>
          </div>
        </div>
        </div>
      }
    </div>
  )
}

export default Recipe