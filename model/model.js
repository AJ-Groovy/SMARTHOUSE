class Storage {

	constructor(){

		this.devices = [];

	}



	createNewDevice(name, id){

		let deviceName = name.toLowerCase();

		switch(deviceName){

			case 'tv' : {

				let tv = new TV();
				this.devices.push(tv);
				break;

			}

			case 'lights' : {

				let lights = new Lights();
				this.devices.push(lights);
				break;

			}

			default : throw new Error ('Invalid device name');


		} 
	}

	addDevice(device){


	}

	removeDevice(device){


	}

	turnOnAll(){

		this.devices.forEach((device) => {

			device.turnOn();
			console.log('---------------------')
		})


	}

	turnOffAll(){

		this.devices.forEach((device) => {

			device.turnOff();
			console.log('---------------------')
		})


	}

	turnOnSingle(device){

	}

	turnOffSingle(device){

	}
}


class Device {

	constructor(name){

		this.name = name;
		this.isEnabled = false;

	};

	turnOn(){

		this.isEnabled = true;
		console.log(`${this.name} is now ON!`);
	}

	turnOff(){

		this.isEnabled = false;
		console.log(`${this.name} is now OFF!`);
	}
}


class TV extends Device {

	constructor() {

		super('TV');
		this.channels = ['Music', 'Documentary', 'News'];
		this.currentChannel = this.channels[0];
	};

	changeChannel(direction){

		if(!this.isEnabled){

			throw new Error('Could you please turn on the TV first?');
		}

		let currentChannelPosition = this.channels.indexOf(this.currentChannel),
			availableChannels = this.channels.length - 1,
			chosenDirection = direction.toLowerCase();

		switch(chosenDirection){

			case 'forward' : 

			if(currentChannelPosition < availableChannels) {

				currentChannelPosition++;

			} else {

				currentChannelPosition = 0;

			}; 

			break;

			case 'backward' : 

			if(currentChannelPosition > 0) {

				currentChannelPosition--;

			} else {

				currentChannelPosition = availableChannels;

			}; 

			break;

			default : throw new Error('Invalid direction');
		};

		this.currentChannel = this.channels[currentChannelPosition];
		console.log(`Switched to ${this.currentChannel} channel`)
	}

}

class Climate extends Device {

	constructor() {

		super('Climate');
		this.presets = ['cold', 'cool', 'warm', 'hot'];
		this.defaultPreset = presets[0];

	}

	makeColder(){



	}

	makeWarmer(){


	}
}

class Lights extends Device {

	constructor() {

		super('Lights');
		this.intensity = 0;
		this.colorPresets = ['white', 'yellow', 'red', 'blue', 'green']

	}

	changeIntensity(){


	}

	changeColor(){

	}


}


let storage = new Storage();
storage.createNewDevice('tv');
storage.createNewDevice('lights');
storage.createNewDevice('liGHTs');
storage.turnOnAll();
console.log(storage.devices);

// class Fridge extends Device {

// 	constructor() {

// 	}
// }


// class HotFloor extends Device {

// 	constructor() {

// 	}
// }
