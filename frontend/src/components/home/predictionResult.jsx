export default function PredictionResult({ result }) {
    return (
        <div className='flex items-center h-1/3'>
            <p>
                Resultado da previsão:
                <span className='animate-pulse text-5xl'>
                    🤖 {result ? `${result}%` : '...'}
                </span>
            </p>
        </div>
    )
}
