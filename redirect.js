const destination = new URL("https://iago-aragao.github.io");
destination.pathname = window.location.pathname;
destination.search = window.location.search;
destination.hash = window.location.hash;

document.getElementById("portfolio-link").href = destination.href;
window.location.replace(destination.href);
