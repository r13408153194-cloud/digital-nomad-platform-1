// 主题切换功能
const toggleTheme = () => {
  document.body.classList.toggle('dark');
};

// 移动端汉堡菜单切换
const hamburgerMenu = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu');
hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// 数据渲染示例：加载目的地数据
fetch('data/cities.json')
  .then(response => response.json())
  .then(data => {
    const destinationsContainer = document.getElementById('destinations');
    data.forEach(city => {
      const cityElement = document.createElement('div');
      cityElement.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md');
      cityElement.innerHTML = `
        <img src="${city.image}" alt="${city.name}" class="w-full h-40 object-cover rounded-lg">
        <h3 class="text-xl font-semibold mt-4">${city.name}</h3>
        <p class="text-gray-600">${city.country}</p>
        <p>月成本: ¥${city.costCny}</p>
        <p>评分: ${city.score}</p>
      `;
      destinationsContainer.appendChild(cityElement);
    });
  })
  .catch(error => {
    console.error('数据加载失败:', error);
  });
