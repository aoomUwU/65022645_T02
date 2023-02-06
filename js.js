function FocusBox(NameText){
    NameText.style.background = "yellow";
}
function BlurBox(NameText){
    NameText.style.background = "white";
}

function submitForm() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var birth = document.getElementById("birth").value;
    var language = document.getElementById("language").value;
    var result = document.getElementById("result");
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }

    if (!name) {
        var error = document.createElement("h1");
        error.innerHTML = "insert name";
        error.style.color = "red";
        result.appendChild(error);
    }
    if (!surname) {
        var error = document.createElement("h1");
        error.innerHTML = "insert surname";
        error.style.color = "red";
        result.appendChild(error);
    }
    if (!birth) {
        var error = document.createElement("h1");
        error.innerHTML = "insert birth date";
        error.style.color = "red";
        result.appendChild(error);
    }
    if (!language) {
        var error = document.createElement("h1");
        error.innerHTML = "Select Language";
        error.style.color = "red";
        result.appendChild(error);

    }
    if (language && surname && birth && name) {
        var result = document.createElement("h1");
        result.innerHTML = "" + name + "," + surname + "," + birth + "," + language;
        result.style.color = "green";
        document.getElementById("result").appendChild(result);
    }
}
