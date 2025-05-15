// Changing eyebrow-style H2s to larger font size (1.1rem) for better scannability
document.addEventListener('DOMContentLoaded', function() {

  let sectionSubheads = document.querySelectorAll("h2.text-style-eyebrow");

  // Check if any elements were found
  if (sectionSubheads.length > 0) {
    sectionSubheads.forEach(function(element) {
      element.style.fontSize = "1.1rem";    
    });
  } else {
    console.log("No elements found matching 'h2.text-style-eyebrow'");
  }

});