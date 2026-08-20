const destination = new URL(
  `${window.location.pathname}${window.location.search}${window.location.hash}`,
  "https://iago-aragao.github.io",
);

document.getElementById("portfolio-link").href = destination.href;
window.location.replace(destination.href);
