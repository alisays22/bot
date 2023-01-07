const { Telegraf, session, Scenes, Context } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.command("start", (ctx) =>
  ctx.replyWithHTML(`Привет, <b> ${ctx.message.from.first_name}</b>`)
);

// Проверка слов и добавлене отсутсвующих  в новый массив

// let uniq = [];

// const allMenu = food.concat(drink, phone, adress, workMode);
// for (menu of allMenu)

// bot.on("text", (ctx) => {

//   let arrMenu = allMenu.find((word) => word === ctx.message.text); //поиск по общему массиву
//   const countItems = {};
//   if (!arrMenu) {
//     uniq.push(ctx.message.text);
//     ctx.reply("Попробуйте спросить по другому");

//     for (const item of uniq) {
//       // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
//       countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
//     }
//     const result = Object.keys(countItems).filter(
//       (item) => countItems[item] > 2
//     );
//     return console.log(`новых слов ${result.length}: ${result}`);
//   }
//   return ctx.replyWithPhoto({ source: "food.jpg" }, { caption: "РАСПИСАНИЕ" });
// });

// Меню

const food = [
  "Что поесть?",
  "что поесть?",
  "Что поесть",
  "что поесть",

  "Меню?",
  "меню?",
  "Меню",
  "меню",

  "Можно меню?",
  "можно меню?",
  "Можно меню",
  "можно меню",

  "Можно ваше меню?",
  "можно ваше меню?",
  "Можно ваше меню",
  "можно ваше меню",

  "Еда",
  "еда",
  "Поесть",
  "поесть",
  "Кушать",
  "кушать",
  "Блюда",
  "блюда",
];

// Напитки

const drink = [
  "Напитки",
  "напитки",
  "Чай",
  "чай",
  "🫖",
  "Кофе",
  "кофе",
  "кофейная карта",
  "кофе",
  "☕️",
];

// Телефон

const phone = [
  "Какой у вас телефон?",
  "какой  вас телефон?",
  "Какой у вас телефон",
  "какой у вас телефон",

  "Какой телефон?",
  "какой телефон?",
  "Какой телефон",
  "какой телефон",

  "Скажите телефон",
  "Скажите свой телефон",
  "Скажите номер",
  "Скажите свой номер",

  "Можно пожалуйста ваш телефон?",
  "можно пожалуйста ваш телефон?",
  "Можно пожалуйста ваш телефон",
  "можно пожалуйста ваш телефон",

  "Можно ваш телефон?",
  "Можно ваш телефон",
  "можно ваш телефон?",
  "можно ваш телефон",

  "Можно ваш номер?",
  "Можно ваш номер",
  "можно ваш номер?",
  "можно ваш номер",

  "Можно телефон?",
  "можно телефон?",
  "Можно телефон",
  "можно телефон",

  "Напишите пожалуйста телефон?",
  "напишите пожалуйста телефон?",
  "Напишите пожалуйста телефон",
  "напишите пожалуйста телефон",

  "Напишите пожалуйста номер?",
  "напишите пожалуйста номер?",
  "Напишите пожалуйста номер",
  "напишите пожалуйста номер",

  "Напишите свой телефон?",
  "напишите свой телефон?",
  "Напишите свой телефон",
  "напишите свой телефон",

  "Напишите телефон?",
  "напишите телефон?",
  "Напишите телефон",
  "напишите телефон",

  "Напишите номер?",
  "напишите номер?",
  "Напишите номер",
  "напишите номер",

  "Подскажите телефон?",
  "подскажите телефон?",
  "Подскажите телефон",
  "подскажите телефон",

  "Телефон?",
  "телефон?",
  "Телефон",
  "телефон",

  "Номер?",
  "номер?",
  "Номер",
  "номер",

  "Как вам позвонить?",
  "как вам позвонить?",
  "Позвонить",
  "позвонить",
];

// Адрес

const adress = [
  "Где вы находитесь?",
  "где вы находитесь?",
  "Где вы находитесь",
  "где вы находитесь",
  "Где находитесь?",
  "где находитесь?",
  "Где находитесь",
  "где находитесь",
  "Какой у вас адрес?",
  "какой у вас адрес?",
  "Какой у вас адрес",
  "какой у вас адрес",
  "Какой адрес?",
  "какой адрес?",
  "Какой адрес",
  "какой адрес",
  "Скажите адрес",
  "Скажите свой адрес",
  "Можно пожалуйста ваш адрес?",
  "можно пожалуйста ваш адрес?",
  "Можно пожалуйста ваш адрес",
  "можно пожалуйста ваш адрес",
  "Можно пожалуйста адрес?",
  "можно пожалуйста адрес?",
  "Можно пожалуйста адрес",
  "Можно ваш адрес?",
  "Можно ваш адрес",
  "можно ваш адрес?",
  "можно ваш адрес",
  "Можно адрес?",
  "можно адрес?",
  "Можно адрес",
  "можно адрес",
  "Напишите пожалуйста адрес?",
  "напишите пожалуйста адрес?",
  "Напишите пожалуйста адрес",
  "напишите пожалуйста адрес",
  "Напишите свой адрес?",
  "напишите свой адрес?",
  "Напишите свой адрес",
  "напишите свой адрес",
  "Напишите адрес?",
  "напишите адрес?",
  "Напишите адрес",
  "напишите адрес",
  "Подскажите адрес?",
  "подскажите адрес?",
  "Подскажите адрес",
  "подскажите адрес",
  "Адрес",
  "адрес",
  "Адрес",
  "Как вас найти?",
  "как вас найти?",
  "Как вас найти",
  "как вас найти",
  "Ваше местоположение",
  "ваше местоположение",
  "Местоположение",
  "местоположение",
];

// График работы

const workMode = [
  "Режим работы?",
  "режим работы?",
  "режим работы",
  "График?",
  "график?",
  "График",
  "график",
  "Во сколько вы открываетесь?",
  "во сколько вы открываетесь?",
  "во сколько вы открываетесь",
  "Во сколько открываетесь?",
  "во сколько открываетесь?",
  "во сколько открываетесь",
  "Вы работаете?",
  "вы работаете?",
  "Работаете?",
  "работаете?",
  "Сейчас работаете?",
  "сейчас работаете?",
  "Вы Открыты?",
  "вы открыты?",
  "Открыты?",
  "открыты?",
];

const allMenu = food.concat(drink, phone, adress, workMode);
bot.hears(food, drink, phone, adress, workMode, (ctx) => {
  ctx.reply("массив");
});

// обьеденение массиввов в общий

// let arrMenu = allMenu.find((word) => word === ctx.message.text); //поиск по общему массиву

// bot.on("text", (ctx) => {
//   const numbers = ["Ali", "Ali", "Ali", "Amir"]; // исходный массив
//   const countItems = {}; // здесь будет храниться промежуточный результат
//   // получаем объект в котором ключ - это элемент массива, а значение - сколько раз встречается элемент в списке
//   // например так будет выглядеть этот объект после цикла:
//   // {1: 1, 3: 2, 4: 2, 7: 1, 15: 1, 19: 2}
//   // 1 встречается в тексте 1 раз, 2 встречается 2 раза, 4 встречается 2 раза и так далее
//   for (const item of numbers) {
//     // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
//     countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
//   }

//   const result = Object.keys(countItems).filter((item) => countItems[item] > 2);
//   console.dir(result);
// });

// bot.on("text", (ctx) => {
//   const text = ctx.message.text;
//   let uniq = [];
//   let arr = ["Ali", "Ali", "Amir"];

//     ctx.reply("cлово уже есть в базе");

//     ctx.reply("добавлено новое слово");
//   }
//   console.log(uniq);
// });

// bot.on("text", (ctx) => {
//   const text = ctx.message.text;
//   console.log(text);
// });

// bot.hears(menu, (ctx) => {
//   ctx.replyWithPhoto({ source: "case.jpg" }, { caption: "Наше меню" });
// });

// bot.hears(
//   ["Еда", "еда", "Поесть", "поесть", "Кушать", "кушать", "Блюда", "блюда"],
//   (ctx) => {
//     ctx.replyWithVideo({ source: "case.jpg" }, { caption: "Наше меню" });
//   }
// );

// bot.hears(chat[0], (ctx) => {
//   const phone = "89022302049";
//   ctx.reply(phone);
// });

// bot.hears("123", (ctx) =>
//   ctx.replyWithHTML(`<b>Все вопросы боту:</b>\n\n${chat[0][0]}\n${chat[1][0]} `)
// );

// const number = "89022302049";
// bot.hears(
//   [
//     "Какой у вас телефон?",
//     "какой  вас телефон?",
//     "Какой у вас телефон",
//     "какой у вас телефон",
//   ],
//   (ctx) => ctx.replyWithHTML(number)
// );

// bot.hears(chat[0].location, (ctx) => ctx.reply("вот сдесь епта"));

// bot.hears("123", (ctx) => ctx.reply(chat[0].location));

// bot.use(session());

// const slider = [
//   {
//     title: "First Slide",
//     description: "Назад <--\n Вперед--> ",
//     photo: "case.jpg",
//   },
//   {
//     title: "Second Slide",
//     description: "It's second slide",
//     photo: "food.jpg",
//   },
//   {
//     title: "Third Slide",
//     description: "It's third slide",
//     photo: "gost.jpg",
//   },
//   {
//     title: "Four",
//     description: "It's four slide",
//     photo: "spa.jpg",
//   },
// ];

// const sliderMenu = Markup.inlineKeyboard([
//   [
//     Markup.button.callback("<--", "slider:back"),
//     Markup.button.callback("Description", "slider:description"),
//     Markup.button.callback("-->", "slider:next"),
//   ],
// ]);

// bot.command("/slider", async (context) => {
//   context.session = { slider: 1 };

//   return context.replyWithPhoto(
//     {
//       source: "./" + slider[0].photo,
//     },
//     {
//       caption: `${slider[0].title}`,
//       ...sliderMenu,
//     }
//   );
// });

// bot.action(/slider:([^]+)/, async (context) => {
//   let action = context.match[1];

//   if (!context.session.slider) context.session = { slider: 1 };

//   if (action == "description") {
//     return context.answerCbQuery(
//       slider[context.session.slider - 1].description
//     );
//   }

//   if (action == "next") {
//     context.session.slider =
//       context.session.slider >= slider.length ? 1 : context.session.slider + 1;
//   } else {
//     context.session.slider =
//       context.session.slider <= 1 ? slider.length : context.session.slider - 1;
//   }

//   return context.editMessageMedia(
//     {
//       type: "photo",
//       media: { source: "./" + slider[context.session.slider - 1].photo },
//       caption: slider[context.session.slider - 1].title,
//     },
//     sliderMenu
//   );
// });

bot
  .launch({ dropPendingUpdates: true })
  .then(() => console.log("Бот запущен!"));
