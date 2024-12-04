class FacetsView extends HTMLElement {
  constructor() {
    super();
    this.querySelector('button.list')?.addEventListener("click", (event) => this.onChangeViewMode(event, "list"));
    this.querySelector('button.grid')?.addEventListener("click", (event) => this.onChangeViewMode(event, "grid"));
    const mode = localStorage.getItem("view") ?? "grid";
    this.querySelector(`button.${mode}`)?.classList.add("active");
    this.onUpdateView(mode);
  }

  onChangeViewMode(event, mode) {
    localStorage.setItem("view", mode);
    this.querySelector(`button.${mode}`)?.classList.add("active");
    this.querySelector(`button.${mode === "list" ? "grid" : "list"}`)?.classList.remove("active");
    this.onUpdateView(mode);
  }

  onUpdateView(mode) {
    const productGridEle = document.querySelector("#product-grid");
    const isListView = mode === "list"
    productGridEle?.classList.toggle("product-list", isListView);

  }

  // onRangeChange(event) {
  //   this.adjustToValidValues(event.currentTarget);
  //   this.setMinAndMaxValues();
  // }

  // onKeyDown(event) {
  //   if (event.metaKey) return;

  //   const pattern = /[0-9]|\.|,|'| |Tab|Backspace|Enter|ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Delete|Escape/;
  //   if (!event.key.match(pattern)) event.preventDefault();
  // }

  // setMinAndMaxValues() {
  //   const inputs = this.querySelectorAll('input');
  //   const minInput = inputs[0];
  //   const maxInput = inputs[1];
  //   if (maxInput.value) minInput.setAttribute('data-max', maxInput.value);
  //   if (minInput.value) maxInput.setAttribute('data-min', minInput.value);
  //   if (minInput.value === '') maxInput.setAttribute('data-min', 0);
  //   if (maxInput.value === '') minInput.setAttribute('data-max', maxInput.getAttribute('data-max'));
  // }

  // adjustToValidValues(input) {
  //   const value = Number(input.value);
  //   const min = Number(input.getAttribute('data-min'));
  //   const max = Number(input.getAttribute('data-max'));

  //   if (value < min) input.value = min;
  //   if (value > max) input.value = max;
  // }
}

customElements.define('facets-view', FacetsView);