import React, { useEffect, useState } from 'react'
import Sidebar from './component/sidebar.jsx'

function App() {
   const current_theme = localStorage.getItem('current_theme');
   const [theme, setTheme] = useState(current_theme ? current_theme: 'light');
   useEffect(()=>{
    localStorage.setItem('current_theme', theme);

  }, [theme])

  return (
    <div className={`ui-container min-h-screen min-w-screen m-0 p-0 ${theme}`}>
      <div className='ui-sidebar'>
         <Sidebar  theme={theme} setTheme={setTheme}/>
      </div>
    </div>
  )
}

export default App
