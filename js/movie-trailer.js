function displayPopup(videolink) {
  var popup = document.getElementById("popup");
  var frame = document.getElementById('popupFrame');
  frame.src = videolink;
  popup.style.display = "block";
  document.body.style.backgroundColor = "black";
}

