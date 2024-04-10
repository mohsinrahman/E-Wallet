import { useState } from 'react'
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import router from './router/router';
import './App.scss'

function App() {
  
  return (
<main>
<RouterProvider router={ router } />
</main>
  )
}

export default App
