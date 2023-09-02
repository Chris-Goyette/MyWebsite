document.addEventListener("DOMContentLoaded", function() {
    const showMoreBtn = document.getElementById("showMoreBtn");
    const hiddenParagraph = document.getElementById("hiddenParagraph");
  
    showMoreBtn.addEventListener("click", function() {
      if (hiddenParagraph.style.display === "none") {
        hiddenParagraph.style.display = "block";
        showMoreBtn.textContent = "Show Less";
      } else {
        hiddenParagraph.style.display = "none";
        showMoreBtn.textContent = "Show More";
      }
    });
  });
  