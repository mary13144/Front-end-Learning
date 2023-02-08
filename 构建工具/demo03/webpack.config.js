module.exports = {
	mode: 'production', //设置打包模式， production是生产模式，development是开发模式

	// entry:'./src/index.js' //用来指定打包时的主文件，默认'./src/index.js',如果有多个文件需要打包，用数组当做参数，也可以用对象当参数，那么将会每一个属性值文件打包成一个文件

	// entry: {
	// 	a: './src/a.js',
	// 	b: './src/b.js'
	// }
	// output: {
	// 	path: path.resolve(__dirname, './dist'), //打包后的文件存放的地方,必须要绝对路径
	// 	filename: 'main.js', //打包后的文件名
	// 	clean: true //打包前清空dist文件夹
	// }  //用来指定打包后的文件存放的位置和文件名

	module: {
		rules: [
			{
				test: /\.css$/i, //匹配文件,参数为正则表达式
				use: ['style-loader', 'css-loader'] //用来指定使用的loader，从右到左执行，必须先执行css-loader，再执行style-loader
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			}
		]
	}
};