import { useState } from 'react';
import ButtonProp from '../ui/ButtonProp';
import '../../css/cashier.css'

function SearchItem({toggleBarcode}) {
  const [serial, setSerial] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setBarCode(e.target.value);
  };

  const ClearData = ()=>{
    setBarCode('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!serial) {
      setError('Serial cannot be empty');
      return;
    }
    setError('');
    alert(`Submitted: ${serial}`);
    setSerial('')
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
        <span className='barcode-text'>Serial Number</span>
        <input
          type="text"
          
          name="serialNumber"
          placeholder="Enter Serial Number"
          value={serial}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}

        {/* Use ButtonProp instead of plain <button> */}
        <div className='barcode-button'>
            {ScanButton}
            {ClearButton}
        </div>
        {serial}
      </form>
    </div>
  );
}

export default SearchItem;
