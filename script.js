// 현재 질문 인덱스와 점수 초기화
let currentQuestionIndex = 0;
let scores = {"E": 0, "I": 0, "S": 0, "N": 0, "T": 0, "F": 0, "J": 0, "P": 0};


// 질문 데이터
const questions = [
    {
        question: "노래방에 갔을 때, 제일 먼저 하는 일은?",
        options: {
            "A": {text: "마이크를 바로 잡고 노래를 시작한다.", score: {"E": 1}},
            "B": {text: "무대 세팅이나 기계를 조작하며 준비를 돕는다.", score: {"T": 1}},
            "C": {text: "내가 좋아하는 노래를 찾아서 천천히 순서를 기다린다.", score: {"I": 1}},
            "D": {text: "다른 사람들의 노래를 듣고 분위기를 맞춘다.", score: {"F": 1}}
        }
    },
    {
        question: "노래방에서 부르고 싶은 노래는?",
        options: {
            "A": {text: "최신 K-pop 댄스곡! 모두와 함께 신나게 춤추고 싶다.", score: {"E": 1}},
            "B": {text: "차분한 발라드나 클래식 곡을 부르며 감성을 표현하고 싶다.", score: {"F": 1}},
            "C": {text: "EDM이나 강렬한 록을 부르며 에너지를 발산하고 싶다.", score: {"T": 1}},
            "D": {text: "친구들이 함께 따라 부를 수 있는 디스코나 댄스곡!", score: {"S": 1}}
        }
    },
    {
        question: "친구가 노래를 부를 때, 당신은 무엇을 하나요?",
        options: {
            "A": {text: "친구를 응원하며 박수를 치고 리듬에 맞춰 춤춘다.", score: {"E": 1}},
            "B": {text: "조용히 듣다가 필요할 때 마이크를 넘겨준다.", score: {"F": 1}},
            "C": {text: "리듬과 음정을 분석하며 노래를 감상한다.", score: {"T": 1}},
            "D": {text: "같이 흥을 돋우며 춤추고 소리친다!", score: {"S": 1}}
        }
    },
    {
        question: "노래방에서 가장 중요한 건?",
        options: {
            "A": {text: "좋은 음향과 멋진 퍼포먼스", score: {"T": 1}},
            "B": {text: "모두가 함께 즐길 수 있는 분위기", score: {"E": 1}},
            "C": {text: "내 감정을 표현하고 힐링할 수 있는 시간이 중요하다", score: {"F": 1}},
            "D": {text: "친구들과의 즐거운 추억 만들기", score: {"S": 1}}
        }
    },
    {
        question: "노래방에서 자주 부르는 노래 스타일은?",
        options: {
            "A": {text: "트로트나 발라드, 감성적인 곡", score: {"F": 1}},
            "B": {text: "힙합이나 K-pop 댄스곡, 빠른 곡", score: {"S": 1}},
            "C": {text: "록이나 EDM처럼 강한 리듬과 비트가 있는 곡", score: {"T": 1}},
            "D": {text: "재즈나 블루스처럼 감성적인 선율이 있는 곡", score: {"N": 1}}
        }
    },
    {
        question: "친구들이 당신에게 마이크를 넘길 때, 당신은?",
        options: {
            "A": {text: "신나는 노래로 분위기를 띄운다", score: {"E": 1}},
            "B": {text: "감성적인 곡으로 분위기를 조용하게 만든다", score: {"F": 1}},
            "C": {text: "다른 사람이 주목할 수 있는 강렬한 곡을 부른다", score: {"T": 1}},
            "D": {text: "친구들과 함께 부를 수 있는 곡을 부른다", score: {"S": 1}}
        }
    },
    {
        question: "노래방에서 가장 자신 있는 곡은?",
        options: {
            "A": {text: "댄스곡", score: {"S": 1}},
            "B": {text: "클래식 발라드", score: {"F": 1}},
            "C": {text: "강한 비트의 힙합", score: {"T": 1}},
            "D": {text: "모두가 즐길 수 있는 최신곡", score: {"E": 1}}
        }
    },
    {
        question: "노래방에서 가장 주목받고 싶을 때는?",
        options: {
            "A": {text: "댄스곡으로 무대를 장악할 때", score: {"E": 1}},
            "B": {text: "감정 표현을 잘한 발라드를 부를 때", score: {"F": 1}},
            "C": {text: "무대를 꽉 채우는 파워풀한 곡을 부를 때", score: {"T": 1}},
            "D": {text: "친구들과 함께 신나는 노래를 부를 때", score: {"S": 1}}
        }
    },
    {
        question: "노래방에서 새로운 노래를 부를 때 당신은?",
        options: {
            "A": {text: "반응을 신경 쓰지 않고 자신있게 부른다", score: {"E": 1}},
            "B": {text: "가사를 보고 신중하게 부른다", score: {"T": 1}},
            "C": {text: "다른 사람들에게 가사를 보여주며 부른다", score: {"S": 1}},
            "D": {text: "감정에 집중하여 부른다", score: {"F": 1}}
        }
    },
    {
        question: "친구들과 노래방을 다녀온 후 당신의 기분은?",
        options: {
            "A": {text: "다음에 또 가고 싶어 설렌다", score: {"E": 1}},
            "B": {text: "좋은 시간이었다고 회상하며 만족한다", score: {"F": 1}},
            "C": {text: "노래방에서의 감정을 곱씹으며 여운을 느낀다", score: {"N": 1}},
            "D": {text: "새로운 곡을 연습할 계획을 세운다", score: {"T": 1}}
        }
    }
];

// 캐릭터 결과값
const characterResults = {
    "ESFP": {
        name: "Buboy",
        karaokeBehavior: "노래방에서 신나게 분위기를 주도하는 편! 리더 타입",
        image: "buboy.PNG",
        description: "활발하고 에너지 넘치는 성격, 리더십이 강한 타입으로 댄스와 힙합을 즐김",
        encouragement: "오늘도 무대의 주인공은 당신이에요! 마음껏 즐기세요!",
        songRecommendation: "SB19 - GENTO",
        compatibleType: "bongbongie.PNG",
        incompatibleType: "kador.PNG"
    },
    "ESTJ": {
        name: "Buboy",
        karaokeBehavior: "친구들을 리드하며 강렬한 곡으로 분위기를 주도하는 편! 리더 타입",
        image: "buboy.PNG",
        description: "활발하고 에너지 넘치는 성격, 리더십이 강한 타입으로 댄스와 힙합을 즐김",
        encouragement: "열정적인 리더의 모습, 당신이 있어 더욱 빛나요!",
        songRecommendation: "Shanti Dope - Nadarang",
        compatibleType: "buboy.PNG",
        incompatibleType: "catty.PNG"
    },
    "ISFP": {
        name: "Pandy",
        karaokeBehavior: "조용하게 감정을 표현하는 편! 감성 타입",
        image: "pandy.PNG",
        description: "조용하고 감성적인 성격, 발라드와 재즈 같은 감성적인 곡을 선호",
        encouragement: "조용한 감성으로 모두를 감동시켜 보세요!",
        songRecommendation: "December Avenue - Sa Ngalan Ng Pag-Ibig",
        compatibleType: "hanario.PNG",
        incompatibleType: "bongbongie.PNG"
    },
    "ISFJ": {
        name: "Pandy",
        karaokeBehavior: "따뜻한 감성을 전달하는 편! 감성 타입",
        image: "pandy.PNG",
        description: "조용하고 감성적인 성격, 발라드와 재즈 같은 감성적인 곡을 선호",
        encouragement: "따뜻한 마음으로 부르는 노래는 더 특별해요!",
        songRecommendation: "Moira Dela Torre - Tagpuan",
        compatibleType: "kador.PNG",
        incompatibleType: "buboy.PNG"
    },
    "INFJ": {
        name: "Hanario",
        karaokeBehavior: "발라드와 클래식을 부르며 차분하게 감정을 표현하는 편! 감성 타입",
        image: "hanario.PNG",
        description: "차분하고 감성적인 성격, 클래식과 발라드를 좋아하는 감성적 캐릭터",
        encouragement: "깊은 감성으로 노래하는 당신의 무대는 특별합니다!",
        songRecommendation: "Moira Dela Torre - Paubaya",
        compatibleType: "pandy.PNG",
        incompatibleType: "torri.PNG"
    },
    "ISTJ": {
        name: "Hanario",
        karaokeBehavior: "진중하게 발라드를 부르며 무대를 채우는 편! 신중 타입",
        image: "hanario.PNG",
        description: "차분하고 신중한 성격, 클래식과 발라드를 좋아하는 감성적 캐릭터",
        encouragement: "진중하게 부르는 당신의 목소리, 모두를 감동시킬 거예요!",
        songRecommendation: "Regine Velasquez - Pangako",
        compatibleType: "pandy.PNG",
        incompatibleType: "bongbongie.PNG"
    },
    "INTJ": {
        name: "Kador",
        karaokeBehavior: "강렬한 곡으로 무대를 장악하는 편! 분석 타입",
        image: "kador.PNG",
        description: "분석적이고 계획적인 성격, 강렬한 EDM과 락을 선호",
        encouragement: "분석적인 시선으로 무대를 지배하세요!",
        songRecommendation: "IV of Spades - Mundo",
        compatibleType: "pakpak.PNG",
        incompatibleType: "buboy.PNG"
    },
    "ISTP": {
        name: "Kador",
        karaokeBehavior: "독창적인 곡을 선택하여 감각적인 무대를 만드는 편! 분석 타입",
        image: "kador.PNG",
        description: "분석적이고 계획적인 성격, 강렬한 EDM과 락을 선호",
        encouragement: "독창적인 감각으로 무대를 주도해보세요!",
        songRecommendation: "Shanti Dope - Amatz",
        compatibleType: "pakpak.PNG",
        incompatibleType: "torri.PNG"
    },
    "ESTP": {
        name: "Torri",
        karaokeBehavior: "댄스곡으로 신나게 무대를 즐기는 편! 활동 타입",
        image: "torri.PNG",
        description: "호기심 많고 활동적인 성격, 최신 힙합과 댄스를 즐기는 타입",
        encouragement: "에너지 넘치는 무대를 만들어 모두와 함께 즐겨요!",
        songRecommendation: "Al James - Pa-Umaga",
        compatibleType: "bongbongie.PNG",
        incompatibleType: "hanario.PNG"
    },
    "ENFJ": {
        name: "King Pogi",
        karaokeBehavior: "모두와 함께 즐길 수 있는 곡을 주로 부르는 편! 리더 타입",
        image: "king_pogi.PNG",
        description: "장난기 많고 창의적인 성격, 디스코와 팝을 즐기며 분위기를 주도하는 캐릭터",
        encouragement: "언제나 긍정적인 에너지로 무대를 빛내주세요!",
        songRecommendation: "Ben&Ben - Leaves",
        compatibleType: "kuyabear.PNG",
        incompatibleType: "kador.PNG"
    },
    "ENFP": {
        name: "King Pogi",
        karaokeBehavior: "디스코와 팝으로 분위기를 이끄는 편! 활동 타입",
        image: "king_pogi.PNG",
        description: "장난기 많고 창의적인 성격, 디스코와 팝을 즐기며 분위기를 주도하는 캐릭터",
        encouragement: "춤추며 노래하는 당신의 무대는 언제나 특별해요!",
        songRecommendation: "Sarah Geronimo - Tala",
        compatibleType: "pakpak.PNG",
        incompatibleType: "pandy.PNG"
    },
    "ENTP": {
        name: "Bongbongie",
        karaokeBehavior: "논리적인 선곡으로 신나는 분위기를 만드는 편! 논리 타입",
        image: "bongbongie.PNG",
        description: "유쾌하고 논리적인 성격, 신나는 음악을 선호하며 분석적인 고블린 캐릭터",
        encouragement: "즐거운 마음으로 모두와 함께 신나는 무대를 만들어 보세요!",
        songRecommendation: "Parokya Ni Edgar - Harana",
        compatibleType: "kuyabear.PNG",
        incompatibleType: "pandy.PNG"
    },
    "ENTJ": {
        name: "Bongbongie",
        karaokeBehavior: "사람들을 이끄는 리더 타입으로, 무대를 장악하는 편! 리더 타입",
        image: "bongbongie.PNG",
        description: "자신감 있고 주도적인 성격으로, 사람들을 이끄는 리더입니다.",
        encouragement: "당신의 리더십으로 멋진 무대를 이끌어주세요!",
        songRecommendation: "Gloc-9 - Sirena",
        compatibleType: "hanario.PNG",
        incompatibleType: "pandy.PNG"
    },
    "INFP": {
        name: "Catty",
        karaokeBehavior: "감성적인 발라드로 감정을 표현하는 편! 감성 타입",
        image: "catty.PNG",
        description: "수줍고 감성적인 성격, 발라드와 어쿠스틱을 좋아함",
        encouragement: "수줍은 감성으로 부르는 노래, 모두를 감동시킬 거예요!",
        songRecommendation: "Ben&Ben - Kathang Isip",
        compatibleType: "hanario.PNG",
        incompatibleType: "torri.PNG"
    },
    "ESFJ": {
        name: "Kuyabear",
        karaokeBehavior: "모두가 함께 부를 수 있는 곡을 선택하는 편! 협력 타입",
        image: "kuyabear.PNG",
        description: "따뜻하고 협력적인 성격, 모두가 함께 부를 수 있는 곡을 선호",
        encouragement: "따뜻한 마음으로 모두가 함께하는 무대를 만들어 보세요!",
        songRecommendation: "Sarah Geronimo - Tala",
        compatibleType: "catty.PNG",
        incompatibleType: "kador.PNG"
    },
    "INTP": {
        name: "Pakpak",
        karaokeBehavior: "독창적인 곡으로 무대를 주도하는 편! 신비 타입",
        image: "pakpak.PNG",
        description: "독창적이고 신비로운 성격, 실험적이고 독창적인 인디 음악을 즐김",
        encouragement: "당신만의 독창적인 무대로 모두를 놀라게 해보세요!",
        songRecommendation: "Zild - Kyusi",
        compatibleType: "kador.PNG",
        incompatibleType: "buboy.PNG"
    }
};



// 시작하기 버튼 클릭 이벤트 처리
document.getElementById("start-button").addEventListener("click", function() {
    // 시작하기 버튼 숨기기
    this.style.display = "none";
    
    // 질문 컨테이너 보이기
    document.getElementById("question-container").style.display = "block";
    
    // 첫 번째 질문 표시
    displayQuestion();
});

// 질문을 화면에 표시하는 함수
function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionObj = questions[currentQuestionIndex];
        
        // 질문과 선택지 표시
        document.getElementById("question").innerText = questionObj.question;
        document.getElementById("optionA").innerText = questionObj.options["A"].text;
        document.getElementById("optionB").innerText = questionObj.options["B"].text;
        document.getElementById("optionC").innerText = questionObj.options["C"].text;
        document.getElementById("optionD").innerText = questionObj.options["D"].text;
        
        // 현재 문항 번호 업데이트
        document.getElementById("current-question").innerText = currentQuestionIndex + 1;
        document.getElementById("total-questions").innerText = questions.length;
    } else {
        // 모든 질문이 끝나면 결과 보기 버튼 보여주기
        document.getElementById("question-container").style.display = "none";
        document.getElementById("result-button").style.display = "block";
    }
}

// 답변 선택 시 실행되는 함수
function selectAnswer(option) {
   const questionObj = questions[currentQuestionIndex];
   
   // 선택한 답변의 점수 반영
   const selectedOption = questionObj.options[option];
   for (const key in selectedOption.score) {
       scores[key] += selectedOption.score[key];
   }
   
   // 다음 질문으로 넘어가기
   currentQuestionIndex++;
   
   if (currentQuestionIndex < questions.length) {
       displayQuestion();
   } else {
       document.getElementById("question-container").style.display = "none";
       document.getElementById("result-button").style.display = "block";
   }
}

// 결과를 표시하는 함수
function showResult() {
   const mbti = (scores["E"] > scores["I"] ? "E" : "I") +
                (scores["S"] > scores["N"] ? "S" : "N") +
                (scores["T"] > scores["F"] ? "T" : "F") +
                (scores["J"] > scores["P"] ? "J" : "P");
   
   const result = characterResults[mbti];
   
   if (result) {
       document.getElementById("character-name").innerText = result.name;
       document.getElementById("character-description").innerText = result.description;
       document.getElementById("karaoke-behavior").innerText = result.karaokeBehavior;
       document.getElementById("compatible-types").innerText = result.compatibleType.replace('.PNG', '');
       document.getElementById("incompatible-types").innerText = result.incompatibleType.replace('.PNG', '');
       document.getElementById("song-recommendation").innerText = result.songRecommendation;
       document.getElementById("encouragement-message").innerText = result.encouragement;
       document.getElementById("character-image").src = result.image;

       // 결과 컨테이너 보이기
       document.querySelector(".compatible-img").src = result.compatibleType;
       document.querySelector(".incompatible-img").src = result.incompatibleType;

       // 결과 버튼 숨기고 결과 컨테이너 표시
       document.getElementById("result-button").style.display = "none";
       document.getElementById("result-container").style.display = "block";
       
       // 애니메이션 실행 및 결과 저장 로직 추가 가능
   } else {
       console.error("결과를 찾을 수 없습니다.");
   }
}
