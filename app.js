// Generar contenido dinámicamente
const container = document.getElementById("plantilla");

container.innerHTML = `
  <main class="profile-container">
    <header class="profile-header">
      <img src="./images/IMG_0542.jpeg" alt="Foto de perfil" class="profile-image">
      <div class="profile-info">
        <h1>Sebastian Huapaya</h1>
        <p>Trabajando y estudiando pero mas trabajando</p>
      </div>
    </header>
    <section class="links-section">
      <a href="https://www.youtube.com/watch?v=T6eK-2OQtew" target="_blank" class="link-button">Mi personalidad</a>
      <a href="https://www.youtube.com/watch?v=lKeTzftK10Y" target="_blank" class="link-button">Aquí no hay nada</a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="link-button">No entres aca </a>
    </section>
    <footer class="socials-footer">
      <p>👇 Mis redes sociales  👇</p>
      <div class="social-icons">
        <a href="https://www.instagram.com/sxbazzz.13/" target="_blank" aria-label="Instagram">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzFf7XeCguI-SWMhjUOx1kr8b6j9QppT2NQ&s" alt="Instagram">
        </a>
        <a href="https://x.com/Sebs29391" target="_blank" aria-label="Twitter">
          <img src="https://img.freepik.com/vector-premium/nuevo-twitter-vs-xcom-novation-elon-mask-icono-boton-redes-sociales-popular-logotipo-mensajero-instantaneo-twitter-vector-editorial_661108-8665.jpg" alt="Twitter">
        </a>
        <a href="https://www.tiktok.com/@pamdepollo" target="_blank" aria-label="TikTok">
          <img src="https://static.vecteezy.com/system/resources/previews/023/986/492/non_2x/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png" alt="TikTok">
        </a>
      </div>
    </footer>
  </main>
`;
