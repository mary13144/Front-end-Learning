/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    let newword1 = [...word1];
    let newword2 = [...word2];
    let len1 = word1.length;
    let len2 = word2.length;
    let more = '';
    if (len1>len2) {
        more = word1.slice(len2);
    }else{
        more = word2.slice(len1);
    }
    let answord = new Array(len1>len2?len2:len1).fill(0).map((_,i)=>{
        return newword1[i]+newword2[i];
    })

    return answord.join('')+more;

};