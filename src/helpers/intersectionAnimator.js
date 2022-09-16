export default function intersectionAnimator(elementsToAnimate) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("xyz-out");
        entry.target.classList.add("xyz-in");
        observer.unobserve(entry.target);
      }
    });
  });

  elementsToAnimate.forEach((el) => {
    observer.observe(el.current);
  });
}
