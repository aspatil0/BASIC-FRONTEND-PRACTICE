function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    } 
    return -1;
}

let arr = [1, 3, 5, 7, 9, 11];
let target = 7;
console.log("Element found at index:", binarySearch(arr, target));
