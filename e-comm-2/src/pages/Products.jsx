import React from 'react'
import { Card } from '../components/Layout/Card';
import products from '../data/db.json';
import styles from './Products.module.css';

export default function Products() {

    console.log(products);
    const product = products[99];
    return (
        <>
            <div>Products</div>
            {/* Products Grid */}
            <div className={styles.container}>
                {products.map(product => (
                    <Card
                        key={product.id}
                        id={product.id}
                        title={product.product_name}
                        description={product.description}
                        price={product.price}
                        category={product.category}
                        image={product.picture_url}
                        stock={product.stock}
                        discount={product.discount}
                        offer={product.offer}
                    />
                ))}
                    <Card {...products[0]} badge="NEW" actionText="Buy Now!" /> 
                    <Card
                        title="Product Name"
                        price={99.99}
                        description="Great product"
                        image="https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw5ac314e1/NU5176DP_N93_24.jpg?imwidth=960&impolicy=pctp&imdensity=1"
                    />
            </div>
        </>
    )
}
