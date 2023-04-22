import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

import style from './Products.module.css';
import ErrorButton from '../ErrorButton/ErrorButton';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.log(error))
    }, []);
    
    if (!products.length) {
        return (
            <Preloader />
        )
    };

    return (
        <ErrorBoundary>
            <div className={style.productInner}>
                <h1 className={style.title}>Products page</h1>
                <ErrorButton />
                    <ul className={style.productList}>
                        {products.map(product => {
                            const {title, id, image, rating} = product;
                            return (
                                <li key={id} className={style.productItem}>
                                    <Link to={`/products/${id}`}>      
                                        <h2>{title}</h2>
                                        <div className={style.image}>
                                            <img src={image}/>
                                        </div>
                                        <p>Rate: {rating.rate}</p>
                                        <p>Count: {rating.count}</p>
                                    </Link> 
                                </li>
                            )
                        })}
                    </ul>
            </div>
        </ErrorBoundary>
    )
}

export default Products;
