import React, { createContext, useContext, useState } from 'react';
import Api from './service/connection';

export const FetchContext = createContext();
const api = new Api()

export function FetchProvider({children}){
    const [projects, setProjects] = useState([]);
    const [ isOpen, setIsOpen ] = useState(false)

    async function fetchData(){
        const resp = await api.listProjects();
        setProjects(resp)
    } 

    async function switchStatus(project){
        await api.switchStatus(project);
        fetchData()
    }

    return(
        <FetchContext.Provider value={{
            projects,
            setProjects,
            fetchData,
            switchStatus,
            isOpen,
            setIsOpen
        }} >
            {children}
        </FetchContext.Provider>
    )
}

export const useFetch = () => {
    const context = useContext(FetchContext);
    const { projects, setProjects, fetchData, switchStatus, isOpen, setIsOpen } = context;
    return { projects, setProjects, fetchData, switchStatus, isOpen, setIsOpen }
}