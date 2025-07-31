import { lazy } from "react";
import { Navigate } from "react-router-dom";
const Home = lazy(()=> import("../pages/home"))
const Detail = lazy(()=> import("../pages/detail"))
const NotFound = lazy(()=> import("../pages/not-found"))
const Entire = lazy(()=> import("../pages/entires"))
const Demo = lazy(()=> import("../pages/demo"))

const routes = [
 {
  path:"/",
  element:<Navigate to='/home'/>
 },
 {
  path:"/home",
  element:<Home/>
 },
 {
  path:"/detail",
  element:<Detail/>
 },
 {
  path:"/entire",
  element:<Entire/>
 },
 {
  path:"*",
  element:<NotFound/>
 },
 {
  path:"/demo",
  element:<Demo/>
 }
]

export default routes;