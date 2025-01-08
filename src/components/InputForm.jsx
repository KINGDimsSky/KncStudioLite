const InputForm = ({ label, placeholder, type, htmlFor }) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-medium tracking-tight mb-2 text-white">
        {label}
      </label>
      <input name={htmlFor} id={htmlFor} type={type} placeholder={placeholder} className="bg-black border w-full py-2 px-2 border-white focus:outline-none focus:border-purple-700 rounded-md mb-4 placeholder:text-xs text-white " />
    </div>
  );
};

export default InputForm;
