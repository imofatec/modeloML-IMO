import { useState } from 'react';
import PredictionForm from '../components/home/predictionForm.jsx';
import InfoPanel from '../components/home/infoPanel.jsx';
import PredictionResult from '../components/home/predictionResult.jsx';

export default function Home() {
  const [predictionResult, setPredictionResult] = useState(null);
  return (
    <div className="bg-custom-primary min-h-screen flex items-center justify-center gap-5 text-white relative">

      <div className='flex flex-col items-center justify-center w-2/4 h-screen p-4 gap-4 '>
        <InfoPanel />
        <PredictionResult result={predictionResult} />
      </div>
      <div className='flex flex-col items-center justify-center h-screen w-2/4 min-h-48 p-4 '>
        <PredictionForm setPredictionResult={setPredictionResult} />
      </div>


    </div>
  );
}
