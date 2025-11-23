# ML API

Uma API que disponibiliza um modelo de Regressão já treinado, fornecendo um valor contínuo referente à previsão de um curso ser concluído.

---


### Populate Database

Geração de dados a partir da API IMO para serem trabalhados

🔗 https://github.com/imofatec/imo/blob/feature/PopulateDB/backend/src/main/java/com/imo/backend/config/mongodb/populate/Populate.java

### ETL (Extração, Transformação e Carga)

Acessa a base de dados gerada pelo Populate Database e realiza o beneficiamento dos dados

🔗 https://github.com/imofatec/etl

### Notebook

Mecanismo utilizado para treinar o modelo de regressão

🔗 https://colab.research.google.com/drive/19p-ufk-Zx7fs0KHsadd8O9nlzmhtjHyt?usp=sharing


### Instalação e Configuração


### Windows

Clone o repositório:
```bash
git clone https://github.com/imofatec/modeloML-IMO.git
```

Acesse a pasta do projeto:
```bash
cd modeloML-IMO
cd mlp_api
```

Instale o Poetry:
```bash
pip install poetry
```

Crie e ative uma virtual environment com Poetry:
```bash
poetry env use python
poetry shell
```

Ou, se preferir usar venv nativo do Python:
```bash
python -m venv .venv
.\venv\Scripts\activate
```

Instale as dependências:
```bash
poetry install
```

Execute a API em desenvolvimento:
```bash
poetry run dev
```

---

### Linux/Mac

Clone o repositório:
```bash
git clone https://github.com/imofatec/modeloML-IMO.git
```

Acesse a pasta do projeto:
```bash
cd modeloML-IMO
cd mlp_api
```

Instale o Poetry:
```bash
pip install poetry
```

Crie e ative uma virtual environment com Poetry:
```bash
poetry env use python
poetry shell
```

Ou, se preferir usar venv nativo do Python:
```bash
python -m venv .venv
source .venv/bin/activate
```

Instale as dependências:
```bash
poetry install
```

Execute a API em desenvolvimento:
```bash
poetry run dev
```

---

## Testando a API

### Via Swagger

Acesse:
```
http://localhost:8000/docs
```

### Fazer uma Predição

Acesse o endpoint:
```
http://localhost:8000/predict
```

Envie um request POST com o seguinte JSON:

**Request:**
```json
{
    "course_level": "BEGINNER",
    "lessons_count": 1,
    "course_categories": "DATA",
    "user_academic_level": "NONE",
    "user_level": "BEGINNER",
    "user_available_time": "ONE_TO_TWO_HOURS",
    "user_interest_categories1": "DEV_WEB",
    "user_interest_categories2": "CLOUD",
    "lessons_watched": 1
}
```

**Response:**
```json
{
  "predict": 0.67
}
```
## Setup Front
### Envs
Crie um arquivo em `modeloML-IMO/frontend` chamado `.env` e adicione neles as variáveis de ambiente necessárias
> Necessário para conexão com backend

Exemplo:
```
VITE_BASE_URL=http://127.0.0.1:8000
```
### Run
> Inicie o projeto e acesse http://localhost:5173
```
cd frontend
npm install 
npm run dev
```
