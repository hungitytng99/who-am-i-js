import html from "../listener/core.js";
import { connect } from "../data/store.js";

const connector = connect();

function App({ count }) {
    return html`
        <div>${count}</div>
        <button onclick="dispatch('INCREAMENT', ${count + 1})">Count</button>
    `
}
export default connector(App);