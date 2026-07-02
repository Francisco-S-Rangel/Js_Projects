const form = document.getElementById('form');
const input = document.getElementById('input');
const assignments = document.querySelector('.assigments');
const LS_assignments = JSON.parse(localStorage.getItem('assignments'));

if(LS_assignments){
    LS_assignments.forEach((LS_assignments),()=>{
        Assigment(LS_assignments);
    });
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    Assigment();
});
function Assigment(LS_assignments){
    let The_assignment = input.value;
    if(LS_assignments){
        The_assignment = LS_assignments.text;
    }
    if(The_assignment){
        const content = document.createElement('li');
        if(LS_assignments && LS_assignments.completed){
            content.classList.add('completed');
        }
       
        content.innerHTML = The_assignment;
        
        content.addEventListener('click',()=>{
            content.classList.toggle('completed');
            updateLocalStorage();
        });
        content.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            content.remove();
            updateLocalStorage();
        });
        
        assignments.appendChild(content);
        input.value = "";
        // updateLocalStorage();
        updateLocalStorage();  
    }
}

function updateLocalStorage(){
    const assignmentsEl = document.querySelectorAll('li');
    const up_assignments = [];
    let aux=0;
    assignmentsEl.forEach((assignmentEl) => {
        if(aux===0){aux++;}
        else{
        up_assignments.push({
            text: assignmentEl.innerText,
            completed: assignmentEl.classList.contains('completed'),
        });}
    });

    localStorage.setItem("Assignment:", JSON.stringify(up_assignments));
}



