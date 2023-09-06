/*

Given a string s, reverse the order of characters in each word within
a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"


Example 2:

Input: s = "God Ding"
Output: "doG gniD"
 

Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.

*/


var reverseWords = function(s) {
  const space = ' ';
  let words = s.split(space);

  return words
    .map((word) => {
      const letters = [...word];
      let left = 0;
      let right = letters.length;

      while(left < right) {
        const temp = letters[left];
        letters[left] = letters[right];
        letters[right] = temp;
        right--;
        left++;
      }

      return letters.join('');
  })
    .join(space);
};


console.log(reverseWords("God Ding")); /// doG gniD
console.log(reverseWords("Let's take LeetCode contest")); /// s'teL ekat edoCteeL tsetnoc
