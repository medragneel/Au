
import { createSignal } from "solid-js"
import { A } from "@solidjs/router"

const Nav = () => {
    const [active, setActive] = createSignal(false)
    return (
        <nav class="nav pr-1 pl-1">
            <div className="logo bg-dark">Au.</div>

            <div className={active() ? 'nav-links active' : 'nav-links'}>
                <ul>
                    <li><A class="active  link link1" href="/"><i class="fa-solid fa-house"></i> Accueil</A></li>
                    <li><a class="link link2" href="/shop"><i class="fa-solid fa-cart-shopping"></i> Magasin</a></li>
                    <li><a class="link link2" href="/library"><i class="fa-solid fa-book"></i> bibliothèque</a></li>
                    <li><A class="link link3" href="/about">Apropos</A></li>
                </ul>
            </div>
            <a class="hamburger" href="#" onClick={() => setActive(!active())}>
                <span class="bar bar1 bg-dark"></span>
                <span class="bar bar2 bg-dark"></span>
                <span class="bar bar3 bg-dark"></span>
            </a>
        </nav>
    )
}

export default Nav
