/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let visited = {};
    let max = 0;
    for (let i = 0; i < s.length;i++){
        if (s[i] in visited && visited[s[i]] >= start){
            start = visited[s[i]] + 1;
            visited[s[i]] = i;
        }
        else{
            visited[s[i]] = i;
            max = Math.max(max, i + 1 - start);
        }
    }
    return max;
};


let s = 'abcabcbb';
let res = lengthOfLongestSubstring(s);
console.log(res);
