const Input = ({textarea,label,ref, ...props}) => {
  const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500" htmlFor="">{label}</label>
            {textarea ? 
            <textarea ref={ref} className= {classes} {...props} /> : 
            <input ref={ref} className= {classes} {...props} />}
        </p>
  )
} 

export default Input