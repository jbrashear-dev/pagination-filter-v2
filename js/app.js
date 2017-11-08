
const students = document.getElementsByClassName("student-item cf");
const pages = Math.ceil(document.getElementsByClassName("student-item cf").length/10); //get total number of pages
let html = "<ul>"; //variable to hold html for buttons
//main function to display 10 items or break the loop if 10 not available.
function displayPage(page) {
  let maxStudent = page * 10;
  let displayedStudent = maxStudent - 10;
  for ( let i = 0; i < students.length; i ++ ) {
    students[i].style.display = "none";
  }
  for ( let i = displayedStudent; i < maxStudent; i++ ){
    if (i === students.length){
      break;
    }
    students[i].style.display = "block";
  }
}

displayPage(1); //display first 10 students
//build up HTML
for (let i = 0; i < pages; i++ ) {
  j=i+1
  html += "<li>";
  html += '<a class="" href="#" onClick=displayPage(' +j+')>' + j + '</a>';
  html += '</li>'
}
html += "</ul>";
//display HTML in pagination div 
document.getElementById("page").innerHTML = html;
