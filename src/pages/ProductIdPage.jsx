import React, { useEffect } from 'react'
import InfoProduct from '../components/productIdPage/InfoProduct'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import SimilarItems from '../components/productIdPage/SimilarItems';
import SliderImages from '../components/productIdPage/SliderImages';

    const ProductIdPage = () => {

        const [ productId, getProductId] = useFetch();
        const param = useParams();

        useEffect(() => {
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}`;
            getProductId(url);

        },[param])

        console.log(productId);
    
        return (
        <div>
            <h2>Hola</h2>
            <SliderImages 
                images={productId?.images}
            />
            <InfoProduct 
                productId = {productId}
            />
            <SimilarItems categoryId={productId?.categoryId}
                prodId={param.id}
            />
        </div>
    )
    }

export default ProductIdPage
