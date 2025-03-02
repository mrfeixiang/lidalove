// 游戏数据
const gameData = {
    "start": {
        "story": "初中二年级的教室里，阳光透过窗户洒进来。Sue坐在你斜前方的座位上，正专心地写着作文。她是班上的前任班长，以善良和文笔优美闻名，而你则刚刚在班长竞选中获得成功。一旁，年级第一的Moon正和几个同学讨论数学题。",
        "options": [
            {"text": "向Sue请教班长经验", "next": "leadershipLine"},
            {"text": "找Moon讨论学习方法", "next": "moonStudy"},
            {"text": "默默欣赏Sue，等待更合适的机会", "next": "branch1B"}
        ]
    },
    "leadershipLine": {
        "story": "放学后，你向Sue请教班长工作的经验。她温柔地笑了笑，耐心分享了她担任班长时的故事。\"作为班长，最重要的是关心每一位同学。\"她认真地说，\"不过冬老师很看重学习成绩，你要平衡好班级活动和学习。\"她善意地提醒你。",
        "options": [
            {"text": "\"谢谢你的建议，你真的很善良。\"", "next": "leadershipChallenge"},
            {"text": "\"我想为班级做些改变，希望你能支持我。\"", "next": "sueSupport"},
            {"text": "\"听说你的文章写得很好，能给我些建议吗？\"", "next": "sueWriting"}
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
        "story": "你选择了和Sue一起学习。每当你们讨论一道题目时，她总是耐心地解释，眼中闪烁着对知识的热爱。",
        "options": [
            {"text": "主动分享你的学习方法", "next": "academicPartner"},
            {"text": "虚心请教她的解题技巧", "next": "confidant"},
            {"text": "提议组建学习小组", "next": "socialLine"}
        ]
    },
    "musicTalk": {
        "story": "你谈起自己对音乐的了解。尽管不如Sue的父亲那样精通贝多芬，但你的热情让Sue很开心。"有时间你可以来我家，我父亲有很多珍贵的古典音乐唱片收藏，"她邀请道，"或许我们能一起欣赏。"",
        "options": [
            {"text": "欣然接受邀请", "next": "visitSueHome"},
            {"text": "询问更多关于她家庭的事", "next": "askFamily"},
            {"text": "提议先从共同喜欢的音乐开始了解", "next": "shareMusic"}
        ]
    },
    "askAboutSister": {
        "story": "你好奇地询问Sue的妹妹情况。"鱼儿比我小两岁，但在音乐上真的很有天赋，"Sue眼中充满自豪，"她的钢琴弹得特别好，老师说她将来一定能考上上海音乐学院。"后来你才知道，Sue的预言成真了——她妹妹不仅考上了上海音乐学院，还取得了博士学位并留校任教。",
        "options": [
            {"text": "称赞她们家的音乐基因", "next": "complimentFamily"},
            {"text": "请她转达对妹妹的鼓励", "next": "encourageSister"},
            {"text": "谈论自己的兄弟姐妹", "next": "talkSiblings"}
        ]
    },
    "visitSueHome": {
        "story": "周末，你来到Sue家。她父亲热情地接待了你，当得知你对贝多芬也有兴趣时，他兴奋地展示了他珍藏的全套贝多芬钢琴奏鸣曲唱片。客厅角落里，一台钢琴引起了你的注意，Sue解释那是她妹妹鱼儿的练习琴。"我妹妹现在不在家，她去参加钢琴比赛了，"Sue说，"她真的很有天赋。"",
        "options": [
            {"text": "认真聆听Sue父亲讲解贝多芬", "next": "learnBeethoven"},
            {"text": "请Sue弹一首她会的曲子", "next": "askSuePlay"},
            {"text": "分享你对古典音乐的想法", "next": "shareThoughts"}
        ]
    },
    "complimentFamily": {
        "story": ""你们家的音乐基因真好，"你由衷地赞叹道。Sue笑着摇摇头："其实主要是我父亲的熏陶和鱼儿自己的努力。"她顿了顿，"我父亲常说，贝多芬的音乐教会人坚韧和热爱生活，这也是我们家的座右铭。"你注意到Sue谈到家人时眼中的温暖光芒。",
        "options": [
            {"text": "请她讲述更多家庭故事", "next": "moreFamilyStories"},
            {"text": "分享你对家庭的看法", "next": "shareFamily"},
            {"text": "提议一起听些贝多芬的作品", "next": "listenTogether"}
        ]
    },
    "learnBeethoven": {
        "story": "Sue的父亲对贝多芬如数家珍，从《月光奏鸣曲》到《热情奏鸣曲》，他都能讲出其中的故事和情感。"贝多芬晚年几乎完全失聪，却创作出了最伟大的作品，"他激动地说，"这种对音乐和生活的热爱，是我希望我的女儿们能够学习的。"通过这次交流，你不仅了解了贝多芬，也明白了Sue和她妹妹鱼儿为何如此优秀——他们有一个充满艺术气息和坚韧精神的家庭。",
        "options": [
            {"text": "感谢这次宝贵的分享", "next": "thankFamily"},
            {"text": "与Sue讨论这次经历", "next": "discussWithSue"},
            {"text": "询问是否可以再来拜访", "next": "visitAgain"}
        ]
    },
    "future_update": {
        "story": "多年后的一次同学聚会上，Sue提到她妹妹鱼儿已经在上海音乐学院完成博士学业并留校任教。"她现在教授钢琴和音乐理论，"Sue骄傲地说，"父亲的贝多芬收藏也交给她保管了。"你想起当年在Sue家听她父亲讲述贝多芬的那个下午，恍如昨日。",
        "options": [
            {"text": "表达对鱼儿成就的祝贺", "next": "congratulate"},
            {"text": "回忆当年在Sue家的美好时光", "next": "rememberVisit"},
            {"text": "询问Sue自己的近况", "next": "askSueFuture"}
        ]
    },
    "socialLine": {
        "story": "你选择了社交互动。Sue对你的主动感到开心，很快你们便加入了彼此的朋友圈，一起参加各种活动。",
        "options": [
            {"text": "邀请她参加班级活动", "next": "academicPartner"},
            {"text": "一起去学校附近探索", "next": "crush"},
            {"text": "介绍自己的朋友圈", "next": "confidant"}
        ]
    },
    "academicPartner": {
        "story": "你们成为了学术伙伴，常常一起讨论问题、准备考试。Sue欣赏你的思维方式，你们互相启发，成绩都有了显著提升。",
        "options": [
            {"text": "一起参加数学竞赛", "next": "ending1"},
            {"text": "共同研究难题", "next": "ending2"},
            {"text": "互相鼓励进步", "next": "ending3"}
        ]
    },
    "confidant": {
        "story": "你们成为了知己，无话不谈。在立达中学的图书馆角落，你们分享各自的秘密、担忧和梦想，彼此的友谊日渐深厚。",
        "options": [
            {"text": "分享内心想法", "next": "ending2"},
            {"text": "讨论未来梦想", "next": "ending3"},
            {"text": "互相支持鼓励", "next": "ending4"}
        ]
    },
    "crush": {
        "story": "你对Sue产生了暗恋。每次看到她，你的心跳都会加速。你开始寻找各种理由与她相处，同时又担心被她发现你的心意。",
        "options": [
            {"text": "写小纸条", "next": "ending3"},
            {"text": "默默关心", "next": "ending4"},
            {"text": "找机会表白", "next": "ending1"}
        ]
    },
    "ending1": {
        "story": "你们共同考入理想大学，成为彼此的学术搭档。即使面对最困难的挑战，有彼此的支持，一切都变得可能。多年后回想起立达中学的时光，你们依然感激那段共同成长的日子。",
        "options": []
    },
    "ending2": {
        "story": "感情慢慢升温，最终确定关系，成为青梅竹马。从立达中学的教室到大学的校园，你们的关系经历了考验，却变得更加坚固。你们一起经历成长，见证彼此的蜕变与成熟。",
        "options": []
    },
    "summerVacation": {
        "story": "初三的暑假来临，班级活动暂停，但你和Sue的友谊并没有因此中断。一个阳光明媚的下午，你鼓起勇气拨通了Sue的电话，开始了你们的暑假日常。",
        "options": [
            {"text": "分享今天看到的有趣事情", "next": "phoneSharing"},
            {"text": "询问她的暑假生活", "next": "askVacation"},
            {"text": "讨论即将到来的初三学年", "next": "discussFuture"}
        ]
    },
    "phoneSharing": {
        "story": "你开始兴奋地讲述今天发生的趣事，电话那头的Sue不时发出清脆的笑声。聊天间隙，你提起最近在听的《欢乐颂》。"这首曲子真的很美，"你说，"每次听都感觉充满力量。"Sue惊喜地回应："我爸爸也很喜欢这首！"这成了你们暑假的默契：每天下午，寻找有趣的事情和喜欢的音乐，然后迫不及待地打电话分享。",
        "options": [
            {"text": "形成每日通话的习惯", "next": "dailyCall"},
            {"text": "约定一起听《欢乐颂》", "next": "listenTogether"},
            {"text": "邀请见面一起活动", "next": "meetupSummer"}
        ]
    },
    "listenTogether": {
        "story": ""我们可以约个时间，一起听《欢乐颂》，"你提议道，"这样我们能同时听到相同的音乐。"Sue欣然同意。第二天下午三点，你们各自在家，通过电话，同时按下了播放键。听着贝多芬激昂的旋律，即使相隔两地，你们也感受到了前所未有的连接。",
        "options": [
            {"text": "分享听音乐时的感受", "next": "shareFeeling"},
            {"text": "提议下次听其他曲目", "next": "nextMusic"},
            {"text": "计划在图书馆见面", "next": "libraryPlan"}
        ]
    },
    "shareFeeling": {
        "story": "音乐结束后，你向Sue倾诉《欢乐颂》带给你的感受："每次听到高潮部分，我都感觉心里充满了力量和希望。"电话那头的Sue沉默了一会儿，然后轻声说："我也是。尤其是想到贝多芬创作它时已经失聪，却仍能写出如此美丽的音乐...这真的很鼓舞人心。"这次音乐分享，让你们的友谊更加深厚。",
        "options": [
            {"text": "承诺制作一盘音乐磁带给她", "next": "makeTape"},
            {"text": "建议下次偶遇时继续讨论", "next": "discussNextTime"},
            {"text": "计划探索更多贝多芬作品", "next": "exploreBeethovenWorks"}
        ]
    },
    "dailyCall": {
        "story": "暑假的日子里，与Sue的每日通话成了你最期待的事情。你们分享生活中的点滴，讨论看过的书和电视节目，有时甚至一起完成暑假作业。即使是平凡的小事，在电话里分享时也变得格外有趣。",
        "options": [
            {"text": "坦白这些通话对你的意义", "next": "confessImportance"},
            {"text": "提及想去苏州图书馆看书", "next": "libraryPlan"},
            {"text": "保持这份默契直到开学", "next": "maintainConnection"}
        ]
    },
    "libraryPlan": {
        "story": "聊天时，你随口提到计划去苏州图书馆看书。"真的吗？我也打算过几天去那里，"Sue的声音里带着惊喜，"不过没有确定具体哪一天。"你们没有特意约定，但这个巧合让你心里暗暗期待。",
        "options": [
            {"text": "第二天就去图书馆碰运气", "next": "libraryChance"},
            {"text": "按原计划过几天再去", "next": "libraryEncounter"},
            {"text": "建议确定一天一起去", "next": "planLibraryVisit"}
        ]
    },
    "libraryEncounter": {
        "story": "几天后的下午，你来到苏州图书馆。阳光透过高大的窗户洒在书架间，你漫步在安静的阅览区，随手翻阅着感兴趣的书籍。就在你专注阅读时，一个熟悉的身影出现在视线边缘——是Sue！她似乎也刚注意到你，惊喜地睁大了眼睛。",
        "options": [
            {"text": "激动地向她挥手", "next": "excitedGreeting"},
            {"text": "假装没看见，等她来打招呼", "next": "waitGreeting"},
            {"text": "悄悄走到她身边，给她一个惊喜", "next": "surpriseApproach"}
        ]
    },
    "excitedGreeting": {
        "story": "你忍不住激动地向Sue挥手，引来了几位读者的侧目。Sue微笑着走过来，轻声说："真巧啊，没想到真的能遇到你。"她在你对面坐下，你们不约而同地露出开心的笑容。这次意外的见面，比任何计划好的约会都要美好。",
        "options": [
            {"text": "小声分享最近看的书", "next": "shareBooks"},
            {"text": "提议一起去图书馆咖啡厅", "next": "libraryCafe"},
            {"text": "向她展示你找到的有趣书籍", "next": "showInterestingBook"}
        ]
    },
    "libraryCafe": {
        "story": "你提议去图书馆的咖啡厅坐一会儿，Sue欣然同意。在阳光充足的角落里，你们点了两杯饮料，聊起了各自的暑假生活。"最近我一直在听《欢乐颂》，"你兴奋地说，"贝多芬的作品真的很振奋人心。"Sue惊讶地看着你："你知道这是我父亲最喜欢的曲子之一吗？"与电话中不同，见到Sue的真实笑容和生动表情，让整个下午都变得格外明亮。",
        "options": [
            {"text": "分享你对《欢乐颂》的理解", "next": "shareMusicView"},
            {"text": "将这次偶遇写进日记", "next": "writeMemory"},
            {"text": "期待下一次的"偶遇"", "next": "anticipateNextMeeting"}
        ]
    },
    "shareMusicView": {
        "story": ""《欢乐颂》让我感到生活充满希望，"你真诚地说，"尤其是那种从低沉到高昂的旋律，就像是从黑暗走向光明。"Sue专注地听着，眼睛闪闪发亮。"我可以把这首曲子录在磁带上给你，"你提议道。"我很期待，"Sue轻声说，"下次电话聊天时，我们可以一起听。"这个简单的音乐分享，让你们的友谊增添了新的纽带。",
        "options": [
            {"text": "回家立即准备音乐磁带", "next": "prepareTape"},
            {"text": "下次电话时讨论音乐感受", "next": "discussMusic"},
            {"text": "珍藏这个特别的回忆", "next": "treasureMemory"}
        ]
    },
    "prepareTape": {
        "story": "回家后，你精心挑选了《欢乐颂》的不同版本，以及其他几首你认为Sue会喜欢的古典乐曲，录制在一盘磁带上。你甚至设计了简单的封面，写上"给Sue，愿这些音乐带给你欢乐"。第二天，你迫不及待地在电话中告诉她这个惊喜。",
        "options": [
            {"text": "约定见面时交给她", "next": "arrangeMeeting"},
            {"text": "邮寄给她作为惊喜", "next": "mailSurprise"},
            {"text": "电话中详细介绍每首曲子", "next": "explainMusic"}
        ]
    },
    "discussMusic": {
        "story": "下次电话聊天时，你迫不及待地问Sue是否听了《欢乐颂》。"听了！"她兴奋地说，"我还和父亲讨论了这首曲子。他说贝多芬创作它时已经完全失聪，却仍能写出如此充满希望的音乐，真是不可思议。"你们深入交流了对音乐的感受，这次谈话比以往任何一次都要长，也更加深入。",
        "options": [
            {"text": "承诺分享更多喜欢的音乐", "next": "promiseMoreMusic"},
            {"text": "计划一次音乐会之行", "next": "concertPlan"},
            {"text": "将这些音乐记忆珍藏心底", "next": "musicMemories"}
        ]
    },
    "musicMemories": {
        "story": "那个夏天，《欢乐颂》成了你和Sue之间特别的联结。从苏州图书馆的偶遇，到电话中的音乐分享，再到后来你们一起哼唱的片段，这首曲子见证了友谊的成长。多年后回忆起这段时光，每当听到《欢乐颂》熟悉的旋律，你仍能感受到那个夏天的阳光、Sue的笑容，以及青春中那份纯粹的喜悦。有些音乐，就像有些友谊，会伴随一生。",
        "options": []
    },
    "treasureMemory": {
        "story": "回家的路上，你的心情久久不能平静。在苏州图书馆与Sue的偶遇，像一个特别的礼物，让平凡的暑假变得闪闪发光。多年后回忆起这段时光，你仍然能清晰地记得那天图书馆的阳光、Sue惊喜的表情，以及两人在咖啡厅度过的那个美好下午。有些回忆，哪怕只是短暂的片刻，也能在心中留下永恒的温暖。",
        "options": []
    },
    "confessImportance": {
        "story": "一次通话即将结束时，你鼓起勇气说道："其实，每天和你通电话已经成为我最开心的事了。"电话那头短暂的沉默后，Sue轻声回应："我也是，每次听到电话铃响，就会希望是你。"这个夏天，因为这些简单的分享，变得无比珍贵。",
        "options": [
            {"text": "期待开学后的重逢", "next": "summerEnding"},
            {"text": "承诺未来会一直保持联系", "next": "promiseFuture"},
            {"text": "建议一起规划更多美好时光", "next": "planTogether"}
        ]
    },
    "summerEnding": {
        "story": "暑假的尾声，你们的通话变得更加频繁，仿佛想把所有未说完的话都说完。开学那天，你早早地来到教室，远远地就看到了Sue熟悉的身影。当她转身看到你时，脸上绽放出的笑容，比夏日的阳光还要明媚。你知道，这个有着无数通电话的夏天，已经成为你们友谊中最美好的章节。",
        "options": []
    },
    "ending3": {
        "story": "各自选择不同道路，保持普通朋友关系，留下美好回忆。尽管人生的轨迹渐行渐远，但每当想起立达中学的那段岁月，你们心中都会泛起温暖的涟漪，珍藏着那份纯粹的情谊。",
        "options": []
    },
    "ending4": {
        "story": "互相支持对方的梦想，选择异地发展，保持特殊的联系。即使相隔千里，你们的心从未真正分离。立达中学的回忆成为你们人生旅途中的宝贵财富，无论未来如何变化，那份特殊的联系都将长存。",
        "options": []
    },
    "leadershipChallenge": {
        "story": "几周后，你开始实施一些班级改革，组织了一次创新的班会活动。同学们都很喜欢，但冬老师却认为这影响了学习。一天下午，冬老师找你谈话，表示要罢免你的班长职务。",
        "options": [
            {"text": "找Sue商量对策", "next": "sueHelp"},
            {"text": "接受决定，专注学业", "next": "focusStudy"},
            {"text": "尝试向冬老师解释", "next": "explainTeacher"}
        ]
    },
    "sueSupport": {
        "story": "Sue对你的计划表示支持，并主动提出帮你完善一些细节。"我觉得你的想法很好，为什么不把这些写成提案呢？"她建议道。你们一起制定了详细的班级活动计划。",
        "options": [
            {"text": "按计划行事", "next": "leadershipChallenge"},
            {"text": "邀请Sue成为副班长", "next": "partnerLeadership"},
            {"text": "先征求冬老师的意见", "next": "consultTeacher"}
        ]
    },
    "teacherConflict": {
        "story": "你低估了冬老师对"以学业为重"的坚持。当你提出一些创新活动时，冬老师明确表示反对，认为这会分散同学们的注意力。班会上，你和冬老师产生了分歧。",
        "options": [
            {"text": "坚持己见", "next": "standGround"},
            {"text": "妥协调整", "next": "compromise"},
            {"text": "请Sue从中调和", "next": "sueMedium"}
        ]
    },
    "sueHelp": {
        "story": "放学后，你把情况告诉了Sue。她思考片刻，说："也许我们可以证明你的活动对学习有帮助？"Sue帮你收集了数据，显示参与活动的同学学习积极性提高了。",
        "options": [
            {"text": "带着数据再次找冬老师", "next": "dataProof"},
            {"text": "请Sue代表你去谈", "next": "sueNegotiate"},
            {"text": "接受现实，但保持友谊", "next": "acceptFriendship"}
        ]
    },
    "focusStudy": {
        "story": "你决定接受冬老师的决定，专注于学业。Sue看到你情绪低落，在课间主动过来安慰你："领导能力不只体现在职位上，你依然可以帮助大家。"",
        "options": [
            {"text": "感谢她的理解", "next": "confidant"},
            {"text": "和她一起组建学习小组", "next": "academicPartner"},
            {"text": "暗自决定证明自己", "next": "proveWorth"}
        ]
    },
    "explainTeacher": {
        "story": "你决定再次向冬老师解释你的想法。"我的初衷是激发同学的学习兴趣..."冬老师打断你："学习就应该踏踏实实，不需要这些花哨的东西。"罢免决定依然生效。",
        "options": [
            {"text": "向Sue倾诉挫折", "next": "shareWithSue"},
            {"text": "默默接受，另寻方向", "next": "findNewPath"},
            {"text": "开始质疑权威和规则", "next": "questionRules"}
        ]
    },
    "partnerLeadership": {
        "story": "你邀请Sue成为副班长，共同管理班级。她犹豫了一下，答应了。有了她的帮助，班级活动既有趣又有序，连冬老师也开始慢慢接受。然而好景不长...",
        "options": [
            {"text": "遭遇冬老师突然干预", "next": "suddenIntervention"},
            {"text": "与Sue产生分歧", "next": "partnerConflict"},
            {"text": "活动成功引起校方关注", "next": "schoolAttention"}
        ]
    },
    "consultTeacher": {
        "story": "你决定先征求冬老师的意见。冬老师听完你的计划，皱起眉头："这太花时间了，我担心会影响学习。"Sue在一旁小声建议你做些妥协。",
        "options": [
            {"text": "接受建议，调整计划", "next": "adjustPlans"},
            {"text": "坚持己见，冒险执行", "next": "riskExecute"},
            {"text": "放弃计划，保住职位", "next": "maintainPosition"}
        ]
    },
    "dataProof": {
        "story": "带着Sue帮你准备的数据，你再次找到冬老师。尽管数据显示活动确实有积极影响，冬老师仍然坚持己见："班长应该以学习为重，而不是搞这些活动。"",
        "options": [
            {"text": "接受现实，专注学业", "next": "academicFocus"},
            {"text": "与Sue继续坚持理想", "next": "idealPersist"},
            {"text": "在校内寻找其他支持", "next": "seekSupport"}
        ]
    },
    "sueNegotiate": {
        "story": "Sue代表你去和冬老师谈。作为班里的优等生，她的话有一定分量。然而回来后，她略显沮丧："冬老师说她的决定不会改变，但她认可你的能力和热情。"",
        "options": [
            {"text": "感谢Sue的帮助", "next": "gratitudeSue"},
            {"text": "一起寻找新方向", "next": "newDirection"},
            {"text": "决定反抗到底", "next": "fightDecision"}
        ]
    },
    "acceptFriendship": {
        "story": "你接受了被罢免的现实，但与Sue的友谊却在这次经历中加深。课间休息时，你们经常讨论班级和未来。"有时候，失去一个职位，却赢得了更重要的东西。"Sue说。",
        "options": [
            {"text": "与Sue发展更深厚的友谊", "next": "confidant"},
            {"text": "一起策划非官方活动", "next": "unofficialActivities"},
            {"text": "重新定义自己的价值", "next": "redefineValue"}
        ]
    },
    "shareWithSue": {
        "story": "放学路上，你向Sue倾诉了所有挫折和不满。她静静地听着，然后说："也许这是一次机会，让我们看到制度的不完美，也让我们学会如何在规则中找到自己的路。"",
        "options": [
            {"text": "感谢她的智慧和支持", "next": "endingSueWisdom"},
            {"text": "一起探讨未来的可能", "next": "ending2"},
            {"text": "决定专注于学业和友谊", "next": "ending3"}
        ]
    },
    "moonStudy": {
        "story": "你走向Moon和她的学习小组。\"嘿，能加入你们吗？\"你问道。Moon微笑着点头，随即开始讲解一道复杂的数学题。你注意到Sue偶尔朝这边望来，眼神中似乎有些羡慕。",
        "options": [
            {"text": "专心跟随Moon的指导", "next": "moonPartner"},
            {"text": "邀请Sue加入学习小组", "next": "inviteSue"},
            {"text": "课后单独向Sue解释", "next": "explainSue"}
        ]
    },
    "sueWriting": {
        "story": "你向Sue请教写作的技巧。她眼睛一亮，拿出她最近的作文本给你看。\"写作是表达内心的方式，\"她解释道，\"重要的是真实表达自己的感受。\"她的文章充满了对生活的细腻观察，读来让人感动。",
        "options": [
            {"text": "请她帮你修改班会发言稿", "next": "speechHelp"},
            {"text": "分享你对她文章的感受", "next": "shareFeelings"},
            {"text": "提议一起创办班级文学角", "next": "literatureCorner"}
        ]
    },
    "moonPartner": {
        "story": "在Moon的指导下，你的学习成绩迅速提高。作为班长，你开始组织学习互助小组，这让冬老师很满意。某天下课，Sue悄悄走近你：\"看来你和Moon成了好搭档，你们很合适。\"",
        "options": [
            {"text": "\"我们只是学习伙伴，别多想。\"", "next": "clarifyMoon"},
            {"text": "\"是啊，Moon真的很厉害。\"", "next": "praiseMoon"},
            {"text": "\"其实我挺欣赏你的文章的。\"", "next": "complimentSue"}
        ]
    },
    "inviteSue": {
        "story": "你突然站起来，走向Sue：\"要不要一起加入我们的学习小组？\"Sue惊讶地看着你，然后点点头。Moon虽然有些意外，但很快就接纳了Sue。三人组开始了有趣的学习讨论。",
        "options": [
            {"text": "帮Sue和Moon建立友谊", "next": "triangleFriendship"},
            {"text": "在学习中展现领导力", "next": "studyLeadership"},
            {"text": "私下向Sue表达感谢", "next": "thankSue"}
        ]
    },
    "triangleFriendship": {
        "story": "在你的努力下，Sue、Moon和你逐渐形成了紧密的友谊小组。Moon负责学习指导，Sue分享她的写作技巧，而你则将大家凝聚在一起。冬老师看到这一幕，对你的班长工作也更加认可。",
        "options": [
            {"text": "组织三人共同策划班级活动", "next": "tripleLeadership"},
            {"text": "与Sue分享你对她的美好祝愿", "next": "wishSue"},
            {"text": "与Moon讨论未来规划", "next": "futurePlans"}
        ]
    },
    "wishSue": {
        "story": "一次夕阳下的放学路上，你鼓起勇气对Sue说出了你和许多同学对她的美好祝愿。\"我们都觉得你是最善良的人，希望你永远快乐。\"Sue的眼睛闪烁着感动的泪光，轻声说：\"谢谢你们，这对我意味着很多。\"",
        "options": [
            {"text": "承诺一直做她的朋友", "next": "promiseFriendship"},
            {"text": "邀请她参加你组织的特别活动", "next": "specialEvent"},
            {"text": "分享你对未来的憧憬", "next": "shareDreams"}
        ]
    },
    "shareDreams": {
        "story": "你向Sue分享了你对未来的憧憬和梦想。夕阳下，她认真地听着，不时点头。\"我相信你一定能实现梦想，\"她温柔地说，\"初三暑假我们还能多聊聊这些吗？\"她的话让你心头一暖。",
        "options": [
            {"text": "\"当然，我很期待那个暑假。\"", "next": "summerVacation"},
            {"text": "\"到时候一定天天给你打电话。\"", "next": "phonePromise"},
            {"text": "\"我们可以一起规划未来。\"", "next": "planTogether"}
        ]
    },
    "phonePromise": {
        "story": "\"到时候我一定天天给你打电话，分享每天的见闻。\"你承诺道。Sue开心地笑了：\"那我也会期待每天接到你的电话。\"这个简单的约定，成了你期待初三暑假的重要理由。",
        "options": [
            {"text": "认真履行这个约定", "next": "summerVacation"},
            {"text": "先交换联系方式", "next": "exchangeContact"},
            {"text": "计划一些有趣的暑假活动", "next": "planActivities"}
        ]
    },
    "promiseFriendship": {
        "story": "\"无论发生什么，我都会一直做你的朋友。\"你真诚地说。即使后来冬老师以影响学习为由罢免了你的班长职位，Sue始终站在你身边，支持着你。初三暑假里的那些电话聊天，更是你们友谊中最珍贵的回忆。在立达中学的记忆中，这份友谊是最美好的礼物。",
        "options": []
    },
    "endingSueWisdom": {
        "story": "Sue的善良和支持帮助你度过了这段困难时期。虽然失去了班长职位，但你获得了更珍贵的东西：理解与包容。多年后回想起来，这段经历塑造了你的性格，而Sue的友谊和Moon的指导则是立达中学时光中最闪亮的部分。你们对Sue的美好祝愿，也确实在她温暖的笑容中得到了回应。",
        "options": []
    }
};

// 当前游戏状态
let currentState = "start";
let gameHistory = [];

// DOM 元素
const titleScreen = document.getElementById("title-screen");
const gameContainer = document.getElementById("game-container");
const storyElement = document.getElementById("story");
const optionsElement = document.getElementById("options");
const startGameButton = document.getElementById("start-game");
const continueGameButton = document.getElementById("continue-game");
const saveGameButton = document.getElementById("save-game");
const backToTitleButton = document.getElementById("back-to-title");

// 事件监听
startGameButton.addEventListener("click", startNewGame);
continueGameButton.addEventListener("click", continueGame);
saveGameButton.addEventListener("click", saveGame);
backToTitleButton.addEventListener("click", backToTitle);

// 检查是否有保存的游戏
function checkSavedGame() {
    const savedState = localStorage.getItem("lidalove_gameState");
    if (savedState) {
        continueGameButton.style.display = "block";
    } else {
        continueGameButton.style.display = "none";
    }
}

// 开始新游戏
function startNewGame() {
    currentState = "start";
    gameHistory = [];
    showGame();
    updateGame();
}

// 继续游戏
function continueGame() {
    const savedState = localStorage.getItem("lidalove_gameState");
    if (savedState) {
        currentState = savedState;
        gameHistory = JSON.parse(localStorage.getItem("lidalove_gameHistory") || "[]");
        showGame();
        updateGame();
    }
}

// 保存游戏
function saveGame() {
    localStorage.setItem("lidalove_gameState", currentState);
    localStorage.setItem("lidalove_gameHistory", JSON.stringify(gameHistory));
    alert("游戏已保存！");
}

// 返回标题
function backToTitle() {
    gameContainer.style.display = "none";
    titleScreen.style.display = "block";
    checkSavedGame();
}

// 显示游戏界面
function showGame() {
    titleScreen.style.display = "none";
    gameContainer.style.display = "block";
}

// 更新游戏界面
function updateGame() {
    const currentData = gameData[currentState];
    
    if (!currentData) {
        alert("错误: 找不到指定的游戏状态");
        return;
    }

    // 添加淡入动画效果
    storyElement.style.opacity = "0";
    optionsElement.style.opacity = "0";
    
    setTimeout(() => {
        storyElement.textContent = currentData.story;
        optionsElement.innerHTML = "";
        
        // 为每个选项创建按钮
        currentData.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.className = "option";
            button.textContent = option.text;
            button.addEventListener("click", () => {
                gameHistory.push({
                    state: currentState,
                    choice: index
                });
                currentState = option.next;
                updateGame();
            });
            optionsElement.appendChild(button);
        });
        
        // 如果没有选项（游戏结束），显示重新开始按钮
        if (currentData.options.length === 0) {
            const restartButton = document.createElement("button");
            restartButton.className = "button";
            restartButton.textContent = "重新开始";
            restartButton.addEventListener("click", () => {
                currentState = "start";
                gameHistory = [];
                updateGame();
            });
            optionsElement.appendChild(restartButton);
        }
        
        storyElement.style.opacity = "1";
        optionsElement.style.opacity = "1";
    }, 300);
}

// 初始化游戏
checkSavedGame();
