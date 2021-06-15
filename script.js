// var searchButton = document.getElementById('searchButton')
// var inputText = document.getElementById('inputText')
// var output = document.getElementById('output')
// var badgeCount = document.getElementById('count')
// function addText(){
//     let text = inputText.value
//     console.log(text)
//     let newButton = document.createElement('button')
//     newButton.classList.add('btn')
//     newButton.classList.add('btn-outline-primary')
//     newButton.classList.add('m-2')
//     newButton.setAttribute('type','button')
//     newButton.innerText = text
//     output.appendChild(newButton)
//     badgeCount.innerText = output.children.length
// }

// searchButton.addEventListener('click',addText)
// inputText.addEventListener('blur',addText)

// var inputName = document.getElementById('name')
// var inputUsername = document.getElementById('username')
// var inputNamePrefix = document.getElementById('namePrefix')
// var outputTableBody = document.getElementById('outputTableBody')
// var submitData = document.getElementById('submitData')

// function addDataToTable(index){
//     let row = document.createElement('tr')
//     let cell = document.createElement('th')
//     cell.setAttribute('score',row)
//     cell.innerHTML = index
//     row.appendChild(cell)
//     cell = document.createElement('td')
//     cell.innerHTML = inputName.value
//     row.appendChild(cell)
//     cell = document.createElement('td')
//     cell.innerHTML = inputUsername.value
//     row.appendChild(cell)
//     cell = document.createElement('td')
//     cell.innerHTML = inputNamePrefix.options[inputNamePrefix.selectedIndex].text
//     row.appendChild(cell)
//     outputTableBody.appendChild(row)
// }
// var index = 1
// submitData.addEventListener('click',(event)=>{

//     addDataToTable(index++)

// })


//document.getElementById('output').innerText = student;

/*function addStudentData(student){
    const output = document.getElementById('output')
    
    let row = document.createElement('div')
    row.classList.add("row")
    let columnName = document.createElement('div')
    columnName.classList.add("col-1")
    columnName.classList.add("offset-1")
    columnName.innerHTML = 'ชื่อ'
    let columnvalue = document.createElement('div')
    columnvalue = document.createElement('row')
    columnvalue.classList.add("col")
    columnvalue.innerHTML = student.name;

    row = document.createElement('div')
    row.classList.add("row")
    row = document.createElement('div')
    row.classList.add("row")
    let columncode = document.createElement('div')
    columncode.classList.add("col-1")
    columncode.classList.add("offset-1")
    columncode.innerHTML = 'รหัส'
    let columncodevalue = document.createElement('div')
    columncodevalue = document.createElement('row')
    columncodevalue.classList.add("col")
    columncodevalue.innerHTML = student.username;

    row = document.createElement('div')
    row.classList.add("row")
    row = document.createElement('div')
    row.classList.add("row")
    let columngen = document.createElement('div')
    columngen.classList.add("col-1")
    columngen.classList.add("offset-1")
    columngen.innerHTML = 'เพศ'
    let columngenvalue = document.createElement('div')
    columngenvalue = document.createElement('row')
    columngenvalue.classList.add("col")
    columngenvalue.innerHTML = student.gender;

    row.appendChild(columnName)
    row.appendChild(columnvalue)
    output.appendChild(row)
    row.appendChild(columncode)
    row.appendChild(columncodevalue)
    output.appendChild(row)
    row.appendChild(columngen)
    row.appendChild(columngenvalue)
    output.appendChild(row)
}

window.addEventListener("load",function(){
    addStudentData(student)
})*/

var student = {};
student.name = 'คุณลุง'
student.username = 'a@b.com'
student.gender = 'ชาย'

var student2 = {};
student2.name = 'Sigmund'
student2.username = 'a@b.com'
student2.gender = 'ศาสดา'

var students = [
    student, student2, {
        name: 'สมรัก'
        , username: 'a@b.com'
        , gender: 'ชาย'
    }
]

console.log(students)

function addStudenttotable(index, student) {
    const TableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.setAttribute('score', 'row')
    cell.innerHTML = index
    row.appendChild(cell)

    cell = document.createElement('td')
    cell.innerHTML = student.name
    row.appendChild(cell)

    cell = document.createElement('td')
    let img = document.createElement('img')
    img.setAttribute( 'src' , student.imageLink)
    cell.appendChild(img)
    row.appendChild(cell)

    cell = document.createElement('td')
    cell.innerHTML = student.gender
    row.appendChild(cell)
    TableBody.appendChild(row)
}

/*window.addEventListener("load", function () {
    addStudentList(students)
})*/

function addStudentList(studentList) {
    let counter = 1
    for (student of studentList) {
        addStudenttotable(counter++, student)
    }
}

function onLoad() {
    fetch('asset/students2.json').then(response => {
        return response.json()
    })
        .then(data => {
            let students = data
            addStudentList(students)

        })
}