
export default function NoProject({ setProjectState }) {
  return (
    <div className="bg-stone-100 flex flex-col gap-4 flex-1 justify-center items-center">
        <p className="text-2xl">Let's Create a New Project !</p>
        <button className="p-2 bg-stone-800 text-stone-100 rounded-lg transition hover:bg-stone-700" 
        onClick={() => setProjectState(prev => {
          return {
            ...prev,
            SelectedProjectId: null
          }
        })}>
          Create New Project
        </button>
    </div>
  )
}
