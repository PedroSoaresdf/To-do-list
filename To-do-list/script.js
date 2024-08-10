document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') {
        alert('Por favor, adicione uma tarefa.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(taskSpan);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    document.getElementById('new-task').value = '';
});

// Estilizando tarefa completada
document.querySelectorAll('li span').forEach(function(task) {
    task.addEventListener('click', function() {
        this.classList.toggle('completed');
    });
});
