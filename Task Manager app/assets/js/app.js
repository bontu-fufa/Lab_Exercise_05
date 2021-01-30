// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button
const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 
const orderChoice = document.querySelector('#order-choice'); // order selection 
let registeredTasks; // for nodelist collection 
let tasksCollection; // for arrays
// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);
// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
//   Filter Task 
filter.addEventListener('keyup', filterTasks);
// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);
//  Event Listener for date order
orderChoice.addEventListener('change',reorderDisplay);




// Add New  Task Function definition 
function addNewTask(e) {



    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // adding and appending time 
    const currentTime = document.createElement("time");
    currentTime.setAttribute("datetime", Date.now());
    li.appendChild(currentTime);
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    taskList.appendChild(li);

    e.preventDefault(); //disable form submission



}





// Clear Task Function definition 
function clearAllTasks() {

    //This is the first way 
    // taskList.innerHTML = '';

    //  Second Wy 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}



// Filter tasks function definition 
function filterTasks(e) {

    /*  
    Instruction for Handling the Search/filter 
    
    1. Receive the user input from the text input 
    2. Assign it to a variable so the us can reuse it 
    3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
    4. Iterate over the collection item Node List using forEach
    5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
    6 . If it contains , change the display content of the element as block , else none
    
    
    */

   let term = document.querySelector("#filter").value;
   let existingTasks = document.querySelectorAll(".collection-item");
   existingTasks.forEach( function(task) {
       if (task.textContent.indexOf(term) != -1) {
           task.style.display = "block";
       } else {
           task.style.display = "none";
       }
   })
    

}

// Remove Task function definition 
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();

        }

    }
}


// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}

function ascending(tasksRegistered){
    tasksRegistered = tasksRegistered.sort(function(a, b) {
        if (parseInt(a.getAttribute("datetime")) < parseInt(b.getAttribute("datetime"))){
            return 1;
        } else {
            return -1;
        }
    });

    return tasksRegistered;
}

function descending(tasksRegistered){
    tasksRegistered = tasksRegistered.sort(function(a, b) {
        if (parseInt(a.getAttribute("datetime")) > parseInt(b.getAttribute("datetime"))){
            return 1;
        } else {
            return -1;
        }
    });
    return tasksRegistered;
}


// Ascending - Descending ordering function
function reorderDisplay(){
    //get all tasks
    registeredTasks = document.querySelectorAll(".collection-item");
    tasksCollection = [];
    // put tasks into array
    registeredTasks.forEach(function(task) {
        tasksCollection.push(task);
    });

    // ordering
    if (orderChoice.value == 'ascend')  tasksCollection = ascending(tasksCollection);
    if (orderChoice.value == 'descend') tasksCollection = descending(tasksCollection);
    
    // display in order
    taskList.innerHTML = '';
    tasksCollection.forEach( function(task) {
        let li = document.createElement("li");
        li.innerHTML = task.innerHTML;
        li.className = "collection-item";
        taskList.appendChild(li);
    });

}
