class Tooltip {
  element = null;

  onPointerOver = (e) => {
    if (e.target.dataset.tooltip !== undefined) {
      this.render(e.target.dataset.tooltip);
      this.moveTooltip(e);
      document.addEventListener("mousemove", this.onPointerMove);
    }
  };

  onPointerMove = (e) => {
    this.moveTooltip(e);
  };

  onPointerOut = (e) => {
    if (e.target.dataset.tooltip !== undefined) {
      document.removeEventListener("mousemove", this.onPointerMove);
      this.remove();
    }
  };

  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("tooltip");
  }

  render(innerText = "") {
    this.element.textContent = innerText;
    const body = document.querySelector("body");
    body.appendChild(this.element);
  }

  initialize() {
    document.addEventListener("pointerover", this.onPointerOver);
    document.addEventListener("pointerout", this.onPointerOut);
  }

  moveTooltip = (moveEvent) => {
    this.element.style.left = moveEvent.clientX + 10 + "px";
    this.element.style.top = moveEvent.clientY + 10 + "px";
  };

  remove() {
    this.element.remove();
  }

  destroy() {
    document.removeEventListener("pointerover", this.onPointerOver);
    document.removeEventListener("pointerout", this.onPointerOut);
    this.element.remove();
  }
}

const tooltip = new Tooltip();

export default tooltip;
