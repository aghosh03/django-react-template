import json

def run(inputdata): 
    jsonString = json.dumps(inputdata, indent = 4)
    data = json.loads(jsonString)

    industry = data["industry"]

    if data["revenue"] == "":
        revenue = float(0)
    else:
        revenue = float(data["revenue"])

    addressable_spend = 0.18*revenue
    savings = 0.03*addressable_spend
    results = {
        "company_name": data["company_name"],
        "industry": industry,
        "revenue": revenue,
        "addressable_spend": addressable_spend,
        "savings": savings
    }
    context = json.dumps(results, indent = 4)
    print(context)
