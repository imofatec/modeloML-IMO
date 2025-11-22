import { useState } from 'react';
import PredictionForm from '../components/home/predictionForm.jsx';
import InfoPanel from '../components/home/infoPanel.jsx';
import PredictionResult from '../components/home/predictionResult.jsx';
export default function Home() {
  const [predictionResult, setPredictionResult] = useState(null);
  return (
    <div className="bg-custom-primary min-h-screen flex items-center justify-center text-white relative">

      <div className='flex flex-col items-start justify-center w-2/4 h-screen p-4 gap-2 '>
        <div className='flex flex-col justify-start items-center h-3/4 '>
          <InfoPanel />
          <PredictionResult result={predictionResult} />
        </div>
      </div>

      <div className='flex flex-col items-start justify-start h-3/4 w-2/4 p-4'>
        <PredictionForm setPredictionResult={setPredictionResult} />
      </div>

    </div>
  );
}
