let prevNotification = null;
export default class NotificationMessage {
  constructor(message = "", { duration = 0, type = "success" } = {}) {
    this.message = message;
    this.duration = duration;
    this.type = type;
    this.render();
  }
  removeLastNotification() {
    if (prevNotification) prevNotification.destroy();
  }

  render() {
    const element = document.createElement("div");

    element.innerHTML = `
    <div class="notification ${this.type}" style="--value:${this.duration}ms;">
        <div class="timer" style="--value:${this.duration}ms;"></div>
        <div class="inner-wrapper">
          <div class="notification-header">Notification</div>
          <div class="notification-body">${this.message}</div>
        </div>
      </div>
    `;
    this.element = element.firstElementChild;
  }

  show(mainElement = document.querySelector("body")) {
    this.removeLastNotification();
    mainElement.appendChild(this.element);
    prevNotification = this;
    setTimeout(() => {
      this.remove();
    }, this.duration);
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }
}
