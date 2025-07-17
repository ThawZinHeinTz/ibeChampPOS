import Barcode from "../components/form/Barcode"
import CartTable from '../components/form/CartTable'
import Checkout from '../components/form/Checkout'
import SearchItem from "../components/form/SearchItem"
import '../css/cashier.css'
import { useState } from "react"

function Cashier() {
  const [isBarCodeExist,setIsBarCodeExist] = useState(true)

  return (
    <div className="cashier-container">
        {isBarCodeExist?
            <div className="cashier-row" id="cashier-barcode"><Barcode toggleBarcode={() => setIsBarCodeExist(prev => !prev)} /></div>:
            <div className="cashier-row" ><SearchItem toggleBarcode={() => setIsBarCodeExist(prev => !prev)}/></div>  
        }
        
        
        <div className="cashier-row"><CartTable/></div>
        <div className="cashier-row" id='cashier-checkout'><Checkout/></div>     
    </div>
  )
}

export default Cashier