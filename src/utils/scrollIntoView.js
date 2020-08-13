export default function scrollIntoView(id) {
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
  });
}
