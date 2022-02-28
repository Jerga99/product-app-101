

const helloWorld = "Hi There!";

const _createElement = (elementType, classList) => {
  const element = document.createElement(elementType);
  element.classList.add(classList);
  return element;
}

const createProductElement = (product) => {
  const productElement = _createElement("div", "product");

  const productLabels = ["Name", "Type", "Price", "Currency", "Image"];
  productLabels.forEach(label => {
    const productField = _createElement("div", "product-field");
    const productLabel = _createElement("span", "product-label");

    productLabel.innerHTML = `${label}:`;
    const text = document.createTextNode(product[label.toLowerCase()]);

    productField.appendChild(productLabel);
    productField.appendChild(text);
    productElement.appendChild(productField);
  })

  return productElement;
}
