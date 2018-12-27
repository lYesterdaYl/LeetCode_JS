/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//used merge sort
var findMedianSortedArrays = function(nums1, nums2) {
    let a = [];
    let n1 = 0, n2 = 0;
    while (nums1.length != 0 || nums2.length != 0){
        n1 = nums1.length;
        n2 = nums2.length;
        if (n1 == 0){
            a.push(nums2.shift());
        }
        if (n2 == 0){
            a.push(nums1.shift());
        }
        if (nums1.length != 0 && nums2.length != 0){
            if (nums1[0] <= nums2[0]){
                a.push(nums1.shift());
            }
            if (nums2[0] < nums1[0]){
                a.push(nums2.shift());
            }
        }
    }
    if (a.length % 2){
        return a[(a.length - 1)/2];
    }
    else{
        mid = Math.floor(a.length / 2);
        return (a[mid - 1] + a[mid])/2
    }

};

let nums1 = [1];
let nums2 = [1];

console.log(findMedianSortedArrays(nums1, nums2));