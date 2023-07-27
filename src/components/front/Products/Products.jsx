/* eslint-disable react/prop-types */

import "./Products.css";

// eslint-disable-next-line react/prop-types
const Products = ({productItems, handleAddProduct}) => {
  return (
    <div className="products">      
      
      
      {productItems.map((productItem) =>(
       
        // eslint-disable-next-line react/jsx-key
        <div className="card">
          <div>
            <img className="product-image"
             src={productItem.image}
             alt={productItem.name} />
          </div>
          <div>
            <h3 className="product-name">{productItem.name}</h3>
          </div>
          <div className="product-price">R$ {productItem.price.toFixed(2)}</div>
          <p className="frase">
                      Comida leve, saborosa e com um preço que cabe no seu bolso.
          </p>
          <div>
            <button className="product-add-button" onClick={() => handleAddProduct(productItem)}>Adicionar ao Carrinho</button>
          </div>
        </div>
 ))}

 
    </div>
  );
};

export default Products;
