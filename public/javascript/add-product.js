async function newFormHandler(event) {
    event.preventDefault();
  
    const product_name = document.querySelector('input[name="product-name"]').value;
    const product_content = document.querySelector('input[name="product-details"]').value;
    const product_price = document.querySelector('input[name="product-price"]').value;
    const stock = document.querySelector('input[name="stock"]').value;
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        product_name,
        product_content,
        product_price,
        stock
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-product-form').addEventListener('submit', newFormHandler);