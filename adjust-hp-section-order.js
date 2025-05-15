function moveOutcomesSection() {
  const sectionToMove = document.querySelector('section.section-home_outcomes');
  //For production, would potentially use a more robust selector to avoid issues if the dynamic element ID changes.
  const referenceH3 = document.getElementById('w-node-d038626f-2b71-4176-367b-d98eb6fd788b-fef24191');

  if (sectionToMove && referenceH3) {
    const referenceSection = referenceH3.closest('section.padding-section-medium');
    if (referenceSection && referenceSection.parentNode) {
      referenceSection.parentNode.insertBefore(sectionToMove, referenceSection);
      // Note: if using on production, would likely add a class to the Outcomes section and call the styling from our CSS file.
      sectionToMove.style.paddingTop = '2rem';
    }
  }
}

// Could just as easily wrap the whole function above in this event listener, but this is a bit more modular.
document.addEventListener('DOMContentLoaded', function() {
    moveOutcomesSection();
  });