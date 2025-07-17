import { useState } from 'react';
import ButtonProp from '../ui/ButtonProp';

function Barcode({toggleBarcode}) {
  const [barCode, setBarCode] = useState('');
  const [error, setError] = useState('');
 



  const handleChange = (e) => {
    setBarCode(e.target.value);
  };

  const ClearData = ()=>{
    setBarCode('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!barCode) {
      setError('Barcode cannot be empty');
      return;
    }
    setError('');
    alert(`Submitted: ${barCode}`);
    setBarCode('')
  };

  const ScanButton = (
    <ButtonProp
      btnId="scanButton"
      btnType="submit" 
      btnValue="Scan"
      isDisabled={false}
      clickHandle={handleSubmit}
      size="md"
      color="primary"
    />

  )

  const ClearButton = (
    <ButtonProp
      btnId="scanButton"
      btnType="button" 
      btnValue="Clear"
      isDisabled={false}
      clickHandle={ClearData}
      size="md"
      color="danger"
    />
  )

  return (
    <div className="barcode">
      <form className="barcode-form" onSubmit={handleSubmit}>
        <span onClick={toggleBarcode} style={{ cursor: 'pointer' }}>🔄</span>
        <span className='barcode-text'>Barcode</span> 
        <input
          type="text"
          
          name="barCode"
          placeholder="Enter Barcode"
          value={barCode}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}

        {/* Use ButtonProp instead of plain <button> */}
        <div className='barcode-button'>
            {ScanButton}
            {ClearButton}
        </div>
        {barCode}
      </form>
    </div>
  );
}

export default Barcode;
