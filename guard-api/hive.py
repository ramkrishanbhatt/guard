import requests

url = "https://api.thehive.ai/api/v2/task/sync"

payload = {}
files = [
    ('media', ('titanic.mp4', open('/Users/ramkrishanbhatt/Desktop/titanic.mp4', 'rb'), 'application/octet-stream'))
]
headers = {
    'authorization': '••••••'
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
