[...document.querySelectorAll("h3")]
  .filter(a => a.textContent.includes("Recently Viewed"))
  .forEach(a => {
    const element = a.parentNode.parentNode;
    element.style.display = "none";
  });
