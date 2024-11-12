const head = React.createElement("p", {id : "head"}, "hi React")
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(head);

root.render(head)