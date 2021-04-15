function toggleMenu(){
    document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}

function gridView() {
    document.querySelector("div.list").classList.remove("list");
    document.getElementById("view").classList.add("grid");
  }
  
  function listView() {
    document.querySelector("div.grid").classList.remove("grid");
    document.getElementById("view").classList.add("list");
  }
  