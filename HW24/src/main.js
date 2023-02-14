import { sleep } from "./utils/sleep.js";
import { VideoPlayer, VideoPlayer } from "../ui/video-player.js";
import { DataForm } from "../ui/input-data-form.js";
import { checkPlayningTime } from "../service/checkTime.js";
const dataForm = new DataForm("form-sectiom");
const VideoPlayer = new VideoPlayer("video-section");
dataForm.addHandler(async(data)=> {
    VideoPlayer.setUrl(data.link);
    VideoPlayer.start();
    let res = checkPlayningTime(data.time)
    if(!res) {
        await sleep(data.time * 1000);
        VideoPlayer.stop(); 
    }
    return res;
    
})