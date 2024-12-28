function createProduct(obj, callback1, callback2) {
    obj.id = Math.floor(Math.random() * 100);
    callback1(obj);
    callback2(obj);
}

function logProduct(product) {
    console.log(product);
}

function logTotalPrice(product) {
    console.log(`Загальна вартість: ${product.price}`);
}

const product1 = {
    name: "Ігрова приставка Sony PlayStation 5 Pro",
    price: 42999,
};
const product2 = {
    name: "Консоль Microsoft Xbox Series X Special Edition 2TB Galaxy Black",
    price: 46808,
};

const product3 = {
    name: "Valve Steam Deck OLED 1 TB",
    price: 53472,
};


createProduct(product1, logProduct, logTotalPrice);
createProduct(product2, logProduct, logTotalPrice);
createProduct(product3, logProduct, logTotalPrice);

const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

const currentDate = new Date();

const medicineNames = Object.keys(medicines);

const validMedicines = medicineNames.filter(
    (medicine) => medicines[medicine] > currentDate
);

const sortedMedicines = validMedicines.sort(
    (a, b) => medicines[a] - medicines[b]
);

console.log(sortedMedicines);

function applyDiscountAndAddId(fruits) {
    return fruits.map((fruit) => ({
        id: Math.floor(Math.random() * 100),
        name: fruit.name,
      price: fruit.price * 0.8,
    }));
}

const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

const discountedFruits = applyDiscountAndAddId(fruits);
console.log(discountedFruits);

class Client {
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get userLogin() {
        return this.#login;
    }

    set newUserLogin(newLogin) {
        this.#login = newLogin;
    }

    get userEmail() {
        return this.#email;
    }

    set newUserEmail(newEmail) {
        this.#email = newEmail;
    }
}

const client = new Client("user", "user@gmail.com");

console.log(`Client login: ${client.userLogin}`);
console.log(`Client email: ${client.userEmail}`);

client.newUserLogin = "user1";
client.newUserEmail = "user1@gmail.com";

console.log(`Client login: ${client.userLogin}`);
console.log(`Client email: ${client.userEmail}`);

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = (tweets) =>
    tweets.reduce((allTags, tweet) => {
        allTags.push(...tweet.tags);

        return allTags;
    }, []);

const tags = getTags(tweets);

const getTagStats = (acc, tag) => {
    if (!acc.hasOwnProperty(tag)) {
        acc[tag] = 0;
    }

    acc[tag] += 1;

    return acc;
};

const countTags = (tags) => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);

console.log(tagCount);

function checkBrackets(str) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of str) {
        if (pairs[char]) {
            stack.push(char); 
        } else if (Object.values(pairs).includes(char)) {
            const lastBracket = stack.pop(); 

            if (pairs[lastBracket] !== char) {
                return false; 
            }
        }
    }

    return stack.length === 0; 
}

console.log(checkBrackets('someFn(){ console.log("test"); }')); 
console.log(checkBrackets('someFn(){[(console.log("test")]}[])')); 
console.log(checkBrackets('someFn({[()]console.log("test"})]')); 