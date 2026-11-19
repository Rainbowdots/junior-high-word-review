// 主題題庫：職業
// 新增主題：複製此檔改內容，再到 index.html 加一行 <script src="data/新檔.js"></script>
//
// en   英文
// zh   中文（一字多義：主義在前，另一義放括號，動詞加 v.）
// tip  （選填）撞義字的提示。答錯時自動顯示，卡片上的 ? 也可以點。
//
// 組內排序：同字尾的字垂直相鄰。

(function () {
  var T_REP = "reporter 多指報社、電視台跑新聞的記者；journalist 範圍更廣，包含雜誌、網路、自由撰稿。";
  var T_BAR = "barber 是傳統理髮店，主要幫男性剪髮修鬍；hairdresser 做造型、染燙，男女都服務。";
  var T_OWN = "owner 是東西或店的所有人；boss 是你的上司，發薪水給你的人。";
  var T_OFF = "officer 是任何有職位的官員或軍警幹部；police 指警察這個群體，是集合名詞，不加 s，也不說 a police。";

  window.WORDBANK = window.WORDBANK || [];
  window.WORDBANK.push({
    id: "jobs",
    title: "職業",
    groups: [
      { id: "medical", name: "醫療與科學", items: [
        { en: "doctor", zh: "醫師" },
        { en: "scientist", zh: "科學家" },
        { en: "dentist", zh: "牙醫" },
        { en: "engineer", zh: "工程師" },
        { en: "nurse", zh: "護理師" }
      ]},
      { id: "text", name: "教育與文字", items: [
        { en: "teacher", zh: "老師" },
        { en: "writer", zh: "作家" },
        { en: "reporter", zh: "記者", tip: T_REP },
        { en: "professor", zh: "教授" },
        { en: "journalist", zh: "新聞工作者", tip: T_REP }
      ]},
      { id: "arts", name: "藝術與表演", items: [
        { en: "painter", zh: "畫家（油漆工）" },
        { en: "singer", zh: "歌手" },
        { en: "actor", zh: "男演員" },
        { en: "actress", zh: "女演員" },
        { en: "artist", zh: "藝術家" },
        { en: "musician", zh: "音樂家" },
        { en: "magician", zh: "魔術師" },
        { en: "model", zh: "模特兒（模型）" }
      ]},
      { id: "law", name: "法律與公職", items: [
        { en: "lawyer", zh: "律師" },
        { en: "officer", zh: "官員", tip: T_OFF },
        { en: "soldier", zh: "軍人" },
        { en: "diplomat", zh: "外交官" },
        { en: "president", zh: "總統（董事長）" },
        { en: "judge", zh: "法官（v. 判斷）" },
        { en: "police", zh: "警察", tip: T_OFF }
      ]},
      { id: "service", name: "餐飲與服務", items: [
        { en: "barber", zh: "理髮師", tip: T_BAR },
        { en: "hairdresser", zh: "美髮師", tip: T_BAR },
        { en: "baby sitter", zh: "保母" },
        { en: "waiter", zh: "服務生" },
        { en: "waitress", zh: "女服務生" },
        { en: "servant", zh: "僕人" },
        { en: "cook", zh: "廚師（v. 煮）" }
      ]},
      { id: "business", name: "商業與買賣", items: [
        { en: "manager", zh: "經理" },
        { en: "owner", zh: "擁有者（主人）", tip: T_OWN },
        { en: "shopkeeper", zh: "店主" },
        { en: "vendor", zh: "小販" },
        { en: "salesman", zh: "推銷員" },
        { en: "businessman", zh: "商人" },
        { en: "secretary", zh: "秘書" },
        { en: "assistant", zh: "助理" },
        { en: "clerk", zh: "店員" },
        { en: "boss", zh: "老闆", tip: T_OWN }
      ]},
      { id: "outdoor", name: "交通與戶外", items: [
        { en: "driver", zh: "司機" },
        { en: "farmer", zh: "農夫" },
        { en: "hunter", zh: "獵人" },
        { en: "sailor", zh: "水手" },
        { en: "mechanic", zh: "技工" },
        { en: "cowboy", zh: "牛仔" },
        { en: "fisherman", zh: "漁夫" }
      ]},
      { id: "life", name: "生活與其他", items: [
        { en: "worker", zh: "工人" },
        { en: "mailman", zh: "郵差" },
        { en: "housewife", zh: "家庭主婦" },
        { en: "guide", zh: "導遊（v. 引導）" },
        { en: "priest", zh: "牧師、神父" }
      ]}
    ]
  });
})();
