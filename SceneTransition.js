class SceneTransition {
  constructor() {
    this.element = null;
  }
  createElemen() {
    this.element = document.createElement("div");
    this.element.classList.add("SceneTransition");
  }

  fadeOut() {
    this.element.classList.add("fade-out");
    this.element.addEventListener(
      "animationend",
      () => {
        this.element.remove();
      },
      { once: true }
    );
  }

  init(container, callback) {
    this.createElemen();
    container.appendChild(this.element);

    this.element.addEventListener(
      "animationend",
      () => {
        callback();
      },
      { once: true }
    );
  }
}
