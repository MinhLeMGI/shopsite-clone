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
}

customElements.define('facets-view', FacetsView);