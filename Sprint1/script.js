document.addEventListener("DOMContentLoaded", function() {
  cargarComponente("navbar-container", "/componentes/navbar.html");
  //cargarComponente("login-panel", "/componentes/login_panel.html");
  cargarComponente("footer", "/componentes/footer.html");
  //cargarComponente("Authenticity", "/componentes/Authenticity.html");
  //cargarComponente("cart_item", "/componentes/cart_item.html");
  //cargarComponente("About-page", "/componentes/about.html");
  cargarComponente("Buy", "/componentes/Buy.html", function() {
    inicializarSeleccionTallas();
  });
});

function cargarComponente(id, url, callback) {
  fetch(url)
      .then(response => response.text())
      .then(html => {
          document.getElementById(id).innerHTML = html;
          if (callback) callback(); // Ejecuta la función de callback si se proporciona
      })
      .catch(error => console.error('Error al cargar el componente:', error));
}

function inicializarSeleccionTallas() {
  const tallas = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  const contenedorTallas = document.querySelector('.tallas-contenedor');

  if (!contenedorTallas) return;

  tallas.forEach((talla, index) => {
      const btn = document.createElement('button');
      btn.textContent = talla;
      btn.className = 'btn-talla';
      btn.onclick = () => {
          if (btn.classList.contains('btn-talla-activa')) {
              btn.classList.remove('btn-talla-activa');
              document.querySelector('.size').textContent = `Size (EU): Select`;
          } else {
              document.querySelectorAll('.btn-talla').forEach(boton => boton.classList.remove('btn-talla-activa'));
              btn.classList.add('btn-talla-activa');
              document.querySelector('.size').textContent = `Size (EU): ${talla}`;
          }
      };

      contenedorTallas.appendChild(btn);
  });
}

function changeImage(src) {
  const mainImage = document.getElementById('mainImage');
  if (mainImage) {
      mainImage.src = src;
  }
}

