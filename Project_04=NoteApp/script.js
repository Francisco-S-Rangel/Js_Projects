const addnoteBtn = document.querySelector('.add');
const notes = JSON.parse(localStorage.getItem("notes"));

if(notes){
    notes.forEach(note =>{
        newNote(note);
    });
}

function newNote(text=""){
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = ` 
    <div class="notes">
    <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main hidden"></div>
    <textarea></textarea>
    </div>`;

const editBtn = note.querySelector('.edit');
const deleteBtn = note.querySelector('.delete');
const main = note.querySelector(".main");
const textArea = note.querySelector('textarea');

textArea.value = text;
main.innerHTML = marked(text);

editBtn.addEventListener('click',()=>{
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
});
textArea.addEventListener('input',(e)=>{
    const { value } = e.target;

    main.innerHTML = marked(value); 
    
    updateLocalStorage();
});
deleteBtn.addEventListener('click',()=>{
    note.remove();
});
    document.body.appendChild(note);
}

addnoteBtn.addEventListener('click',()=>{
    newNote();
});
function updateLocalStorage(){
    const notesText = document.querySelectorAll('textarea');

    const all_notes = [];
    notesText.forEach(note =>{
        all_notes.push(note.value);
    });

    localStorage.setItem('all+notes', JSON.stringify(all_notes));
}