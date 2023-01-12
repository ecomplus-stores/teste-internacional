const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
     './html/ShippingCalculator.html': path.resolve(__dirname, 'template/js/custom-js/html/ShippingCalculator.html'),
      './js/ShippingCalculator.js': path.resolve(__dirname, 'template/js/custom-js/js/ShippingCalculator.js'),
      './js/InputDocNumber.js': path.resolve(__dirname, 'template/js/custom-js/js/InputDocNumber.js'),
      './html/InputDocNumber.html': path.resolve(__dirname, 'template/js/custom-js/html/InputDocNumber.html'),
      './html/InputZipCode.html': path.resolve(__dirname, 'template/js/custom-js/html/InputZipCode.html')
   /*    './html/AccountForm.html': path.resolve(__dirname, 'template/js/custom-js/html/AccountForm.html'),
      './js/AccountForm.js': path.resolve(__dirname, 'template/js/custom-js/js/AccountForm.js'),
      './html/LoginBlock.html': path.resolve(__dirname, 'template/js/custom-js/html/LoginBlock.html'),
      './js/LoginBlock.js': path.resolve(__dirname, 'template/js/custom-js/js/LoginBlock.js') */

    }
  }
})