document.addEventListener('DOMContentLoaded', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.cookies.getAll({ url: tab.url }, (cookies) => {
    const cookieStr = cookies.map(c => `${c.name}=${c.value}`).join('; ');
    document.getElementById('cookieOutput').value = cookieStr;
  });

  document.getElementById('copyBtn').addEventListener('click', () => {
    const text = document.getElementById('cookieOutput').value;
    navigator.clipboard.writeText(text).then(() => {
      alert('Cookie 已复制到剪贴板');
    });
  });
});