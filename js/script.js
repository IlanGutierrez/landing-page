const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content')

    let Enviando = `<p>Enviando...</p>`

    let Enviado = `<p>Enviado com sucesso</p>`

    content.innerHTML = Enviando


    setTimeout(() => {
        content.innerHTML = Enviado
    }, 1000)

})