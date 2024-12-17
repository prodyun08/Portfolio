var audio = new Audio('../assets/images/whatsapp_notification.mp3');
var contactString = "<div class='social'> <a target='_blank' href='https://www.instagram.com/prodyun08/'> <div class='socialItem' id='call'><img class='socialItemI' src='../assets/images/instagram.svg'/><label class='number'></label></div> </a><a target='_blank' href='mailto:prodyun.jobs@outlook.com'> <div class='socialItem' id='mail'><img class='socialItemI' src='../assets/images/gmail.svg'/><label class='number'></label></div> </a><a target='_blank' href='https://github.com/prodyun08/'> <div class='socialItem' id='mail'><img class='socialItemI' src='../assets/images/github.svg'/><label class='number'></label></div> </a><a target='_blank' href='https://www.linkedin.com/in/prodyun/'> <div class='socialItem' id='mail'><img class='socialItemI' src='../assets/images/linkedin.svg'/><label class='number'></label></div> </a></div>";
var resumeString = "<img src='../assets/images/resume_thumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='../assets/images/pdf.png'><label>Prodyun_Biswas_Resume.pdf</label></div><a href='../assets/images/prodyun_resume.pdf' download='Prodyun_Biswas_Resume.pdf'><img class='download' src='../assets/images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721955.016576722!2d85.2088500595602!3d24.35618532502861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa16ff1397e887%3A0x71543a3dc3e7a20a!2sWest%20Bengal!5e0!3m2!1sen!2sin!4v1726849816856!5m2!1sen!2sin' width='600' height='450' style='border:0;' allowfullscreen='''' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe></div><label class='add'><address>Kolkata<br>West Bengal, INDIA 741101</address>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}



function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    var name="";
    if(inputText.toLowerCase().includes("my name is")){
        name=inputText.substring(inputText.indexOf("is")+2);
        if(name.toLowerCase().includes("prodyun")){
            sendTextMessage("Ohh! That's my name too");
            
        }
        inputText="input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Prodyun Biswas</a>.</span><br><br>I am a Civil Engineering student at <span class='bold'>Babasaheb Ambedkar Government Polytechnic 👨🏻‍💻📚</span><br><br>If anyone knows which command is needed, they can type<a class='alink'> command</a>.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            setTimeout(() => {
                sendTextMessage("Enter a command:");
            },3000);                                                                                                          
            break;
            
        

        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;

            case "address":
            sendTextMessage(addressString);
            break;

        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing Diploma degree in Civil Engineering.<br><br>I can comfortably to this work :<br><span class='bold'>AutoCAD<br>Revit<br>Excel<br>Word<br>Staad Pro<br>Problem-solving<br>Building Information Modeling (BIM)<br>Attention to detail</span><br><br>I am also known little bits Programming Language :<span class='bold'><br>Python<br>Javascript</span><br>");
            break;

        case "education":
            sendTextMessage("I am currently pusuing diploma degree in Civil Engineering from Babasaheb Ambedkar Government Polytechnic<br>Passing Year : 2025<br><br>Passing Year:2019<br>Result:61%<br><br>I have completed my Secondary school from local school known as Shibpur J.K.S. Hight School<br>Passing Year:2019");
            break;
        
        case "name":
            sendTextMessage("Hi my name is Prodyun Biswas");
            break;
        
        case "clear":
            clearChat();
            break;

        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? So you Can check my Website. <br><div class='social'> <a target='_blank' href='https://prodyun.me/'> <div class='socialItem' id='call'><img class='socialItemI' src='../assets/images/website.svg'/><label class='number'></label></div> </a></div>");
            break;
        case "time":
            var date = new Date();
            sendTextMessage("Current time is " + date.getHours() + ":" + date.getMinutes()+ ":" + date.getSeconds());
            break;

        case "date":
            var date = new Date();
            sendTextMessage("Current date is " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            break;
        case "day","dayname":
            var day = new Date().toLocaleString('en-us', { weekday: 'long' });  // Get full day name (e.g., Monday)
            sendTextMessage("Today is " + day);
            break;

        case "hai":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "hello":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        
        case "hi":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        
        case "hey":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
       

        case "prodyun":
            sendTextMessage("Yes, that's me");
            break;
        case "prodyun":
            sendTextMessage("Yes, that's me");
            break;
        case "hi prodyun":
            sendTextMessage("Yes, that's me");
            break;
        
        case "website":
            sendTextMessage("You can check my portfolio website here <div class='social'> <a target='_blank' href='https://prodyun.me/'> <div class='socialItem' id='call'><img class='socialItemI' src='../assets/images/website.svg'/><label class='number'></label></div> </a></div>");
            break;
            case "portfolio":
                sendTextMessage("You can check my portfolio website here <div class='social'> <a target='_blank' href='https://prodyun.me/'> <div class='socialItem' id='call'><img class='socialItemI' src='../assets/images/website.svg'/><label class='number'></label></div> </a></div>");
                break;
                case "site":
                    sendTextMessage("You can check my portfolio website here <div class='social'> <a target='_blank' href='https://prodyun.me/'> <div class='socialItem' id='call'><img class='socialItemI' src='../assets/images/website.svg'/><label class='number'></label></div> </a></div>");
                    break;
        case "blog":
            sendTextMessage("You can check my blog here <div class='social'> <a target='_blank' href='https://prodyun.me/pages/blog/'> <div class='socialItem' id='call'><img class='socialItemI' src='../assets/images/blog.svg'/><label class='number'></label></div> </a></div>");
            break;
        
        case "github":
            sendTextMessage("You can check my github here <div class='social'> <a target='_blank' href='https://github.com/prodyun08'> <div class='socialItem' id='call'><img class='socialItemI' src='../assets/images/github.svg'/><label class='number'></label></div> </a></div>");
            break;

        case "linkedin":
            sendTextMessage("You can check my linkedin here <div class='social'> <a target='_blank' href='https://www.linkedin.com/in/prodyun/'> <div class='socialItem' id='call'><img class='socialItemI' src='../assets/images/linkedin.svg'/><label class='number'></label></div> </a></div>");
            break;

            case "email":
            sendTextMessage("here my email id <div class='social'> <a target='_blank' href='https://www.linkedin.com/in/prodyun/'> <div class='socialItem' id='call'><img class='socialItemI' src='../assets/images/gmail.svg'/><label class='number'></label></div> </a></div>");
            break;
        case "certificate":
                sendTextMessage("If you want to check my certificate <div class='social'> <a target='_blank' href='https://drive.google.com/drive/folders/10cSJXwKUdkeAU17wBxVHO6L3fWWbXWcW?usp=sharing'> <div class='socialItem' id='call'><img class='socialItemI' src='../assets/images/certificate.svg'/><label class='number'></label></div> </a></div>");
                break;
        case "friends":
        case "friend":
            sendTextMessage("I am always ready to make new friends");
            break;
        case "thanks","thank","thank you":
            sendTextMessage("Most Welcome. Happy to help");
            break;
        case "ok":
            sendTextMessage("Thanks You. Happy to help");
            break;
        
        case "command":
        case "/command":
        case "commands":
            sendTextMessage("Available commands:<br> <span class='sk'> <br> 1.intro <br> 2.help <br> 3. resume <br> 4. skills <br> 5. address <br> 6. projects <br> 7. education <br> 8. contact <br> 9. portfolio/website <br> 10. email <br> 11. linkedin <br> 12. github <br> 13. clear <br> 14. thanks <br> 15. certificate <br> 16. clear</span>")
            break;
        case "bye":
            sendTextMessage("Thanks You. Happy to help. See you soon");
            setTimeout(() => {
                sendTextMessage("If you exit chatbot, it will clear conversation. just click close button what you see in top.");
            },2000);
            break;
            case "thanks":
                sendTextMessage("Thanks You. Happy to help. See you soon");
                setTimeout(() => {
                    sendTextMessage("If you exit chatbot, it will clear conversation. just click close button what you see in top.");
                },2000);
                break;
        case "input":
            setTimeout(()=>{
                //sendTextMessage("What a coincidence!");
                sendTextMessage("Hello "+name+"! How are you?");
            },2000);
            
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}




function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}

function closeTab() {
    window.close();
  }
