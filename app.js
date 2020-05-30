const addForm = document.querySelector('.add');
const list = document.querySelector('.todos'); //ul
const search = document.querySelector('.search input');


const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fa fa-trash delete"></i>
        </li>
        `;

    list.innerHTML += html;
    
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        // .length method goes truthy if input has at least 1 character.
        generateTemplate(todo);
        addForm.reset();
    }   
});

// DELETE
list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//SEARCH
const filterTodos = term => {

   Array.from(list.children)
    .filter( todo => !todo.textContent.toLowerCase().includes(term))
    .forEach( todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter( todo => todo.textContent.toLowerCase().includes(term))
    .forEach( todo => todo.classList.remove('filtered'));
};


search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
