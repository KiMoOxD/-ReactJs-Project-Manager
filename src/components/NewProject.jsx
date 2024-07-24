import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ handleClick, setProjectState }) {
  let title = useRef()
  let desc = useRef()

  return (
    <div className="flex flex-col items-center justify-center gap-3 m-auto">
        <Input type='text' ref={title} label={"Project Title"} />
        <div className="flex flex-col gap-2">
        <label htmlFor="textarea">Project Description</label>
        <textarea 
        id="textarea"
        ref={desc} 
        className="resize-none border h-48 w-96 p-1.5 rounded outline-none"
        />
        </div>
        <div className="flex gap-2 justify-end w-full mt-2">
            <button 
            className="p-1.5 bg-stone-200 hover:bg-stone-300 rounded w-20 h-9"
            onClick={() => setProjectState(prev => {
              return {
                ...prev,
                SelectedProjectId: undefined
              }
            })}>
              Cancel
            </button>
            <button 
            className="p-1.5 bg-stone-600 hover:bg-stone-700 text-stone-100 rounded w-20 h-9" 
            onClick={() => handleClick(title.current.value, desc.current.value)}>
              Create
            </button>
        </div>
    </div>
  )
}
