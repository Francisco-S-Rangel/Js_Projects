const form = document.getElementById('form');
const input = document.getElementById('input');
const assignments = document.querySelector('.assigments');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    const The_assignment = input.value;

    if(The_assignment){
        const content = document.createElement('li');
       
        content.innerHTML = The_assignment;
        
        content.addEventListener('click',()=>{
            content.classList.toggle('completed');
        });
        content.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            content.remove();
        });
        
        assignments.appendChild(content);
        input.value = "";    
    }
});



