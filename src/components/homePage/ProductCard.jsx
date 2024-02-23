import React from 'react'
import './styles/productCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({prod}) => {

    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/products/${prod.id}`);
    }

    // console.log(prod)
  return (
    <article className='productCard'>
        <figure className='productCard_img'>
            <img src={prod.images[0].url} alt="Product image" />
            <img src={prod.images[1].url} alt="Product image" />
        </figure>
        <div>
            <ul>
                <li>
                    <span>{prod.brand}</span><span>{prod.title}</span>
                </li>
                <li>
                    <span>Price</span><span>${prod.price}</span>
                </li>
            </ul>
        </div>
        <div className='productButton'>
        <button>Add to Cart</button>
        <button onClick={handleView}>View More</button>
        </div>
    </article>
  )
}

export default ProductCard
