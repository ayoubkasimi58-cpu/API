let allLaptops = [];

const laptopsData = [
  {
    id: 1,
    name: "Dell XPS 15",
    brand: "Dell",
    type: "premium",
    price: 1899,
    year: 2024,
    cpu: "Intel Core i7 13th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "NVIDIA RTX 4050",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgp_RUzntGpVxmK9GTgqCBGowPsvDWZ5cMfA&s"
  },
  {
    id: 2,
    name: "MacBook Pro 14",
    brand: "Apple",
    type: "premium",
    price: 2499,
    year: 2023,
    cpu: "Apple M3 Chip",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Integrated M3",
    image: "https://magimag.ma/web/image/product.template/5573/image_1024?unique=8ab10ee"
  },
  {
    id: 3,
    name: "HP Pavilion 15",
    brand: "HP",
    type: "budget",
    price: 699,
    year: 2023,
    cpu: "Intel Core i5 12th Gen",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Intel Iris Xe",
    image: "https://cdn.cs.1worldsync.com/syndication/feeds/hp/inline-content/KV/8/C/E/F/1/8CEF1CDC661769C7CEBAE5B79B7879EF822BF323_w_400_hero.png"
  },
  {
    id: 4,
    name: "ASUS ROG Strix G17",
    brand: "ASUS",
    type: "gaming",
    price: 1599,
    year: 2024,
    cpu: "Ryzen 9 6900HX",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "RTX 4070",
    image: "https://dlcdnwebimgs.asus.com/gain/9AC8B0E4-AF64-46FF-AEF7-A4827521671F"
  },
  {
    id: 5,
    name: "Lenovo Legion 5 Pro",
    brand: "Lenovo",
    type: "gaming",
    price: 1799,
    year: 2024,
    cpu: "Ryzen 7 7840HS",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 4070",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL5c0P65goUFvpL2ZUOXu27zOJGrA6BZOhQ&s"
  },
  {
    id: 6,
    name: "Acer Swift 3",
    brand: "Acer",
    type: "ultrabook",
    price: 649,
    year: 2023,
    cpu: "Intel Core i5 12th Gen",
    ram: "8GB",
    storage: "512GB SSD",
    gpu: "Intel Iris Xe",
    image: "https://maxfor.ma/wp-content/uploads/2024/06/acer-swift-3-sf314-59-7095-i7-1165g7-8-gb-lpddr4x-512-gb-ssd-14-nx-a0pef-009-bon-prix-maro-tanger-rabat-casa-maxfor-systeme-1.webp"
  },
  {
    id: 7,
    name: "MSI Prestige 16",
    brand: "MSI",
    type: "premium",
    price: 1999,
    year: 2024,
    cpu: "Intel Core i7 14th Gen",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 4060",
    image: "https://asset.msi.com/resize/image/global/product/product_16705570502e35402eaf97aea405b96ba8c1ba5289.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"
  },
  {
    id: 8,
    name: "Samsung Galaxy Book 3 Pro",
    brand: "Samsung",
    type: "ultrabook",
    price: 1399,
    year: 2024,
    cpu: "Intel Core i7 13th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Intel Iris Xe",
    image: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg"
  }
  
  
];

function displayLaptops(laptops) {
  const container = document.getElementById('laptops');
  const loading = document.getElementById('loading');

  loading.style.display = 'none';

  if (laptops.length === 0) {
    container.innerHTML = '<p style="text-align:center;">No laptops available</p>';
    return;
  }

  container.innerHTML = laptops.map(laptop => `
    <div class="laptop-card">
      <img src="${laptop.image}" alt="${laptop.name}">
      <h3>${laptop.name}</h3>
      <p>${laptop.brand}</p>
      <p>Year: ${laptop.year}</p>
      <p>CPU: ${laptop.cpu}</p>
      <p>RAM: ${laptop.ram}</p>
      <p>Storage: ${laptop.storage}</p>
      <p>GPU: ${laptop.gpu}</p>
      <button class="buy-btn" onclick="buyLaptop(${laptop.id})">Buy Now</button>
    </div>
  `).join('');
}

function filterLaptops(type, event) {
  document.querySelectorAll('.filter button')
    .forEach(btn => btn.classList.remove('active'));

  event.target.classList.add('active');

  const filtered =
    type === 'all'
      ? allLaptops
      : allLaptops.filter(laptop => laptop.type === type);

  displayLaptops(filtered);
}

function buyLaptop(id) {
  alert("Thanks for purchasing this laptop! 💻");
}

function loadLaptops() {
  setTimeout(() => {
    allLaptops = laptopsData;
    displayLaptops(allLaptops);
  }, 1500);
}

loadLaptops();
