// 游戏数据
const gameData = {
    "start": {
        "story": "春日的阳光透过教室的窗户洒进来，Sue正站在讲台前解答一道数学题。当她转身的瞬间，你被她向日葵般的笑容吸引。",
        "options": [
            {"text": "鼓起勇气，主动和她打招呼", "next": "branch1A"},
            {"text": "默默欣赏，等待机会", "next": "branch1B"},
            {"text": "装作在专心写作业", "next": "branch1C"}
        ]
    },
    "branch1A": {
        "story": "你选择了主动打招呼。Sue惊讶地看着你，然后露出温暖的笑容：\"你好，我是Sue。你的数学作业要帮忙吗？\"",
        "options": [
            {"text": "\"好啊，正好有几道题不太懂。\"", "next": "studyLine"},
            {"text": "\"其实我数学还不错，可以交流讨论。\"", "next": "interestLine"},
            {"text": "\"不用了，我只是想认识你。\"", "next": "socialLine"}
        ]
    },
    "branch1B": {
        "story": "你选择了等待机会。几天后，你发现Sue和你选择了同一个午餐时段。",
        "options": [
            {"text": "找个借口坐在她旁边的位置", "next": "socialLine"},
            {"text": "请同学帮忙介绍", "next": "interestLine"},
            {"text": "继续等待更好的机会", "next": "branch1C"}
        ]
    },
    "branch1C": {
        "story": "你选择了专心写作业。Sue注意到你认真的样子，主动走过来。",
        "options": [
            {"text": "表现得很惊喜", "next": "studyLine"},
            {"text": "镇定自若地交谈", "next": "interestLine"},
            {"text": "有些慌乱地收拾桌面", "next": "socialLine"}
        ]
    },
    "studyLine": {
        "story": "你选择了和Sue一起学习。",
        "options": [
            {"text": "主动分享你的学习方法", "next": "academicPartner"},
            {"text": "虚心请教她的解题技巧", "next": "confidant"},
            {"text": "提议组建学习小组", "next": "socialLine"}
        ]
    },
    "interestLine": {
        "story": "你选择了探讨共同兴趣。",
        "options": [
            {"text": "聊起最近看的书", "next": "confidant"},
            {"text": "分享喜欢的音乐", "next": "crush"},
            {"text": "讨论课外活动", "next": "socialLine"}
        ]
    },
    "socialLine": {
        "story": "你选择了社交互动。",
        "options": [
            {"text": "邀请她参加班级活动", "next": "academicPartner"},
            {"text": "一起去学校附近探索", "next": "crush"},
            {"text": "介绍自己的朋友圈", "next": "confidant"}
        ]
    },
    "academicPartner": {
        "story": "你们成为了学术伙伴。",
        "options": [
            {"text": "一起参加数学竞赛", "next": "ending1"},
            {"text": "共同研究难题", "next": "ending2"},
            {"text": "互相鼓励进步", "next": "ending3"}
        ]
    },
    "confidant": {
        "story": "你们成为了知己。",
        "options": [
            {"text": "分享内心想法", "next": "ending2"},
            {"text": "讨论未来梦想", "next": "ending3"},
            {"text": "互相支持鼓励", "next": "ending4"}
        ]
    },
    "crush": {
        "story": "你对Sue产生了暗恋。",
        "options": [
            {"text": "写小纸条", "next": "ending3"},
            {"text": "默默关心", "next": "ending4"},
            {"text": "找机会表白", "next": "ending1"}
        ]
    },
    "ending1": {
        "story": "你们共同考入理想大学，成为彼此的学术搭档。",
        "options": []
    },
    "ending2": {
        "story": "感情慢慢升温，最终确定关系，成为青梅竹马。",
        "options": []
    },
    "ending3": {
        "story": "各自选择不同道路，保持普通朋友关系，留下美好回忆。",
        "options": []
    },
    "ending4": {
        "story": "互相支持对方的梦想，选择异地发展，保持特殊的联系。",
        "options": []
    }
};

// 当前游戏状态
let currentState = "start";

// 更新游戏界面
function updateGame() {
    const storyElement = document.getElementById("story");
    const optionsElement = document.getElementById("options");
    const currentData = gameData[currentState];

    storyElement.textContent = currentData.story;
    optionsElement.innerHTML = "";

    currentData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = (index + 1) + ". " + option.text;
        button.addEventListener("click", () => {
            currentState = option.next;
            updateGame();
        });
        optionsElement.appendChild(button);
    });

    if (currentData.options.length === 0) {
        const restartButton = document.createElement("button");
        restartButton.className = "option";
        restartButton.textContent = "重新开始";
        restartButton.addEventListener("click", () => {
            currentState = "start";
            updateGame();
        });
        optionsElement.appendChild(restartButton);
    }
}

// 初始化游戏
updateGame();