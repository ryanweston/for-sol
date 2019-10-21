function openTab(evt, fruitName) {
    var i, tabcontent, tablinks;
  
    // Fetches div with class name given
    tabcontent = document.getElementsByClassName("tabcontent");
    // Loops through text for all elements found and applies css style to display none
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab 
    document.getElementById(fruitName).style.display = "block";
    // adds an "active" class to the hovered/clicked on ingredient/tab
    evt.currentTarget.className += " active";
  }