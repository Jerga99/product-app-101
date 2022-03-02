
function _createElement(tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

function createProductElement(product) {
  const productElement = _createElement("div", "product");
  const labels = Object.keys(product);

  labels.forEach(label => {
    const productField = _createElement("div", "product-field");
    const productLabel = _createElement("span", "product-label");

    productLabel.innerText = `${label[0].toUpperCase() + label.substring(1)}:`;
    const text = document.createTextNode(product[label]);

    productField.appendChild(productLabel);
    productElement.appendChild(productField);
    productField.appendChild(text);
  })

  return productElement;
}
