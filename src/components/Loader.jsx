import React from 'react'
import '../index.css'

export default function Loader() {
  return (
    <div className='absolute flex justify-center items-center text-white text-3xl h-full w-full bg-stone-950 loader'>
      {localStorage.getItem('projects') ? 'Welcome Back <3': 'Welcome <3'}
    </div>
  )
}
