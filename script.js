document.getElementById("popup-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("popup").style.display = "block";
  });
  
  document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  });

  const showPasswordCheckbox = document.getElementById('show-password');
const passwordField = document.getElementById('password');

showPasswordCheckbox.addEventListener('change', function() {
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});
