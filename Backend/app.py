from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

df = pd.DataFrame()

@app.route('/upload',methods=['POST'])
def upload():
    global df
    file = request.files['file']
    df = pd.read_csv(file)
    # print("Uploaded CSV (first 5 rows):")
    print(df.head())  #Shows the first 5 rows in terminal
    return jsonify({'message':'upload successfull', "columns": df.columns.tolist()})

@app.route('/summary',methods=['GET'])
def summary():
    if df.empty:
        return jsonify({'error':'no data upload'}),400
    
    summary = {
        "columns":df.columns.tolist(),
        "row_count":len(df),
        "nulls":df.isnull().sum().to_dict(),
        "averages":df.select_dtypes(include='number').mean().round(2).to_dict()
    }
    return jsonify(summary)


@app.route('/chart-data', methods=['GET'])
def chart_data():
    print("debugging to check the api")
    if df.empty:
        return jsonify({"error": "No data uploaded"}), 400

    try:
        print("is empty--------------------------------------------------")
        
        charts = {
        "revenue_over_time": df.groupby("Date")["Total Revenue"].sum().reset_index().to_dict(orient='list'),
        "units_by_product": df.groupby("Product")["Units Sold"].sum().reset_index().to_dict(orient='list'),
        "revenue_by_salesperson": df.groupby("Salesperson")["Total Revenue"].sum().reset_index().to_dict(orient='list'),
        "revenue_by_region_product": df.groupby(["Region", "Product"])["Total Revenue"].sum().unstack().fillna(0).to_dict(),
        "avg_price_by_product": df.groupby("Product")["Unit Price"].mean().round(2).reset_index().to_dict(orient='list')
        }
        print(charts)
        return jsonify(charts)
    except  Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)