------------- Encryption -------------

Essa rota recebe como par�metro um texto(text) e retorna o texto criptografado(resultText) e a chave de descriptografia(decryptKey)
sempre que esse script � executado, gera uma chave diferente aleatoria diferente com 26!(sei l� o n�mero real,a calculadora travou) possibilidades, por isso � importante gravar a chave de cada mensagem

------------- Decryption -------------
Essa rota recebe como parametro o texto criptografado(text) e a chave de descriptografia(key) e retorna o texto descriptografado(resultText)

A vers�o atual n�o suporta caracteres especiais, n�meros, espa�os, acentua��o e simbolos