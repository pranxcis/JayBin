function loadHTML(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

window.onload = () => {
    loadHTML("header", "includes/header.html");
    loadHTML("footer", "includes/footer.html");
};