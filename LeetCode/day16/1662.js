/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    let newWord1 = word1.join('');
    let newWord2 = word2.join('');
    return newWord1 === newWord2;
};