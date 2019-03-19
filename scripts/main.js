(function(){

    let counter = 0;
    let addButtons = [...document.getElementsByClassName('add-button')];
    addButtons.forEach(btn => btn.addEventListener('click', addTask));

    const containers = {
        todo: document.getElementById('todo'),
        inProgress: document.getElementById('in-progress'),
        complete: document.getElementById('complete'),
    };

    const tasks = getInitialTasks();

    render();

    function addTask (e) {
        const task = prompt('Please enter the task name');
        const type = e.target.dataset.type;
        tasks[type].push(task);

        render();
        store();
    }

    function render () {

        for (const [key, container] of Object.entries(containers)) {
            while (container.lastChild) {
                container.removeChild(container.lastChild);
            }

            tasks[key].forEach(task => {
                const el = document.createElement('div');
                el.className = 'item';

                el.innerHTML = task;
                container.appendChild(el);
            });
        }
    }

    function store () {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function getInitialTasks () {
        let stringified = localStorage.getItem('tasks');

        if (!stringified) {
            return {
                todo: [],
                inProgress: [],
                complete: [],
            }
        }

        return JSON.parse(stringified);
    }

})()

