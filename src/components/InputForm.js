import React, { useState } from 'react';

const InputForm = (props) => {
    const [product, insertProduct] = useState({name: '', price: ''});

    const submitHandler = (event) => {
        event.preventDefault();
        if(product.name.trim().length > 0 || product.price.trim().length > 0){
            if(+product.price > 0){
                insertProduct({name: '', price: ''});
                props.onAddedProduct(product);
            }
        }
        return;
    };

    const productNameChangedHandler = (event) => {
        insertProduct({name: event.target.value, price: product.price});
    }

    const productPriceChangedHandler = (event) => {
        insertProduct({name: product.name, price: event.target.value});
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-wrapper">
                    <label htmlFor="inputform-field-product">Insert product name:</label>
                    <input id="inputform-field-product" name="product" value={product.name} type="text" onChange={productNameChangedHandler} />
                    <label htmlFor="inputform-field-price">Insert price:</label>
                    <input id="inputform-field-price" name="price" value={product.price} type="number" onChange={productPriceChangedHandler} />
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}

export default InputForm;