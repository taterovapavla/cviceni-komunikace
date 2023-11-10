import './style.css';

export const InputField = ({ label, type, value, onValueChange }) => {
  const handleChange = (e) => {
    onValueChange(e.target.value)
  }
  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input
        value={value}
        onChange={handleChange}
        className="input-field__input"
        type={type}
      />
    </div>
  );
};
