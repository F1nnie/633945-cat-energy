var formpage = document.querySelector(".selection__form");
var clientname = formpage.querySelector("[name=name]");
var clientweight = formpage.querySelector("[name=weight]");
var clientemail = formpage.querySelector("[name=email]");
var clienttel = formpage.querySelector("[name=tel]");

formpage.addEventListener("submit", function (evt) {
  if (!clientname.value || !clientweight.value || !clientemail.value || !clienttel.value) {
    evt.preventDefault();
    clientname.setAttribute("required", true),
      clientweight.setAttribute("required", true),
      clientemail.setAttribute("required", true),
      clienttel.setAttribute("required", true)
  }
});
