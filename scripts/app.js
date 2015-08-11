var context;

var	sounds = {
	osc1 : {
		0 : 0,
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0
	},
	osc2 : {
		0 : 0,
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0
	},
	osc3 : {
		0 : 0,
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0
	},
	osc4 : {
		0 : 0,
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0
	}
}

sounds1 = [0,0,0,0,0];
sounds2 = [0,0,0,0,0];

window.addEventListener('load', init, false);
function init() {
	try {
		// Fix up for prefixing
		window.AudioContext =
	  window.AudioContext||window.webkitAudioContext;
	  	context = new AudioContext();
	}
	catch(e) {
		alert('Web Audio API is not supported');
	}

	oscillator1();
	oscillator2();

	$('.start').click(function() {
		playPattern();
	});

	$('.stop').click(function() {
		gainNode.gain.value = 0;
	});

	$('input[type="checkbox"').click( function(){
		var pos = parseFloat($(this).attr('value'));
		//var rowNo = parseFloat($(this).parent('div').attr('id'));
		var rowNo = "osc" + parseFloat($(this).parent('div').attr('id'));
		var base = sounds[rowNo];

		if($(this).is(':checked')) {
			base[pos] = 1;
		} else {
			base[pos] = 0;
		}
		console.log(sounds);
	});
}

function playPattern() {
	for(i=0; i < 7; i++) {
		play(i);
	};

	function play(i) {
		setTimeout(function() {
			if (sounds.osc1[i] === 1) {
				gainNode.gain.value = .2;
			} else {
				gainNode.gain.value = 0;
			}

			if (sounds.osc2[i] === 1) {
				gainNode2.gain.value = .2;
			} else {
				gainNode2.gain.value = 0;
			}
		}, 200*i);
	};
};

function oscillator1() {
	var oscillator = context.createOscillator();
	oscillator.type = 'sawtooth'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
	oscillator.frequency.value = 200; // value in hertz

	gainNode = context.createGain();
	oscillator.connect(gainNode);

	gainNode.connect(context.destination);
	gainNode.gain.value = 0;

	oscillator.start();
};

function oscillator2() {
	var oscillator2 = context.createOscillator();
	oscillator2.type = 'sawtooth'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
	oscillator2.frequency.value = 600; // value in hertz

	gainNode2 = context.createGain();
	oscillator2.connect(gainNode2);

	gainNode2.connect(context.destination);
	gainNode2.gain.value = 0;

	oscillator2.start();
};