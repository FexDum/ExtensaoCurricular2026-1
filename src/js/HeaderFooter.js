async function carregarComponentes() {
    document.getElementById('header').innerHTML =
        await (await fetch('/header.html')).text();

    document.getElementById('footer').innerHTML =
        await (await fetch('/footer.html')).text();
}

carregarComponentes();