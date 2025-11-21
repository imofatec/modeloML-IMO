import uvicorn

def main():
    uvicorn.run("ml_api.app.app:app", host="127.0.0.1", port=8000, reload=True)