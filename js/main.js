const inputLog = document.querySelector(".input-log");
const toolBox = document.querySelector(".toolBox");
const btnTools = document.querySelector(".btn-tools");
const inputDate = document.querySelector(".input-date");
const logContainer = document.querySelector(".log-box .container");


const createLog = () => {
    const log = document.createElement("div");
    log.classList.add("log");

    const dateInfo = document.createElement("span");
    dateInfo.id = "date-and-time";

    convertDate(dateInfo);

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

const displayError = (message) => {
    const errorBox = document.createElement("div");
            errorBox.classList.add("errorBox");
            
            const errorMessage = document.createElement("span");
            errorMessage.textContent = `${message}`;

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

const convertDate = (dateInfo) => {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    if(!inputDate.value){
       dateInfo.textContent = `
        ${formattedDate}
       `
    }else{
        const selectedDate = new Date(inputDate.value);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = selectedDate.toLocaleDateString('en-US', options); 
        dateInfo.textContent = `${formattedDate}`  
    };
};

inputLog.addEventListener("keypress", (e) =>{
    if(e.key === "Enter"){

        if(inputLog.value!==""){
            if(inputLog.value.length > 200){
                displayError("You exceeded 200 chars!");
            }else{
                createLog();
            }
            inputLog.value = "";
        }else{
            displayError("Please write your log.");
        }
        
    }
});

btnTools.addEventListener("click", () => {
    toolBox.classList.replace("closed-toolBox","opened-toolBox");
    const toolsContainer = document.createElement("div");
    toolsContainer.classList.add("tools-container");

    const btnClose = document.createElement("span");
    btnClose.classList.add("btn-close-two");
    btnClose.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    btnClose.addEventListener("click", () => {
        toolsContainer.remove();
        toolBox.classList.replace("opened-toolBox", "closed-toolBox");
        btnClose.replaceWith(btnTools);
    });
    btnTools.replaceWith(btnClose);
    toolBox.appendChild(toolsContainer);
    toolBox.insertBefore(toolsContainer, btnClose);
});