// Write your code here!
document.querySelector("main").remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
document.body.appendChild(newHeader);
document.getElementById("victory").innerHTML = "Leonna is the champion"