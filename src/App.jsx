import { useState } from 'react'
import { menuItems } from './utils/data.js'
import HierarchicalMenu from './HierarchicalMenu'
import './App.css'

function App() {
  

  return (
    <>
      <h1>Hierarchical Menu</h1>
      <HierarchicalMenu items={menuItems}/>
    </>
  )
}

export default App
