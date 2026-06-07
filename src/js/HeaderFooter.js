async function carregarComponentes() {
    document.getElementById('header').innerHTML =
        await (await fetch('/ExtensaoCurricular2026-1/header.html')).text();

    document.getElementById('footer').innerHTML =
        await (await fetch('/ExtensaoCurricular2026-1/footer.html')).text();
}

carregarComponentes();
