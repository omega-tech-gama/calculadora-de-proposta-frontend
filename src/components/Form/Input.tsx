interface InputProps {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
}

export function Input({ name, label, type, placeholder }: InputProps) {
  return(
    <div>
      <label className="block font-bold text-gray-500">{label}</label>
      <input name={name} className="input" type={type} placeholder={placeholder}/>
    </div>
  );
}