(function(){
    let counter = 0;
    let parent = document.getElementById('add');
    let addButton = document.getElementById('add-button');
    let delButton = document.getElementById('del-button');

    addButton.addEventListener('click', addTask);
    delButton.addEventListener('click', delTask);

    function addTask(){
        let item = document.createElement("div");
        let contents = prompt('Please enter the task name');
        counter++;
        item.setAttribute('class', 'items');
        item.setAttribute('id', counter);
        item.textContent = contents;
        console.log(counter);
        parent.appendChild(item);
    }

})()

