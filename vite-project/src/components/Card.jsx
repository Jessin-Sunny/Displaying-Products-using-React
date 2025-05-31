import React from 'react'
function Card({products}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product) => (
        <div className='card' key={product.id} style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '16px',
          width: '300px',
          margin: '16px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
      <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} width={100} />
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><strong>Price:</strong> {product.price}</li>
            <li><strong>Category:</strong> {product.category}</li>
            <li><strong>Description:</strong> {product.description}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Card