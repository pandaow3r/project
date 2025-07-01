from fastapi import FastAPI
from app import dummy_tool, fetch_api_data

app = FastAPI()

@app.get("/dummy_tool")
def dummy_tool_api(param: str):
    """Parametreyi işleyip döndüren örnek bir tool."""
    return {"result": dummy_tool(param)}

@app.get("/fetch_api_data")
def fetch_api_data_api():
    """27aa69fb07f04184906105054250107 API anahtarı ile dış API'den veri çeker."""
    api_key = "27aa69fb07f04184906105054250107"
    return fetch_api_data(api_key)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 