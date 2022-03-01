

Array.prototype.customForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
}

Array.prototype.customMap = function(callback) {
  const newArray = [];

  for(let i = 0; i < this.length; i++) {
    const newItem = callback(this[i], i);
    newArray.push(newItem);
  }

  return newArray;
}
