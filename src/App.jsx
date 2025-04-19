import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShopingList from './ShopingList.jsx'

const items = [
  {item:"milk" , quantity :12},
    {id:1, item:"eggs" , quantity :6},
    {id:2, item:"bread" , quantity :2},
    {id:3, item:"cheese" , quantity :1},
    {id:4, item:"ham" , quantity :5}
]

function App() {
return(
  <div>
<h1>WE ARE BACK !!!!!</h1>
<ShopingList items={items}/>
</div>
)
}
export default App
