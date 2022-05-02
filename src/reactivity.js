


const ReactivityDOM = (function() {
  function render(child) {  
    const app = document.getElementById("app");
    veryUnsecureFunction();

    app.insertAdjacentHTML(
      "beforeend", 
      child
    ); 
  }

  function veryUnsecureFunction() {
    console.log("I am doing something important");
  }

  // API
  return {
    render
  }
})()


// This is our tiny example framework, we can call ReactivityDOM
// Framework decides the rules how to work with framework, 
// what functions are accesible (API)
// Benefits: easier to work, to collaborate, faster to develop,
// you can focus on bussines logic of your app instead of handling DOM or html elements