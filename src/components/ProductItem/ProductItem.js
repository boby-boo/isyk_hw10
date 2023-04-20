import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

import style from "./ProductItem.module.css";

const ProductItem = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(json => setProduct(json))
            .catch(error => console.log(error))
    }, [productId]);

    const handleClick = () => {
        navigate('/products')
    };

    if(!product) {
        return <Preloader/>
    };

    return (
        <>
        <div className={style.inner}>
            <button onClick={handleClick} className={style.button}>
                Back
            </button>
                <h1 className={style.title}>{product.title}</h1>
        </div>
            <div className={style.productItem}>
                <div className={style.productInfo}>
                    <div className={style.imageInner}>
                        <img src={product.image}/>
                    </div>
                    <div className={style.productDescription}>
                        <p>
                            {product.description}
                        </p>
                        <div className={style.productDescriptionInfo}>
                            <p>Rating count: <span>{product.rating.count}</span></p>
                            <p>Rating rate: <span>{product.rating.rate}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem;
