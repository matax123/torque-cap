new WOW().init()

window.onload = function () {
    console.log("Hello World!");
    $("#loading").fadeOut(1000);
    $("body").removeClass("preload");

    var blanco = document.getElementById("blanco");
    var negro = document.getElementById("negro");
    var boton = document.getElementById("boton");
    var seleccion = "";

    blanco.onclick = function(){
        if(seleccion != "blanco"){
            console.log("click blanco")
            negro.classList.remove("hover");
            blanco.classList.add("hover");

            boton.innerHTML = '<div id="boton" class="py-3"></div>';
    
            let scriptMouseBlanco = document.createElement("script");
            scriptMouseBlanco.setAttribute("data-preference-id", "796053393-bbe3c8e2-64e2-4f63-9b21-3d45168e1e95");
            scriptMouseBlanco.setAttribute("data-source", "button");
            scriptMouseBlanco.src = "https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js";
            boton.appendChild(scriptMouseBlanco);
            scriptMouseBlanco.scrollIntoView();
            seleccion = "blanco";
        }
    }

    negro.onclick = function(){
        if(seleccion != "negro"){
            console.log("click negro")
            blanco.classList.remove("hover");
            negro.classList.add("hover");

            boton.innerHTML = '<div id="boton" class="py-3"></div>';
    
            let scriptMouseNegro = document.createElement("script");
            scriptMouseNegro.setAttribute("data-preference-id", "796053393-c4f403f8-fee7-4ce5-94f1-119e087859e4");
            scriptMouseNegro.setAttribute("data-source", "button");
            scriptMouseNegro.src = "https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js";
            boton.appendChild(scriptMouseNegro);
            scriptMouseNegro.scrollIntoView();
            seleccion = "negro";
        }
    }
}