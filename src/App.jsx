import { useState, useEffect } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'

const url = "http://localhost:3000/products"

function App() {
  const [products, setProduct] = useState([])

  // 4 - custom

  const { data: items, httpConfig } = useFetch(url)



  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  //1- resgatando dados
  //Carrega a lista
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setProduct(data)
  //   }
  //   fetchData()
  // }, [])

  //2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
      name,
      price,
    }
    console.log(product)

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })

    // //3 carregamento dinâmico
    // const addedProduct = await res.json()

    // setProduct((prevProduct) => [...prevProduct, addedProduct])
    httpConfig(product,"POST")

    setName("")
    setPrice("")
  }

  return (
    <div className="App">
      <h1>List of products</h1>
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Price:
            <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="criar" />
        </form>
      </div>
    </div>
  )
}

export default App
