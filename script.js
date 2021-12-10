function gerar() {
    let numSenhas = document.getElementById('numSenhas').value
    let tamanho = document.getElementById('tamanho').value
    let minu = document.getElementById('minu').checked
    let maiu = document.getElementById('maiu').checked
    let esp = document.getElementById('esp').checked
    let senhas = '';
    let num = '1234567890'
    for (let i = 0; i < numSenhas; i++) {
        if (minu == true) {
            num += 'abcdefghijklmnopqrstuvwxyz'
        }
        if (maiu == true) {
            num += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
        if (esp == true) {
            num += '!@#$%&*()-+.,;?{[}]^><:'
        }
        let s = ''
        for (let x = 0; x < tamanho; x++) {
            s += num[Math.floor(Math.random() * num.length)]
        }
        senhas += s + '\n'
    }
    document.getElementById('senhas').value = senhas
}