export const Audioplayer = {
	files: {
		backgroundMusic: new Howl({
			src: ['sounds/bg-sound.mp3', 'sounds/bg-sound.ogg'],
			loop: true,
			volume: 0.25,
			autoplay: true
		}),
		slotMachine: new Howl({
			src: ['sounds/slot-2.mp3', 'sounds/slot-2.ogg'],
			loop: false,
			volume: 0.4,
			autoplay: false
		}),
		crowd: new Howl({
			src: ['sounds/crowd-1.mp3', 'sounds/crowd-1.ogg'],
			loop: false,
			volume: 0.1,
			autoplay: false
		})
	},
	playBackground() {
		this.files.backgroundMusic.play();
	},
	playSlotMachine() {
		this.files.slotMachine.play();
	},
	playCrowd() {
		this.files.crowd.play();
	}
};
