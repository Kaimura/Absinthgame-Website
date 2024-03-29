if(window.localStorage.getItem("ageGate", "true") == "true") {
    window.location.href = "en/index.html";
}

document.getElementById("Enter").addEventListener("click", (event) => {
    event.preventDefault();
    if (/^\d+$/.test(document.getElementById("yearText").value) == true && /^\d+$/.test(document.getElementById("monthText").value) == true && /^\d+$/.test(document.getElementById("dayText").value) == true) {
       var age = getAge(new Date(document.getElementById("yearText").value, document.getElementById("monthText").value, document.getElementById("dayText").value));

       if(age >= 16) {
            window.localStorage.setItem("ageGate", "true");
            window.location.href = "en/index.html";
       }
       else {
           if(document.getElementById("underage") == null) {
                var underageText = document.createElement("div");
                underageText.id = "underage";
                underageText.innerText = "Unfortunately you are too young to proceed!";
                underageText.style.color = "red";
                document.getElementById("ageGate").appendChild(underageText);
                window.localStorage.setItem("ageGate", "false");
           }
       }
    }
    else {
        if(document.getElementById("warning") == null) {
            var warningText = document.createElement("div");
            warningText.id = "warning";
            warningText.innerText = "Please enter a valid date!";
            warningText.style.color = "red";
            document.getElementById("ageGate").appendChild(warningText);
        }
    }
});

function getAge(dateObject) {
    var today = new Date();
    // var birthDate = new Date(dateObject);
    var age = today.getFullYear() - dateObject.getFullYear();
    var m = today.getMonth() - dateObject.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dateObject.getDate())) {
        age--;
    }
    return age;
}