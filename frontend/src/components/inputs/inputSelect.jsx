export default function InputSelect({ label, className,options, ...props }) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && <label className="text-lg">{label}</label>}
            <select className='bg-custom-gray pl-2 placeholder-gray-500 h-10 rounded-md border border-gray-700 focus:border-gray-700 focus:outline-none focus:ring-0' {...props}>
                <option value="">Selecione...</option>
                {options.map((option) => (
                    <option className="text-gray-500" key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}