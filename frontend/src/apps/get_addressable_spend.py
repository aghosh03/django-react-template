import json

def run(inputdata): 
    jsonString = json.dumps(inputdata, indent = 4)
    data = json.loads(jsonString)

    industry = data["industry"]

    addressable_spend_benchmarks ={
        "Financial Services": 0.18,
        "Retail":  0.22,
        "Healthcare": 0.12,
        "Manufacturing": 0.45,
        "Technology": 0.3,
    }

    addressable_spend_pct = str(addressable_spend_benchmarks[industry]*100)+"%"

    results = {
        "industry": industry,
        "addressable_spend": addressable_spend_pct,
    }
    context = json.dumps(results, indent = 4)
    print(context)