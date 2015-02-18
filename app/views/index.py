#views file

from flask import Blueprint, request, render_template, make_response
import Quandl as qdl 
import json

index_bp = Blueprint('index_bp', __name__)

@index_bp.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@index_bp.route('/read', methods=['GET'])
def read():
    return render_template('read.html')
    
@index_bp.route('/api/', methods=['GET'])
def api():
    stocks = request.args.getlist('ticker')
    data = qdl.get(stocks, authtoken='gkwJrhqSMNGaSpYMLMug')
    data.reset_index(inplace=True)
    series_data_dac = data[['Date', 'GOOG.NYSE_DAC - Close']].dropna().to_json(orient='values')
    series_data_aapl = data[['Date', 'GOOG.NASDAQ_AAPL - Close']].dropna().to_json(orient='values')

    chart_data = [{
    	'name': 'Danaos',
    	'data': eval(series_data_dac)
    },
    {
    	'name': 'Apple',
    	'data': eval(series_data_aapl)
    }]
    resp_data = json.dumps(chart_data) 
    response = make_response(resp_data)
    response.headers['Cache-Control'] = 'max-age=0'

    return response

@index_bp.route('/models/', methods=['GET'])
def models():
    return render_template('models.html')

	

    	 
