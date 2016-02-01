#Doorbell
![Event System](https://raw.githubusercontent.com/active9/doorbell/master/doorbell.png)

Doorbell is an Event Emitter written in NodeJS that expands any object to be event driven.

#INSTALLING
Using Git:
```bash
git clone https://github.com/active9/doorbell
cd doorbell*
npm install
```

Using NPM:
```bash
npm install doorbell
```

#MODULE
Above may run included as a module in your projects.
```js
var doorbell = require('doorbell');

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

```

~Enjoy!

#CONTRIB

Above is open-source via the MIT license we encourage Forking.

#LICENSE
MIT



