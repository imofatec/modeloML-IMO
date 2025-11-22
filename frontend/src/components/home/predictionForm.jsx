import { useState } from 'react';
import InputForm from '../inputs/inputForm';
import InputSelect from '../inputs/inputSelect';
import FormRow from '../inputs/formRow';
import apiFetch from '../../api/apiFetch.js';
import { safeAwait } from '../../lib/safeAwait.js';
import { course_level, course_categories, user_academic_level, user_level, user_available_time, user_interest_categories } from '../../constants/formOptions';
export default function PredictionForm({ setPredictionResult }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    course_level: '',
    lessons_count: 1,
    course_categories: '',
    user_academic_level: '',
    user_level: '',
    user_available_time: '',
    user_interest_categories1: '',
    user_interest_categories2: '',
    lessons_watched: ''
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    const newValue = type === 'number' ? Number(value) : value;

    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const fetchPrediction = async (data) => {
    const [error, response] = await safeAwait(apiFetch.post('/predict/predict', data));
    if (error) {
      setErrorMessage(error.message)
      return;
    }
    setPredictionResult(response.data.predict * 100);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (formData[key] === '') {
        setErrorMessage("Preencha tudo");
        return;
      }
      if (formData['lessons_watched'] > formData['lessons_count']) {
        setErrorMessage("Aulas vistas não pode ser maior que quantidade de aulas");
        setLoading(false);
        return;
      }
    }
    setLoading(true);
    setErrorMessage('');
    fetchPrediction(formData);
    setLoading(false);
  }
  return (
    <div className="flex flex-col w-full justify-start h-3/4 p-1 m-0">

      <h1 className="text-3xl font-bold mb-4">Teste do modelo de ML</h1>


      <form className='flex flex-col items-center w-4/6 gap-5' onSubmit={handleSubmit}>

        <FormRow>
          <InputSelect label={"Nível do curso"} options={course_level} id={"course_level"} name={"course_level"} value={formData.course_level} onChange={handleChange} />
        </FormRow>

        <FormRow cols={2}>
          <InputForm className={"w-2/4"} label={"Quantidade de aulas"} type="number" min={1} placeholder={"1"} id={"lessons_count"} name={"lessons_count"} value={formData.lessons_count} onChange={handleChange} />
          <InputForm className={"w-2/4"} label={"Aulas vistas"} type="number" min={0} placeholder={"0"} id={"lessons_watched"} name={"lessons_watched"} value={formData.lessons_watched} onChange={handleChange} />
        </FormRow>

        <FormRow>
          <InputSelect label={"Categoria do curso"} options={course_categories} id={"course_categories"} name={"course_categories"} value={formData.course_categories} onChange={handleChange} />
        </FormRow>

        <FormRow cols={2}>
          <InputSelect className={"w-2/4"} label={"Nível acadêmico"} options={user_academic_level} id={"user_academic_level"} name={"user_academic_level"} value={formData.user_academic_level} onChange={handleChange} />
          <InputSelect className={"w-2/4"} label={"Experiência do usuário"} options={user_level} id={"user_level"} name={"user_level"} value={formData.user_level} onChange={handleChange} />
        </FormRow>

        <FormRow>
          <InputSelect label={"Tempo disponivel"} options={user_available_time} id={"user_available_time"} name={"user_available_time"} value={formData.user_available_time} onChange={handleChange} />
        </FormRow>

        <FormRow cols={2}>
          <InputSelect className={"w-2/4"} label={"Categoria de interesse 1"} options={user_interest_categories} id={"user_interest_categories1"} name={"user_interest_categories1"} value={formData.user_interest_categories1} onChange={handleChange} />
          <InputSelect className={"w-2/4"} label={"Categoria de interesse 2"} options={user_interest_categories} id={"user_interest_categories2"} name={"user_interest_categories2"} value={formData.user_interest_categories2} onChange={handleChange} />
        </FormRow>

        <div className='flex flex-col items-center w-full px-5'>
          <button className=' bg-white w-full hover:bg-white/80 text-black font-bold rounded-md py-1' type="submit">
            {loading ? (
              <div className="flex justify-center items-center " role="status">
                <svg aria-hidden="true" class="w-6 h-6 text-neutral-tertiary animate-spin fill-brand" viewBox="0 0 100 101" fill="red" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
              </div>) : 'Enviar'}
          </button>
          {
            errorMessage && <p className='text-red-500 mt-2'>{errorMessage}</p>
          }
        </div>
      </form>
    </div>
  )
}