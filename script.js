const title = document.getElementById("title");

const nameField = document.getElementById("username");
const display = document.getElementById("display-name");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");

let username = localStorage.getItem("username");
if (username) {
    title.innerHTML = "Welcome, " + username + "!"
    display.innerHTML = "Hello " + username + ".";
    clearBtn.removeAttribute("disabled");
    
} else {
    display.innerHTML = "No name saved.";
    clearBtn.setAttribute("disabled", "");
}

function saveName() {
    
    if (nameField.value != "") {
        console.log("saveName triggered");
        localStorage.setItem("username", nameField.value);
        display.innerHTML = "Saved name " + nameField.value + " to local storage.";
        clearBtn.removeAttribute("disabled");
    }
}

function clearName() {
    console.log("clearName triggered");
    localStorage.removeItem("username");
    display.innerHTML = "";
    clearBtn.setAttribute("disabled", "");
}

saveBtn.addEventListener("click", saveName);
clearBtn.addEventListener("click", clearName);