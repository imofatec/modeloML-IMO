from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ml_api.routes import model_routes


app = FastAPI(
    description="API de Predição com Scikit-learn"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(model_routes.router)

@app.get("/teste")
async def teste():
    
    return {"message": "Teste dos testes"}
