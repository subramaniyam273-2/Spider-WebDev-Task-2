var questions=[];

questions.push({
    question:"The distinguishing feature of a coronavirus is its:",
    options:["Size","Mobility","Shape","Deadliness"],
    answer:2,
    answered:false,
    userAnswer:-1,
    image:"./images/corona.jpg"
});

questions.push({
    question:"A typical coronavirus infection:",
    options:["Is extremely dangerous","Has mild symptoms","Cannot spread to humans","Is resistant to hand washing"],
    answer:1,
    answered:false,
    userAnswer:-1,
    image:"./images/danger.jpg"
});
questions.push({
    question:"Coronavirus infections are likely to be more serious for:",
    options:["Teens","Active adults","Frequent travelers","People with weakened immune systems"],
    answer:3,
    answered:false,
    userAnswer:-1,
    image:"./images/ppl.jpg"
});
questions.push({
    question:"What does it mean when a city is quarantined during a virus outbreak?",
    options:["Everyone in the city is infected","No one can enter or leave the city","The city’s population is immune to the virus","Doctors in the city are developing a cure"],
    answer:1,
    answered:false,
    userAnswer:-1,
    image:"./images/quar.png"
});
questions.push({
    question:"Which practice prevents the spread of germs?",
    options:["Washing your hands often","Blowing your nose","Reusing the same tissue","Coughing into your hand"],
    answer:0,
    answered:false,
    userAnswer:-1,
    image:"./images/covid.jpg"
});
questions.push({
    question:"The most reliable source of information about virus outbreaks is:",
    options:["News headlines","Social media","Your peers","The World Health Organization"],
    answer:3,
    answered:false,
    userAnswer:-1,
    image:"./images/info.jpg"
});
questions.push({
    question:"What is the official name of the virus as designated by the World Health Organization (WHO)?",
    options:["Sars-CoV-2","Covid-19","Wuhan Flu","H3N2 Virus"],
    answer:0,
    answered:false,
    userAnswer:-1,
    image:"./images/qn.jpg"
});
questions.push({
    question:"About what percentage of infected people recover without needing hospital treatment according to the World Health Organisation website?",
    options:["60%","70%","80%","90%"],
    answer:2,
    answered:false,
    userAnswer:-1,
    image:"./images/recover.jpg"
});
questions.push({
    question:"Which of these is NOT listed by the WHO as a symptom of coronavirus?",
    options:["Fever","Dry Cough","Blurred vision","Nasal Congestion"],
    answer:2,
    answered:false,
    userAnswer:-1,
    image:"./images/symptom.jpg"
});
questions.push({
    question:"Can washing your hands protect you from COVID-19? ",
    options:["Yes – but only if you use a strong bleach","Yes – normal soap and water or hand sanitizer is enough","No – Washing your hands doesn’t stop COVID-19"],
    answer:1,
    answered:false,
    userAnswer:-1,
    image:"./images/wash.jpg"
});


console.log(questions);

let mainContainer=document.querySelector(".mainContainer");
let actionsBox=document.querySelector(".actionsBox");
let scoreBox=document.querySelector(".scoreBox");
let nextButton=document.querySelector("#next");
let prevButton=document.querySelector("#previous");
// let ansButton=document.querySelector("#answer");
let image=document.querySelector(".imageBox img");

let qn=document.querySelector(".question");
let o=[];

o[0]=document.querySelector("#option1");
o[1]=document.querySelector("#option2");
o[2]=document.querySelector("#option3");
o[3]=document.querySelector("#option4");


let qNumber=0;
let optionSelected;
let questionCount=0,correctCount=0;

scoreBox.classList.add("hide");

function fillContent(question){
    console.log(question);

    for(let i=0;i<4;i++){
        o[i].classList.remove("correct");
        o[i].classList.remove("wrong");
    }

    image.setAttribute("src",question.image);
    qn.textContent=question.question;
    question.options.forEach((option,i)=>{
        o[i].textContent=option;
        if(question.answered){
            // ansButton.classList.add("hide");
            if(i==question.answer){
                o[i].classList.add("correct");
            }
            if(i==question.userAnswer&&i!==question.answer){
                o[i].classList.add("wrong");
            }
        }else{
            // ansButton.classList.remove("hide");
        }
    });

}

nextButton.addEventListener("click",(e)=>{
    if(qNumber!==9){
        qNumber++;
    }else{
        alert("In Question 10");
    }
    fillContent(questions[qNumber]);
});

prevButton.addEventListener("click",(e)=>{
    if(qNumber!==0){
        qNumber--;
    }else{
        alert("In Question 1");
    }
    fillContent(questions[qNumber]);
});

for(let i=0;i<4;i++){
    o[i].addEventListener("click",(e)=>{
        if(!questions[qNumber].answered){
            questionCount++;
            if(questions[qNumber].answer==i){
                correctCount++;
            }
            questions[qNumber].answered=true;
            questions[qNumber].userAnswer=i;
            fillContent(questions[qNumber]);
            checkSubmit(questionCount,correctCount);
        }else{
            alert("Question answered !");
        }
    });
}

fillContent(questions[0]);

function checkSubmit(questionCount,correctCount){
    if(questionCount==10){
        mainContainer.classList.add("hide");
        scoreBox.classList.remove("hide");
        fillResult(correctCount);
    }
}

function fillResult(correctCount){
    document.querySelector("#score").textContent=correctCount*10;
}