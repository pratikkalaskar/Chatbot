const box = document.querySelector(".box");
const input = document.querySelector(".input input");
const send = document.querySelector(".input button");
const ans = document.querySelector("#pdf1")

const responses = {
    greet: [
        "Hello!",
        "Hi! How may I help you?",
    ],
    leave: [
        "Good Bye!",
        "Bye! Have a Nice day!",
    ],
    Default: [
        "I am not a Human, so don't expect too much from my side, please!",
    ],
    xyz: [
        "Which notes do you require?",
        "Unit 1 note is available in PDF format",
    ],
    unit1: [
        "Chapter1.pdf",
    ],
    unit2: [
        "Chapter2.pdf",
    ],
    unit3: [
        "Chapter3.pdf",
    ],
    unit4: [
        "Chapter4.pdf",
    ]

};

send.addEventListener("click", () => {
    let flag = false;
    if (input.value !== "") {
        const msg = document.createElement("div");
        msg.classList.add("msg", "user-text");
        msg.innerHTML = `<div class="text">${input.value}</div>`;
        box.appendChild(msg);

        const inputText = input.value.toLowerCase();
        console.log("ggg",inputText);
        let intent = "Default";
        if (inputText.includes("hello") || inputText.includes("hi")) {
            intent = "greet";
        } else if (inputText.includes("bye") || inputText.includes("goodbye")) {
            intent = "leave";
        } else if (inputText.includes("unit1") || inputText.includes("notes1")) {
            intent = "unit1";
            
            console.log("hhhhhh",ans);
            flag = true;
        }else if (inputText.includes("unit2") || inputText.includes("notes2")) {
            intent = "unit2";
            
            console.log("hhhhhh",ans);
            flag = true;
        }
        else if (inputText.includes("unit3") || inputText.includes("notes3")) {
            intent = "unit3";
            
            console.log("hhhhhh",ans);
            flag = true;
        }
        else if (inputText.includes("unit4") || inputText.includes("notes4")) {
            intent = "unit4";
            
            console.log("hhhhhh",ans);
            flag = true;
        }

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * responses[intent].length);
            console.log('Inside randomIndex ',randomIndex);
            const responseText = responses[intent][randomIndex];
            console.log('Inside responseText', responseText);
            const botmsg = document.createElement('div');
            botmsg.classList.add("msg", "botmsg");
            if(flag == true){
                botmsg.innerHTML = `<div class="text"><a href=${responseText} target="_blank">${responseText}</a></div>`;
            }else{
                botmsg.innerHTML = `<div class="text">${responseText}</div>`;
            }
            box.appendChild(botmsg);
            box.scrollTop = box.scrollHeight;
            if(flag == true){
                console.log('Inside True');
                setPdfLink(ans);
            }else{
                console.log('Inside False');
                flag = false;
            }
        }, 1000);
    }
});

// function setPdfLink(key) {
//     console.log('Inside method');
//     const pdfUrl = pdfLinks[key];
//     const pdfLink = document.getElementById("pdf1"); // Assume the link has id="pdf"
//     if (pdfUrl && pdfLink) {
//         pdfLink.href = pdfUrl;
//         pdfLink.textContent = `Click here to download ${pdfUrl}`;
//         pdfLink.style.display = 'inline'; // Make sure the link is visible
//         console.log(`PDF link updated to: ${pdfUrl}`);
//     } else {
//         console.error("Invalid key provided or PDF link not found.");
//     }
// }
