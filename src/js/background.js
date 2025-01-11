async function updateBadge() {
  try {
    const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    const data = await response.json();
    const price = parseFloat(data.price).toFixed(0);
    
    const shortPrice = price >= 1000 ? `${(price/1000).toFixed(1)}k` : price;
    
    chrome.action.setBadgeText({ text: shortPrice });
    chrome.action.setBadgeBackgroundColor({ color: '#000000' });
  } catch (error) {
    console.error('Failed to fetch price:', error);
    chrome.action.setBadgeText({ text: 'ERR' });
  }
}

updateBadge();
setInterval(updateBadge, 10000); 