import React from 'react'
import ProductCard from '../../../components/parts/ProductCard'

export default function Products() {
  const products = ['iPhone 12 Pro', 'SumSang Galaxy Note 9', 'iPhone 13', 'iPhone 13', 'iPhone 13 Pro Max']
  return (
    <div className='grid grid-cols-4 gap-5 p-4'>
        {
          products.map((p, i) => (
            <ProductCard key={i} product={p}/>
          ))
        }
    </div>
  )
}
