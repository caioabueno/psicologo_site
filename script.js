const seletor = document.getElementById("seletor");

const iframe1 = document.getElementById("mapa-1");
const iframe2 = document.getElementById("mapa-2");

seletor.addEventListener("change", function () {
  if (seletor.value === "mapa-1") {
    iframe1.style.display = "block";
    iframe2.style.display = "none";
  } else if (seletor.value === "mapa-2") {
    iframe1.style.display = "none";
    iframe2.style.display = "block";
  }
});

AOS.init();