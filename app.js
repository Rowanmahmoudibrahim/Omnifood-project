
const menuButton = document.querySelector("header button");
const mobileNav = document.getElementById("mobile-navigation");

menuButton.addEventListener("click", function () {
  const isHidden = mobileNav.classList.contains("invisible");

  if (isHidden) {
    mobileNav.classList.remove(
      "invisible",
      "translate-x-full",
      "opacity-0"
    );
  } else {
    mobileNav.classList.add(
      "invisible",
      "translate-x-full",
      "opacity-0"
    );
  }
});
