/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
*/

function wordsToMarks(string) {
  let alp = "abcdefghijklmnopqrstuvwxyz";
  let arr = [];
  for (let i = 0; i < string.split("").length; i++) {
    arr.push(alp.split("").indexOf(string.split("")[i]));
  }
  return arr.reduce((acc, el) => acc + el) + string.split("").length;
}

console.log(wordsToMarks("hello"));

/*
    function wordsToMarks(string){
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      let marks = 0;
      string.split('').forEach((char) => {
        marks += alphabet.indexOf(char) + 1;
      });
      return marks;
    }
    */
