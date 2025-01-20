const inputLog = document.querySelector(".input-log");
const logContainer = document.querySelector(".log-box .container");


const createLog = () => {
    const log = document.createElement("div");
    log.classList.add("log");

    const dateInfo = document.createElement("span");
    dateInfo.id = "date-and-time";
    dateInfo.textContent = "January 20, 2025";

    const timeLine = document.createElement("div");
    timeLine.id = "time-line";
    const datePin = document.createElement("div");
    datePin.id = "date-pin";
    const line = document.createElement("div");
    line.id = "line";
    timeLine.appendChild(datePin);
    timeLine.appendChild(line);

    const content = document.createElement("div");
    content.id = "content";
    
    const contentText = document.createElement("p");
    contentText.textContent = `${inputLog.value}`;
    content.appendChild(contentText);

    log.appendChild(dateInfo);
    log.appendChild(timeLine);
    log.appendChild(content);
    
    logContainer.appendChild(log);
};

const displayError = () => {
    const errorBox = document.createElement("div");
            errorBox.classList.add("errorBox");
            
            const errorMessage = document.createElement("span");
            errorMessage.textContent = "please write your note.";

            const closeBtn = document.createElement("span");
            closeBtn.classList.add("btn-close");
            closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;


            errorBox.appendChild(errorMessage);
            errorBox.appendChild(closeBtn);

            document.body.appendChild(errorBox);

            setTimeout(() => {
                errorBox.remove();
            }, 5000);

            closeBtn.addEventListener("click", () => {
                errorBox.remove();
            });
};

inputLog.addEventListener("keypress", (e) =>{
    if(e.key === "Enter"){

        if(inputLog.value!==""){
            createLog();
            inputLog.value = "";
        }else{
            displayError();
        }
        
    }
})