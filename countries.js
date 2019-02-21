const countries = {
  portugal: {
    city: "Faro",
    todo: "Visit private beaches",
    cuisine: "Good steaks and sangria",
    image: "https://www.lastminute.com/flights/lastminute/img/faro.jpg",
    language: "Portuguese",
    tip: "Visit Faz Gostos, a Michelin Star restaurant"
  },

  malta: {
    city: "Mellieha",
    todo: "Visit the beaches and churches",
    cuisine: "Mediterranean",
    image:
      "https://i1.wp.com/historyfangirl.com/wp-content/uploads/2015/10/dsc_0679.jpg?resize=750%2C545&ssl=1",
    language: "English",
    tip: "Go to Comino island and visit the Blue Lagoon"
  },

  cyprus: {
    city: "Paphos",
    todo: "Visit private beaches",
    cuisine: "Combination of Greek and Turkish cuisine",
    image:
      "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Cyprus/cyprus-36h-paphos.jpg?imwidth=450",
    language: "Greek",
    tip: "Visit Tombs of the Kings, a large, ancient necropolis with tombs "
  },

  sweden: {
    city: "Stockholm",
    todo: "Visit the old city- Gamla Stan",
    cuisine: "Swedish Meatballs",
    image:
      "https://9qjzgzbyth-flywheel.netdna-ssl.com/wp-content/uploads/2014/08/stockholm-travel-guide.jpg",
    language: "Swedish",
    tip: "Don't ask people if they speak English, they all do!"
  },

  turkey: {
    city: "Istanbul",
    todo: "Visit beautiful historic buildings",
    cuisine: "Meat-based foods such as kebabs and koftes(meatballs)",
    image:
      "https://www.roadaffair.com/wp-content/uploads/2017/10/istanbul-nigth-turkey-shutterstock_250783048-1024x698.jpg",
    language: "Turkish",
    tip:
      "Visit Blue Mosque and the Grand Bazaar, an amazing religious building and a famous marketplace"
  },

  iceland: {
    city: "Reykjavík",
    todo: "Drive around ring road and enjoy the beautiful views",
    cuisine: "Weird seafood like whale and eel",
    image:
      "https://guidetoiceland.is/image/437199/x/0/northern-lights-in-all-the-colors-of-the-rainbow-dance-across-the-sky-in-iceland-6.jpg",
    language: "Icelandic",
    tip: "April is a good time to go whale watching"
  },

  japan: {
    city: "Tokyo",
    todo:
      "Visit the Golden Gai, it's an area with loads of weird small bars which hold a maximum of five people",
    cuisine: "Weird seafood like whale and eel",
    image:
      "https://lonelyplanetimages.imgix.net/a/g/hi/t/512d769cd0d5e56c238eb975d2325940-japan.jpeg?sharp=10&vib=20&w=1200",
    language: "Japanese",
    tip:
      "Spring to catch the cherry blossoms or autumn to catch the leaves falling"
  }
};

const allCountries = function(countries) {
  return countries;
};

const specificCountry = function(name) {
  return countries[name];
};

const getCity = function(name) {
  return countries[name].city;
};

module.exports = {
  allCountries,
  specificCountry,
  getCity
};
