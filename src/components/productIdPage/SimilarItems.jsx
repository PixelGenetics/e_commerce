import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import ProductCard from '../homePage/ProductCard';

const SimilarItems = ({categoryId, prodId}) => {

    const [ productsByCategory, setProductsByCategory] = useFetch();

    useEffect(() => {
        if(categoryId){
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId}`;
            setProductsByCategory(url);
        }

    },[categoryId])


    console.log(prodId);

    const cbFilter = (prod) => {
        return prod.id !== +prodId
    }

  return (
    <section>
        <h2>Discover similar items</h2>
        <div>
            {
                productsByCategory?.filter(cbFilter).map(prod => (
                    <ProductCard key={prod.id}
                        prod={prod}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default SimilarItems
