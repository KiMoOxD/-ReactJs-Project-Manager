import React from 'react'
import { forwardRef } from 'react'

export default forwardRef(function Input({ label, ...props }, ref) {
  return (
    <div className='flex flex-col w-96 max-w-full gap-2'>
      <label htmlFor={label}>{label}</label>
      <input id={label} {...props} ref={ref} className='border w-full p-1.5 rounded outline-none' />
    </div>
  )
})
