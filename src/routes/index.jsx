import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { rotas } from './imports'

export const router = createBrowserRouter(
    createRoutesFromElements(
        rotas.map((route) => {
            return <Route key={route.name} path={route.path} element={route.element}/>
        })
    )
)