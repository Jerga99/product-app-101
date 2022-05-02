


const ReactivityDOM = {
  render(child) {  
    const app = document.getElementById("app");

    app.insertAdjacentHTML(
      "beforeend", 
      child
    ); 
  }
}