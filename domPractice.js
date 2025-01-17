//function Name() {
//    const heading = document.getElementById('text');
  //  heading.innerHTML = 'Welcome'
//}
//console.log(heading)
function rectangleArea(width, height) {
    const area = width * height;
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
const areasize = rectangleArea

console.log(rectangleArea(5,6))
function areaRectangle(length,width){
  //  area = length * width;
    return length * width;
}
function totalArea(length,width){
    return areaRectangle(length,width) + 12;
}
const element = totalArea(5,6)
console.log(element)