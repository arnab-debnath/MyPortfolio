lucide.createIcons(); // this replaces <i data-lucide="..."></i> with SVGs


document.querySelectorAll('.futuristic-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    card.style.transform = `perspective(600px) rotateY(${x/30}deg) rotateX(${-y/30}deg) scale(1.02)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const sidebar = document.getElementById('sidebar');
  if(menuBtn) menuBtn.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
    sidebar.classList.add('translate-x-0');
  });
  if(closeBtn) closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('-translate-x-full');
  });



