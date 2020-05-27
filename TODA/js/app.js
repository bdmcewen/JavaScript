const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

let LIST = [];
let id;

function addToDo(toDo, id, done, trash) {

    if (trash) {
        return;
    }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";


    const text = '<li class="item">\n' +
        '    <i class="fa ${DONE} complete" job="complete" id = "${id}"></i>\n' +
        '    <p class="text ${LINE}"> ${toDo}\n' +
        '\n' +
        '    </p>\n' +
        '    <i class="de fa fa-trash-o" job="delete" id="${id}"></i>\n' +
        '</li>'

    const position = "beforeend";

    list.insertAdjacentHTML(position, text);
}

addToDo("Drink Coffee");

function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = !LIST[element.id].done;
}

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}


document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        const toDo = input.value;
        if (toDo) {
            addToDo(toDo, id, false, false);

            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });
        }


        input.value = "";
        id++;
    }
});

list.addEventListener("click", function (event) {
    let element = event.target; //<i class ="de fa fa-trash-o" job = "delete" id = "0></i>
    const elementJob = event.target.attributes.job.value; // delete or complete
    if(elementJob === "complete"){
        completeToDo(element);
    }else if (element === "delete"){
        removeToDo(element);
    }

});




