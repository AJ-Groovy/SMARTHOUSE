class Device {

	constructor(name){

		this.name = name;
		this.isEnabled = false;

	};

	createNewDevice(name, type){

		if(type === 'tv'){


		}
	}

	turnOn(){

		this.isEnabled = true;
		console.log(`${this.name} is now ON!`);
	}

	turnOff(){

		this.isEnabled = false;
		console.log(`${this.name} is now OFF!`);
	}
}