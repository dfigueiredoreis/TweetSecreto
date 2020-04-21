------------- Encryption -------------

Essa rota recebe como parâmetro um texto(text) e retorna o texto criptografado(resultText) e a chave de descriptografia(decryptKey)
sempre que esse script é executado, gera uma chave diferente aleatoria diferente com 26!(sei lá o número real,a calculadora travou) possibilidades, por isso é importante gravar a chave de cada mensagem

------------- Decryption -------------
Essa rota recebe como parametro o texto criptografado(text) e a chave de descriptografia(key) e retorna o texto descriptografado(resultText)

A versão atual não suporta caracteres especiais, números, espaços, acentuação e simbolos