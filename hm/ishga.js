// 1-misol

// const ozgarMatn = document.getElementById("myParagraph");
// setInterval(() => {
//   ozgarMatn.textContent = "Bu yangi matn!";
// }, 1000);

// 2-misol

// const container = document.getElementById("myContainer");
// const button = document.getElementById("changeColor");
// button.addEventListener("click", () => {
//   const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//   container.style.backgroundColor = randomColor;
// });

// 3-misol

// const querySelect = document.querySelectorAll(".box");

// setInterval(() => {
//   querySelect.forEach((paragraph) => {
//     paragraph.textContent = `Yangi matn!`;
//   });
// }, 1000);

// 4-misol

// const qizilcha = document.querySelectorAll(".rangozg");
// setInterval(() => {
//   qizilcha.forEach((paragraph) => {
//     paragraph.style.color = "red";
//   });
// }, 1000);

// 5-misol

// const newText = document.createElement("p");
// newText.textContent = "Men yaratildim!!!";

// const newButton = document.createElement("button");
// newButton.textContent = "Men buttonman :)";

// newButton.addEventListener("click", () => {
//   alert("Buttonni bosganingiz uchun raxmat");
// });

// const container = document.getElementById("container");
// container.appendChild(newText);
// container.appendChild(newButton);

// 6-masala

// const resizableDiv = document.getElementById("resizable");
// const resizeButton = document.getElementById("resizeButton");

// resizeButton.addEventListener("click", () => {
//   const currentWidth = parseInt(resizableDiv.style.width);
//   resizableDiv.style.width = currentWidth + 200 + "px";
// });

// 7-masala

// const input = document.getElementById("userInput");
// const button = document.getElementById("showText");
// const output = document.getElementById("output");

// button.addEventListener("click", () => {
//   const userText = input.value;
//   if (userText.trim() !== "") {
//     output.textContent = `Sizninf matningiz ${userText}`;
//   } else {
//     output.textContent = "Iltimos matn kiriting!";
//   }
// });

// 8-masala

// let randomtext = document.getElementById("factDisplay"),
//   arr = [
//     "Hello, World! dasturi dasturchilar uchun eng oddiy va birinchi boshlang'ich dastur hisoblanadi. Uning maqsadi — dasturiy ta'minot to'g'ri o'rnatilganini va ishlayotganini tekshirish.",
//     "Python dasturlash tili pythons deb nomlanmagan. Uning nomi Monty Pythonning Flying Circus komediyasidan olingan, bu esa Guido van Rossumning komediya guruhiga bo'lgan muhabbatini ko'rsatadi.",
//     "Hozirgi kunda minglab dasturlash tillari mavjud, lekin faqatgina bir necha tasi ommaviy va keng tarqalgan. Eng mashhurlari C, Java, Python, va JavaScript.",
//     "1947 yilda, Grace Hopper nomli kompyuter olimi birinchi bugni topgan. Bu biror joyda hayvonning o'lishi yoki kompyuterning ishlamasligi bilan bog'liq bo'lgan hodisani tasvirlashda ishlatilgan so'z edi.",
//     "Dasturchilar ko'pincha yangi dasturlarni chiqarganlarida versiyalarni yasalashadi. Biror dasturda ko'plab xatolarni tuzatish jarayoni esa bug fixing deb ataladi.",
//     "Alan Turing tomonidan ishlab chiqilgan Turing testi sun'iy intellektni insonga qarshi baholash uchun ishlatiladi. Testdan o'tgan sun'iy intellekt insonga qaraganda ancha real ishlay oladi.",
//     "Birinchi dasturiy kompyuterlar 1930-yillarda mavjud edi, ammo ular hozirgi kompyuterlarga nisbatan juda cheklangan edi va bugungi kunda foydalangan tizimlarga qiyoslanmaydi.",
//     "Birinchi kompyuter dasturlarini ishlash uchun soatlab vaqt ketgan, ammo hozirgi kunda kompyuterlar bir necha millisekundda ishlaydi.",
//     "Dasturchilar kompyuterni qanday ishlashini o'rgatishdan ko'ra, mavjud tizimdagi muammolarni hal qilishga ko‘proq e'tibor qaratishadi.",
//     "Ko‘p dasturlash tillari matematika bilan chambarchas bog'liq, chunki dasturchilar muammolarni yechishda matematik formulasalarga asoslanishadi. Boshqalar esa mantiqiy o'ylash va analitik fikrlashni talab qiladi.",
//   ];
// function randomFact() {
//   const Randomid = Math.floor(Math.random() * arr.length);
//   return arr[Randomid];
// }
// const showfact = document.getElementById("factDisplay");
// const button = document.getElementById("showFact");

// button.addEventListener("click", () => {
//   showfact.textContent = randomFact();
// });
