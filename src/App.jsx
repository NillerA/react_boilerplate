import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Router } from 'react-router-dom'
import Layout from "./layout/Layout"
import AdminLayout from './layout/ADMIN/AdminLayout'
import Home from './pages/Home'
import ExamplePage from './pages/ExamplePage'
import AdminHome from './pages/ADMIN/AdminHome'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      {/* --------- PUBLIC ---------- */}
      <Route path='/' element = {<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='example' element={<ExamplePage/>}/>
      </Route>
      {/* --------- ADMIN ---------- */}
      <Route path='/admin/' element = {<AdminLayout/>}>
        <Route index element={<AdminHome/>}/>
      </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App