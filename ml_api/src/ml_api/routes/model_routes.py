from fastapi import APIRouter, HTTPException, Request
from typing import Any
from fastapi.responses import JSONResponse
from ml_api.services.open_model_service import load_model
from ml_api.services.predict_service import predict
from ml_api.model.schemas import Input, Output

router = APIRouter(prefix="/predict", tags=["Modelo de Regressao"])
modelo = load_model()

@router.get("/get-rei", description="Retorna as siglas do rei")
async def rei():
    return {"message": "A.....B.....C"}


@router.post("/predict", description="Realiza predicao usando Modelo de Regressao")
async def predict_endpoint(data: Input):
    try:
        result: Output = predict(modelo, data)
        return JSONResponse(
            status_code=200,
            content={"predict": round(result.predict, 2)}
        )
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=503
        )
