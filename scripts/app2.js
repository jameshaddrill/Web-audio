// http://noisehack.com/generate-noise-web-audio-api/#pink-noise
// http://noisehack.com/custom-audio-effects-javascript-web-audio-api/

$(document).ready(function() {
});

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
	oscillator.type = 'square'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
	//oscillator.frequency.value = 200; // value in hertz

	gainNode = context.createGain();
	oscillator.connect(gainNode);

	gainNode.connect(context.destination);
	gainNode.gain.value = 5;

	oscillator.start();
	
	Leap.loop({enableGestures: true}, function(frame) { // Constantly updates
		console.log(frame); // Frame contains all currently available data
		//var fps = frame.currentFrameRate;
		frame.currentFrameRate = 5;
		
		
		if(frame.hands.length > 0)
		{
			var hand = frame.hands[0];
			console.log(frame.hands.type)
			console.log(hand.stabilizedPalmPosition[1]);
			var position = hand.stabilizedPalmPosition[1];
			var velocity = hand.palmVelocity;
			var direction = hand.direction;
			var x = 0;
			hand.fingers.forEach(function(finger){
				x = x + 1;
				//setVol(x);
			});
		
			position = (parseFloat(position));
			
			position = Math.floor(position.toFixed(0));
			
			position = position + 20;
			
			
			if (position < 20) {
				position = 20;
			}
			
			refreshTone(position);
		} else {
			var position = 0 
			
			refreshTone(position);
		}
		
		
		
		
	});
		
		var refreshTone = function(position) {
			//$('#position').html(position);
			
			
			
			//console.log(position);
			pitchControl = parseFloat(position) * 2; //parseFloat(currentMousePos.x);

				oscillator.frequency.value = pitchControl;

			
			//console.log(position, pitchControl);
				
			//console.log(oscillator.frequency.value);

		}
		
		var setVol = function(vol) {
		console.log(vol[2]);
				vol = parseFloat(vol);
		
				volControl = 0.25 * vol;
				
				if (volControl > 0) {
					gainNode.gain.value = volControl;
				} else {
					gainNode.gain.value = 0;
				}
				
				
				//console.log(volControl);
			};
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