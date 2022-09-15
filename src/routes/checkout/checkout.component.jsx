import { useContext } from 'react';
import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CartContext } from '../../contexts/cart.context'
const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    console.log(cartItems)
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map((cartItem) =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <span className="total">Total : ${cartTotal}</span>
        </div>

    )
}
export default Checkout;