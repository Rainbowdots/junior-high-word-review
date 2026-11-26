// 主題題庫：交通
// 新增主題：複製此檔改內容，再到 index.html 加一行 <script src="data/新檔.js"></script>
//
// en   英文
// zh   中文（一字多義：主義在前，另一義放括號，動詞加 v.）
// tip  （選填）撞義字的提示。答錯時自動顯示，卡片上的 ? 也可以點。
//
// 組內排序：同字尾的字垂直相鄰。

(function () {
  var T_RAIL = "railroad 和 railway 是同一個東西，差在用字習慣：railroad 美式，railway 英式。";

  window.WORDBANK = window.WORDBANK || [];
  window.WORDBANK.push({
    id: "traffic",
    title: "交通",
    groups: [
      { id: "wheels4", name: "四個輪子", items: [
        { en: "car", zh: "車子" },
        { en: "bus", zh: "公車" },
        { en: "taxi", zh: "計程車" },
        { en: "truck", zh: "卡車" },
        { en: "jeep", zh: "吉普車" },
        { en: "ambulance", zh: "救護車" },
        { en: "tank", zh: "坦克（槽）" }
      ]},
      { id: "wheels2", name: "兩個輪子", items: [
        { en: "bicycle", zh: "腳踏車" },
        { en: "motorcycle", zh: "機車" },
        { en: "scooter", zh: "速克達機車" },
        { en: "wheel", zh: "輪子" },
        { en: "flat tire", zh: "爆胎" },
        { en: "ride", zh: "騎" }
      ]},
      { id: "waterair", name: "水上與空中", items: [
        { en: "boat", zh: "小船" },
        { en: "ship", zh: "大船" },
        { en: "sail", zh: "航行" },
        { en: "airplane", zh: "飛機" },
        { en: "airlines", zh: "航空公司" },
        { en: "airport", zh: "機場" },
        { en: "helicopter", zh: "直升機" },
        { en: "fly", zh: "飛" }
      ]},
      { id: "rail", name: "鐵路與車站", items: [
        { en: "train", zh: "火車" },
        { en: "railroad", zh: "鐵路（美）", tip: T_RAIL },
        { en: "railway", zh: "鐵路（英）", tip: T_RAIL },
        { en: "subway", zh: "地鐵" },
        { en: "MRT", zh: "捷運" },
        { en: "station", zh: "車站（局）" },
        { en: "platform", zh: "月台（平台）" },
        { en: "passenger", zh: "乘客" }
      ]},
      { id: "road", name: "道路與路面", items: [
        { en: "highway", zh: "公路" },
        { en: "bridge", zh: "橋" },
        { en: "path", zh: "小徑" },
        { en: "sidewalk", zh: "人行道" },
        { en: "overpass", zh: "天橋" },
        { en: "underpass", zh: "地下道" },
        { en: "block", zh: "街區" },
        { en: "parking lot", zh: "停車場" },
        { en: "traffic", zh: "交通" }
      ]},
      { id: "onroad", name: "在路上", items: [
        { en: "arrive", zh: "到達" },
        { en: "cross", zh: "越過" },
        { en: "drive", zh: "駕駛" },
        { en: "turn", zh: "轉彎（轉動）" },
        { en: "fast", zh: "快的" },
        { en: "slow", zh: "慢的" }
      ]}
    ]
  });
})();
