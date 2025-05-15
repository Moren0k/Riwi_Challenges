import urllib.request
import json

def obtener_clima(ciudad, api_key):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={ciudad}&appid={api_key}&units=metric&lang=es"

    print(url)
    with urllib.request.urlopen(url) as response:
        data= response.read()
        print(data)
        jsonData = json.loads(data)
        print(jsonData)


obtener_clima("medellin", "3485c946eeb4bd9c8b39ec770bede709")