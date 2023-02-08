import './style/index.css';

export default {
	test() {

		const h1 = document.createElement('h1');
		h1.textContent = '你好！webpack';
		document.body.append(h1);

	}
};