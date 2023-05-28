import { appendCss } from "./page-utils.js"
import { Navbar } from "./navbar.js"

export class ProductDetailsPage {
    constructor(root) {
        this.root = root
    }

    render() {
        const html = `
            <div class="page-content">
                <div class="item-details">
                    <img class="details-image img-thumbnail" src="https://placehold.co/600x400"/>
                    <h1 class="details-name">Mock Product</h1>
                    <h1 class="details-price">1234$</h1>
                    <h1 class="details-description-header">Description</h1>
                    <p class="details-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        `
        new Navbar(this.root).render()
        this.root.insertAdjacentHTML("beforeend", html)
        appendCss("/static/css/products.css")
    }
}
