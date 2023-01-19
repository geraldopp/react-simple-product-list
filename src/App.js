import React, {useState} from 'react';
import InputForm from './components/InputForm.js';
import Card from './components/Card.js';
import ProductList from './components/ProductList.js';

import './index.css';

function App(props) {
  const [ prodList, updateProdList ] = useState([]);

  const onAddProductHandler = (newProd) => {
    updateProdList((prevState) => {
      return [...prevState, newProd];
    });
  }

  return (
    <div className="App">
      <Card>
        <InputForm onAddedProduct={onAddProductHandler} />
      </Card>
      <br />
      <Card>
        <ProductList products={prodList} />
      </Card>
    </div>
  );
}

export default App;
