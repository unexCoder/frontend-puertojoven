import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

// export const Card = ({ title, description, price, image, category, stock, discount, offer }) => {

//     if (offer) {
//         price = Math.round( price - ( price * (discount/100))); // Apply discount   
//     }
    
//     return (
//         <div>
//             {/* Product Image */}
//             <div>
//                 {image ? (
//                     <img src={image} alt={title} />
//                 ) : (
//                     <span>📦</span>
//                 )}
//             </div>

//             {/* Product Info */}
//             <div>
//                 {category && (
//                     <span>
//                         {category}
//                     </span>
//                 )}
//                 <h3>{title}</h3>
//                 <p>{description}</p>

//                 {/* Price and Action */}
//                 <div>
//                     <span>${price}</span>
//                     <span>Stock:{stock}</span>
//                     <button>
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }


export const Card = ({ ...props }) => {

    // console.log(props)
    const detailUrl = props.detailUrl || `/products/${props.id}`;
    return (
        <div>
                {/* Product Image */}
                <div>
                    {props.image ? (
                        <img src={props.image} alt={props.title} width={'200px'} />
                    ) : (
                        <span>📦</span>
                    )}
                    {props.badge && (
                        <span>
                            {props.badge}
                        </span>
                    )}
                </div>

                {/* Product Info */}
                <div>
                    {props.category && (
                        <span>
                            {props.category}
                        </span>
                    )}
                    
                    <Link to={detailUrl} className={styles.link}><h3>{props.title}</h3></Link>
                    <p>{props.description}</p>

                    {/* Price and Action */}
                    <div>
                        <span>${props.price}</span>
                        <button>
                            {props.actionText || 'Add to Cart'}
                        </button>
                    </div>
                </div>
        </div>
    );
};
