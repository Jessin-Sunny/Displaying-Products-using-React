import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.error(err));
  },[]);

  return (
    <>
      <h1 style={{ color: 'white' }}>Products</h1>
      <Card products={products} />
    </>
  )
}

export default App
