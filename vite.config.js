export default {
    build: {
      rollupOptions: {
        input: {
          main: 'index.html',
          product: 'product.html',
          detailproduct: 'detailproduct.html',
          blog: 'blog.html',
          detailblog: 'detailblog.html',
          contactpage: 'contactpage.html',
          checkout: 'checkout.html',
        },
      },
    },
    server: {
      proxy: {
        '/api': 'http://localhost:8000',
      },
    },
  }
  