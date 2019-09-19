var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modalNoActionButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

modalNoActionButton.addEventListener("click", closeModal);

backdrop.addEventListener("click", function() {
  mobileNav.style.display = "none";
  closeModal();
});

function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}

toggleButton.addEventListener("click", function() {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});
