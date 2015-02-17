#entry way into flask web application

from app import create_app

app = create_app() #this line needs to be outside of if statement because when nginx is pointed to this file, this file is treated as imported. so to access app needs to be outside of if statement.

if __name__ == '__main__':
    app.run(debug=True)

