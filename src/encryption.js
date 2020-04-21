const get = (req, res) => responseJson(res, startEncrypt(req.query.text));

function startEncrypt(text) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let nonAlphabet = checkNumber(0, 26);
    let str = Array.from(text);
    let posicaoA;
    let posicaoB;
    let result = '';
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < 26; j++) {
            if (str[i] == alphabet[j]) {
                posicaoA = j;
            }
        }
        for (k = 0; k < 26; k++) {
            if (posicaoA == nonAlphabet[k]) {
                posicaoB = k;
            }
        }
        result += alphabet[posicaoB];
    }
    console.log(result);
    return {
        "resultText": result,
        "decryptKey": nonAlphabet
    };
}


function checkNumber(min, max) {
    let alphabet = [];
    let equal = 0;
    let i = 0;
    while (alphabet.length != 26) {
        let number = Math.floor(Math.random() * (max - min) + min);
        if (!alphabet.includes(number)) {
            alphabet.push(number);
        }
    }
    return alphabet;
}

const responseJson = (res, data) => {
    return res.json(data);
};

module.exports = {
    get,
};