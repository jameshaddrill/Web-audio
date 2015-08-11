var context;

var	sounds = {
	osc1 : {
		0 : 0,
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0,
		5 : 0,
		6 : 0,
		7 : 0,
		8 : 0,
		9 : 0,
		10 : 0,
		11 : 0
	},
	osc2 : {
		0 : 0,
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0,
		5 : 0,
		6 : 0,
		7 : 0,
		8 : 0,
		9 : 0,
		10 : 0,
		11 : 0
	},
	osc3 : {
		0 : 0,
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0,
		5 : 0,
		6 : 0,
		7 : 0,
		8 : 0,
		9 : 0,
		10 : 0,
		11 : 0
	},
	osc4 : {
		0 : 0,
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0,
		5 : 0,
		6 : 0,
		7 : 0,
		8 : 0,
		9 : 0,
		10 : 0,
		11 : 0
	},
	osc5 : {
		0 : 0,
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0,
		5 : 0,
		6 : 0,
		7 : 0,
		8 : 0,
		9 : 0,
		10 : 0,
		11 : 0
	},
	osc6 : {
		0 : 0,
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0,
		5 : 0,
		6 : 0,
		7 : 0,
		8 : 0,
		9 : 0,
		10 : 0,
		11 : 0
	}
}

sounds1 = [0,0,0,0,0];
sounds2 = [0,0,0,0,0];

window.addEventListener('load', init, false);
function init() {

	$('.inputTrigger').click( function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
		$(this).find('input').trigger('click');
	});

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
	oscillator3();
	oscillator4();
	oscillator5();
	oscillator6();

	$('.start').click(function() {
		playPattern();
	});



	$('input[type="checkbox"]').click( function(){
		var pos = parseFloat($(this).attr('value'));
		//var rowNo = parseFloat($(this).parent('div').attr('id'));
		var rowNo = "osc" + parseFloat($(this).parents('.inputRow').attr('id'));
		var base = sounds[rowNo];
		console.log(base);

		if($(this).is(':checked')) {
			base[pos] = 1;
		} else {
			base[pos] = 0;
		}
		console.log(sounds);
	});
}

function playPattern() {
	for(i=0; i < 13; i++) {
		play(i);
	};
	setTimeout(function(){
		i = 0;
		playPattern();
	}, 2400);

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

			if (sounds.osc3[i] === 1) {
				gainNode3.gain.value = .2;
			} else {
				gainNode3.gain.value = 0;
			}

			if (sounds.osc4[i] === 1) {
				gainNode4.gain.value = .2;
			} else {
				gainNode4.gain.value = 0;
			}

			if (sounds.osc5[i] === 1) {
				gainNode5.gain.value = .2;
			} else {
				gainNode5.gain.value = 0;
			}

			if (sounds.osc6[i] === 1) {
				gainNode6.gain.value = .2;
			} else {
				gainNode6.gain.value = 0;
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
	oscillator2.frequency.value = 300; // value in hertz

	gainNode2 = context.createGain();
	oscillator2.connect(gainNode2);

	gainNode2.connect(context.destination);
	gainNode2.gain.value = 0;

	oscillator2.start();
};

function oscillator3() {
	var oscillator3 = context.createOscillator();
	oscillator3.type = 'sawtooth'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
	oscillator3.frequency.value = 400; // value in hertz

	gainNode3 = context.createGain();
	oscillator3.connect(gainNode3);

	gainNode3.connect(context.destination);
	gainNode3.gain.value = 0;

	oscillator3.start();
};

function oscillator4() {
	var oscillator4 = context.createOscillator();
	oscillator4.type = 'sawtooth'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
	oscillator4.frequency.value = 500; // value in hertz
	gainNode4 = context.createGain();
	oscillator4.connect(gainNode4);

	gainNode4.connect(context.destination);
	gainNode4.gain.value = 0;

	oscillator4.start();
};

function oscillator5() {
	var oscillator5 = context.createOscillator();
	oscillator5.type = 'sawtooth'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
	oscillator5.frequency.value = 600; // value in hertz
	gainNode5 = context.createGain();
	oscillator5.connect(gainNode5);

	gainNode5.connect(context.destination);
	gainNode5.gain.value = 0;

	oscillator5.start();
};

function oscillator6() {
	var oscillator6 = context.createOscillator();
	oscillator6.type = 'sawtooth'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
	oscillator6.frequency.value = 800; // value in hertz
	gainNode6 = context.createGain();
	oscillator6.connect(gainNode6);

	gainNode6.connect(context.destination);
	gainNode6.gain.value = 0;

	oscillator6.start();
};