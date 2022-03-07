

const PRODUCT_DATA = [{
  name: "Laptop",
  type: "Electronics",
  price: 500,
  currency: "usd",
  image: "some_url_of_image"
}, {
  name: "Super shoes",
  type: "Clothing",
  price: 50,
  currency: "usd",
  image: "some_url_of_image"
}, {
  name: "Smartphone",
  type: "Phones",
  price: 300,
  currency: "usd",
  image: "some_url_of_image"
}, {
  name: "Fancy Hat",
  type: "Clothing",
  price: 100,
  currency: "usd",
  image: "some_url_of_image"
}]

function getProductData() {
  return PRODUCT_DATA;
}

function getProductDataAsync() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {

      if (true) {
        reject(new Error("Oooops some error!!!!"));
      }

      const response = {
        json: async function() {
          return new Promise(function(resolve) {
            setTimeout(function() {
              resolve(PRODUCT_DATA);
            }, 20)
          })
        }
      }

      resolve(response);
    }, 1000);
  })
}
