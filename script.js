        const products = [
            { name: 'POLAR COLOR', category: 'Tanque de agua', image: 'https://www.sanyojafep.com/imgs/polar-latex-color.jpg' },
            { name: 'Pintura 1', category: 'Pintura', image: 'https://media.xcons.com.ar/media/catalog/product/q/u/quimica_llana-lt1180-1l.jpg', link: 'product-detail2.html' },
            { name: 'Membrana 1', category: 'Membrana', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7SCIcIep2vXzTVrdy5iMC0H6TSHgt5W0iw&s' },
            { name: 'Herramienta 1', category: 'Herramientas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pZ68_ijMqTYEun9EXgF-tL_nkba1k1wnyA&s' },
            { name: 'Tanque 2', category: 'Tanque de agua', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh3YIiFxdGn-6EfgsSYJwf6vtPYQdZOxNrA&s' },
            { name: 'Herramienta 1', category: 'Herramientas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pZ68_ijMqTYEun9EXgF-tL_nkba1k1wnyA&s' },
            { name: 'Tanque 2', category: 'Tanque de agua', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh3YIiFxdGn-6EfgsSYJwf6vtPYQdZOxNrA&s' },
            { name: 'Herramienta 1', category: 'Herramientas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pZ68_ijMqTYEun9EXgF-tL_nkba1k1wnyA&s' },
            { name: 'Tanque 2', category: 'Tanque de agua', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh3YIiFxdGn-6EfgsSYJwf6vtPYQdZOxNrA&s' },
            { name: 'Herramienta 1', category: 'Herramientas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pZ68_ijMqTYEun9EXgF-tL_nkba1k1wnyA&s' },
            { name: 'Tanque 2', category: 'Tanque de agua', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh3YIiFxdGn-6EfgsSYJwf6vtPYQdZOxNrA&s' },
            { name: 'Herramienta 1', category: 'Herramientas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pZ68_ijMqTYEun9EXgF-tL_nkba1k1wnyA&s' },
            { name: 'Tanque 2', category: 'Tanque de agua', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh3YIiFxdGn-6EfgsSYJwf6vtPYQdZOxNrA&s'  },            
            { name: 'Herramienta 1', category: 'Herramientas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pZ68_ijMqTYEun9EXgF-tL_nkba1k1wnyA&s' },
            { name: 'Tanque 2', category: 'Tanque de agua', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh3YIiFxdGn-6EfgsSYJwf6vtPYQdZOxNrA&s' },
            { name: 'Tanque 2', category: 'Tanque de agua', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh3YIiFxdGn-6EfgsSYJwf6vtPYQdZOxNrA&s' },
            { name: 'Pintura 2', category: 'Pintura', image: 'https://www.sherwin.com.ar/wp-content/uploads/2021/11/REP-LPP.jpg'  },
        ];

        function renderProducts(filter) {
            const productGrid = document.getElementById('productGrid');
            productGrid.innerHTML = '';

            const filteredProducts = filter === 'all' ? products : products.filter(product => product.category === filter);

            filteredProducts.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                `;
                productDiv.onclick = () => window.open(product.link, '_blank');
                productGrid.appendChild(productDiv);
            });
        }

        function filterProducts(category) {
            renderProducts(category);
        }

        // Render all products by default
        renderProducts('all');
