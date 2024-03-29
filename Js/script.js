const storageBookList = [
  {
    asin: "1940026091",
    title: "Pandemic (The Extinction Files, Book 1)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg",
    price: 7.81,
    category: "scifi",
  }, //console.log(storageBookList[0].title)
  {
    asin: "0425264041",
    title: "Shards of Hope (Psy-Changeling Novel, A)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91ku%2B0LppPL.jpg",
    price: 7.59,
    category: "scifi",
  },
  {
    asin: "1250082757",
    title: "Born of Vengeance: The League: Nemesis Rising",
    img: "https://images-na.ssl-images-amazon.com/images/I/91J28bj3PYL.jpg",
    price: 26.09,
    category: "scifi",
  },
  {
    asin: "045146799X",
    title: "Gameboard of the Gods",
    img: "https://images-na.ssl-images-amazon.com/images/I/81-vppSolJL.jpg",
    price: 7.59,
    category: "scifi",
  },
  {
    asin: "1101987790",
    title: "Silver Silence (Psy-Changeling Trinity)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91eGxsWGH7L.jpg",
    price: 17.6,
    category: "scifi",
  },
  {
    asin: "0987575422",
    title: "The Battle of Evernight - Special Edition: The Bitterbynde Book #3 (The Bitterbynde Trilogy)",
    img: "https://images-na.ssl-images-amazon.com/images/I/51vw%2Bn7xZCL.jpg",
    price: 9.6,
    category: "scifi",
  },
  {
    asin: "1492667137",
    title: "Nightchaser",
    img: "https://images-na.ssl-images-amazon.com/images/I/514%2BSppz8AL.jpg",
    price: 4.84,
    category: "scifi",
  },
  {
    asin: "1635551226",
    title: "Proxima Five",
    img: "https://images-na.ssl-images-amazon.com/images/I/61pDS5vOIdL.jpg",
    price: 16.34,
    category: "scifi",
  },
  {
    asin: "1773840509",
    title: "The Cyborg's Stowaway: In the Stars Romance (Gypsy Moth)",
    img: "https://images-na.ssl-images-amazon.com/images/I/51mV63NrjdL.jpg",
    price: 3.73,
    category: "scifi",
  },
  {
    asin: "1732587035",
    title: "Apparent Power: Diazem Trilogy, Book One",
    img: "https://images-na.ssl-images-amazon.com/images/I/61Q5NcIAeaL.jpg",
    price: 8.65,
    category: "scifi",
  },
  {
    asin: "1944866191",
    title: "Girl Like a Bomb",
    img: "https://images-na.ssl-images-amazon.com/images/I/61yFOVwNcML.jpg",
    price: 16.55,
    category: "scifi",
  },
  {
    asin: "1982609494",
    title: "Polaris Rising: A Novel",
    img: "https://images-na.ssl-images-amazon.com/images/I/810hI5IL-HL.jpg",
    price: 24.05,
    category: "scifi",
  },
  {
    asin: "1642471003",
    title: "Across the Dark Horizon",
    img: "https://images-na.ssl-images-amazon.com/images/I/61GXM097ZcL.jpg",
    price: 13.81,
    category: "scifi",
  },
  {
    asin: "1943006733",
    title: "Resistant: A Novel",
    img: "https://images-na.ssl-images-amazon.com/images/I/713wsx-exHL.jpg",
    price: 10.16,
    category: "scifi",
  },
  {
    asin: "099961200X",
    title: "Lucky",
    img: "https://images-na.ssl-images-amazon.com/images/I/71qOk4tFCWL.jpg",
    price: 5.73,
    category: "scifi",
  },
  {
    asin: "1632167689",
    title: "Rise & Fall (THIRDS)",
    img: "https://images-na.ssl-images-amazon.com/images/I/41I3PgcCgNL.jpg",
    price: 11.69,
    category: "scifi",
  },
  {
    asin: "1626392242",
    title: "Advance: Exodus: Book One",
    img: "https://images-na.ssl-images-amazon.com/images/I/812XgmsnMfL.jpg",
    price: 13.01,
    category: "scifi",
  },
  {
    asin: "1473214769",
    title: "From Darkest Skies",
    img: "https://images-na.ssl-images-amazon.com/images/I/71QzKhJ8YrL.jpg",
    price: 13.6,
    category: "scifi",
  },
  {
    asin: "1732956308",
    title: "Candy Savant",
    img: "https://images-na.ssl-images-amazon.com/images/I/51EsF8PiQ9L.jpg",
    price: 8.27,
    category: "scifi",
  },
  {
    asin: "1496025555",
    title: "Backs Against the Wall (Survival) (Volume 2)",
    img: "https://images-na.ssl-images-amazon.com/images/I/516ZDu7nsLL.jpg",
    price: 6.03,
    category: "scifi",
  },
  {
    asin: "1509854525",
    title: "The Charmed Life of Alex Moore",
    img: "https://images-na.ssl-images-amazon.com/images/I/61PVMb6YCaL.jpg",
    price: 23.33,
    category: "scifi",
  },
  {
    asin: "0692124578",
    title: "Second Life of Mr. Hunt: Book 2: Sacrifices",
    img: "https://images-na.ssl-images-amazon.com/images/I/41M%2BnF7VZSL.jpg",
    price: 11.13,
    category: "scifi",
  },
  {
    asin: "148056785X",
    title: "The Morcai Battalion: The Pursuit",
    img: "https://images-na.ssl-images-amazon.com/images/I/71f-LfPNGsL.jpg",
    price: 5.51,
    category: "scifi",
  },
  {
    asin: "1634779150",
    title: "Five Minutes Longer (Enhanced World)",
    img: "https://images-na.ssl-images-amazon.com/images/I/41p5Lnpx4HL.jpg",
    price: 10.37,
    category: "scifi",
  },
  {
    asin: "150234131X",
    title: "Devoured: Brides of the Kindred 11 (Volume 11)",
    img: "https://images-na.ssl-images-amazon.com/images/I/51Hpl9aPWRL.jpg",
    price: 5.71,
    category: "scifi",
  },
  {
    asin: "0008120692",
    title: "The Ark (The Ark Trilogy, Book 1)",
    img: "https://images-na.ssl-images-amazon.com/images/I/51A8BmESq5L.jpg",
    price: 9.36,
    category: "scifi",
  },
  {
    asin: "1514621363",
    title: "Hugh Howey TwinPack vol.4: Peace in Amber & Promises of London",
    img: "https://images-na.ssl-images-amazon.com/images/I/61cvKNjNfvL.jpg",
    price: 4.4,
    category: "scifi",
  },
  {
    asin: "1772265535",
    title: "The Time Machine (100 Copy Limited Edition)",
    img: "https://images-na.ssl-images-amazon.com/images/I/71KncO7sFzL.jpg",
    price: 34.61,
    category: "scifi",
  },
  {
    asin: "1635334039",
    title: "Skythane (The Oberon Cycle)",
    img: "https://images-na.ssl-images-amazon.com/images/I/41S%2BAo5DEML.jpg",
    price: 6.11,
    category: "scifi",
  },
  {
    asin: "1935751336",
    title: "Haven",
    img: "https://images-na.ssl-images-amazon.com/images/I/514pMqTVCfL.jpg",
    price: 2.04,
    category: "scifi",
  },
  {
    asin: "1619848090",
    title: "Maskerade",
    img: "https://images-na.ssl-images-amazon.com/images/I/51aW0XTqL4L.jpg",
    price: 4.37,
    category: "scifi",
  },
  {
    asin: "1591940613",
    title: "A Princess of Mars (John Carter of Mars)",
    img: "https://images-na.ssl-images-amazon.com/images/I/51%2BTgaWpuOL.jpg",
    price: 4.95,
    category: "scifi",
  },
  {
    asin: "1682810690",
    title: "Scardust",
    img: "https://images-na.ssl-images-amazon.com/images/I/71e4jNi922L.jpg",
    price: 3.17,
    category: "scifi",
  },
  {
    asin: "1487403127",
    title: "Sector Guard Collection 3",
    img: "https://images-na.ssl-images-amazon.com/images/I/51-Q9IBcexL.jpg",
    price: 6.61,
    category: "scifi",
  },
  {
    asin: "1634768264",
    title: "This Is How It Ends (Deadworld)",
    img: "https://images-na.ssl-images-amazon.com/images/I/41OI6hZ86IL.jpg",
    price: 6.75,
    category: "scifi",
  },
  {
    asin: "0446584606",
    title: "The Claimed (Sin Hunters)",
    img: "https://images-na.ssl-images-amazon.com/images/I/41%2BVpF%2BzzyL.jpg",
    price: 5.08,
    category: "scifi",
  },
  {
    asin: "1644051125",
    title: "Ithani: NULL (The Oberon Cycle)",
    img: "https://images-na.ssl-images-amazon.com/images/I/51qK7ndbbYL.jpg",
    price: 16.47,
    category: "scifi",
  },
  {
    asin: "0648313549",
    title: "Breakaway (Verdant String)",
    img: "https://images-na.ssl-images-amazon.com/images/I/61-lWTp2ljL.jpg",
    price: 6.43,
    category: "scifi",
  },
  {
    asin: "1640804773",
    title: "Lander (The Oberon Cycle)",
    img: "https://images-na.ssl-images-amazon.com/images/I/41cH1OSszQL.jpg",
    price: 7.41,
    category: "scifi",
  },
  {
    asin: "1626493014",
    title: "Fall and Rising",
    img: "https://images-na.ssl-images-amazon.com/images/I/51e7A-DT9fL.jpg",
    price: 7.77,
    category: "scifi",
  },
  {
    asin: "1980570043",
    title: "The Time It Takes",
    img: "https://images-na.ssl-images-amazon.com/images/I/51xdSzzNxmL.jpg",
    price: 5.92,
    category: "scifi",
  },
  {
    asin: "1480953733",
    title: "The Birth (Soulmate Prophecy)",
    img: "https://images-na.ssl-images-amazon.com/images/I/812vUZPbEHL.jpg",
    price: 8.77,
    category: "scifi",
  },
  {
    asin: "1732048800",
    title: "Warrior Princess of Mars (Barsoom Pentalogy)",
    img: "https://images-na.ssl-images-amazon.com/images/I/71QZ6h7qjRL.jpg",
    price: 10.7,
    category: "scifi",
  },
  {
    asin: "1978639392",
    title: "FUSE (The Bolt Saga)",
    img: "https://images-na.ssl-images-amazon.com/images/I/61YHowAptnL.jpg",
    price: 10.49,
    category: "scifi",
  },
  {
    asin: "0857157760",
    title: "Subspace",
    img: "https://images-na.ssl-images-amazon.com/images/I/51WFt%2BKrEZL.jpg",
    price: 17.48,
    category: "scifi",
  },
  {
    asin: "197863921X",
    title: "Bolt (The Bolt Saga)",
    img: "https://images-na.ssl-images-amazon.com/images/I/71mgXBZNxSL.jpg",
    price: 5.09,
    category: "scifi",
  },
  {
    asin: "1504778596",
    title: "River's Run (Lords of Kassis series, Book 1)",
    img: "https://images-na.ssl-images-amazon.com/images/I/917IkbfPnsL.jpg",
    price: 4.24,
    category: "scifi",
  },
  {
    asin: "1941368107",
    title: "Lost Time (Between Two Evils)",
    img: "https://images-na.ssl-images-amazon.com/images/I/51KUhM9Nl1L.jpg",
    price: 6.79,
    category: "scifi",
  },
  {
    asin: "1594933197",
    title: "Orphan Maker",
    img: "https://images-na.ssl-images-amazon.com/images/I/81veSVEr78L.jpg",
    price: 2.8,
    category: "scifi",
  },
  {
    asin: "1487404239",
    title: "Return of the Nine Collection",
    img: "https://images-na.ssl-images-amazon.com/images/I/51rIMGEiquL.jpg",
    price: 7.71,
    category: "scifi",
  },
];

const bookList = document.getElementById("booklist"); //Div row to organize the list

storageBookList.forEach((element) => {
  const bookCard = document.createElement("div");
  bookCard.id = element.asin;
  bookCard.className = "col-sm-6 col-md-4 col-lg-2";
  bookList.appendChild(bookCard);

  const newCard = document.createElement("div");
  newCard.className = "card";
  bookCard.appendChild(newCard);

  const newCardImg = document.createElement("img");
  newCardImg.className = "card-img-top";
  newCard.appendChild(newCardImg);
  newCardImg.src = element.img;

  const newCardBody = document.createElement("div");
  newCardBody.className = "card-body"; // corrected typo here
  newCard.appendChild(newCardBody);

  const newCardTitle = document.createElement("h6");
  newCardTitle.className = "card-title";
  newCardBody.appendChild(newCardTitle);
  newCardTitle.textContent = element.title;

  const newCardPrice = document.createElement("p");
  newCardBody.appendChild(newCardPrice);
  newCardPrice.textContent = "$" + element.price;

  const newCardButton = document.createElement("button");
  newCardButton.textContent = "Scarta";
  newCardButton.className = "btn btn-warning";
  newCardBody.appendChild(newCardButton);

  newCardButton.addEventListener("click", function () {
    document.getElementById(element.asin).style.display = "none";
  });

  const newCardButtonBuy = document.createElement("button");
  newCardButtonBuy.textContent = "Compra ora";
  newCardButtonBuy.className = "btn btn-success ";
  newCardBody.appendChild(newCardButtonBuy);
});

function deleteButton(e) {}

//creating a new div col - to push inside the const bookList
// const bookCard = document.createElement("div");
// bookCard.className = "col";
// bookList.appendChild(bookCard);

//creating a new card to push inside the const bookCard
// const newCard = document.createElement("div");
// newCard.className = "card";
// bookCard.appendChild(newCard);

//creating a new image to push inside the newCard
// const newCardImg = document.createElement("img");
// newCardImg.className = "card-img-top";
// newCard.appendChild(newCardImg);

//creating a new div for the card body, to push inside the newCard
// const newCardBody = document.createElement("div");
// newCardBody.className = "card-body"; // corrected typo here
// newCard.appendChild(newCardBody);

//creating a new h6 for the card title, to push inside the newCardBody
// const newCardTitle = document.createElement("h6");
// newCardTitle.className = "card-title";
// newCardBody.appendChild(newCardTitle);

//creating a new p for the price, to push inside the newCardBody
// const newCardPrice = document.createElement("p");
// newCardBody.appendChild(newCardPrice);

//creating a new a for the button, to push inside the newCardBody
// const newCardButton = document.createElement("a");
// newCardButton.textContent = "Scarta";
// newCardButton.className = "btn btn-primary";
// newCardButton.href = "#"; // set href attribute directly
// newCardBody.appendChild(newCardButton);
