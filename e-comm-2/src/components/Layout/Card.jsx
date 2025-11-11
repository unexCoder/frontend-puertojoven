import React from 'react'
import { Link } from 'react-router-dom';

// export const Card = ({ title, description, price, image, category, stock }) => {
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
    const detailUrl = props.detailUrl || `/product/${props.id}`;
    return (
        <div>
            <Link to={detailUrl}>

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
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>

                    {/* Price and Action */}
                    <div>
                        <span>${props.price}</span>
                        <button>
                            {props.actionText || 'Add to Cart'}
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};
