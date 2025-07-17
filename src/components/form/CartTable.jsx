import { useState } from "react"
import ButtonProp from "../ui/ButtonProp";
import '../../css/cashier.css'

function CartTable(isCustomer) {
  const [cartItems, setCartItems] = useState([
    {
        serialNumber:'12345',
        brand: 'Apple',
        model: 'iPhone 15',
        category: 'Smartphone',
        type: 'Electronics',
        price: 1200,
        quantity: 2
    },
    {
        serialNumber:'12346',
        brand: 'Samsung',
        model: 'Galaxy Tab',
        category: 'Tablet',
        type: 'Electronics',
        price: 800,
        quantity: 1
    }
    ]);

    

    const clearItem = (index) => {
        console.log("Clearing item at index:", index);
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };
  


  return (
    <div className='cartTable-container'>
        <table className="checkout-table">
            <thead>
                <tr >
                <th>ID</th>
                <th>Serial Number</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Category</th>
                <th>Type</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Cost</th>
                {isCustomer?'':<th></th>}
                </tr>
            </thead>
            <tbody>
                {cartItems.map((item, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.serialNumber}</td>
                    <td>{item.brand}</td>
                    <td>{item.model}</td>
                    <td>{item.category}</td>
                    <td>{item.type}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    {isCustomer?'':<td>
                        <ButtonProp
                            btnId={`remove-${index}`}
                            btnType="button"
                            btnValue='x'
                            isDisabled={false}
                            clickHandler={() => clearItem(index)}
                            size="md"
                            color="danger"
                            />
                            
                    </td>}
                </tr>
                ))}
                <tr className="checkout-total-row">
                <td colSpan="7" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total:</td>
                <td style={{ fontWeight: 'bold' }}>
                    ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                </td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default CartTable