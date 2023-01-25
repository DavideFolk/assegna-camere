'use strict';

let arrNomi = [];

let arrCamere = ['camera1', 'camera2', 'camera3', 'camera4'];

let nCamere = 1;

let arrTempCamere = [[]];

function creaArrCamere(nCamere) {
	if (nCamere === 1) arrTempCamere = [[]];
	if (nCamere === 2) arrTempCamere = [[], []];
	if (nCamere === 3) arrTempCamere = [[], [], []];
	if (nCamere === 4) arrTempCamere = [[], [], [], []];
}

$('#nomeBtn').click(function (e) {
	e.preventDefault();
	let nome = $('#nomeInserito').val();
	if (nome) {
		arrNomi.push(nome);

		$('#elencoNomi').append(
			`<p class="mb-0" style="font-size: 1.5rem; margin-bottom= 0rem">${nome}</p>`
		);

		$('#nomeInserito').val('');
	}
});

$(document).on('input', '#cameraRange', function () {
	nCamere = Number($('#cameraRange').val());
	arrCamere.forEach((element, index) => {
		if (nCamere >= index + 1) {
			$(`#${element}`).show();
		} else {
			$(`#${element}`).hide();
		}
	});
	creaArrCamere(nCamere);
});

$('#assegna').click(function (e) {
	$('.nomeElenco').remove();
	let arrNomiRandom = _.shuffle(arrNomi);
	arrNomiRandom.forEach((nome) => {
		arrTempCamere[0].push(nome);
		arrTempCamere = _.orderBy(arrTempCamere, [(i) => i.length], []);
	});
	console.log(arrTempCamere);
	arrTempCamere.forEach((element, index) => {
		element.forEach((elem) => {
			$(`#camera${index + 1}`).append(
				`<p class="nomeElenco ms-3 mb-1" style="font-size: 1.2rem;">${elem}</p>`
			);
		});
	});
	creaArrCamere(nCamere);
});

//arrTemp = _.orderBy(arrTemp, [(i) => i.length], []);
//_.random(1, nCamere)
