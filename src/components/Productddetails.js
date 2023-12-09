import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Productddetails() {
    const [productData, setProductData] = useState(null);
    const { id } = useParams()
    const token = sessionStorage.getItem('token')
    const headers = {token}

    useEffect(() => {
        const url = `http://localhost:4000/api/getbyid/${id}`;

        axios.get(url,{headers})
            .then(response => {
                if (response.data) {
                    console.log(response.data)
                    setProductData(response.data.product);
                } else {
                    return new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, [id]);
    return (

        <div className=''>
            {productData ? (
                <div className='w-full  flex  h-screen '>
                    <div className=' w-[30%] h-full flex justify-start bg-white py-4 px-4'>
                        <img className=' border py-10 px-4' src={'http://localhost:4000/api/' + productData.imageurl} alt='Product' />
                    </div>
                    <div className='w-[70%] h-full bg-white flex flex-col  justify-start gap-2 px-4 mt-4'>
                        <p>Name: {productData.name}</p>
                        <p className='truncate'>Des: {productData.des}</p>
                        <p>Price: {productData.price}</p>
                    </div>
                </div>
            ) : (
                <p>Null</p>
            )}
        </div>


    )
}

export default Productddetails
