# Python MCP Server Template

Bu klasör, projenize entegre edilmiş bir Python MCP (Model Context Protocol) sunucu şablonudur.

## Hızlı Başlangıç

1. Bağımlılıkları yükleyin:
   ```bash
   pip install -r requirements.txt
   ```
2. Sunucuyu başlatın:
   ```bash
   python server.py
   ```

## Tool Ekleme

Yeni bir tool eklemek için `app.py` dosyasına fonksiyonunuzu yazın ve `server.py` içinde MCP tool olarak kaydedin.

## Docker ile Çalıştırma

```bash
docker build -t my-mcp-server .
docker run -p 8000:8000 my-mcp-server
```

## Smithery Deploy

Smithery platformuna deploy için `smithery.yaml` dosyasını kullanabilirsiniz. 