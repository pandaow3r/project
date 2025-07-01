import requests

def dummy_tool(param: str) -> str:
    """Parametreyi işleyip döndüren örnek bir tool."""
    return f"Dummy tool processed: {param}"

def fetch_api_data(api_key: str) -> dict:
    """Verilen API anahtarı ile dış API'den veri çeker."""
    url = f"https://{api_key}"
    response = requests.get(url)
    response.raise_for_status()
    return response.json() 