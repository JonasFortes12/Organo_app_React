import "./Field.css";

const Field = ({type = 'text', label, value, onChange, required, placeholder}) => {
  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input 
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Field;
