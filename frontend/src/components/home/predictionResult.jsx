export default function PredictionResult({ result }) {
    return (
        <div className='text-2xl font-bold flex justify-start items-center h-1/3 w-3/5'>
            <p>
                 🤖 RESULTADO DA PREVISÃO
                <span className='animate-pulse'>
                     {result ? ` ${result}%` : ' ...'}
                </span>
            </p>
        </div>
    )
}
