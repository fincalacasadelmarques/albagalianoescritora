/* Funciones comunes de la web: menú del móvil, enlaces, animaciones y formulario */
(function () {
  "use strict";
  var C = window.CONFIG_WEB || {};
  document.documentElement.classList.add("js");

  // Menú del móvil
  var boton = document.querySelector(".boton-menu");
  var menu = document.querySelector(".menu");
  if (boton && menu) {
    boton.addEventListener("click", function () {
      var abierto = menu.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", abierto ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { menu.classList.remove("abierto"); });
    });
  }

  // Enlaces que salen de config.js
  function rellenar(selector, url) {
    document.querySelectorAll(selector).forEach(function (a) {
      if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
    });
  }
  rellenar("[data-instagram]", C.instagram);
  rellenar("[data-compra-editorial]", C.compraEditorial);
  rellenar("[data-compra-amazon]", C.compraAmazon);
  document.querySelectorAll("[data-instagram-usuario]").forEach(function (el) { el.textContent = C.instagramUsuario; });

  // Correo: solo se muestra cuando está configurado
  document.querySelectorAll("[data-correo]").forEach(function (el) {
    if (C.correo) {
      el.hidden = false;
      var a = el.matches("a") ? el : el.querySelector("a");
      if (a) a.href = "mailto:" + C.correo;
      el.querySelectorAll("[data-correo-texto]").forEach(function (t) { t.textContent = C.correo; });
    } else {
      el.hidden = true;
    }
  });

  // Año del pie
  document.querySelectorAll("[data-anio]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Aparición suave
  var aparecen = document.querySelectorAll(".aparece");
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    aparecen.forEach(function (el) { obs.observe(el); });
  } else {
    aparecen.forEach(function (el) { el.classList.add("visible"); });
  }

  // Si una foto no existe todavía, se oculta sin romper el diseño
  document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener("error", function () { img.style.visibility = "hidden"; });
  });

  // Motivo preseleccionado desde un enlace (?motivo=comprar)
  var form = document.getElementById("formulario-contacto");
  if (!form) return;
  var params = new URLSearchParams(location.search);
  var motivo = params.get("motivo");
  if (motivo && form.motivo) {
    var opcion = form.motivo.querySelector('option[value="' + motivo + '"]');
    if (opcion) form.motivo.value = motivo;
  }
  var ejemplares = document.getElementById("campo-ejemplares");
  function verEjemplares() {
    if (ejemplares) ejemplares.hidden = form.motivo.value !== "comprar";
  }
  form.motivo.addEventListener("change", verEjemplares);
  verEjemplares();

  // Envío del formulario (FormSubmit, gratuito)
  var aviso = document.getElementById("aviso-form");
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (form._honey && form._honey.value) return; // antispam
    function mostrar(texto, error) {
      aviso.innerHTML = texto;
      aviso.style.background = error ? "#f6e3dc" : "";
      aviso.style.color = error ? "#7a2e16" : "";
      aviso.classList.add("visible");
      aviso.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (!C.correo) {
      mostrar('¡Gracias por escribirme! El formulario se activará muy pronto. Mientras tanto, envíame tu mensaje por Instagram: <a href="' +
        C.instagram + '" target="_blank" rel="noopener">' + C.instagramUsuario + "</a>.");
      return;
    }
    var boton = form.querySelector("button[type=submit]");
    boton.disabled = true;
    var datos = new FormData(form);
    datos.append("_subject", "Web Alba Galiano · " + form.motivo.options[form.motivo.selectedIndex].text);
    fetch("https://formsubmit.co/ajax/" + encodeURIComponent(C.correo), {
      method: "POST", headers: { Accept: "application/json" }, body: datos
    }).then(function (r) { return r.json(); }).then(function () {
      form.reset(); verEjemplares();
      mostrar("¡Mensaje enviado! Te responderé lo antes posible. Gracias por tu interés.");
    }).catch(function () {
      mostrar('No se ha podido enviar el mensaje. Prueba de nuevo o escríbeme por <a href="' + C.instagram + '" target="_blank" rel="noopener">Instagram</a>.', true);
    }).finally(function () { boton.disabled = false; });
  });
})();
