import Cashier from "../pages/Cashier"
import Customer from "../pages/Customer"


function Container({isCashier}) {

  

  return (
    <div className="body-container">
        {isCashier?<Cashier/>:<Customer/>}
    </div>
  )
}

export default Container