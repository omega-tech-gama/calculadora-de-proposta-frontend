interface InputProps {
  label?: string;
  type: string;
  placeholder?: string;
  className?: string;
}

export const Input = ({ label, type, placeholder,className, ...rest }:InputProps)  => {
  return (
    <div className="mt-4">
      <label className="block font-bold text-gray-500">{label}</label>
      <input
        className={className}
        type={type}
        placeholder={placeholder} 
        {...rest}  
      />
    </div>
  );
};
