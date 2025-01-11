function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
}

function formatUpdateTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

async function getBitcoinPrice() {
  try {
    const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    const data = await response.json();
    const price = parseFloat(data.price).toFixed(2);
    document.getElementById('btcPrice').textContent = `$${price}`;
    document.getElementById('lastUpdate').textContent = `Last update: ${formatUpdateTime()}`;
  } catch (error) {
    document.getElementById('btcPrice').textContent = 'Error';
    console.error('Failed to fetch price:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.classList.add(`${savedTheme}-theme`);
  
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  
  getBitcoinPrice();
  setInterval(getBitcoinPrice, 10000);
}); 