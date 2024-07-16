function submitData() {
  const category = document.getElementById('category').value;
  const amount = document.getElementById('amount').value;

  const data = {
    category: category,
    amount: amount
  };

  fetch(CONFIG.GOOGLE_APPS_SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    alert('Data berhasil dicatat!');
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
