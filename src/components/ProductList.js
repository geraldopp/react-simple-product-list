import React from 'react';

const ProductList = (props) => {
    let prodKey = 0;
    return (
        <div>
            {(props.products.length === 0)?<p>No results to show.</p>:''}
            <ul>
                {props.products.map((prod) => {
                    prodKey++;
                    return (<li className="product-list-item" key={prodKey}>Product: {prod.name} / Price: {prod.price}</li>);
                })}
            </ul>
        </div>
    );
}

export default ProductList;