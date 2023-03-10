import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Skeleton from './layouts/skeleton'
import Hero from './pages/hero'
import Biography from './pages/biography'
import Featured from './pages/featured'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = { <Skeleton /> }>
      <Route index element = { <Hero /> } />
      <Route path = '/about' element = { <Biography /> } />
      <Route path = '/projects' element = { <Featured /> } />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router = { router } />
}