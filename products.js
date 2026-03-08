let products = JSON.parse(localStorage.getItem("products")) || [];

if (products.length === 0) {
    products = [
        {
            id: "rod1",
            name: "Спінінг Carbon River 2.4 м",
            category: "rod",
            price: 1850,
            old: 2190,
            description: "Легкий і міцний спінінг для річкової та озерної риболовлі.",
            img: "https://picsum.photos/seed/fish-rod/600/600"
        },
        {
            id: "reel1",
            name: "Котушка Storm Reel 3000",
            category: "reel",
            price: 1490,
            old: 1750,
            description: "Надійна котушка з плавним ходом для щоденного використання.",
            img: "https://picsum.photos/seed/fish-reel/600/600"
        },
        {
            id: "lure1",
            name: "Воблер Pike Hunter 90",
            category: "lure",
            price: 290,
            old: 360,
            description: "Універсальний воблер для щуки та окуня.",
            img: "https://picsum.photos/seed/fish-lure/600/600"
        },
        {
            id: "line1",
            name: "Шнур Braided Pro 150 м",
            category: "line",
            price: 420,
            old: 520,
            description: "Міцний плетений шнур для далеких закидів.",
            img: "https://picsum.photos/seed/fish-line/600/600"
        },
        {
            id: "hook1",
            name: "Набір гачків Fisher Pack",
            category: "hook",
            price: 180,
            old: 240,
            description: "Набір гострих гачків різних розмірів у зручному кейсі.",
            img: "https://picsum.photos/seed/fish-hook/600/600"
        },
        {
            id: "bag1",
            name: "Сумка для снастей Lake Box",
            category: "bag",
            price: 990,
            old: 1250,
            description: "Містка сумка для приманок, гачків та аксесуарів.",
            img: "https://picsum.photos/seed/fish-bag/600/600"
        },
        {
            id: "camp1",
            name: "Рибальський стілець Comfort Seat",
            category: "camp",
            price: 1350,
            old: 1590,
            description: "Зручний складний стілець для довгих виїздів на водойму.",
            img: "https://picsum.photos/seed/fish-camp/600/600"
        },
        {
            id: "boat1",
            name: "Ехолот Smart Sonar Mini",
            category: "boat",
            price: 3290,
            old: 3790,
            description: "Компактний ехолот для човна та берегової риболовлі.",
            img: "https://picsum.photos/seed/fish-boat/600/600"
        }
    ];

    localStorage.setItem("products", JSON.stringify(products));
}

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}
