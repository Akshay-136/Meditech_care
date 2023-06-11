import App from 'App';
import React from 'react'
import { Routes, Route, Navigate, useLocation,Link } from "react-router-dom";
export default function Home() {
  return (
    <>
        <Link to={'/dashboard'}>Go to </Link>  
    </>
  )
}
