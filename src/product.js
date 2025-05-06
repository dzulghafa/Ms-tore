fetch('/api/get-products.php')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('product-list');

    data.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product';
      card.setAttribute('data-category', `${product.kategori}, ${product.brand}`);

      card.innerHTML = `
        <a href="detailproduct.html" target="_blank" class="block">
          <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="${product.image}" alt="${product.name}" class="w-full h-auto object-cover" />
            <div class="p-2 md:p-4">
              <p class="text-gray-500 text-xs sm:text-base mb-1 text-center sm:text-left">
                ${product.kategori || ''} 
                <span class="ml-0 bg-green-800 text-white text-[10px] sm:text-xs px-2 md:px-2 py-0.5 md:py-1 rounded-full">
                  30% OFF
                </span>
              </p>
              <h3 class="font-semibold text-xs sm:text-base md:text-lg leading-tight mb-1">
                ${product.name} ${product.ram || ''}GB RAM ${product.storage || ''}
              </h3>
              <p class="text-green-700 font-bold text-xs sm:text-base">
                Rp. ${Number(product.harga).toLocaleString('id-ID')}
                <span class="text-gray-400 line-through text-xs sm:text-sm ml-2">Rp. ${(Number(product.harga) * 1.1).toLocaleString('id-ID')}</span>
              </p>
            </div>
          </div>
        </a>
      `;
      
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Gagal mengambil produk:', err);
  });
