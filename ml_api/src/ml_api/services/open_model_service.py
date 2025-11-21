from joblib import load
import os

def load_model():
    base_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    modelo_path = os.path.join(base_path, 'ml_api/ai/meu_modelo.pkl')

    try:
        modelo = load(modelo_path)
        print("Modelo carregado com sucesso")
        return modelo
    except Exception as e:
        print(f"Erro ao carregar modelo: {e}")
        raise e
    