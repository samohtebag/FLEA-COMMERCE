async function editFormHandler(event) {
  event.preventDefault();

  const product_name = document.querySelector('input[name="product-name"]').value;
  const product_details = document.querySelector('input[name="product-details"]').value;
  const product_price = document.querySelector('input[name="product-price"]').value;
  const user_email = document.querySelector('input[name="user_email"]').value;
  const stock = document.querySelector('input[name="stock"]').value;
  const product_image = document.querySelector('input[name="product_image"]').value;
  
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

  const response = await fetch(`/api/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
          product_name,
          product_details,
          product_price,
          user_email,
          // product_image
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
}


document.querySelector('.edit-product-form').addEventListener('submit', editFormHandler);