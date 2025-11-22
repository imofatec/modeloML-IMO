import LogoImo from '../../assets/imoLogoF2.svg';

export default function InfoPanel() {
    return (
        <>
            <div className='flex flex-col justify-start items-start w-3/5 gap-20'>
                <img src={LogoImo} alt="Logo da IMO" width={250} height={250} className="pt-2" />
                <h1 className="text-3xl font-bold mb-4">Modelo de ML - IMO</h1>
            </div>

            <div className='flex flex-col items-center  '>
                <p className='text-justify w-3/5 '>
                    Este modelo de Machine Learning tem o objetivo de prever a probabilidade de um usuário concluir um curso. A previsão é feita a partir de informações fornecidas pelo próprio usuário e pelos detalhes do curso, como nível, quantidade de aulas, experiência do aluno, nível acadêmico, tempo disponível e categorias de interesse.
                </p>
            </div>

        </>
    )
}