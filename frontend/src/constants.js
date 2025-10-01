import shose from "./assets/categoriesIcon/football-shoes.png";
import goalKeeper from "./assets/categoriesIcon/game.png";
import kids from "./assets/categoriesIcon/karate.png";
import man from "./assets/categoriesIcon/sport.png";
import woman from "./assets/categoriesIcon/sport-clothes.png";
//
import jersey from "./assets/categoriesIcon/football-jersey.png"
import trousers from "./assets/categoriesIcon/trousers.png";
import leggings from "./assets/categoriesIcon/leggings.png";

import runningShose from "./assets/categoriesIcon/running.png";
import descent from "./assets/categoriesIcon/descent-dressing.png";
import shorts from "./assets/categoriesIcon/football-shorts.png";
import walk from "./assets/categoriesIcon/walking.png";
import cutTop from "./assets/categoriesIcon/shirt.png";
import track from "./assets/categoriesIcon/tracksuit.png";
import player from "./assets/categoriesIcon/soccer-player.png";
import games from "./assets/categoriesIcon/games.png"
import glaves from "./assets/categoriesIcon/golf-gloves.png";




//

// export const BASE_URL =
//   process.env.NODE_ENV === 'develeopment' ? 'http://localhost:5000' : '';
export const BASE_URL = ''; // If using proxy
export const PRODUCTS_URL = '/api/products';
export const USERS_URL = '/api/users';
export const ORDERS_URL = '/api/orders';
export const PAYPAL_URL = '/api/config/paypal';



// src/constants.js


export const categories = [
    { name: 'رجالى', icon: man, path: '/categories/رجالى' },
    { name: 'نسائى', icon: woman, path: '/categories/نسائى' },
    { name: 'اطفال', icon: kids, path: '/categories/اطفال' },
    { name: 'حراس المرمى', icon: goalKeeper, path: '/categories/حراس المرمى'},
    { name: 'احذية', icon: shose, path: '/categories/احذية' },
    {name:"ادوات رياضية",icon:man,path:"/categories/ادوات رياضية"}
  ];;

// الأقسام الفرعية
export const subCategoriseList = {
  "رجالى": ["قمصان الاندية", "كاجوال", "شورت", "بنطلون", "ترنجات", "كت ودراى فيت"],
  "نسائى": ["ليجن وبنطلون", "تشيرتات وجواكت", "اكسسوارات"],
  "اطفال": ["اطقم رياضية"],
  "احذية": ["running | خروج", "كرة القدم"],
  "حراس المرمى": ["جونتات", "ملابس حراس"],
  "ادوات رياضية":["العاب"]
};
//details

export const subCategoriseListDetails = {
  "رجالى": [
    { name: "قمصان الاندية", icon: jersey, path: "/categories/رجالى/قمصان الاندية" },
    { name: "كاجوال", icon: descent, path: "/categories/رجالى/كاجوال" },
    { name: "شورت", icon: shorts, path: "/categories/رجالى/شورت" },
    { name: "بنطلون", icon: trousers, path: "/categories/رجالى/بنطلون" },
    { name: "ترنجات", icon: track, path: "/categories/رجالى/ترنجات" },
    { name: "كت ودراى فيت", icon: cutTop , path: "/categories/رجالى/كت ودراى فيت" },
  ],
  "نسائى": [
    { name: "ليجن وبنطلون", icon: leggings, path: "/categories/نسائى/ليجن وبنطلون" },
    { name: "تشيرتات وجواكت", icon: walk, path: "/categories/نسائى/تشيرتات وجواكت" },
    { name: "اكسسوارات", icon: games, path: "/categories/نسائى/اكسسوارات" },
  ],
  "اطفال": [
    { name: "اطقم رياضية", icon: jersey, path: "/categories/اطفال/اطقم رياضية" },
  ],
  "احذية": [
    { name: "running | خروج", icon: runningShose, path: "/categories/احذية/running | خروج" },
    { name: "كرة القدم", icon: player, path: "/categories/احذية/كرة القدم" },
  ],
  "حراس المرمى": [
    { name: "جونتات", icon: glaves, path: "/categories/حراس المرمى/جونتات" },
    { name: "ملابس حراس", icon: goalKeeper, path: "/categories/حراس المرمى/ملابس حراس" },
  ],
   "ادوات رياضية":[ { name:  "العاب", icon: player, path: "/categories/ادوات رياضية/العاب" },]
};