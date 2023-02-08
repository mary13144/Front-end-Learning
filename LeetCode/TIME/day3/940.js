/**
 * @param {string} s
 * @return {number}
 */
//  var distinctSubseqII = function(s) {
//     let nums = [];
//     nums.length = 26;
//     nums.fill(0);
//     let ans = 0;

//     for(let str of s){

//         let sum = 0;
//         for(let i = 0;i<nums.length;i++){

//             sum=(ans+nums[i])%1000000007;

//         }

//         nums[str.charCodeAt(0)-97]=sum+1;
        
//     }

//     for(let i = 0;i<nums.length;i++){
//         ans=(ans+nums[i])%1000000007;
//     }
//     return ans;
// };

var distinctSubseqII = function(s) {
    let nums = [];
    nums.length = 26;
    nums.fill(0);
    let ans = 1;
    const mod = 1000000007;
    for(let str of s){
        let newans = ans;

        ans = ((ans+newans)%mod-nums[str.charCodeAt(0)-97]%mod+mod)%mod;

        nums[str.charCodeAt(0)-97] = newans;        
    }

    return ans-1;
};

