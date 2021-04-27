(function () {
  imageSrc = localStorage.getItem("imageSrc");
  document.getElementById("image").setAttribute("src", imageSrc);
})();