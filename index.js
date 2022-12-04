window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input =document.querySelector('#new-task-input');
    const user =document.querySelector('#new-user-input');
    const dueDate =document.querySelector('#date');
    const duration =document.querySelector('#duration');
    const selectedValue = document.getElementById("priority").value;
    const list_el =document.querySelector(('#tasks'));

    

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const getPriority = document.getElementById('priority').selectedOptions[0].value;

        const task = input.value;

        if(!task){
            alert('Please fill out a task.');
            return;
        }

        const users = user.value;

        if(!users){
            alert('Please fill out the user.');
            return;
        }

        const date = dueDate.value;

        if(!date){
            alert('Please fill out the due date.');
            return;
        }

        const period = duration.value;

        if(!period){
            alert('Please fill out the duration of the task.');
            return;
        }

        
        // 
        
        function priorities(){
        
            if(getPriority=="high"){
              const getPriority = "High Priority";
              return getPriority;
    
            }
            else if(getPriority=="medium"){
              const getPriority = "Medium Priority";
              return getPriority;
            }
            else if(getPriority=="low"){
              const getPriority = "Low Priority";
              return getPriority;
            }
            else{
                const getPriority = "Not Sure";
                return getPriority;
              }

        }

        function colorClass(){
        
            if(getPriority=="high"){
                task_input_el.classList.add('red');
                return task_input_el;
    
            }
            else if(getPriority=="medium"){
                task_input_el.classList.add('yellow');
                return task_input_el;
            }
            else if(getPriority=="low"){
                task_input_el.classList.add('green');
                return task_input_el;
            }
            else{
                task_input_el.classList.add('text');
                return task_input_el;
              }
        }

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        colorClass();
        // task_input_el.classList.add('text');
        task_input_el.type = "text";
        task_input_el.value = users + " -- " + task + ";       DUE ON: " + date + ";       DURATION: " + period + ";       PRIORITY: " + priorities();
        task_input_el.setAttribute('readonly', 'readonly');
        

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = 'Delete';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = ""; 
        user.value = "";
        dueDate.value = "";
        duration.value = "";
        selectedValue.value = "";

        task_edit_el.addEventListener('click', () => {
            if(task_edit_el.innerText.toLowerCase() == 'edit'){
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                task_edit_el.innerText = 'Save';
            }
            else{
                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_el.innerText = 'Edit';
            }
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });

        // const form = document.getElementById('task');

        // form.addEventListener('submit', callbackFunction);
        // function callbackFunction(event) {
        //     event.preventDefault();
        //     const myFormData = new FormData(event.target);

        //     const formDataObj = Object.fromEntries(myFormData.entries());
        //     console.log(formDataObj);
        // }


    });


});