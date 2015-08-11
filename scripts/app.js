var context;

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

	var oscillator = context.createOscillator();
	var gainNode = context.createGain();


	oscillator.connect(gainNode);
	gainNode.connect(context.destination);

	oscillator.type = 'sawtooth'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
	oscillator.frequency.value = 200; // value in hertz
	oscillator.start();

	$('.start').click(function() {
		oscillator.start();
	});

	$('.stop').click(function() {
		oscillator.stop();
	});

}