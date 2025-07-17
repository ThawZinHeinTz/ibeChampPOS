import { useState } from 'react';
import ButtonProp from "../ui/ButtonProp";
import '../../css/cashier.css';

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    receivedCash: '',
    cardDigits: '',
    transactionId: ''
  });

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
    setFormData({
      receivedCash: '',
      cardDigits: '',
      transactionId: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert('Please choose a payment method.');
      return;
    }
    alert(`Checked out with ${paymentMethod}`);
    console.log('Form data:', formData);
    setPaymentMethod('');
  };

  const handleClear = () => {
    setPaymentMethod('');
    setFormData({
      receivedCash: '',
      cardDigits: '',
      transactionId: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className='checkout-container'>
        <span className="checkout-payment">Choose Payment Method</span>
            <div className='checkout-methods'>
                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={paymentMethod === 'cash'}
                        onChange={handlePaymentChange}
                    />
                        Cash
                </label>

                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="mobile"
                        checked={paymentMethod === 'mobile'}
                        onChange={handlePaymentChange}
                    />
                        Promptpay
                </label>

                <label>
                    <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={handlePaymentChange}
                    />
                        Card
                </label>

                
            </div>

      <div className="checkout-inputs">
        {paymentMethod === 'cash' && (
          <input
            id='checkout-payment-form'
            type="number"
            name="receivedCash"
            placeholder="Enter received amount"
            value={formData.receivedCash}
            onChange={handleInputChange}
          />
        )}
        {paymentMethod === 'card' && (
          <input
            id='checkout-payment-form'
            type="text"
            name="cardDigits"
            placeholder="Enter card Number"
            value={formData.cardDigits}
            onChange={handleInputChange}
          />
        )}
        {paymentMethod === 'mobile' && (
          <input
            id='checkout-payment-form'
            type="text"
            name="transactionId"
            placeholder="Scan Transaction ID"
            value={formData.transactionId}
            onChange={handleInputChange}
          />
        )}
      </div>

      <div className="checkout-buttons">
        <ButtonProp
          btnId="checkoutBtn"
          btnType="submit"
          btnValue="Checkout"
          isDisabled={false}
          clickHandle={handleSubmit}
          size="md"
          color="success"
        />

        <ButtonProp
          btnId="clearBtn"
          btnType="button"
          btnValue="Clear"
          isDisabled={false}
          clickHandle={handleClear}
          size="md"
          color="danger"
        />
      </div>
    </form>
  );
}

export default Checkout;
