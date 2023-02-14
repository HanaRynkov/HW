const VIDEO_ID = "video_id"
export class VideoPlayer {
    #link;
    #videoElement;
    constructor(parentId) {
        const parentElement = document.getElementById(parentId);
        if (!parentElement) {
            throw `wrong parent element for video ${parentId}`
        }
        parentElement.innerHTML = `<video id="${VIDEO_ID}" src=""/>`
        this.#videoElement = document.getElementById(VIDEO_ID);
    }
    setUrl(link) {
        this.#link = link;
    }
    start() {
        this.#videoElement.play();

    }
    stop() {
        this.#videoElement.pause();
    }
}