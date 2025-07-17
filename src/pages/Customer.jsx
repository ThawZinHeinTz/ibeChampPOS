import ItemCart from '../components/form/ItemCart'
import CartTable from '../components/form/CartTable'
import '../css/customer.css'
import { useState } from "react"

function Customer() {
    const [isCustomer,setIsCustomer] = useState(true)

  return (
    <div className="customer-container">
        
        <div className="customer-row"><CartTable isCustomer={isCustomer}/></div>
        <span className='barcode-text'><center>Thanks for shopping with us</center></span>
    </div>
  )
}

export default Customer