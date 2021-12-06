const letters = document.querySelector('#letters')
const words = document.querySelector('#words')

function upperCase() {
    let initialText = document.getElementById('text').value

    var maiuscula = initialText.toUpperCase()
    document.getElementById('text').value = maiuscula
}

function lowerCase() {
    let initialText = document.getElementById('text').value

    var minuscula = initialText.toLowerCase()
    document.getElementById('text').value = minuscula
}

function countText() {
    let initialText = document.getElementById('text').value

    letters.innerHTML = initialText.length
    words.innerHTML = initialText.length == 0 ? 0 : initialText.split(/\s+/).length;
}