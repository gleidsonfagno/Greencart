import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from "../components/ProductCart";

const Allproduct = () => {
    const {products, searchQuery} = useAppContext()
    const [filteredProducts, setFilterdProducts] = useState([])

    useEffect(() => {
        if(searchQuery.lenght > 0){
            setFilterdProducts(products.filter(
              product => product.name.toLoweCase().icludes(searchQuery.toLoweCase())
            ))
        }else {
          setFilterdProducts(products)
        }
    }, [products, searchQuery])

  return (
    <div className='mt-16 flex flex-col'>
      <div className='flex flex-col font-medium w-max'>
        <p className='text-2xl font-medium uppercase'>All products</p>
        <div className='w-16 h-0.5 bg-primary rounded-full'></div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
        {filteredProducts.filter((product) => product.inStock).map((product, index)=> (
          <ProductCard key={index} product={product}  />
        ))}
      </div>
    </div>
  )
}

export default Allproduct
