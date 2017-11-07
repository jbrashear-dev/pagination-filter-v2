
const students = document.getElementsByClassName("student-item cf");
const pages = Math.ceil(document.getElementsByClassName("student-item cf").length/10);

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

displayPage(1);
