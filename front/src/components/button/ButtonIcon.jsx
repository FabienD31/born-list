import PropTypes from 'prop-types';

const ButtonIcon = ({iconFontAwesome, callBack }) => {
  return (
    <div>
      <button className="btnIcon" onClick={callBack}><i className={iconFontAwesome}></i></button>
    </div>
  )
}
export default ButtonIcon

ButtonIcon.prototype = {
  iconFontAwesome: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired
}