let table = document.querySelector('.tbody');
let task = document.querySelector('.btn');

let items = [];

let savePriority = document.querySelector('#savePriority');
let pasirinktasPrioritetas;
savePriority.addEventListener('click', ()=>{
    let select1 = document.querySelector('.form-select-1');
    pasirinktasPrioritetas.textContent = select1.value;
    pasirinktasPrioritetas.classList.add('Low');
    console.log(pasirinktasPrioritetas.textContent);
    if (pasirinktasPrioritetas.textContent == "Low"){
        pasirinktasPrioritetas.classList = "Low";
    }
    else if (pasirinktasPrioritetas.textContent == "Normal"){
        pasirinktasPrioritetas.classList = "Normal";
    }
    else if (pasirinktasPrioritetas.textContent == "High"){
        pasirinktasPrioritetas.classList = "High";
    }
    
})
task.addEventListener('click', ()=>{
    if(inputBox1.value === ''){
        alert("You must write new Task");
    }
    // if(exampleDataList.value === ''){
    //     alert("You must choose priority");
    // }
    else{
        let item = {

        }
        let row = document.createElement('tr');
//////////////////
        item.checkbox = false;
/////////////////
        let cell1 = document.createElement('td');
        let checkDiv = document.createElement('div');
        checkDiv.classList = "form-check";
        let checkInput = document.createElement('input');
        checkInput.classList = "form-check-input";
        checkInput.type = "checkbox";
        checkInput.setAttribute = ('id', "flexCheckDefault");
        let checklabel = document.createElement('label');
        checklabel.classList = "form-check-label";
        checklabel.setAttribute = ('for', "flexCheckDefault");
        checkDiv.appendChild(checkInput);
        checkDiv.appendChild(checklabel);
        cell1.appendChild(checkDiv);
        row.appendChild(cell1);
        const handleChange = (e) => {
            e.target.checked 
               ? cell2.classList.add('checked')
               : cell2.classList.remove('checked');
               saveData();////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          }
          
          cell1.addEventListener('change', handleChange);
//////////////////
        item.subject = inputBox1.value;
////////////////////////////
        let cell2 = document.createElement('td');
        cell2.textContent = inputBox1.value;
        row.appendChild(cell2);
        
        
        let cell3 = document.createElement('td');
        function getPriority() {
            selectElement = document.querySelector('.form-select');
            output = selectElement.value;
            return output;
        }
        cell3.textContent = getPriority();
        if (cell3.textContent == "Low"){
            cell3.classList = "Low";
        }
        else if (cell3.textContent == "Normal"){
            cell3.classList = "Normal";
        }
        else if (cell3.textContent == "High"){
            cell3.classList = "High";
        }
        cell3.addEventListener('dblclick', ()=>{
            pasirinktasPrioritetas = cell3
            const myModal = new bootstrap.Modal('#exampleModal');
            myModal.show();
            saveData();/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        })
        ////////////////////////////
        item.priority = document.querySelector('.form-select').value;
        /////////////////////////////
        row.appendChild(cell3);

        //////////////////////////
        item.dueDate = inputBox3.value;
        //////////////////////////
        let cell4 = document.createElement('td');
        cell4.textContent = inputBox3.value;
        row.appendChild(cell4);

        
        let cell5 = document.createElement('td');
        cell5.ondblclick = insertStatus;
        cell5.textContent = `New`;
        let status1;
        function insertStatus(){
            status1 = parseInt(prompt("Progress of work in percents", "0"), 10);
            if (status1 >= 0 && status1 <= 100) {
                if (status1 == 0) {
                    
                    cell5.textContent = `New`;
                    progressBar.style.width = `${status1}%`;
                    progressBar.textContent = `${status1} %`;
                }
                else if (status1 >=100){
                    cell5.textContent = `Complete`;
                    progressBar.style.width = `${status1}%`;
                    progressBar.textContent = `${status1} %`;
                }
                else {
                    cell5.textContent = `In Progress`;
                    progressBar.style.width = `${status1}%`;
                    progressBar.textContent = `${status1} %`;
                }   
            }
            else {
                alert('Progress value need to be between 0 and 100 %')
                ////////////////////////////////////
                item.statusItem = cell5.textContent;
                //////////////////////////////////
                /////////////////////////////////////////
                item.percentage = progressBar.textContent;
                ////////////////////////////////////////
                saveData();/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            }
        }
        ////////////////////////////////////
        item.statusItem = cell5.textContent;
        //////////////////////////////////
        row.appendChild(cell5);

        let cell6 = document.createElement('td');
        let progress = document.createElement('div');
        progress.classList = 'progress';
        progress.role = "progressbar";
        progress.setAttribute('aria-label', "Success example");
        progress.setAttribute('aria-valuenow', "25");
        progress.setAttribute('aria-valuemin', "0");
        progress.setAttribute('aria-valuemax', "100");
        let progressBar = document.createElement('div');
        progressBar.classList = "progress-bar bg-success";
        progressBar.style.width = `${0}%`;
        progressBar.textContent = `${0} %`;
        progress.appendChild(progressBar);
        cell6.appendChild(progress);
        /////////////////////////////////////////
        item.percentage = progressBar.textContent;
        ////////////////////////////////////////
        row.appendChild(cell6);

        let cell8 = document.createElement('td');
        cell3.addEventListener('dblclick', ()=>{
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();
            let hour = date.getHours();
            let minyte = date.getMinutes();
            cell8.textContent = `${day}/${month +1}/${year} ${hour}:${minyte}`;
            saveData();/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        })
        cell5.addEventListener('dblclick', ()=>{
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();
            let hour = date.getHours();
            let minyte = date.getMinutes();
            cell8.textContent = `${day}/${month +1}/${year} ${hour}:${minyte}`;
            saveData();////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        })
        //////////////////////////////////////
        item.modified = cell8.textContent;
        ////////////////////////////////////
        row.appendChild(cell8);

        let cell9 = document.createElement('td');
        let del = document.createElement('button');
        del.classList = "btn-close";
        del.type = "button";
        del.setAttribute('aria-label', "Close");
        cell9.appendChild(del);
        row.appendChild(cell9);
        cell9.addEventListener('click', ()=>{
            row.remove();
            saveData();////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        })
        //////////////////////////////////////
        item.del = cell9;
        ////////////////////////////////////

        table.appendChild(row);
        ///////////////////
        items.push(item);
        /////////////////////

        ///////////////////////
        function saveData() {
            localStorage.setItem('items', JSON.stringify(items));
        }
        localStorage.setItem('items', JSON.stringify(items));
        // saveData();
        ///////////////////////
        console.log(JSON.parse(localStorage.getItem('items')));


        // function displayTasks(){
        //     var taskList = document.querySelector('.tbody');
        //     taskList.innerHTML = "";
        //     var tasksReload = JSON.parse(localStorage.getItem('items')) || [];
        //     tasksReload.forEach(function displayTasks() {
        //         var row = taskList.insertRow();
        //         var cell1 = row.insertCell(0);
        //         var cell2 = row.insertCell(1);
        //         var cell3 = row.insertCell(2);
        //         var cell4 = row.insertCell(3);
        //         var cell5 = row.insertCell(4);
        //         var cell6 = row.insertCell(5);
        //         var cell7 = row.insertCell(6);
        //         var cell8 = row.insertCell(7);




        
        //         cell1.textContent = item.checkbox;
        //         cell2.textContent = task.subject;
        //         cell3.textContent = task.priority;
        //         cell4.textContent = task.dueDate;
        //         cell5.textContent = task.statusItem;
        //         cell6.textContent = task.percentage;
        //         cell7.textContent = task.modified;
        //         cell8.textContent = task.del;
        //     });
        // }
        
    }
    // displayTasks();
})