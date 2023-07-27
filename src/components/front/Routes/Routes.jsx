import { Route, Switch } from "react-router-dom";
import Products from "../Products/Products";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Sobre from "../Sobre/Sobre";
import Contato from "../Contato/Contato"

// eslint-disable-next-line react/prop-types
const Routes = ({ productItems, cartItems, handleAddProduct,  handleRemoveProduct, handleCartClearance}) => {
    return (
      <div>
         <Switch>
            <Route Route path="/" exact>
            <Home/>
            </Route>
            <Route path="/Products" exact>
            <Products productItems={productItems} handleAddProduct={handleAddProduct} />
            </Route>
            <Route path="/Sobre" exact>
            <Sobre/>
            </Route>
            <Route path="/Contato" exact>
            <Contato/>
            </Route>

            <Route path="/cart" exact>
                <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>
            </Route>
         </Switch>  
      </div>
    )
  }
  
  export default Routes