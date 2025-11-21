export default function InputForm({ label, className, ...props }) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && <label className="text-lg">{label}</label>}
            <input className='bg-custom-gray pl-2 h-10 placeholder-gray-500 rounded-md border border-gray-700 focus:border-gray-700 focus:outline-none focus:ring-0' {...props} />
        </div>
    )
}