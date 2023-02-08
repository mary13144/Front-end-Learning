/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
    let number = 0;
    let end = timeSeries[0]-1;
    for(let time of timeSeries){
        if(time<=end){
            number+=time+duration-1-end;
        }else{
            number+=duration;
        }
        end = time+duration-1;
    }
    return number;
};