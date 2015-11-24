export default function (elementId, footerLinks){
    let root = document.getElementById(elementId);
    root.innerHTML = `
        <pre id="debug">Welcome</pre>
        <button id="contactsButton">Contacts</button>
    `;
}
