var fs = require('fs');

const data = require('./dataset.json');
let output = [];
counter = 0;
for (const od in data) {
	const date1 = new Date(Number(od));
	if (counter === 0) {
		output.push({ id: od, ...data[od], date: date1 });
	} else {
		const date2 = new Date(Number(output[counter - 1]['id']));
		var dif = date1.getTime() - date2.getTime();

		var Seconds_from_T1_to_T2 = dif / 1000;
		var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
		output.push({ id: od, ...data[od], date: date1, diff: `${Seconds_Between_Dates}s since last event` });
	}
	counter++;
}
var json = JSON.stringify(output);
fs.writeFile('dado.json', json, 'utf8', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log('ya');
	}
});
