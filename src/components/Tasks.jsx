import React from 'react'
import Task from './Task'

export default function Tasks({ projects, SelectProject, setProjectState}) {
  return (
    <section className='mt-3'>  
      {projects.map(project => <Task key={project.id} title={project.title} id={project.id} SelectProject={SelectProject} setProjectState={setProjectState} />)}
    </section>
  )
}
