import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice';
import ProductCard from '../components/homePage/ProductCard';
import './styles/homePage.css'
import SelectCategory from '../components/homePage/SelectCategory';
import FormPrice from '../components/homePage/FormPrice';
const body = document.querySelector('body');

const HomePage = () => {

  const [formValue, setFormValue] = useState({
    from: 0,
    to:Infinity
  })
  const [selectValue,setSelectValue] = useState(0);
  const [productName, setProductName] = useState('');
  const products = useSelector(store => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products';
    dispatch(getProductsThunk(url));
  },[])

  // console.log(products);
  const textInput = useRef();

  const handleSearch = () => {
    //
    setProductName(textInput.current.value.toLowerCase().trim())
  }

  console.log(productName)

  const cbFilter = (prod) => {
    const {from,to} = formValue;
    const ByName = prod.title.toLowerCase().includes(productName);
    const  ByCategory = +selectValue===0 ? true: prod.categoryId===+selectValue
    const ByPrice = +prod.price > +from && +prod.price < +to; 
    return ByName && ByCategory && ByPrice;
  }

  // console.log(selectValue)
  // console.log(formValue)

  const handleDark = () => {
    body.classList.toggle('dark');
  }

  return (
    <div>
            <h1>Ecommerce</h1>
            <button onClick={handleDark}>Dark Mode</button>
            <FormPrice 
              setFormValue={setFormValue}
            />
            <input type="text" ref={textInput} onChange={handleSearch}/>
            <SelectCategory 
              setSelectValue={setSelectValue}
            />
            <section className='productsContainer'>
              {
                products?.filter(cbFilter).map(prod => (
                  <ProductCard key={prod.id}
                    prod={prod}
                  />
                ))
              }
            </section>
    </div>
  )
}

export default HomePage
