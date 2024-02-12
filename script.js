document.getElementById("popup-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("popup").style.display = "block";
  });
  
  document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  });
  