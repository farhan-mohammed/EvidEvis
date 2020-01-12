import json
import datetime
from datetime import timedelta
f = json.loads(open("dataset.json", "r").read())
output = []
counter = -1

def convertToTime(key):
    return datetime.datetime.fromtimestamp(int(key))
keys = sorted(f.keys())
start = convertToTime(keys[0])
startList=[f[keys[0]]]
wholeList=[]
for x in keys:
    currentTime = convertToTime(x)
    if (currentTime>start+datetime.timedelta(minutes = 15)):
        wholeList.append(startList)
        startList=[f[x]]
        start+=timedelta(minutes=15)
    else:
        startList.append(f[x])

if (len(startList)>0):
    wholeList.append(startList)


actualOutput={"timeline":wholeList}
    
with open('timescraper.json', 'w') as f:
    json.dump(actualOutput, f)
print("Completed TimeScraper Output")