// Данные проектов — «база данных» в JS
const projects = [
  {
    title: "Landing для кофейни",
    description: "Адаптивный одностраничный сайт с меню и формой обратной связи. Акцент на типографику и скорость загрузки.",
    cover: "./assets/project-coffee.svg",
    tags: ["HTML", "CSS (Grid)", "JS"],
    demo: "#",
    source: "https://github.com/username/coffee-landing"
  },
  {
    title: "Todo App",
    description: "Приложение списка задач на чистом JS: добавление, фильтрация, сохранение в LocalStorage.",
    cover: "./assets/project-todo.svg",
    tags: ["JavaScript", "LocalStorage"],
    demo: "#",
    source: "https://github.com/username/todo-app"
  },
  {
    title: "Scubidu",
    description: "Приложение списка задач на чистом JS: добавление, фильтрация, сохранение в LocalStorage.",
    cover: "./assets/project-todo.svg",
    tags: ["JavaScript", "LocalStorage"],
    demo: "#",
    source: "https://github.com/username/todo-app"
  }
];

// Рендер карточек проектов
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';
  projects.forEach(p => {
    const el = document.createElement('article');
    el.className = 'project-card';
    el.innerHTML = `
      <div class="project-cover">
        <img src="${p.cover}" alt="Обложка проекта: ${p.title}">
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="muted">${p.description}</p>
        <div class="tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="card-actions">
        ${p.demo ? `<a class="btn btn-soft" href="${p.demo}" target="_blank" rel="noopener">Демо</a>` : ''}
        ${p.source ? `<a class="btn btn-primary" href="${p.source}" target="_blank" rel="noopener">Код</a>` : ''}
      </div>
    `;
    grid.appendChild(el);
  });
}

// Бургер-меню
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Текущий год в подвале
document.getElementById('year').textContent = new Date().getFullYear();

// Инициализация
renderProjects();

/*
 * Как добавить новый проект:
 * 1) Добавь объект в массив `projects`, например:
 * projects.push({
 *   title: "Название",
 *   description: "Короткое описание",
 *   cover: "./assets/my-cover.svg",
 *   tags: ["HTML","CSS","JS"],
 *   demo: "https://demo.example.com",
 *   source: "https://github.com/username/repo"
 * });
 * 2) Положи обложку в папку assets и обнови путь в `cover`.
 * 3) Обнови ссылки на демо/репозиторий по желанию.
 */
