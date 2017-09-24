
(function() {

  let isStyled = true;

  document.addEventListener("DOMContentLoaded", function(event) {

    let button = document.getElementById('toggle-style-button');

    button.addEventListener("click", function(e) {
      if(isStyled === true) {

        document.styleSheets[1].disabled = true;
        button.innerHTML = "Style";


        isStyled = false;
      } else {

        document.styleSheets[1].disabled = false;
        button.innerHTML = "Unstyle";

        isStyled = true;
      }
    });

  });

})();
