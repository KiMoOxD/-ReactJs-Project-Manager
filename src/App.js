import { useState } from "react";
import NoProject from "./components/NoProject";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import ProjectDetails from "./components/ProjectDetails";
import Loader from "./components/Loader";

let initialState = JSON.parse(localStorage.getItem('projects'))
console.log(initialState)

if (!initialState) {
  initialState = {
    SelectedProjectId: undefined,
    projects: [],
    tasks: []
  }
}

function App() {

  const [projectState, setProjectState] = useState(initialState)

  localStorage.setItem('projects', JSON.stringify(projectState))

  let content;

  if (projectState.SelectedProjectId === undefined) {
    content = <NoProject setProjectState={setProjectState} />
  } else if (projectState.SelectedProjectId === null) {
    content = <NewProject setProjectState={setProjectState} handleClick={CreateProject} />
  } else {
    content = <ProjectDetails projectState={projectState} setProjectState={setProjectState} />
  }

  function CreateProject(title, desc) {
    setProjectState(prev => {
      let id = Math.random()
      return {
        ...prev,
        SelectedProjectId: id,
        projects: [...prev.projects, {
          id: id,
          title: title,
          desc: desc
        }]
      }
    })
  }

  function SelectProject(id) {
    setProjectState(prev => {
      return {
        ...prev,
        SelectedProjectId: id,
      }
    })
  }


  return (
    <>
     <Loader />
     <div className="flex">
        <SideBar 
        projectState={projectState} 
        SelectProject={SelectProject} 
        setProjectState={setProjectState} />
        {content}
    </div>
    </>
  );
}

export default App;
