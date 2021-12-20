let test = [
    {
        question: "Что является предметом философии в широком смысле?",
        answers: ["А) Отношения с Богом или иным высшим существом;", "Б) Общие сущностные характеристики мира, отношение человека к природе и обществу;", "В) Физическая реальность, ее характеристики."]
    },
    {
        question: "Что означает термин «философия»?",
        answers: ["А) Любовь к рассуждению;", "Б) Любовь к мышлению;", "В) Любовь к мудрости."]
    },
    {
        question: "Мировоззрение это -",
        answers: ["А) Система взглядов человека на мир в целом, свое место в мире, смысл жизни;", "Б) Система взглядов групп людей, выражающая их интересы и отношение к социальной действительности;", "В) Система предпочтений зрелой личности."]
    },
    {
        question: "Что является предметом философии как науки?",
        answers: ["А) Происхождение и сущность ценностей;", "Б) Фундаментальные принципы бытия;", "В) Принципы развития Вселенной."]
    },
    {
        question: "Какие философы являются основными представителями экзистенциализма?",
        answers: ["А) Камю, Фрейд, Флоренский;", "Б) Сартр, Шпенглер, Шеллинг;", "В)Камю, Сартр, Кьеркегор."]
    },
    {
        question: "Каковы хронологические рамки развития античной философии?",
        answers: ["А) конец VII в. до н. э. — VI в. н. э.;", "Б)конец I в. до н. э. — VI в. н. э.;", "В) начало II в. до н. э. — V в. н. э.."]
    },
    {
        question: "Что является особенностью древневосточной философии?",
        answers: ["А) Доступ к пониманию мира возможен только через познание;", "Б) Воспевание достоинства человека как личности;", "В) В основе лежат мифологические представления о мире и человеке."]
    },
    {
        question: "Назовите основную черту русской философии?",
        answers: ["А) Идеализм;", "Б) Мессианизм;", "В) Нравственно-религиозный характер."]
    },
    {
        question: "Как формулируется основной вопрос философии?",
        answers: ["А)Что первично: дух или материя?", "Б) Что такое добро и зло?", "В) Каковы критерии определения истинного знания?"]
    },
    {
        question: "Как переводится слово «философия» с греческого языка?",
        answers: ["А) Любовь к жизни;", "Б) Любовь к мудрости;", "В) Любовь к истине."]
    },
    {
        question: "Что является центральной проблемой философии Нового времени?",
        answers: ["А) Познание человеком мира;", "Б) Внутренний мир личности;", "В) Логический анализ языка науки."]
    },
    {
        question: "Какие представления важны для философии Возрождения?",
        answers: ["А) Возврат к христианским принципам;", "Б) Возврат к идеям античности;", "В) Возврат к средневековой схоластике."]
    },
    {
        question: "Что наиболее характерно для философии эпохи Возрождения?",
        answers: ["А) Антропоцентризм;", "Б) Теоцентризм;", "В) Эгоцентризм."]
    },
    {
        question: "Какая религиозная система являлась исходной для формирования философского мышления в Индии?",
        answers: ["А) Брахманизм;", "Б) Буддизм;", "В) Даосизм."]
    },
    {
        question: "Какого закона диалектики Гегеля не существует?",
        answers: ["А) Закон сохранения энергии;", "Б) Закон отрицания отрицания;", "В) Закон единства противоположностей."]
    },
    {
        question: "Какой древнегреческий мыслитель считал, что главная задача состоит в самопознании?",
        answers: ["А) Платон;", "Б) Сократ;", "В) Аристотель."]
    },
    {
        question: "Кто из русских писателей-классиков больше всего повлиял на развитие идеалистической философии в России?",
        answers: ["А) Л. Н. Толстой;", "Б) Ф. М. Достоевский;", "В) А. С. Пушкин."]
    },
    {
        question: "Какова основная идея философии В. С. Соловьева?",
        answers: ["А) Идея Софии – Божественной мудрости;", "Б) Идея непротивления злу насилием;", "В) Идея революционного обновления общества."]
    },
    {
        question: "Какой древнегреческий философ считал огонь основой всего?",
        answers: ["А) Гераклит;", "Б) Анаксимандр;", "В) Анаксимен."]
    },
    {
        question: "Как последователи буддизма формулируют первую «благородную» истину?",
        answers: ["А) Есть путь, который помогает освободиться от страданий;", "Б) У страдания есть причина;", "В) Бытие человек связано со страданием."]
    }
];

let answers = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
];//вписывай номера правильных ответов  например [1,2,3]


var d = document;
let getQuest = document.querySelector(".questions");
let h2 = document.querySelector(".block1 h2");
let form1 = document.querySelector(".form1");
let a = d.querySelector(".block1 p");
let number = 0;

let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// ходьба по номерам заданий-----------------------------------------
for (let index = 0; index < 20; index++) {
    let elem = document.createElement("div");
    elem.classList.add("blocks")
    elem.textContent = index + 1
    getQuest.append(elem)
    selectNumbers(elem, index)
}
function readyQuest() {
    for (let index = 0; index < result.length; index++) {
        if (result[index]!=0) {
            
            let l1 = getQuest.children;
            l1[index].classList.add("ready")
        }
        
    }
}
function selectNumbers(item, id) {
    item.addEventListener('click', (e) => {
        number = id
        getQuestion(number);
        if (number != 0) { back.classList.remove("btn-none"); if (!a.classList.contains("btn-none") && number < 20) { a.classList.add("btn-none"); } } else { back.classList.add("btn-none"); if (!a.classList.contains("btn-none") && number < 20) { a.classList.add("btn-none");  } };

        if (number == 19) {
            next.classList.add("btn-none");
            itog.classList.remove("btn-none");
        }
        else {
            if (!a.classList.contains("btn-none") && number < 20) { a.classList.add("btn-none");  }
            next.classList.remove("btn-none");
            itog.classList.add("btn-none");
        };
    })
    readyQuest()
}
//--------------------------------------------------------------
function getQuestion(n) {
    form1.innerHTML = "";
    h2.innerHTML = test[n].question;
    let l = test[n].answers;
    for (let i in l) {

        let elem = document.createElement("input");
        elem.setAttribute('type', 'radio');
        elem.setAttribute('name', 'result');
        elem.setAttribute('id', 'question' + i);
        elem.setAttribute('value', Number(i) + 1);
        if (result[number] == Number(i) + 1) {
            elem.checked = true;
        }
        let elem1 = document.createElement("label");
        elem1.classList.add('ogo');
        elem1.setAttribute('for', 'question' + i);
        elem1.innerHTML = l[i];


        let elem2 = document.createElement("br");
        form1.append(elem);
        form1.append(elem1);
        form1.append(elem2);
    }
    let radious = document.querySelectorAll("input[type='radio']");
    for (let radio of radious) {
        radio.addEventListener("change", (event) => {
            result[number] = radio.getAttribute("value");
            //   var radios = $('input[type="radio"]', $('#formid'));
        });
    };
    readyQuest()
};

getQuestion(number);

let next = document.querySelector(".block3");
let nextEnter = document.querySelector('.block1');
let itog = document.querySelector(".itog");
nextEnter.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13 && number < 19){
        number++;
		if (number >= 18) {
			next.classList.add("btn-none");
			itog.classList.remove("btn-none");
		}
		else {
			if (!a.classList.contains("btn-none") && number < 19) { a.classList.add("btn-none");  }
			back.classList.remove("btn-none");
			itog.classList.add("btn-none");
		}
		getQuestion(number);
    }
    readyQuest()
});
next.addEventListener("click", (event) => {
    
    /* if(result[number]!=0) {
         getQuest
     }*/
     if (result[number] != 0) {
        let l1 = getQuest.children;
        l1[number].classList.add("ready")
    }
    number++;

    if (number >= 18) {
        next.classList.add("btn-none");
        itog.classList.remove("btn-none");
    }
    else {
        if (!a.classList.contains("btn-none") && number < 19) { a.classList.add("btn-none");  }
        back.classList.remove("btn-none");
        itog.classList.add("btn-none");
    }
    readyQuest()
    getQuestion(number);
});



let back = document.querySelector(".block5");

back.addEventListener("click", (event) => {
    number--;
    next.classList.remove("btn-none");
    if (number <= 0) {
        back.classList.add("btn-none");
    }
    if (number < 20) {
        if (!a.classList.contains("btn-none") && number < 19) { a.classList.add("btn-none");  }

        itog.classList.add("btn-none");
    }
    readyQuest()
    getQuestion(number);
});



itog.addEventListener("click", (event) => {
    readyQuest()
    let trueAnswer=0;
    let ocenka=0;
    for (let index = 0; index < result.length; index++) {
        if (result[index] == answers[index]) {
            trueAnswer++;

        } 
    }

    if(trueAnswer<=10){
        ocenka=2;
    }
    if(trueAnswer>=11&&trueAnswer<=15){
        ocenka=3;
    }
    if(trueAnswer>=16&&trueAnswer<=18){
        ocenka=4;
    }
    if(trueAnswer>=18){
        ocenka=5;
    }
    d.querySelector(".block6").classList.add("btn-none");

    d.querySelector(".block1").innerHTML = `<h2>\n Ваша оценка ${ocenka} \n</h2>
                <div class="pnrm "></div>\n\n<p>${trueAnswer}</p>\n`
                    
              
    
   
});