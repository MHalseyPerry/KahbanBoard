(function(){
    let counter = 0;
    let addButton = document.getElementById('add-button');
    let delButton = document.getElementById('del-button');

    addButton.addEventListener('click', addTask);
    delButton.addEventListener('click', delTask);

    function addTask(){
        let item = document.createElement("div");
        let parent = document.getElementById("add");
        let contents = prompt('Please enter the task name');
        counter++;
        item.setAttribute('class', 'item');
        item.setAttribute('id', counter);
        item.textContent = contents;
        console.log(counter);
        parent.appendChild(item);
    }

    function delTask(){
        let parent = document.getElementById("add");
        let item = document.getElementById(counter);
        if(counter>=1){
            parent.removeChild(item);
            counter--;
        } else {
            alert("No tasks to delete");
        }
    }
})()

