/* @refresh reload */
import { render } from 'solid-js/web';

import "./css/style.css"
import App from './App';
import { Router, Routes, Route } from '@solidjs/router';
import About from './components/about';
import Shop from './components/shop';
import Books from './components/books';
import Notfound from './components/Notfound';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
    );
}

render(() => (<Router>
    <Routes>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/library" component={Books} />
        <Route path="/*" component={Notfound} />
    </Routes>

</Router>), root);
