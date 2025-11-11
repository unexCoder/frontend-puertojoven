import React from 'react'
import { useParams } from 'react-router-dom';
// import data from '../data/db.json'


export const ProductDetail = () => {
    const { id } = useParams(); // Extract the ID from URL
    console.log(id)
    // const product = data.find(item => item.id === id); // Find the product by ID
    // console.log(product)
    // if (!product) {
    //     return <div>Product not found</div>;
    // }
    return (
        <div>ProductDetail</div>
    )
}
