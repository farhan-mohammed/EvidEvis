import json
import datetime
f = json.loads(open("dataset.json", "r").read())
output = []
counter = -1
keys = sorted(f.keys())


def difDays(d1, d2):
    # d1 future d2 past

    datetimeFormat = '%Y-%m-%d %H:%M:%S.%f'
    diff = d1 - d2
    return {
        "days": diff.days,
        "minutes": diff.days * 24 * 60,
        "seconds": diff.seconds,
    }


store = []
previousTime = None
nameInStorage = None
for x in keys:
    time = datetime.datetime.fromtimestamp(int(x))

    if (nameInStorage == None):
        nameInStorage = f[x]["guest-id"]
    new = {
        "id": int(x),
        "Start-Time": time.isoformat(),
        "name": f[x]["guest-id"]
    }

    if previousTime != None:
        new["Time Since Last Event"] = difDays(time, previousTime)

    # you have a store and current item
    currentItem = {**new, **f[x]}
    # if the sequence breaks
    if nameInStorage != new["name"] or new["name"] == "n/a":
        nameInStorage = None
        output.append(store)

        store = []

    store.append(currentItem)

    previousTime = time
    # team = dict(team_a.items() + team_b.items())
actualOutput = {"WAS ME": output}
with open('dado.json', 'w') as f:
    json.dump(actualOutput, f)

print("Completed")