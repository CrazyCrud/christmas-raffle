export class Audioplayer {
	constructor() {
		this.backgroundMusic = new Howl({
			urls: ['bg-sound.mp3'],
			loop: true,
			volume: 0
		});
	}

	playBackground() {
		this.backgroundMusic.play();
		this.backgroundMusic.fadeIn(0.5, 9600);
	}
}
