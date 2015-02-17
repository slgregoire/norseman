#defines a function that create the application instance

from flask import Flask
#from flask.ext.script import Manager
from app.views.index import index_bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(index_bp)
    print(app.url_map)
    #manager = Manager(app)
    
    return app    
