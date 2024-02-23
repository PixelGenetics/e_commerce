import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch';

const SelectCategory = ({setSelectValue}) => {

    const [ categories, getCategories ] = useFetch()

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories';
        getCategories(url);
    },[])

    const textSelect = useRef();
    
    const handleCategory = () => {
        // console.log(textSelect.current.value)
        setSelectValue(textSelect.current.value);
    }

    // console.log(categories);
  return (
    <select name="" id="" onChange={handleCategory} ref={textSelect}>
        <option value={0}>All</option>
        {
            categories?.map(category => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            ))
        }
    </select>
  )
}

export default SelectCategory
