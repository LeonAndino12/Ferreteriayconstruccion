        const products = [

            { name: 'MEMBRANA EN PASTA <br><br> $175.000', category: 'Membrana', image: 'images/recuplast-tradicional-para-techos-membrana-en-pasta.jpg', link: 'recuplast-tradicional-mebrana-en-pasta.html'},
            { name: 'VERNIER SUPERCAPA <br><br> $155.000', category: 'Membrana', image: 'images/vernier-supercapa.jpg', link: 'supercapa-vernier-membrana-poliuretanica.html'},

            { name: 'MASILLA MAS ENDUIDO <br><br> $55.000', category: 'Masillas', image: 'images/masilla-mas-enduido.jpg' },
            { name: 'MASILLA FORMULA POLIESTER <br><br> $55.000', category: 'Masillas', image: 'images/masilla-formula-poliester.jpg' },
            { name: 'ENDUIDO PLASTICO <br><br> $55.000', category: 'Masillas', image: 'images/enduido-plastico.jpg' },

            { name: 'Herramienta 1', category: 'Herramientas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pZ68_ijMqTYEun9EXgF-tL_nkba1k1wnyA&s' },
                
            { name: 'ESMALTE SINTETICO <br><br> $115.000', category: 'Pintura', image: 'images/TERSILUX-ESMALTE-SINTETICO-3en1-SATINADO.png' },
            { name: 'LATEX INTERIOR-EXTERIOR <br><br> $00.000', category: 'Pintura', image: 'images/LATEX-RIOBRA.JPG' },
            { name: 'POLAR COLOR <br><br> $00.000', category: 'Pintura', image: 'images/polar-latex-color.jpg', link: 'polar-latex-color.html'},
            { name: 'POLAR COLOR SATINADO <br><br> $00.000', category: 'Pintura', image: 'images/polar-latex-color.jpg', link: 'polar-latex-color-satinado.html'},
            { name: 'POLAR INTERIOR MATE <br><br> $00.000', category: 'Pintura', image: 'images/polar-interior-nuevo.png', link: 'polar-latex-interior-blanco-mate.html'},
            { name: 'POLAR SATINADO BLANCO <br><br> $00.000', category: 'Pintura', image: 'images/polar-satinado-nuevo.png', link: 'polar-latex-interior-satinado-blanco-mate.html'},
            { name: 'POLAR INTERIOR-EXTERIOR <br><br> $00.000', category: 'Pintura', image: 'images/polar-interior-exterior-nuevo.png', link: 'polar-latex-interior-exterior-blanco-mate.html'},
            { name: 'POLAR CIELO RAZOS <br><br> $00.000', category: 'Pintura', image: 'images/polar-cielorasos-nuevo.png', link: 'polar-latex-cielorrasos.html'},
            { name: 'POLAR FRENTES <br><br> $00.000', category: 'Pintura', image: 'images/polar-exterior-nuevo.png', link: 'polar-latex-exterior-blanco-mate.html'},
            { name: 'POLAR FLEX MUROS Y FRENTES <br><br> $00.000', category: 'Pintura', image: 'images/polar-flex-muros-y-frentes.jpg', link: 'polar-flex-muros-y-frentes.html'},
            { name: 'POLAR FLEX MUROS Y FRENTES POLIURETANICO <br><br> $00.000', category: 'Pintura', image: 'images/polar-flex-muros-y-frentes-poliuretanico.jpg'},
            { name: 'POLAR FLEX MEMBRANA LIQUIDA <br><br> $00.000', category: 'Pintura', image: 'images/polar-flex-membrana.jpg'},
            { name: 'POLAR FLEX MEMBRANA POLIURETANICA <br><br> $00.000', category: 'Pintura', image: 'images/polar-flex-membrana-poliuretanica.jpg'},
            { name: 'POLAR FLEX MEMBRANA FIBRADA <br><br> $00.000', category: 'Pintura', image: 'images/polar-flex-membrana-con-fibra.png'},

            { name: 'AEROSOLES COLOR <br><br> $00.000', category: 'Pintura', image: 'images/aerosol-toke-1.jpg'},

            { name: 'FIJADOR PARA PIEDRAS <br><br> $00.000', category: 'Exteriores', image: 'images/fijador-piedras.png'},


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
