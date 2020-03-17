# https://github.com/sendgrid/sendgrid-python
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
message = Mail(
    from_email='ederiveroman@gmail.com',
    to_emails='ederiveroman@gmail.com',
    subject='Dandole una probadita',
    html_content='<strong>Funciono!</strong>'
)
try:
    sg = SendGridAPIClient('API KEY')
    response = sg.send(message)
    print('Estado:',response.status_code)
    print('Body:',response.body)
    print('Headers:',response.headers)
except Exception as e:
    print(str(e))