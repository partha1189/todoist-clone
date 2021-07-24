import { createContext, useContext } from "react";
import { useProjects } from '../hooks/index';

export const ProjectsContext = createContext();
export const ProjectsProvider = ({children}) => {
  const { projects, setProject } = useProjects();

  return (
    <ProjectsContext.Provider value={{projects, setProject}} >
      {children}
    </ProjectsContext.Provider>
  )
}

export const useProjectsValue = () => useContext(ProjectsContext);

// const { projects } = useProjectsValue();