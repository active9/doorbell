var doorbell = require('../');

// A Function To Inject The DoorBell Event System Into
var test = {
	something: function(text) {
		console.log(text);
	}
}

// Merge The Test Object With The DoorBell Event System
test = doorbell(test);

// Set An Event On BingBong
test.on('bingbong', function() {
	this.something('Knock Knock');
});

// Emit The Event
test.emit('bingbong');