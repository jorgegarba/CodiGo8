from flask import Flask
from flask_cors import CORS
# pip install flask-cors
app = Flask(__name__)
# HABILITA LAS CORS PARA TODOS LOS DOMINIOS, ABSOLUTAMENTE TODOS!
# THIS METHOD IS NOT ALLOWED BY CORS POLICY
CORS(app)

# SI NOSOTROS QUEREMOS HABILITAR SOLAMENTE UNA SUBCATEGORIA DE NUESTRA API TENEMOS QUE INDICAR EL RECURSO Y QUE ORIGENES VAN A SER ACCESIBLES A ELLOS
cors = CORS(app,resource={r"/api/*":{"origins":"*"}})
@app.route('/')
def hola_mundo():
    return 'HOla mundito con CORS'


app.run(debug=True)