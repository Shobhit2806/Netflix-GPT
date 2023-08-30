import React from 'react'
import lang from "../utils/languageConstants"
import { useSelector } from 'react-redux';
const GPTSearchBar = () => {
  const langVal = useSelector((store) => store.config.lang);
  console.log(langVal);
  return (
    <div className='flex justify-center pt-[10%]'>
        <form className='bg-black grid grid-cols-12 w-1/2'>
            <input className='p-4 m-4 col-span-9' type="text" placeholder={lang[langVal].gptSearchPlaceholder}/>
            <button className='text-white bg-red-700 col-span-3 m-4 px-4 py-2'>{lang[langVal].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar