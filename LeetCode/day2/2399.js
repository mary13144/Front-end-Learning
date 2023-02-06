/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
 var checkDistances = function(s, distance) {
    let flag = new Map();
    for(let i = 0;i<s.length;i++){
        if(!flag.has(s[i])){
            flag.set(s[i],i);
        }else{
            if(distance[s[i].charCodeAt(0)-97]!=(i-flag.get(s[i])-1)){
                return false;
            }
        }
    }
    return true;
};
