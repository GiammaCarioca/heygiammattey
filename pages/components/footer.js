class MyFooter extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <style>

      </style>

      <footer class="footer">
        <a href="./projects.html">
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10.3376 20.7849L0.183247 10.5454L10.3376 0.305979L13.1778 3.12258L7.80002 8.54544L21.9751 8.54544V12.5454L7.80002 12.5454L13.1778 17.9683L10.3376 20.7849Z"
              fill="#000" />
          </svg>
        </a>
      </footer>
    `
  }
}

customElements.define('footer-component', MyFooter)
