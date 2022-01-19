const adicionarBtn = document.querySelector(".btn_criar");
const main = document.querySelector(".tabel");

adicionarBtn.addEventListener('click',()=>{
    newTr();
});
function newTr(){
    const novoTr = document.createElement('tr');
    novoTr.classList.add('newtr')

    novoTr.innerHTML = `
    <td><textarea class="text"></textarea></td>
    <td><textarea class="text2"></textarea></td>
    <td><textarea class="text3"></textarea></td>
    <td>
    <button class="editar"><i class="fas fa-edit"></i></button>
    <button class="deletar"><i class="fas fa-trash-alt"></i></button>
    </td>
    `;

    const deleteBtn = novoTr.querySelector('.deletar');
    const editBtn = novoTr.querySelector('.editar');
    const text = novoTr.querySelector('.text');
    const text2 = novoTr.querySelector('.text2');
    const text3 = novoTr.querySelector('.text3');
    
    // Editar o paragrafo da tabela
    editBtn.addEventListener('click',()=>{
         
        if(text.disabled===false){
            text.disabled=true;
            text2.disabled=true;
            text3.disabled=true;
        }else{
            text.disabled=false;
            text2.disabled=false;
            text3.disabled=false;
        }

    });

    deleteBtn.addEventListener('click',()=>{
        novoTr.remove();
    });
  
    main.appendChild(novoTr);
}
