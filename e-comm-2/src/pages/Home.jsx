import React from 'react';
import products from '../data/db.json';
import { Card } from '../components/Layout/Card';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the home page of our React Router application!</p>
            {/* Products Grid */}
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
                />
            ))}
            <Card
                title="Product Name"
                price={99.99}
                description="Great product"
                image="https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw5ac314e1/NU5176DP_N93_24.jpg?imwidth=960&impolicy=pctp&imdensity=1"
            />
            <Card {...products[0]} badge="NEW" actionText="Buy Now!" />


        </div>
    );
};

export default Home;