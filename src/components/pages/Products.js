import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../paner-form/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'
import Navbar from '../paner-form/Navbar';


function Product(){
    const { id } = useParams()
    // Create your own Mock API: https://mockapi.io/
    const url = `https://60af7dee5b8c300017dece64.mockapi.io/api/v1/house/${id}`
    
    let product = useAxiosGet(url)

    let content = null

    if(product.error){
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(product.loading){
        content = <Loader></Loader>
    }

    if(product.data){
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img
                    src={product.data.images[0].imageUrl}
                    alt={product.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }

    return (
      <div>
        <Navbar/>
          <div className="container mx-auto">
            {content}
        </div>
      </div>
        
    )
}

export default Product