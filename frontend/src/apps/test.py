import json

def run(inputdata): 
    jsonString = json.dumps(inputdata, indent = 4)
    data = json.loads(jsonString)

    results = data
    context = json.dumps(results, indent = 4)
    print(context)