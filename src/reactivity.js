


const ReactivityDOM = {
  render(children) {  
    const container = document.getElementById("productContainer");

    children.forEach(child => {
      container.insertAdjacentHTML(
        "beforeend", 
        child
      );
    })
  }
}