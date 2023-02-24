/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// var getLeastNumbers = function (arr, k) {
// 	const partition = (left, right, nums) => {
// 		let base = nums[left];
// 		let [i, j] = [left, right];
// 		while (i < j) {
// 			while (i < j && nums[j] > base) {
// 				j--;
// 			}
// 			nums[i] = nums[j];
// 			while (i < j && nums[i] <= base) {
// 				i++;
// 			}
// 			nums[j] = nums[i];
// 		}
// 		nums[i] = base;
// 		return i;
// 	};
//
// 	const quickSort = (left, right, nums) => {
// 		if (left < right) {
// 			let mid = partition(left, right, nums);
// 			quickSort(left, mid - 1, nums);
// 			quickSort(mid + 1, right, nums);
// 		}
// 		return nums;
// 	};
// 	quickSort(0, arr.length - 1, arr);
// 	return arr.slice(0, k);
// };


const quickSort2 = (left, right, nums) => {
	if (left >= right)
		return;
	let base = nums[left];
	let [i, j] = [left, right];
	while (i < j) {
		while (i < j && nums[j] > base) {
			j--;
		}
		nums[i] = nums[j];
		while (i < j && nums[i] <= base) {
			i++;
		}
		nums[j] = nums[i];
	}
	nums[i] = base;
	quickSort2(left, i - 1, nums);
	quickSort2(i + 1, right, nums);
};

