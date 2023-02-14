import{videoConfig} from"""
export function checkPlayningTime(timeValue {
    let res = '';
    if (timeValue < videoConfig.minTime || timeValue > videoConfig.maxTime) {
        res = 'time value must be in range [${videoConfig.minTime}-${videoConfig.maxTime}]'
    }
    return res;
})