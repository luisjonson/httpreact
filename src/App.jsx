import { useState, useEffect } from 'react'
import './App.css'

const url = "http://localhost:3000/products"

function App() {
  const [products, setProduct] = useState([])
  //1- resgatando dados

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setProduct(data)
    }
    fetchData()
  }, [])

  
  return (
    <div className="App">
      <h1>List of products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
