import "./input.css"

const Input = ({ value }) => {
  return (
    <div className="input">
      <input id="inputStyle" type="text" onChange={value} />
    </div>
  );
}

export default Input;