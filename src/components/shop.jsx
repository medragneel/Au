import Nav from "../nav"
import { createSignal, For } from "solid-js"
import Prod_card from "./prod_card"

const Shop = () => {
    const products = [{
        "product_name": "Sensory Fidget Toys Set",
        "description": "Our sensory fidget toys set includes a variety of toys designed to help relieve stress and anxiety. Perfect for individuals with autism, ADHD, or anxiety disorders, these toys provide a calming sensory experience. The set includes a fidget spinner, stress ball, puzzle cube, and more.",
        "price": 24.99,
        "image": "https://m.media-amazon.com/images/I/71JVGWI+TfS._AC_SX569_.jpg",
        "sku": "SENSORY-FIDGET-SET"
    },
    {
        "product_name": "Weighted Blanket",
        "description": "Our weighted blanket provides a comforting, deep pressure sensory experience that can help reduce anxiety and improve sleep quality. Made with soft, breathable fabric and filled with hypoallergenic glass beads, it's perfect for individuals with autism or sensory processing disorder. Available in a variety of sizes and weights.",
        "price": 89.99,
        "image": "https://cdn.shopify.com/s/files/1/0661/5815/products/pdp-Weighted-Blanket-Corner_1440x.jpg?v=1616094755",
        "sku": "WEIGHTED-BLANKET"
    },
    {
        "product_name": "Sensory Swing",
        "description": "Our sensory swing provides a calming sensory experience that can help individuals with autism or sensory processing disorder. Made with soft, stretchy fabric and durable hardware, it's easy to install and can be used indoors or outdoors. The swing provides a comfortable, secure place to relax and de-stress.",
        "price": 69.99,
        "image": "https://littlenation.com.au/wp-content/uploads/2020/07/Grey-TherapySensory-Swing-for-Kids-%E2%80%93-Large-150cm-x-90cm-1.jpg",
        "sku": "SENSORY-SWING"
    },

    {
        "product_name": "Visual Timer",
        "description": "Our visual timer provides a visual cue for time management, making it a helpful tool for individuals with autism or ADHD. The timer is easy to set and can be customized with different colors and sounds to match your preferences. Use it for activities, homework, or daily routines.",
        "price": 19.99,
        "image": "https://m.media-amazon.com/images/I/61gZR6Q9c7S._AC_SX466_.jpg",
        "sku": "VISUAL-TIMER"
    },
    {
        "product_name": "AAC Device",
        "description": "Our AAC device is designed to help individuals with autism or other communication disorders communicate effectively. The device features a touch screen and customizable buttons, allowing users to create their own personalized messages. It's easy to use and can be carried with you wherever you go.",
        "price": 399.99,
        "image": "https://i.shgcdn.com/8bf29211-b7b2-47e1-821e-d0ab8d20005a/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        "sku": "AAC-DEVICE"
    }
    ]
    const [prods, setProds] = createSignal(products)
    return (
        <div class="">
            <Nav />
            <br />
            <br />
            <p class=" pl-2 txt-disabled">
                {products.length} Results

            </p>
            <ul class="grid p-2">

                <For each={prods()}>{(p, i) =>
                    <Prod_card p={p} />
                }

                </For>


            </ul>
        </div>
    )
}

export default Shop
