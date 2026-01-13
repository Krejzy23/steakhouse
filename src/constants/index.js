export const navItems = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Nápoje", to: "/drinks" },
  { label: "Galerie", to: "/gallery" },
  { label: "Kontakt", to: "/contact" },
];

export const homeMenuItems = [
  {
    title: "Menu",
    subtitle: "Steaky & Speciality",
    image: "/img/menu.webp",
    to: "/menu",
  },
  {
    title: "Nápoje",
    subtitle: "Pivo · Víno · Nealko",
    image: "/img/drinks.webp",
    to: "/drinks",
  },
  {
    title: "Galerie",
    subtitle: "Jídlo & Restaurace",
    image: "/img/gallery.webp",
    to: "/gallery",
  },
  {
    title: "Kontakt",
    subtitle: "Rezervace & Informace",
    image: "/img/contact.webp",
    to: "/contact",
  },
];

export const categories = [
  "Předkrmy",
  "Saláty",
  "Hovězí roštěná",
  "Doporučujeme",
  "Hovězí svíčková",
  "Kuřecí maso",
  "Norský losos",
  "Přílohy",
  "Dezerty",
];

export const menuItems = {
  Předkrmy: [
    {
      grams: "75g",
      name: "Tatarák z norského lososa",
      description: "podávaný na ledovém salátu s opečeným toustem",
      price: "99 Kč",
    },
    {
      grams: "75g",
      name: "Carpaccio z červené řepy",
      description: "bazalkové pesto, balkánský sýr, toust",
      price: "85 Kč",
    },
    {
      grams: "75g",
      name: "Grilovaný kozí sýr s rukolou",
      description: "rukola, rajčata, redukce z balsamica, med, toust",
      price: "89 Kč",
    },
    {
      grams: "6ks",
      name: "Pečené švestky se slaninou",
      price: "89 Kč",
    },
  ],
  Saláty: [
    {
      grams: "200g",
      name: "Šopský salát",
      description: "rajčata, okurka, paprika, balkanský sýr",
      price: "75 Kč",
    },
    {
      grams: "200g",
      name: "Řecký salát",
      description: "rajčata, okurka, paprika, bazalka, balkanský sýr, olivy",
      price: "79 Kč",
    },
    {
      grams: "200g",
      name: "Italský salát",
      description:
        "rukola, sušená rajčata, parmazán, olivy, kapary, olivový olej",
      price: "85 Kč",
    },
    {
      grams: "350g",
      name: "Gurmánský salát",
      description:
        "listové saláty, hovězí grilované plátky, sušená rajčata, pečená nakládaná paprika, kapary",
      price: "179 Kč",
    },
    {
      grams: "350g",
      name: "Salát s kozím sýrem",
      description:
        "listové saláty, med, hroznové víno, kozí sýr, jablko,vlašské ořechy",
      price: "185 Kč",
    },
    {
      grams: "350g",
      name: "Salát Caesar",
      description:
        "římský salát, parmazán, anglická slanina, kuřecí maso, česnekový dresink, pečená česneková bagetka",
      price: "169 Kč",
    },
  ],
  "Hovězí roštěná": [
    {
      grams: "500g",
      name: "Highland Steak",
      description: "Přírodně připravený steak přelitý šťávou.",
      price: "419 Kč",
    },
    {
      grams: "300g",
      name: "Pfeffer Steak",
      description: "Steak s omáčkou se 3 druhy pepře.",
      price: "259 Kč",
    },
    {
      grams: "300g",
      name: "Roqueforte Steak",
      description: "steak přelitý omáčkou z modrého sýru.",
      price: "259 Kč",
    },
    {
      grams: "300g",
      name: "Čertovský Steak",
      description:
        "Steak s pikantní omáčkou ze slaniny, cibule, pórku, papriky a kečupu.",
      price: "259 Kč",
    },
    {
      grams: "300g",
      name: "Steak Hříbek",
      description: "Steak přelitý omáčkou z hříbků",
      price: "259 Kč",
    },
    {
      grams: "300g",
      name: "Steak Šípek",
      description: "Steak přelitý omáčkou z šípků a červeného vína.",
      price: "259 Kč",
    },
    {
      grams: "200g",
      name: "Steak Žižkov",
      description: "Steak zapečený s nivou a tymiánem",
      price: "189 Kč",
    },
    {
      grams: "200g",
      name: "Steak Chalupář",
      description: "Steak gratinovaný se slaninou,křenem a uzeným sýrem.",
      price: "189 Kč",
    },
    {
      grams: "200g",
      name: "Hovězí Medailonky",
      description: "Hovězí plátky zapečené rajčaty, bazalkou amozzarelou.",
      price: "179 Kč",
    },
    {
      grams: "150g",
      name: "Hovězí Burritos",
      description:
        "Restované hovězí kousky,paprika, cibule, fazole, to vše zabalené v pšeničné tortille zapečené sýrem, podávané se zakysanou smetanou.",
      price: "179 Kč",
    },
  ],

  Doporučujeme: [
    {
      grams: "250g",
      name: "Telecí Tri-tip Steak ( Maminha )",
      description:
        "Tri-tip je trojúhelníkový sval pod nízkým roštěncem s tukovým krytím, jež masu dodává výraznou chuť. ( Marinované žampiony )",
      price: "248 Kč",
    },
    {
      grams: "200g",
      name: "Hovězí Flank Steak",
      description:
        "Flank je vnější část pupku a jedno z nejlepších a nejvíce nabízených zahraničních mas. Je libové bez tukového krytí. ( BBQ omáčka )",
      price: "248 Kč",
    },
    {
      grams: "250g",
      name: "Telecí Hanger Steak",
      description:
        "Jedná se o brániční sval bez bez tukového krytí. Maso je libové s jemnou chutí. ( Bylinkové máslo )",
      price: "248 Kč",
    },
    {
      grams: "250g",
      name: "Telecí Spider Steak",
      description:
        "Jedná se o maso z pánevní jamky - vyjímečný masový řez, který je v Čechách nazývaný pavouček. Tukové mramorování, které připomíná pavoučí síť se při přípravě rozpouští a dodává masu výraznou chuť. Steak je tudíž masitější. ( jogurtový dip z dijonské hořčice s pažitkou )",
      price: "248 Kč",
    },
  ],

  "Hovězí svíčková": [
    {
      grams: "500g",
      name: "Biftek Jack Daniel's",
      description: "s omáčkou ze slaniny česneku a barevného pepře",
      price: "729 Kč",
    },
    {
      grams: "200g",
      name: "Biftek Roqueforte",
      description: "s omáčkou z modrého sýru",
      price: "319 Kč",
    },
    {
      grams: "200g",
      name: "Biftek Staré časy",
      description: "se šunkou a sázeným vejcem",
      price: "319 Kč",
    },
    {
      grams: "200g",
      name: "Biftek na pepři",
      description: "přelitý přírodní omáčkou se zeleným pepřem",
      price: "319 Kč",
    },
    {
      grams: "200g",
      name: "Biftek s bylinkovým máslem",
      description: "přírodně připravený s bylinkovým máslem",
      price: "319 Kč",
    },
    {
      grams: "250g",
      name: "Biftečky na jehle",
      description: "grilované plátky svíčkové prokládané cibulí a slaninou",
      price: "299 Kč",
    },
    {
      grams: "200g",
      name: "Tatarský biftek",
      description: "6 kusů topinek, objednávky 24 hodin předem",
      price: "319 Kč",
    },
  ],
  "Kuřecí maso": [
    {
      grams: "200g",
      name: "Kuře paní Sisi",
      description: "kuřecí kousky se smetanou, sýrem a rozmarýnem",
      price: "149 Kč",
    },
    {
      grams: "200g",
      name: "Kuřecí polibek",
      description: "grilované prsíčko na česneku zapečené nivou",
      price: "149 Kč",
    },
    {
      grams: "200g",
      name: "Steak Křupák",
      description:
        "prsíčko smažené v kukuřičných lupínkách s česnekovým dresinkem, citrón",
      price: "149 Kč",
    },
    {
      grams: "200g",
      name: "Kuřecí prso s parmazánovou krustou",
      description: "do zlatova opečená kuřecí prsa s parmazánovou krustou",
      price: "165 Kč",
    },
  ],
  "Norský losos": [
    {
      grams: "150g",
      name: "Losos na grilu",
      description: "grilovaný steak z lososa",
      price: "195 Kč",
    },
    {
      grams: "150g",
      name: "Losos pečený",
      description:
        "steak z lososa podávaný na listovém špenátu se smetanou, česnekem, vlašskými ořechy a citronem",
      price: "209 Kč",
    },
  ],
  Přílohy: [
    {
      name: "Krokety",
      price: "49 Kč",
    },
    {
      name: "Americké brambory",
      price: "49 Kč",
    },
    {
      name: "Steakové hranolky",
      price: "49 Kč",
    },
    {
      grams: "4ks",
      name: "Bramboráčky",
      price: "49 Kč",
    },
    {
      name: "Fazolové lusky",
      description: "se slaninou a česnekem",
      price: "55 Kč",
    },
    {
      name: "Mexické fazole",
      price: "49 Kč",
    },
    {
      name: "Listový špenát s česnekem",
      price: "55 Kč",
    },
    {
      name: "Čerstvá zelenina",
      description: "rajčata, okurka, paprika",
      price: "55 Kč",
    },
    {
      name: "Dušené zelenina",
      price: "55 Kč",
    },
    {
      name: "Pikantní kukuřice",
      description: "kukuřičná zrna",
      price: "49 Kč",
    },
    {
      name: "Rýže",
      price: "49 Kč",
    },
    {
      name: "Bylinkové máslo",
      price: "25 Kč",
    },
    {
      name: "Steakové omáčky",
      description:
        "Pepřová, Roqueforová, Čertovská, Šípková, Hříbková, omáčka Jack Daniel's",
      price: "39 Kč",
    },
    {
      name: "Tatarská omáčka",
      price: "25 Kč",
    },
    {
      name: "Dresinky",
      description: "česnekový, BBQ",
      price: "25 Kč",
    },
    {
      name: "Dip pažitkový",
      description: "z jogurtu, pažitky a dijonské hořčice",
      price: "25 Kč",
    },
    {
      grams: "2ks",
      name: "Pečivo",
      description: "chleba, toust",
      price: "20 Kč",
    },
    {
      name: "Česneková bageta",
      price: "49 Kč",
    },
    {
      name: "Box + Taška",
      price: "15 Kč",
    },
  ],
  Dezerty: [
    {
      name: "Zmrzlina s lesním ovocem",
      description: "vanilková zmrzlina s horkým lesním ovocem a šlehačkou",
      price: "79 Kč",
    },
    {
      name: "Smažený banán se zmrzlinou",
      description: "zabalený v tortille s vanilkovou zmrzlinou a šlehačkou",
      price: "85 Kč",
    },
    {
      name: "Panna cotta",
      description: "s lesním ovocem a portským vínem",
      price: "79 Kč",
    },
  ],
};
