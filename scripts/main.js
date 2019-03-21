(function(){
    let addButtons = [...document.getElementsByClassName('add-button')];   // Assign button elements to variable.
    addButtons.forEach(btn => btn.addEventListener('click', addTask));   // Add eventlistener to all addbuttons, click calls addTask.

    const containers = {
        todo: document.getElementById('todo'),
        inProgress: document.getElementById('in-progress'),   // Create "containers" object containing content elements of each column.
        complete: document.getElementById('complete'),
    };

    const tasks = getInitialTasks();   // Load previously tasks from local storage.

    render();   // display loaded tasks.

    function addTask (e) {
        const task = prompt('Please enter the task name');   // Save user input to "task" variable
        const type = e.target.dataset.type;   // Saves target button to variable "type".
        tasks[type].push(task);   // Push new task to tasks array

        render();   // Diplay tasks & new task.
        store();   // Call store function.
    }

    function render () {   // Function to refresh view, deletes all task elements and recreates them including any new additions.

        for (const [key, container] of Object.entries(containers)) {
            while (container.lastChild) {   // While child(task) exists remove child(task).
                container.removeChild(container.lastChild);
            }

            tasks[key].forEach(task => {
                const el = document.createElement('div'); // Create elements from contents of task object.
                el.className = 'item';
                el.innerHTML = task;
                container.appendChild(el);
            });
        }
    }

    function store () {
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Add stringifyed tasks object to storage
    }


    function getInitialTasks () {
        let stringified = localStorage.getItem('tasks');

        if (!stringified) {     // if no tasks in storage return empty object
            return {
                todo: [],
                inProgress: [],
                complete: [],
            }
        }

        return JSON.parse(stringified);
    }

})()

