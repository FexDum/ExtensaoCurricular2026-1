async function carregarComponentes() {
    document.getElementById('header').innerHTML =
        await (await fetch('/pages/header.html')).text();

    document.getElementById('footer').innerHTML =
        await (await fetch('/pages/footer.html')).text();
}

carregarComponentes();