(function() {
    const API_BASE_URL = '/api/products';

    // Fetch all products
    function fetchProducts() {
        fetch(API_BASE_URL)
            .then(response => response.json())
            .then(products => {
                const tbody = document.querySelector('#productList tbody');
                tbody.innerHTML = ''; // Clear previous rows
                products.forEach(product => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${product.name}</td>
                        <td>${product.category}</td>
                        <td>${product.description}</td>
                        <td>₹${product.price.toFixed(2)}</td>
                        <td>${product.quantity}</td>
                        <td>${product.status ? 'Active' : 'Inactive'}</td>
                        <td>
                            <button class="editBtn" data-id="${product.id}">Edit</button>
                            <button class="deleteBtn" data-id="${product.id}">Delete</button>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
            })
            .catch(error => console.error('Error:', error));
    }

    // Save (create or update) a product
    function saveProduct() {
        const productId = document.getElementById('productId').value;
        const product = {
            name: document.getElementById('name').value,
            category: document.getElementById('category').value,
            description: document.getElementById('description').value,
            price: parseFloat(document.getElementById('price').value),
            quantity: parseInt(document.getElementById('quantity').value),
            status: document.getElementById('status').checked
        };

        const method = productId ? 'PUT' : 'POST';
        const url = productId ? `${API_BASE_URL}/${productId}` : API_BASE_URL;

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            resetForm();
            fetchProducts();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Edit a product
    function editProduct(id) {
        fetch(`${API_BASE_URL}/${id}`)
            .then(response => response.json())
            .then(product => {
                document.getElementById('productId').value = product.id;
                document.getElementById('name').value = product.name;
                document.getElementById('category').value = product.category;
                document.getElementById('description').value = product.description;
                document.getElementById('price').value = product.price;
                document.getElementById('quantity').value = product.quantity;
                document.getElementById('status').checked = product.status;
            })
            .catch(error => console.error('Error:', error));
    }

    // Delete a product
    function deleteProduct(id) {
        if (confirm('Are you sure you want to delete this product?')) {
            fetch(`${API_BASE_URL}/${id}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    fetchProducts();
                }
            })
            .catch(error => console.error('Error:', error));
        }
    }

    // Reset the form
    function resetForm() {
        document.getElementById('productId').value = '';
        document.getElementById('name').value = '';
        document.getElementById('category').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('status').checked = false;
    }

    // Event Listeners
    document.getElementById('saveProductBtn').addEventListener('click', saveProduct);

    // Event delegation for edit and delete buttons
    document.getElementById('productList').addEventListener('click', function(e) {
        if (e.target.classList.contains('editBtn')) {
            const productId = e.target.dataset.id;
            editProduct(productId);
        } else if (e.target.classList.contains('deleteBtn')) {
            const productId = e.target.dataset.id;
            deleteProduct(productId);
        }
    });

    // Initial fetch of products
    fetchProducts();
})();
