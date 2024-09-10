const data = 'lseevl';

let letters = [];

for (var i = 0; i < data.length; i++) {
    letters.push(data.charAt(i));
}
function findMiddeleLetter(sample) {
    let result = 0;
    let result2 = 0;
    for (let i = 0; i < (letters.length) / 2 && result2 === 0; i++) {

        if ((letters[i] !== letters[letters.length - (i + 1)] && (letters[i] === letters[letters.length - (i + 2)] || letters[i + 1] === letters[letters.length - (i + 1)]))) {

            result = result + 1
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

                    result2 = result2 + 1
                }
            }

        }
    }

    return result2 === 0 && (result === 1 || result === 2);
}
