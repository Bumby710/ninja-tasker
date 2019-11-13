console.log("connected");
// select Element
// listening for events
// manipulating elements
// when we click on list item
const listItem = document.querySelector("ul");
listItem.addEventListener("click", function(event) {
  console.log(event.target.id);
  fetch("/delete/" + event.target.id, { method: "delete" })
    .then(res => {
      res.json();
    })
    .then(function() {
      event.target.parentNode.removeChild(event.target);
    });
});
// fire an event
// the evet hits our server
