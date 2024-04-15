import { Navigate } from 'react-router-dom';

export function PublicRoute({children}:any){
    const teste = localStorage.getItem('token')
    return teste == null ? children : <Navigate to="/home"/>
}