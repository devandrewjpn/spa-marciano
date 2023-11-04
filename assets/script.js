
function loadPage(page) {
    const contentDiv = document.getElementById('content');
    const headerDiv = document.getElementById('header');


    fetch(`views/${page}.html`)
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html;
        });


    fetch('components/header.html')
        .then(response => response.text())
        .then(html => {
            headerDiv.innerHTML = html;
        });
}

loadPage('home');
