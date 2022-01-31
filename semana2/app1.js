// Ocultar o moestrar div que contiene la lista
const hide = document.querySelector("#hideElements")
const listDiv = document.querySelector("#list")

//constantes para agregar elementos a la lista
const addItemInput =  document.querySelector("#addItem")
const addItemButton = document.querySelector("button#addItemButton")

//eliminar ultimo item
const removeItemButton = document.querySelector("button#removeItemButton")

//eliminar elemento seleccionado
const removeItem = document.querySelector("button#removeItem")

//obtener index of element in list
const list = document.querySelector("#listItems")
const items = list.getElementsByTagName("li")

// Añadir a la lista
function addItem(e){
    let li = document.createElement("li")
    li.textContent = addItemInput.value
    list.appendChild(li)
    addItemInput.value = ""
}

// Mostar y ocultar lista
hide.addEventListener("click", () => {
    if(listDiv.style.display == "none"){
        listDiv.style.display = "block"
        hide.textContent = "<<"
    } else {
        listDiv.style.display = "none"
        hide.textContent = ">>"
    }
})

// Agregar elementos a la lista
addItemButton.addEventListener("click", () => {
    addItem()
})

// Agregado por Alexis
// Agregar elementos cuando se presione enter
addItemInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter")
        addItem()
})

// Agregado por Néstor
// Eliminar ultimo elemento de la lista (Se refactorizó un poco)
removeItemButton.addEventListener("click", () => {
    let li = document.querySelector("li:last-child")
    list.removeChild(li);
})

// Seleccionar elemento de la lista
list.addEventListener("click", e => {
    if(e.target.tagName === 'LI'){
        for(const el of items){
            el.classList.remove("alert","alert-success")
        }
        e.target.classList.add("alert","alert-success")
    }
})

// Eliminar elemento seleccionado
removeItem.addEventListener("click", () => {
    let divAlert = document.createElement("div")
    let label = document.createElement("label")
    label.textContent = "Se elimino el elemento "
    divAlert.classList.add("alert","alert-danger")
    let selectedItem = list.querySelector("li.alert.alert-success")
    list.removeChild(selectedItem)
    divAlert.appendChild(label)
    listDiv.appendChild(divAlert)
})
