import { useState } from 'react';
import InputForm from '../inputs/inputForm';
import InputSelect from '../inputs/inputSelect';
import FormRow from '../inputs/formRow';
import { course_level, course_categories, user_academic_level, user_level, user_available_time, user_interest_categories } from '../../constants/formOptions';
export default function PredictionForm({ setPredictionResult }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (formData[key] === '') {
        alert("Preencha tudo");
        return;
      }
      if (formData['lessons_watched'] > formData['lessons_count']) {
        alert("Aulas vistas não pode ser maior que quantidade de aulas");
        return;
      }
    }
    console.log(formData);
    setPredictionResult(formData.lessons_count + formData.lessons_watched);
  }
  return (
    <>
      <div className="flex justify-start w-4/6 px-5">
        <h1 className="text-3xl font-bold mb-4">Teste do modelo de ML</h1>
      </div>

      <form className='flex flex-col items-center w-4/6 gap-5  ' onSubmit={handleSubmit}>

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

        <div className='flex w-full px-5'>
          <button className=' bg-white w-full hover:bg-white/80 text-black font-bold rounded-md py-1' type="submit">
            Enviar
          </button>
        </div>
      </form>
    </>
  )
}