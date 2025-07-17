import '../../css/button.css'

function ButtonProp({ btnId, btnType, btnValue, isDisabled, clickHandler,size, color }) {
  
//size 'sm', 'md', 'lg'
//color 'primary', 'danger', 'success'

  return (
    <button
        id={btnId}
        type={btnType}
        isDisabled={isDisabled}
        onClick={clickHandler}
        className={`btn btn-${size} btn-${color}`}
        >
        {btnValue}
    </button>
  )
}

export default ButtonProp