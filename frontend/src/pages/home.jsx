import React from 'react';

export default function Home() {
  return (
    <div className="bg-custom-primary min-h-screen flex flex-col items-center justify-center text-white">

      <div className='flex flex-col items-center gap-5'>
        <img src="\src\assets\imoLogoF1.svg" alt="Logo da IMO" width={150} height={150} />
        <h1 className="text-4xl font-bold mb-4">Teste do modelo de ML</h1>
      </div>

      <div className='border border-white rounded min-h-48 w-[500px] mt-6 p-4'>
        <form className='flex flex-col items-center gap-3'>
          <label htmlFor="teste">Quantidade de aulas</label>

          <input
            className='bg-gray-500 w-2/3 pl-2 placeholder-white rounded'
            type="number"
            id="teste"
            placeholder='quantidade de aulas...'
          />

          <select name="selectedFruit" className=' bg-gray-500 w-2/3 text-white rounded'>
            <option value="BEGINNER">Iniciante</option>
            <option value="INTERMEDIATE">Intermediário</option>
            <option value="ADVANCED">Avançado</option>
          </select>

        </form>
      </div>

    </div>
  );
}
