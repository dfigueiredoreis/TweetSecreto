const get = (req, res) => responseJson(res, startDecrypt(req.query.text, req.query.key));

function startDecrypt(text, key) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let nonAlphabet = key.split(',');
    let str = Array.from(text);
    let posicaoA;
    let result = '';
    console.log(nonAlphabet);
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < 26; j++) {
            if (str[i] == alphabet[j]) {
                posicaoA = j;
            }
        }
        result += alphabet[parseInt(nonAlphabet[posicaoA])];
    }
    return {
        "resultText": result
    };
}

const responseJson = (res, data) => {
    return res.json(data);
};

module.exports = {
    get,
};