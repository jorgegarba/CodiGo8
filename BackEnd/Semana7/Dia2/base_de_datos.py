from app import app
from flask_mysqldb import MySQL


app.config['MYSQL_HOST'] = "remotemysql.com"
app.config['MYSQL_USER'] = "Gg08dIJlvH"
app.config['MYSQL_PASSWORD'] = "jZWqQUVQaI"
app.config['MYSQL_DB'] = "Gg08dIJlvH"

mysql = MySQL(app)