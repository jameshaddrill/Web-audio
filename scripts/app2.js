// http://noisehack.com/generate-noise-web-audio-api/#pink-noise
// http://noisehack.com/custom-audio-effects-javascript-web-audio-api/

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
	oscillator.type = 'sawtooth'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
	oscillator.frequency.value = 200; // value in hertz

	gainNode = context.createGain();
	oscillator.connect(gainNode);

	gainNode.connect(context.destination);
	gainNode.gain.value = 10;

	oscillator.start();

	var currentMousePos = { x: -1, y: -1 };

	$(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;

        $('.value').html(currentMousePos.y)

        volControl = parseFloat(currentMousePos.y)  / 3000;
        pitchControl = parseFloat(currentMousePos.x);

        gainNode.gain.value = volControl;
        oscillator.frequency.value = pitchControl;
    });
}
/*
var bufferSize = 4096;
var brownNoise = (function() {
    var lastOut = 0.0;
    var node = audioContext.createScriptProcessor(bufferSize, 1, 1);
    node.onaudioprocess = function(e) {
        var output = e.outputBuffer.getChannelData(0);
        for (var i = 0; i < bufferSize; i++) {
            var white = Math.random() * 2 - 1;
            output[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = output[i];
            output[i] *= 3.5; // (roughly) compensate for gain
        }
    }
    return node;
})();
*/