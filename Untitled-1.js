document.getElementById("send").onclick = function () {
    word = document.getElementById("word").value // получаю значение из инпута 
    document.getElementById("word").value = "" // очищаю инпут
    String(word) // делаю из инпута строку, хотя она и так строка, но не суть 
    mas = word.split("") //делаю из слова массив
    let makeDiv = document.createElement("div") // создаю элеемент Div в документе
    makeDiv.className = "slovo" // присваеваю ему класс
    for (let index = 0; index < word.length; index++) {
        let bukvi = document.createElement("p")
        bukvi.style.paddingRight = "10px" // CSS что бы "_" стояли отдельно, без этого выглядит так _______
        bukvi.innerHTML = "_"
        makeDiv.append(bukvi)
    } // через цикл, создаю теги <p> с "_" по кол.ву букв в слове (можно доработать, что бы если кто то пробел нажал траблов не было) 
    
    elements2 = makeDiv.querySelectorAll('p') // получаю все P из дива который мы создали
    document.body.append(makeDiv) // добавляю DIV в body
    
    //кнопка для отправки буквы
    answer = document.createElement("input") // создаю эллемент Input 
    document.body.append(answer) // добавляю его в body
    answer_but = document.createElement("button") // создаю эллемент кнопкку
    answer_but.innerHTML = "Отправить букву" // даю ей определенный текст
    answer_but.id = "ans" // выдаю ID
    answer_but.setAttribute ("onclick","send()") // добавляю атрибут ONCLICK, и прописываю какая функция запуститься при клике 
    document.body.append(answer_but) //добавляю эллемент в body


    //кнопка начать занаво, копия прошлой
    re_but = document.createElement("button")
    re_but.innerHTML = "Начать занаво"
    re_but.id = "re"
    re_but.setAttribute ("onclick","re()")
    re_but.style.display = "block"
    re_but.style.marginTop = "30px"
    document.body.append(re_but)
    
    //Css тут
    makeDiv.style.display = "flex"
    elements2.style.paddingRight = "15px"
}

function send() {
    count = mas.indexOf(answer.value)
    elements2[count].innerHTML=answer.value
    delete mas[count]
    send()
} // функция находит номер буквы в массиве -> затем в массиве из P меняет значение того самого номера -> удаляет этот номер из массива, но его длину оставляет прежнюю -> 
  // заного запускает себя (для того, если в слове есть 2 одинаковых и более букв они сразу появились в ответе)

function re(){
    location.reload()
} // функция перезапускает страницу

// 1. написать кол-во попыток, понять, когда человек ошибся
// 2. сделать, кол-во жизней половину от длины слова, если слово не делится целиком, то в пользу играющего 
