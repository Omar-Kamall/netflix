import { createBrowserRouter , createRoutesFromElements , Route , Outlet , RouterProvider } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { lazy , Suspense } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
const Navbar = lazy(() => import ('./Components/Navbar'))
const Footer = lazy(() => import ('./Components/Footer'))
const Display = lazy(() => import ('./Pages/Display'))
const Signin = lazy(() => import ('./Pages/Signin'))
const Signup = lazy(() => import ('./Pages/Signup'))
const Home =lazy(() => import ('./Pages/Home'))
const Trending = lazy(() => import ('./Pages/Trending'))
const Popular = lazy(() => import ('./Pages/Popular'))
const Action = lazy(() => import ('./Pages/Action'))
const Drama = lazy(() => import ('./Pages/Drama'))
import './App.css'

const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const App = () => {
  const [loading , setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },3000)
  },[])
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/home' element={<Suspense fallback={<div className='bg-black h-[100vh] flex justify-center items-center'>
          <FadeLoader color='red'/></div>}>
          <Layout/>
        </Suspense>}>
        <Route index element={<Home/>}/>
        <Route path='trending' element={<Trending/>}/>
        <Route path='popular' element={<Popular/>}/>
        <Route path='action' element={<Action/>}/>
        <Route path='drama' element={<Drama/>}/>
      </Route>
      <Route path='/' element={<Display />}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Route>
  ))
  return (
    <>
      {loading ? <div className='bg-black h-[100vh] flex justify-center items-center'>
        <span className='load font-extrabold text-red-600 text-7xl'>
          <span>N</span>
          <span>E</span>
          <span>T</span>
          <span>F</span>
          <span>L</span>
          <span>I</span>
          <span>X</span>
        </span></div> : <Suspense fallback={<div className='bg-black h-[100vh] flex justify-center items-center'>
          <FadeLoader color='red'/>
        </div>}><RouterProvider router={router}/></Suspense>
      }
    </>
  )
}

export default App