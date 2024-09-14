document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput').value;
    let taskDate = document.getElementById('taskDate').value;
    
    if (taskInput === '' || taskDate === '') {
        alert('Please enter a task and a date');
        return;
    }
    
    let taskList = document.getElementById('taskList');

    let li = document.createElement('li');
    let taskText = document.createElement('span');
    taskText.textContent = `${taskInput} (Due: ${taskDate})`;

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit');
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');

    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'Mark Complete';
    completeBtn.classList.add('complete');

    li.appendChild(taskText);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li);

    document.getElementById('taskInput').value = '';
    document.getElementById('taskDate').value = '';

    completeBtn.addEventListener('click', function() {
        taskText.classList.toggle('completed');
    });

    editBtn.addEventListener('click', function() {
        let newTask = prompt('Edit your task', taskText.textContent.split(' (Due: ')[0]);
        let newDate = prompt('Edit the due date', taskDate);
        if (newTask && newDate) {
            taskText.textContent = `${newTask} (Due: ${newDate})`;
        }
    });

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
});

// Toggle dark/light mode
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});
