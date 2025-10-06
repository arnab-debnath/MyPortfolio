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



const cards = [
      {
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0",
        title: "eLearning",
        desc: "Interactive platforms to enhance education through personalized experiences and engaging content.",
        tags: ["LMS", "LXP", "mLearning"],
        border: "cyan-800",
        hoverShadow: "cyan-600",
        btn: "View Demo",
        btnColor: "bg-cyan-700 hover:bg-cyan-500"
      },
      {
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
        title: "Sports",
        desc: "Sports software to improve athlete performance, fan engagement, and data analytics for results.",
        tags: ["Fitness", "Cricket", "Fantasy"],
        border: "purple-800",
        hoverShadow: "purple-600",
        btn: "View Demo",
        btnColor: "bg-purple-700 hover:bg-purple-500"
      },
      {
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
        title: "Healthcare",
        desc: "Advanced software for patient care, workflow efficiency, and secure medical data.",
        tags: ["Telemedicine", "EMR/EHR", "Hospital Management"],
        border: "pink-800",
        hoverShadow: "pink-500",
        btn: "View Demo",
        btnColor: "bg-pink-700 hover:bg-pink-500"
      },
      {
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0",
        title: "Real Estate",
        desc: "Platforms for property listing, streamlined transactions, and agent management.",
        tags: ["Property Management", "Multiple Listing"],
        border: "indigo-800",
        hoverShadow: "indigo-600",
        btn: "View Demo",
        btnColor: "bg-indigo-700 hover:bg-indigo-500"
      },
      // ...add more card objects as needed!
    ];

    const cardsPerPage = 4;
    let currentPage = 1;

    function renderCards() {
      const start = (currentPage - 1) * cardsPerPage;
      const end = start + cardsPerPage;
      const cardsToShow = cards.slice(start, end);
      const container = document.getElementById('card-container');
      container.innerHTML = cardsToShow.map(card => `
        <div class="bg-gray-900 rounded-xl p-6 shadow-lg border border-${card.border} hover:shadow-${card.hoverShadow} transition flex flex-col">
          <img src="${card.image}" alt="${card.title}" class="h-44 w-full rounded-lg object-cover mb-4" />
          <h3 class="text-xl font-semibold text-white mb-1">${card.title}</h3>
          <p class="text-gray-400 mb-4 text-sm">${card.desc}</p>
          <div class="flex flex-wrap gap-2 mb-3">
            ${card.tags.map(tag =>
              `<span class="bg-gray-800 text-${card.border.replace('800', '300')} px-2 py-1 rounded text-xs">${tag}</span>`
            ).join('')}
          </div>
          <a href="#" class="${card.btnColor} text-white px-4 py-1 rounded-full text-sm font-semibold self-start transition">${card.btn}</a>
        </div>
      `).join('');
      lucide.createIcons();
    }

    function renderPagination() {
      const totalPages = Math.ceil(cards.length / cardsPerPage);
      let html = '';
      for (let i = 1; i <= totalPages; i++) {
        html += `<a href="#" class="${i === currentPage 
          ? 'bg-indigo-700 text-white' 
          : 'bg-gray-800 text-gray-200 hover:bg-indigo-700 hover:text-white'} px-3 py-1 rounded-md shadow transition" onclick="goToPage(event,${i})">${i}</a>`;
      }
      document.getElementById('pagination').innerHTML = html;
    }

    window.goToPage = function(event, page) {
      event.preventDefault();
      currentPage = page;
      renderCards();
      renderPagination();
    };

    // Initial render
    renderCards();
    renderPagination();