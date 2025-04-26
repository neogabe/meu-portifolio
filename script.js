// Contador de visitantes
function updateVisitorCount() {
  const visitorSpans = document.querySelectorAll('.visitantes span');
  let count = 13021;

  function updateCounter() {
    count++;
    const countStr = count.toString().padStart(5, '0');

    visitorSpans.forEach((span, index) => {
      span.textContent = countStr[index];
    });
  }

  updateCounter();
  setInterval(updateCounter, 10000);
}

// Função para rolar suavemente até a seção
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Animação de entrada ao rolar
function handleIntersection() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-section');
          // Opcional: parar de observar após mostrar
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Mostra quando 10% do elemento estiver visível
    }
  );

  // Observa todos os elementos com a classe hidden-section
  document.querySelectorAll('.hidden-section').forEach((section) => {
    observer.observe(section);
  });
}

// Inicia as funcionalidades quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  updateVisitorCount();
  handleIntersection();
});
