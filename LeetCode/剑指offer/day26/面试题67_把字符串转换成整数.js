/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
	str = str.trim();
	if (str.length === 0)
		return 0;
	let flag = true;
	let index = 0;
	if (str.charAt(0)==='-'){
		flag = false;
		index++
	}else if (str.charAt(0)==='+'){
		index++
	} else if (str.charCodeAt(0)>57){
		return 0;
	}
	let result = 0;
	while (index<str.length){
		if (str.charCodeAt(index)<48||str.charCodeAt(index)>57){
			if (flag)
				return result;
			else
				return -result;
		}else {
			result = result*10+str.charCodeAt(index)-48;
			if (flag&&result>Math.pow(2,31)-1){
				return Math.pow(2,31)-1
			}else if (!flag&&result>Math.pow(2,31)){
				return -Math.pow(2,31);
			}
		}
		index++;
	}
	if (flag)
		return result;
	else
		return -result;
};

console.log(strToInt("+1"));

