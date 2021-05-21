async function editFormHandler(event) {
    event.preventDefault();
  
    const product_name = document.querySelector('input[name="product-name"]').value;
    const product_details = document.querySelector('input[name="product-details"]').value;
    const product_price = document.querySelector('input[name="product-price"]').value;
    let product_image = document.querySelector('input[name="product_image"]').files[0];
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

      console.log(product_image)
      const reader = new FileReader(); 
      reader.readAsDataURL(product_image); 
      reader.onload = function() {
        product_image = reader.result;
        console.log(product_image);
      }
    const response = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            product_name,
            product_details,
            product_price,
            product_image
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