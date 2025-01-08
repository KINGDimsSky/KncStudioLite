const InputForm = ({label, placeholder, type, htmlFor}) => {
  return (
    <div>
      <label htmlFor={htmlFor} className='text-sm font-medium tracking-tight mb-2'>{label}</label>
      <input name={htmlFor} id={htmlFor} type={type} placeholder={placeholder} className='border w-full py-2 px-2 border-purple-300 focus:outline-none focus:border-purple-700 rounded-md mb-4 placeholder:text-xs' />
    </div>
  )
}

export default InputForm