export default class ColumnChart {
  constructor({ data = [], label = "", link = "", value = 0 } = {}) {
    this.data = data;
    this.label = label;
    this.link = link;
    this.value = value;
    this.chartHeight = 50;
    this.render();
  }

  render() {
    const isLoad = this.data.length === 0;
    const element = document.createElement("div");
    const max = Math.max(...this.data);

    element.innerHTML = `
      <div class="column-chart">
        <div class="column-chart__title">
          Total ${this.label}
          ${
            this.link &&
            `<a class="column-chart__link" href="${this.link}">View all</a>`
          }
        </div>

        <div class="column-chart__container">
          <div data-element="header" class="column-chart__header" style="--chart-height: 50">${
            this.value
          }</div>

          <div data-element="body" class="column-chart__chart">
          ${this.data
            .map(
              (item) => `
          <div data-tooltip="${Math.round(
            (item / max) * 100
          )}%" style="--value:${Math.floor(
                (item / max) * this.chartHeight
              )};"></div>
          `
            )
            .join("")}
          </div>

          
        </div>
      </div>
    `;

    this.element = element.firstElementChild;
    if (isLoad) this.element.classList.add("column-chart_loading");
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }

  update(newData = []) {
    this.data = newData;
    this.render();
  }
}
