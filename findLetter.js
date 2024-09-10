

function findMiddeleLetter(sample) {
  
let letters = [];

for (var i = 0; i < sample.length; i++) {
    letters.push(sample.charAt(i));
}
    let hasExtra = 0;
    let hasExtraInRemaining = 0;
    for (let i = 0; i < (letters.length) / 2 && hasExtra === 0; i++) {

        if ((letters[i] !== letters[letters.length - (i + 1)] && (letters[i] === letters[letters.length - (i + 2)] || letters[i + 1] === letters[letters.length - (i + 1)]))) {

            hasExtra = hasExtra + 1
            let start = 0
            let end = 0

            if (letters[i] === letters[letters.length - (i + 2)]) {
                start = i
                end = letters.length - (i + 2)

            } else {
                start = i + 1
                end = letters.length - (i + 1)
            }


            for (let j = start + 1; j < end - 1; j++) {

                if (letters[j] !== letters[letters.length - (j)]) {

                    hasExtraInRemaining = hasExtraInRemaining + 1
                }
            }

        }
    }

    return hasExtraInRemaining === 0 && (hasExtra === 1 || hasExtra === 2);
}
console.log("hasExtra", findMiddeleLetter("abcbea"))
