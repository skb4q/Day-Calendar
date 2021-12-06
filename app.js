//  Create header
const dateDisplay = document.getElementById("date");

// Display today's date
const options = {weekday : "long", month : "short", day : "numeric"};
const today = new Date();


// Displays the time in digital format
class Clock {
    constructor(element) {
        this.element = element;
    }

    // Sets the interval for updating the time at half a second
    start() {
        setInterval(() => {
            this.update();
        }, 500);
    }

    // Updates in real time
    update() {
        const parts = this.getTimeParts();

        dateDisplay.innerHTML = today.toLocaleDateString("en-US", options);

        // Formats the time in digital format
        const minFormat = parts.minute.toString().padStart(2, "0");
        const timeFormat = `${parts.hour}:${minFormat}`;
        const amPm = parts.amTrue ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormat;
        this.element.querySelector(".clock-ampm").textContent = amPm;
    }

    // Retrieves the current time in hour, minute, and if AM or PM
    getTimeParts() {
        const currTime = new Date();

        return {
            hour: currTime.getHours() % 12 || 12, // Formats in 12-hour format
            minute: currTime.getMinutes(),
            amTrue: currTime.getHours() < 12
        };
    }
}

// Initialize the object for the clock display
const timeElement = document.querySelector(".time");
const timeObject = new Clock(timeElement);

// Updates the time displayed
timeObject.start();



// Create a "close" button and append it to each list item
var nodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < nodeList.length; i++)
{
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(txt);
  nodeList[i].appendChild(span);
}

//  Removes a task from the to-do list
var remove = document.getElementsByClassName("remove");
var i;

for (i = 0; i < remove.length; i++)
{
    remove[i].onclick = function()
  {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when list item is clicked on
var list = document.querySelector('ul');
list.addEventListener('click', function(ev)
{
    if (ev.target.tagName === 'LI')
    {
        ev.target.classList.toggle('checked');
    }
}, false);

//  Creates a new list item when pressing "Add Task"
function newItem()
{
    var li = document.createElement("li");
    var inVal = document.getElementById("taskInput").value;
    var inText = document.createTextNode(inVal);

    li.appendChild(inText);

    if (inVal === '')
    {
        alert("Please write a task out");
    }
    else
    {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("taskInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "remove";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < remove.length; i++)
    {
        remove[i].onclick = function()
        {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}