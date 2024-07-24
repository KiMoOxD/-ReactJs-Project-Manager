import React, { useState } from 'react'
import Tasks from './Tasks'
import { MdArrowBackIosNew } from "react-icons/md";
import { ImSpinner10 } from "react-icons/im";

let timer = 500

export default function SideBar({ projectState, SelectProject, setProjectState }) {

  let [btnContent, setBtnContent] = useState({
    new: '+ Add Project',
    select: `Go Back`
  })
  let Btn = projectState.SelectedProjectId ?
      <button 
      className='self-end flex gap-1 justify-center items-center mb-3 w-32 h-9 text-sm bg-stone-800 rounded-md text-stone-50 hover:bg-stone-500 transition s'
      onClick={() => {
        setBtnContent(prev => ({...prev, select: 'loading...'}))
        setTimeout(() => {
          setBtnContent(prev => ({...prev, select: 'Go Back'}))
          setProjectState(prev => { return {...prev, SelectedProjectId: undefined}})
        }, timer)
      }}
      > {btnContent.select !== 'loading...' && <MdArrowBackIosNew />}
        {btnContent.select === 'loading...' && <ImSpinner10 className='animate-spin' />}
        {btnContent.select !== 'loading...' && btnContent.select}
      </button> 
      : 
      <button 
      className='self-end flex gap-1 justify-center items-center mb-3 w-32 h-9 text-sm bg-stone-800 rounded-md text-stone-50 hover:bg-stone-500 transition'
      onClick={() => {
        setBtnContent(prev => ({...prev, new: 'loading...'}))
        setTimeout(() => {
          setBtnContent(prev => ({...prev, new: '+ Add Project'}))
          setProjectState(prev => { return {...prev, SelectedProjectId: null}})
        }, timer)
      }}
      >
        {btnContent.new === 'loading...' && <ImSpinner10 className='animate-spin' />}
        {btnContent.new !== 'loading...' && btnContent.new}
      </button>


  return (
    <div className='w-1/3 h-screen bg-stone-900 p-5 flex flex-col text-stone-50'>
        <h1 className='text-3xl mb-5 text-stone-200'>Your Projects.</h1>
        {Btn}
        <hr />
        <Tasks projects={projectState.projects} SelectProject={SelectProject} setProjectState={setProjectState} />
    </div>
  )
}
