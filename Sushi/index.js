// const express = require("express");
// const cors = require("cors");
// const Stripe = require("stripe");

// const stripe = new Stripe("sk_test_51Qw4nKB4mi2FPWm3eMibsxCTeNkcjgmZzd2oQKTcFzfXTTeGcN6GLemmQzq68jH4f4s2gnwn4XnW0yjjaKdroCxd00iuyEcF6C");

// const app = express();
// app.use(cors());
// app.use(express.json()); // Добавляем обработку JSON

// app.post("/payment", async (req, res) => {
//   try {
//     // Создаем продукт
//     const product = await stripe.products.create({
//       name: "You orders",
//     });

//     if (!product) {
//       return res.status(500).json({ error: "Ошибка создания продукта" });
//     }

//     // Создаем цену
//     const price = await stripe.prices.create({
//       product: product.id,
//       unit_amount: 100 * 100, // 100 долларов (в центах)
//       currency: "usd",
//     });

//     if (!price) {
//       return res.status(500).json({ error: "Ошибка создания цены" });
//     }

//     // Создаем сессию оплаты
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"], // Указываем методы оплаты
//       line_items: [
//         {
//           price: price.id,
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel",
//       customer_email: "demo@gmail.com",
//     });

//     res.json({ url: session.url }); // Отправляем URL сессии
//   } catch (error) {
//     console.error("Ошибка платежа:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// // Тестовый GET-запрос
// app.get("/", (req, res) => {
//   res.send("Hello WWWW");
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");

const stripe = new Stripe("sk_test_51Qw4nKB4mi2FPWm3eMibsxCTeNkcjgmZzd2oQKTcFzfXTTeGcN6GLemmQzq68jH4f4s2gnwn4XnW0yjjaKdroCxd00iuyEcF6C");

const app = express();
app.use(cors());
app.use(express.json()); // Обрабатываем JSON

app.post("/payment", async (req, res) => {
  try {
    const { amount } = req.body; // Получаем сумму из запроса

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Некорректная сумма платежа" });
    }

    const product = await stripe.products.create({
      name: "Your Order",
    });


    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: amount, 
      currency: "eur",
    });

    // Создаём сессию оплаты
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], 
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url }); // Отправляем URL сессии
  } catch (error) {
    console.error("Ошибка платежа:", error);
    res.status(500).json({ error: error.message });
  }
});

// Тестовый маршрут
app.get("/", (req, res) => {
  res.send("Сервер работает!");
});

app.listen(3000, () => {
  console.log("Сервер запущен на 3000 порту");
});
