async function editFormHandler(event) {
    event.preventDefault();
  
    const product_name = document.querySelector('input[name="product_name"]').value;
    const product_details = document.querySelector('input[name="product_details"]').value;
    const product_price = document.querySelector('input[name="product-price"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            product_name,
            product_details,
            product_price
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
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);