const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = [
	'AliceBlue',
	'AntiqueWhite',
	'Aqua',
	'Aquamarine',
	'DimGrey',
	'DeepSkyBlue',
	'DeepSkyBlue',
	'DeepPink',
	'DarkViolet',
	'DarkTurquoise',
	'DarkSlateGrey',
	'DarkSlateBlue',
	'DarkSeaGreen',
	'DarkSalmon',
	'DarkRed',
	'DarkRed',
	'DarkOrchid',
	'DarkOrange',
	'DarkOliveGreen',
	'DarkMagenta',
	'Cornsilk',
	'Crimson',
	'Cyan',
	'DarkBlue',
	'DarkCyan',
	'DarkGoldenRod',
	'DarkGray',
	'DarkGreen',
	'Gold',
	'Gray',
	'Green'
];

body.style.backgroundColor = 'red';
button.addEventListener('click', function () {
	const indexNo = parseInt(Math.random() * colors.length);
	body.style.backgroundColor = colors[indexNo];

})