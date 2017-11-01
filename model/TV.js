let Device = reqire('./Device'); 


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

let tv = new TV();
tv.changeChannel('forward');