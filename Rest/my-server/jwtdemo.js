//引入jsonwebtoken
const jwt = require('jsonwebtoken');

//创建一个待加密的对象
const obj = {
	id: '1',
	name: '孙悟空',
	age: 18
};

//使用jwt.sign来加密
const token = jwt.sign(obj, 'qwertyuiop', {
	//设置加密令牌过期时效
	expiresIn: '1h'
});

// console.log(token);

//使用jwt.verify来解密加密数据
//由于解密可能发生异常所以一般用try catch包裹起来
try {
	const decodeData = jwt.verify(token, 'qwertyuio');
	console.log(decodeData);
} catch (error) {
	console.log(error + '解密错误');
}
