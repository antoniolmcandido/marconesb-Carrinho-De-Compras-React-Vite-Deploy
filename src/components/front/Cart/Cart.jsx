/* eslint-disable react/prop-types */
import "./Cart.css";



const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance,}) => { 

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

 

  return (
    <div className="cart-items">
            <h2 className="cart-items-header"> Itens do Carrinho</h2>
            <div className="clear-cart">
                {cartItems.length >=1 && (

                <button className="clear-cart-button" onClick={handleCartClearance}>Limpar Carrinho</button>
                )

                }
            </div>



            {cartItems.length === 0 && (
                <div className="cart-items-empty"> Nenhum item foi adicionado</div>
            )}

            <div>
             {cartItems.map((item)=>(
               <div key={item.id} className="cart-items-list">
                <img className="cart-items-image" src={item.image} alt={item.name}/>

                <div className="cart-items-name">{item.name}</div>
                <div className="cart-items-function">
                    <button className="cart-items-add" onClick={() => handleAddProduct (item)}>+</button>
                    <button className="cart-items-remove" onClick={() => handleRemoveProduct(item)}>-</button>
                </div>
               <div className="cart-items-price">
                    <span className="">{item.quantity} * R$ {item.price.toFixed(2)}</span>
               </div>
            </div>
          ))}
          <div className="cart-items-total-price-name" style={{ marginTop: '484px' }}>
           Preço Total:
            {/* <div className="cart-items-total-price" > */}
                <span className="total"> R${totalPrice.toFixed(2)}</span>
                <button className="Comprar">Comprar</button>
            {/* </div> */}
            
          </div>
       </div>
    </div>
  )
}

export default Cart