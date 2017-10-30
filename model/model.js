class Device {

	constructor(name){

		this.name = name;
		this.power = false;

	};

	pressPowerButton() {

		let currentState = this.power;

		if(currentState === false ){

			console.log(`${this.name} is now ON!`);

		} else {

			console.log(`${this.name} is now OFF!`);
		}

		this.power = !this.power;
	}
}


class TV extends Device {

	constructor() {

		super('TV');
		this.channels = ['Music', 'Documentary', 'News'];
		this.currentChannel = this.channels[0];
	};

	changeChannel(direction){

		let currentChannelPosition = this.channels.indexOf(this.currentChannel),
			availableChannels = this.channels.length - 1,
			chosenDirection = direction.toLowerCase();

		if (chosenDirection === 'forward' && (currentChannelPosition < availableChannels)){

			currentChannelPosition++;

		} else if(chosenDirection === 'forward' && (currentChannelPosition >= availableChannels)){

			currentChannelPosition = 0;

		} else if(chosenDirection === 'backward' && currentChannelPosition > 0) {

			currentChannelPosition--;

		} else if(chosenDirection === 'backward' && currentChannelPosition == 0) {

			currentChannelPosition = availableChannels;
		}

		this.currentChannel = this.channels[currentChannelPosition];
		console.log(`Switched to ${this.currentChannel} channel`)
	}

}

let tv = new TV();


// class Fridge extends Device {

// 	constructor() {

// 	}
// }

// class Climate extends Device {

// 	constructor() {

// 	}
// }

// class HotFloor extends Device {

// 	constructor() {

// 	}
// }

// class Lights extends Device {

// 	constructor() {

// 	}
// }