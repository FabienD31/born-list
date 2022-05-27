import PropTypes from 'prop-types';
import "./ButtonStyle.css";

const ButtonText = ({ value, callBack }) => {
  return (
    <div>
      <button className="btnText" onClick={callBack}>{value}</button>
    </div>
  )
}
export default ButtonText

ButtonText.prototype = {
  value: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired
}