var getImageName = (function() {
  document.onclick = function(e) {
    if (e.target.className == "image") {
      var image = e.target.getAttribute("src");
      localStorage.setItem("imageSrc", image);
    }
  }
})();

alert ("Don't forget to read the README.md file");


