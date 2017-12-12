export class Audioplayer {
	constructor() {
		this.backgroundMusic = new Howl({
			src: ['sounds/bg-sound.mp3', 'sounds/bg-sound.ogg'],
			loop: true,
			volume: 0.5,
			autoplay: true
		});
	}

	playBackground() {
		this.backgroundMusic.play();
	}
}
