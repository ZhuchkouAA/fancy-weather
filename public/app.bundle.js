!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n,t){var a=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,n,t){"use strict";var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function c(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},a=[],r=0;r<e.length;r++){var i=e[r],s=n.base?i[0]+n.base:i[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var u=c(d),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(o[u].references++,o[u].updater(m)):o.push({identifier:d,updater:g(m,n),references:1}),a.push(d)}return a}function l(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=t.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function m(e,n,t,a){var r=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(n,r);else{var i=document.createTextNode(r),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(i,o[n]):e.appendChild(i)}}function h(e,n,t){var a=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,y=0;function g(e,n){var t,a,r;if(n.singleton){var i=y++;t=p||(p=l(n)),a=m.bind(null,t,i,!1),r=m.bind(null,t,i,!0)}else t=l(n),a=h.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var r=c(t[a]);o[r].references--}for(var i=s(e,n),l=0;l<t.length;l++){var d=c(t[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=i}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,'.promo {\n  font-size: 1.5em;\n\n  position: absolute;\n  z-index: 5;\n\n  width: 70%;\n  height: 70%;\n  padding: 30px;\n\n  color: white;\n  background-color: rgb(35, 35, 36);\n}\n\n.promo-disable {\n  display: none;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Jura", sans-serif;\n  font-size: 15px;\n  padding: 0 50px;\n  color: white;\n}\n\n.background,\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.overlay {\n  z-index: -1;\n  background: rgba(0,0,0,0.7);\n}\n\n.background {\n  z-index: -2;\n  transition: 0.5s linear;\n  object-fit: cover;\n}\n\nh2 {\n  font-size: 3em;\n}\n\nh3 {\n  font-size: 2.1em;\n}\n\nh4 {\n  font-size: 1.5em;\n}\n\n.degree-container {\n  font-size: 7.2em;\n  margin-right: 20px;\n}\n\n.degree-sign {\n  font-size: 0.4em;\n}\n\n.header {\n  display: flex;\n  margin: 20px 0 0 0;\n  justify-content: space-between;\n}\n\n.main {\n  display: flex;\n  margin-top: 20px;\n  justify-content: space-between;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 1;\n}\n\n.search {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.btn-microphone {\n  position: absolute;\n}\n\n.errors {\n  width: 200px;\n  height: 35px;\n  margin-top: 5px;\n  color: white;\n}\n\n.map {\n  box-sizing: border-box;\n  min-width: 400px;\n  padding: 3.5em;\n}\n\n.latitude-container,\n.longitude-container {\n  text-align: end;\n}\n\n#map {\n  width: 300px;\n  height: 300px;\n  border-radius: 10px;\n  clip-path: polygon(0% 0%, 100% 0%, 100% 89%, 80% 89%, 75% 100%, 70% 89%, 0 88%);\n}\n\n.weatcher-discription {\n  display: flex;\n  align-items: center;\n}\n\n.discription-icon {\n  width: 200px;\n}\n\n.discription-text {\n  font-size: 1.5em;\n}\n\n.weatcher-parameters {\n  display: flex;\n  align-items: center;\n}\n\n.other span {\n  font-size: 1.5em;\n}\n\n.future-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n}\n\n.future {\n  min-width: 28%;\n  padding: 5px;\n  text-align: center;\n  border: 1px solid white;\n  border-radius: 10px;\n}\n\n.future:nth-child(2) {\n  margin: 0 20px;\n}\n\n.future img {\n  width: 100px;\n}\n\n.date-future {\n  font-size: 1.32em;\n}\n\n.degree-future {\n  font-size: 3em;\n}\n\n.degree-sign-future {\n  font-size: 2em;\n}\n\n.btn,\n.input-search {\n  font-family: "Jura", sans-serif;\n  font-size: 1.2em;\n\n  padding: 5px 10px;\n\n  color: white;\n  border: 2px solid rgb(200,200,200);\n  border-radius: 5px;\n  outline: none;\n  background-color: transparent;\n}\n\n.input-search {\n  padding-left: 40px;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n.btn-active {\n  background-color: rgba(186,210,255,0.6);\n}\n\n.btn:hover {\n  transition: 0.2s linear;\n  background: rgba(186,210,255,0.6);\n}\n\n.volume-down {\n  transition: 0.2s linear;\n  background-color: rgba(238, 127, 93, 0.6);\n}\n\n.volume-up {\n  transition: 0.2s linear;\n  background-color: rgba(110, 238, 93, 0.6);\n}\n\n.background-switcher,\n.be-lang {\n  margin-right: 10px;\n}\n\n@media (max-width: 1000px) {\n  .main {\n    flex-direction: column;\n  }\n\n  .map {\n    display: flex;\n    margin-top: 15px;\n    padding: 0;\n  }\n\n  .mapboxgl-map {\n    margin-top: 15px;\n    align-self: end;\n  }\n\n  #map {\n    width: 500px;\n    clip-path: polygon(0% 0%, 86% 0, 100% 0, 89% 10%, 89% 100%, 0 100%, 0% 75%);\n  }\n}\n\n@media (max-width: 820px) {\n  .promo {\n    display: none;\n  }\n\n  .header {\n    flex-direction: column;\n    margin-top: 10px;\n    align-items: center;\n  }\n\n  .search {\n    margin-top: 10px;\n  }\n\n  body {\n    font-size: 13px;\n  }\n}\n\n@media (max-width: 520px) {\n  .future-container {\n    flex-direction: column;\n    margin-top: 10px;\n  }\n\n  .icon-future {\n    width: 70px;\n  }\n\n  body {\n    padding: 0 20px;\n  }\n\n  .future {\n    padding: 0;\n  }\n\n  .future:nth-child(2) {\n    margin: 10px 0;\n  }\n\n  .map {\n    flex-direction: column;\n    min-width: 200px;\n  }\n\n  #map {\n    width: 100%;\n    clip-path: polygon(0% 0%, 100% 0%, 100% 89%, 49% 89%, 46% 100%, 42% 89%, 0 89%);\n  }\n\n  .longitude-container,\n  .latitude-container {\n    text-align: center;\n  }\n}\n\n@media (max-width: 420px) {\n  .switches {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .switches .btn {\n    margin-top: 5px;\n  }\n\n  .form {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .input-search {\n    width: 150px;\n  }\n}\n',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var r=(o=a,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var o,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);a&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n){null===localStorage.getItem("myObj")&&localStorage.setItem("myObj",JSON.stringify({lang:0,degree:"celsium"})),window.myObj={apiKey:"trnsl.1.1.20200508T115458Z.f858c926c4aeb756.c6744a1ebf669f59c14f93c53ae668fc4fa6b239",isFirstLoad:!0,volume:.5,isWallpaperLoad:!0},document.querySelector(".promo").addEventListener("dblclick",e=>{e.target.classList.add("promo-disable")})},function(e,n,t){"use strict";t.r(n);t(0),t(4);const a={0:["January","Января","Студзеня"],1:["February","Февраля","Лютага"],2:["March","Марта","Сакавіка"],3:["April","Апреля","Красавіка"],4:["May","Мая","Мая"],5:["June","Июня","Чэрвеня"],6:["July","Июля","Ліпеня"],7:["August","Августа","Жніўня"],8:["September","Сентября","Верасня"],9:["October","Октября","Кастрычніка"],10:["November","Ноября","Лістапада"],11:["December","Декабря","Снежня"]},r={0:["Sunday","Воскресенье","Нядзеля"],1:["Monday","Понедельник","Панядзелак"],2:["Tuesday","Вторник","Аўторак"],3:["Wednesday","Среда","Серада"],4:["Thursday","Четверг","Чацвер"],5:["Friday","Пятница","Пятніца"],6:["Saturday","Суббота","Субота"]},i={2:{200:"навальніца з невялікім дажджом",201:"навальніца з дажджом",202:"навальніца з моцным дажджом",210:"невялікая навальніца",211:"навальніца",212:"моцная навальніца",221:"навальніца",230:"навальніца з невялікай імглой",231:"навальніца з імглой",232:"навальніца з моцнай імглой",300:"невялікая імгла",301:"лёгкі дождж, імгла",302:"кароткачасовы дождж",310:"невялікая імгла з дажджом",311:"лёгкі дождж",312:"лёгкі інтэнсіўны дождж",313:"кароткачасовы дождж з імглой",314:"моцны кароткачасовы дождж з імглой",321:"кароткачасовая імгла",500:"лёгкі дождж",501:"умераны дождж",502:"моцны дождж",503:"вельмі моцны дождж",504:"лівень",511:"дождж з градам",520:"лёгкі кароткачасовы дождж",521:"кароткачасовы дождж",522:"моцны кароткачасовы дождж",531:"кароткачасовыя дажджы",600:"невялікі снег",601:"снег",602:"моцны снег",611:"мокры снег",612:"кароткачасовы мокры снег",615:"лёгкі снег з дажджом",616:"снег з дажджом",620:"лёгкі кароткачасовы снег",621:"кароткачасовы снег",622:"моцны кароткачасовы снег",701:"туман",711:"дым",721:"лёгкі туман",731:"віхор пяску і пылу",741:"туман",751:"пясок",761:"пыл",762:"вулканічны попел",771:"шквалы",781:"тарнада",800:"ясна",801:"невялікая воблачнасць",802:"воблачна",803:"пераменная воблачнасць",804:"пахмурна"},1:{200:"гроза с небольшим дождем",201:"гроза с дождем",202:"гроза с проливным дождем",210:"слабая гроза",211:"гроза",212:"сильная гроза",221:"гроза",230:"гроза со слабым туманом",231:"гроза с туманом",232:"гроза с сильным туманом",300:"слабый туман",301:"легкий дождь, туман",302:"кратковременный дождь",310:"легкий туман с дождем",311:"легкий дождь",312:"легкий сильный дождь",313:"кратковременный дождь с туманом",314:"сильный кратковременный дождь с туманом",321:"кратковременный туман",500:"легкий дождь",501:"умеренный дождь",502:"сильный дождь",503:"очень сильный дождь",504:"дождь",511:"дождь с градом",520:"легкий прерывистый дождь",521:"кратковременный дождь",522:"сильный прерывистый дождь",531:"кратковременные дожди",600:"легкий снег",601:"снег",602:"сильный снегопад",611:"мокрый снег",612:"кратковременный мокрый снег",615:"легкий снег с дождем",616:"снег с дождем",620:"кратковременный легкий снег",621:"кратковременный снег",622:"кратковременный сильный снегопад",701:"туман",711:"дым",721:"легкий туман",731:"вихрь песка и пыли",741:"туман",751:"песок",761:"пыль",762:"вулканический пепел",771:"шквалы",781:"торнадо",800:"ясно",801:"слегка облачно",802:"облачно",803:"переменная облачность",804:"пасмурно"},0:{200:"thunderstorm with light rain",201:"thunderstorm with rain",202:"thunderstorm with heavy rain",210:"light thunderstorm",211:"thunderstorm",212:"heavy thunderstorm",221:"ragged thunderstorm",230:"thunderstorm with light drizzle",231:"thunderstorm with drizzle",232:"thunderstorm with heavy drizzle",300:"light intensity drizzle",301:"drizzle",302:"heavy intensity drizzle",310:"light intensity drizzle rain",311:"drizzle rain",312:"heavy intensity drizzle rain",313:"shower rain and drizzle",314:"heavy shower rain and drizzle",321:"shower drizzle",500:"light rain",501:"moderate rain",502:"heavy intensity rain",503:"very heavy rain",504:"extreme rain",511:"freezing rain",520:"light intensity shower rain",521:"shower rain",522:"heavy intensity shower rain",531:"ragged shower rain",600:"light snow",601:"Snow",602:"Heavy snow",611:"Sleet",612:"Light shower sleet",615:"Light rain and snow",616:"Rain and snow",620:"Light shower snow",621:"Shower snow",622:"Heavy shower snow",701:"mist",711:"Smoke",721:"Haze",731:"sand/ dust whirls",741:"fog",751:"sand",761:"dust",762:"volcanic ash",771:"squalls",781:"tornado",800:"clear sky",801:"few clouds",802:"scattered clouds",803:"broken clouds",804:"overcast clouds"}},o={apparentTemp:["Apparent Temperature:","Кажущаяся температура","Уяўная тэмпература:"],wind:["Wind:","Скорость ветра:","Хуткасць ветру:"],humidity:["Humidity:","Влажность:","Вільготнасць:"],latitude:["Latitude: ","Широта: ","Шырата: "],longitude:["Longitude: ","Долгота: ","Даўгата: "],speed:["m/s","м/с","м/с"]},c={AB:"Abkhazia",AD:"Andorra",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei Darussalam",BO:"Bolivia, plurinational state of",BQ:"Bonaire, Sint Eustatius and Saba",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos (Keeling) Islands",CD:"Congo, Democratic Republic of the",CF:"Central African Republic",CG:"Congo",CH:"Switzerland",CI:"Cote d'Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CU:"Cuba",CV:"Cape Verde",CW:"Curaçao",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands (Malvinas)",FM:"Micronesia, Federated States of",FO:"Faroe Islands",FR:"France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran, Islamic Republic of",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"Korea, Democratic People's republic of",KR:"Korea, Republic of",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Lao People's Democratic Republic",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libyan Arab Jamahiriya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin (French Part)",MG:"Madagascar",MH:"Marshall Islands",MK:"Macedonia, The Former Yugoslav Republic Of",ML:"Mali",MM:"Burma",MN:"Mongolia",MO:"Macao",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NR:"Nauru",NU:"Niue",NZ:"New Zealand",OM:"Oman",OS:"South Ossetia",PA:"Panama",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn",PR:"Puerto Rico",PS:"Palestinian Territory, Occupied",PT:"Portugal",PW:"Palau",PY:"Paraguay",QA:"Qatar",RE:"Reunion",RO:"Romania",RS:"Serbia",RU:"Russian Federation",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena, Ascension And Tristan Da Cunha",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",SS:"South Sudan",ST:"Sao Tome and Principe",SV:"El Salvador",SX:"Sint Maarten",SY:"Syrian Arab Republic",SZ:"Swaziland",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan, Province of China",TZ:"Tanzania, United Republic Of",UA:"Ukraine",UG:"Uganda",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Holy See (Vatican City State)",VC:"Saint Vincent and the Grenadines",VE:"Venezuela",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WS:"Samoa",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe"};mapboxgl.accessToken="pk.eyJ1Ijoiemh1Y2hrb3VhYSIsImEiOiJja2FzOXhnbnUwaG54MnRtc2RlaHZrZWpqIn0.i105rOdEz30VEGpxrvUtlA";var s=function(e){if(window.myObj.isFirstLoad){const n=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/dark-v10",center:e,zoom:10}),t=(new mapboxgl.Marker).setLngLat(e).addTo(n);window.myObj.marker=t,window.myObj.map=n,window.myObj.isFirstLoad=!1}else{const{map:n}=window.myObj,{marker:t}=window.myObj;n.flyTo({center:e}),t.setLngLat(e)}};function l(){const{lang:e}=JSON.parse(localStorage.getItem("myObj")),n=new Date,t=60*n.getTimezoneOffset()*1e3,i=new Date(n.getTime()+t+1e3*window.myObj.timezone),o=i.getDay(),c=i.getMonth();document.querySelector(".date").innerHTML=`${r[o][e]} ${i.getDate()} ${a[c][e]}`;const s=document.querySelectorAll(".date-future");for(let n=1;n<=s.length;n+=1){let t=i.getTime();t+=864e5*n;const a=new Date(t),o=a.getDate()>9?a.getDate():"0"+a.getDate();s[n-1].innerHTML=`${r[a.getDay()][e]}, ${o}/${a.getMonth()}`}const l=i.getHours();let d=i.getMinutes(),u=i.getSeconds();u<10&&(u="0"+u),d<10&&(d="0"+d),document.querySelector(".time").innerHTML=`${l}:${d}:${u}`}!function e(){void 0!==window.myObj.timezone?setInterval(l,1e3):setTimeout(e,500)}();var d=l;function u(){let{lang:e}=JSON.parse(localStorage.getItem("myObj"));0===e&&(e="en"),1===e&&(e="ru"),2===e&&(e="be");const{city:n}=window.myObj.newWeather,{country:t}=window.myObj.newWeather,a=`${n}, ${t}`;return fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${window.myObj.apiKey}&text=${a}&lang=${e}`).then(e=>e.json()).then(e=>{const n=e.text[0],t=n.indexOf(","),a=n.slice(0,t),r=n.slice(t+1);return window.myObj.newWeather.city=a,window.myObj.newWeather.country=r,[a,r]})}function m(){const{lang:e}=JSON.parse(localStorage.getItem("myObj"));document.querySelectorAll("[data-i18n]").forEach(n=>{const t=n,a=t.getAttribute("data-i18n");t.innerHTML=o[a][e]})}function h(){const{lang:e}=JSON.parse(localStorage.getItem("myObj"));[...document.querySelectorAll(".weather-text-future"),document.querySelector(".discription-text")].forEach(n=>{const t=n;t.innerHTML=i[e][+t.getAttribute("data-id")]})}function p(e){const n=JSON.parse(localStorage.getItem("myObj"));e.target.classList.contains("ru-lang")?(n.lang=1,localStorage.setItem("myObj",JSON.stringify(n))):e.target.classList.contains("en-lang")?(n.lang=0,localStorage.setItem("myObj",JSON.stringify(n))):e.target.classList.contains("be-lang")&&(n.lang=2,localStorage.setItem("myObj",JSON.stringify(n))),u().then(e=>{document.querySelector(".town").innerHTML=e[0],document.querySelector(".country").innerHTML=e[1],m(),h(),d()})}function y(e,n){const t=[...document.querySelectorAll(".degree-future"),document.querySelector(".degree"),document.querySelector(".apparent-temperature")],a=document.querySelectorAll(".sign");"celsium"===e.degree?(n&&t.forEach(e=>{const n=e;n.innerHTML=Math.round(5*(n.innerHTML-32)/9)}),a.forEach(e=>{e.innerHTML="°C"}),document.querySelector(".celsium").classList.add("btn-active"),document.querySelector(".fahrenheit").classList.remove("btn-active")):"fahrenheit"===e.degree&&(n&&t.forEach(e=>{const n=e;n.innerHTML=Math.round(9*n.innerHTML/5+32)}),a.forEach(e=>{e.innerHTML="°F"}),document.querySelector(".celsium").classList.remove("btn-active"),document.querySelector(".fahrenheit").classList.add("btn-active"))}document.querySelector(".ru-lang").addEventListener("click",p),document.querySelector(".en-lang").addEventListener("click",p),document.querySelector(".be-lang").addEventListener("click",p);var g=y;function f(e){const n=JSON.parse(localStorage.getItem("myObj"));e.target.classList.contains("celsium")&&"celsium"!==n.degree?(n.degree="celsium",localStorage.setItem("myObj",JSON.stringify(n)),y(n,!0),document.querySelector(".celsium").classList.add("btn-active"),document.querySelector(".fahrenheit").classList.remove("btn-active")):e.target.classList.contains("fahrenheit")&&"fahrenheit"!==n.degree&&(n.degree="fahrenheit",localStorage.setItem("myObj",JSON.stringify(n)),y(n,!0),document.querySelector(".celsium").classList.remove("btn-active"),document.querySelector(".fahrenheit").classList.add("btn-active"))}function w(e,n){if(!0!==window.myObj.isWallpaperLoad)return;window.myObj.isWallpaperLoad=!1;let t="d"===e?"daytime":"nigth";n<-10&&(t="winter");const a=document.body.scrollWidth>700?"landscape":"portrait";fetch(`https://api.unsplash.com/photos/random?orientation=${a}&per_page=1&query=${t}&client_id=9GE8NqNemc4GOolDRCXao54HevWjR_CoaZ7vBPJMuMw`).then(e=>e.json()).then(e=>{const n=document.createElement("img");n.alt="wallpaper",n.className="background",n.style.opacity=0;const t=document.querySelector(".background-container"),a=document.querySelector(".background");n.onload=()=>{a.style.opacity=0,t.append(n),setTimeout(()=>{n.style.opacity=1},50),setTimeout(()=>{t.removeChild(a),window.myObj.isWallpaperLoad=!0},500)};const r=e.urls.regular;n.src=r}).catch(e=>{const n=JSON.parse(localStorage.getItem("myObj"));console.log(e),0===n.lang&&(document.querySelector(".errors").innerHTML="request limit exceeded"),1===n.lang&&(document.querySelector(".errors").innerHTML="превышен лимит запросов"),2===n.lang&&(document.querySelector(".errors").innerHTML="перавышаны ліміт запытаў")})}document.querySelector(".celsium").addEventListener("click",f),document.querySelector(".fahrenheit").addEventListener("click",f),document.querySelector(".background-switcher").addEventListener("click",()=>{const e=+document.querySelector(".degree").innerText,n=document.querySelector(".discription-icon").src;w(n[n.length-5],e)});var b=w;function S(e){const n=document.querySelectorAll(".icon-future"),t=[];n.forEach(()=>{const e=document.createElement("img");e.className="icon-future",t.push(e)});const a=document.createElement("img");a.className="discription-icon";const r=document.querySelector(".discription-icon"),i=[new Promise((e,n)=>{a.onload=()=>{e()},a.error=()=>{n()}})];t.forEach(e=>{const n=e;i.push(new Promise((e,t)=>{n.onload=()=>{e()},n.error=()=>{t()}}))}),Promise.all(i).then(()=>{if(n.forEach((e,n)=>{e.replaceWith(t[n])}),r.replaceWith(a),function(){const e=document.querySelector(".discription-text");e.innerHTML=window.myObj.newWeather.discriptionText,e.setAttribute("data-id",window.myObj.newWeather.discriptionTextDataId),document.querySelector(".degree").innerHTML=window.myObj.newWeather.degree,document.querySelector(".apparent-temperature").innerHTML=window.myObj.newWeather.apparentTemperature,document.querySelector(".wind").innerHTML=window.myObj.newWeather.wind,document.querySelector(".humidity").innerHTML=window.myObj.newWeather.humidity}(),function(){const{futureInfo:e}=window.myObj.newWeather;document.querySelectorAll(".future").forEach((n,t)=>{const a=n,r=a.querySelector(".weather-text-future");r.innerHTML=e[t].description,r.setAttribute("data-id",e[t].id);let i=e[t].temp-273.15;"fahrenheit"===JSON.parse(localStorage.getItem("myObj")).degree&&(i=Math.round(9*i/5+32)),a.querySelector(".degree-future").innerHTML=Math.round(i)})}(),window.myObj.isFirstLoad){const{icon:e}=window.myObj.newWeather;b(e[e.length-1],window.myObj.newWeather.degree)}var i,o;i=window.myObj.newWeather.city,o=window.myObj.newWeather.country,document.querySelector(".town").innerHTML=i,document.querySelector(".country").innerHTML=o,s(e),h(),m(),window.myObj.timezone=window.myObj.newWeather.timezone},e=>{console.log(e)});const{futureInfo:o}=window.myObj.newWeather;a.src=window.myObj.newWeather.discriptionIcon,t.forEach((e,n)=>{e.src=`./assets/animated/${o[n].icon}.svg`})}function v(e,n){window.myObj.newWeather={},function(e){const n=`https://api.openweathermap.org/data/2.5/weather?lat=${e[1]}&lon=${e[0]}&appid=ebe0e24655e30a0e9f2df9f1b0888fa6`;fetch(n).then(e=>e.json()).then(e=>{window.myObj.newWeather.timezone=e.timezone;const{icon:n}=e.weather[0];let t=e.main.temp-273.15,a=e.main.feels_like-273.15;"fahrenheit"===JSON.parse(localStorage.getItem("myObj")).degree&&(t=Math.round(9*t/5+32),a=Math.round(9*a/5+32)),window.myObj.newWeather.icon=n,window.myObj.newWeather.discriptionText=e.weather[0].description,window.myObj.newWeather.discriptionTextDataId=e.weather[0].id,window.myObj.newWeather.discriptionIcon=`./assets/animated/${n}.svg`,window.myObj.newWeather.degree=Math.round(t),window.myObj.newWeather.apparentTemperature=Math.round(a),window.myObj.newWeather.wind=e.wind.speed,window.myObj.newWeather.humidity=e.main.humidity+"%"}).catch(e=>{console.dir(e)})}(e),function(e,n){let t=n;const a=new Date,r=60*a.getTimezoneOffset()*1e3;a.setHours(12),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0);const i=new Date(a.getTime()+r);let o=i.getHours();for(;o%3;)o+=1;i.setHours(o);const s=i.getTime(),l=[],d=document.querySelectorAll(".future");for(let e=1;e<=d.length;e+=1)l.push(s+864e5*e-r);const m=`https://api.openweathermap.org/data/2.5/forecast?lat=${e[1]}&lon=${e[0]}&appid=ebe0e24655e30a0e9f2df9f1b0888fa6`;fetch(m).then(e=>e.json()).then(n=>{const{country:a}=n.city;void 0===t&&(t=n.city.name),window.myObj.newWeather.country=void 0!==c[a]?c[a]:"Earth",window.myObj.newWeather.city=t;const r=[];n.list.forEach(e=>{-1!==l.indexOf(1e3*e.dt)&&(r[l.indexOf(1e3*e.dt)]={id:e.weather[0].id,description:e.weather[0].description,icon:e.weather[0].icon,temp:e.main.temp})}),window.myObj.newWeather.futureInfo=r;const i=JSON.parse(localStorage.getItem("myObj"));"fahrenheit"===i.degree&&g(i),0!==i.lang?u().then(()=>{S(e)}):S(e)}).catch(e=>{console.dir(e)})}(e,n);const t=Math.floor(e[1]),a=Math.round(10*(e[1]-t)),r=Math.floor(e[0]),i=Math.round(10*(e[0]-r));document.querySelector(".latitude").innerHTML=`${t}°${a}'`,document.querySelector(".longitude").innerHTML=`${r}°${i}'`}var M=v;function O(e){void 0!==e&&e.preventDefault();const n=document.querySelector(".errors");let t;n.innerHTML="";let a=document.querySelector(".input-search").value;const r=`https://api.opencagedata.com/geocode/v1/json?q=${a}&key=b902241786f449fbbda1493523d5e428&pretty=1&no_annotations=1`,i=`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${window.myObj.apiKey}&text=${a}&lang=en`;Promise.all([fetch(r),fetch(i)]).then(([e,n])=>(t=e.json(),n.json())).then(e=>(a=e.text[0],t)).then(e=>{const n=e.results[0].geometry.lat,t=[e.results[0].geometry.lng.toString(),n.toString()];M(t,a),document.querySelector(".input-search").value=""}).catch(e=>{console.dir(e);const t=JSON.parse(localStorage.getItem("myObj"));0===t.lang&&(n.innerHTML="request error"),1===t.lang&&(n.innerHTML="ошибка запроса"),2===t.lang&&(n.innerHTML="памылка запыту")})}fetch("https://ipinfo.io/json?token=2efb72975069a4").then(e=>e.json()).then(e=>{v([e.loc.split(",")[1],e.loc.split(",")[0]],e.city)}).catch(e=>{console.dir(e)}),document.querySelector(".form").addEventListener("submit",O);var L=O;const x=window.speechSynthesis;function T(){const e=document.querySelector(".voice");if(e.classList.contains("btn-active"))return e.classList.remove("btn-active"),void x.cancel();e.classList.add("btn-active");const n=document.querySelector(".town").innerText,t=document.querySelector(".discription-text").innerText,a=document.querySelector(".degree").innerText,r=document.querySelector(".wind").innerText,i=document.querySelector(".humidity").innerText,o=JSON.parse(localStorage.getItem("myObj")),{lang:c}=o;let s,l,d=o.degree;0===c?(s="en-US",d="celsium"===d?"°C":"°F",l=new SpeechSynthesisUtterance(`Hello. Now in ${n} ${t}, temperature is ${a}${d}, wind speed ${r} meters per second, humidity  ${i}`)):1===c?(s="ru-Ru",d="celsium"===d?"°С":"°F",l=new SpeechSynthesisUtterance(`Здраствуйте. Сейчас в ${n} ${t}, температура составляет ${a}${d}, скорость ветра ${r} метров в секунду, влажность ${i}`)):2===c&&(s="by-By",d="celsium"===d?"°С":"°F",l=new SpeechSynthesisUtterance(`Прывитанне. Зараз у ${n} ${t}, тэмпература складае ${a}${d}, хуткасть ветру ${r} метраў у секунду, вільготнасть ${i}`)),l.lang=s,l.volume=window.myObj.volume,x.speak(l)}document.querySelector(".voice").addEventListener("click",T);var j=T;const I=new webkitSpeechRecognition;function q(){document.querySelector(".voice").classList.add("volume-up"),setTimeout(()=>{document.querySelector(".voice").classList.remove("volume-up")},1e3)}function A(){document.querySelector(".voice").classList.add("volume-down"),setTimeout(()=>{document.querySelector(".voice").classList.remove("volume-down")},1e3)}function C(e){const n=e.results[e.resultIndex];if(n.isFinal){switch(n[0].transcript){case"weather":case"погода":j();break;case"louder":case"громче":window.myObj.volume<1&&(window.myObj.volume+=.1),q();break;case"quieter":case"тише":window.myObj.volume>0&&(window.myObj.volume-=.1),A();break;case"background":case"фон":b();break;default:document.querySelector(".input-search").value=n[0].transcript,L()}document.querySelector(".btn-microphone").classList.remove("btn-active"),document.querySelector(".input-search").value=""}else document.querySelector(".input-search").value=n[0].transcript}I.interimResults=!0,document.querySelector(".btn-microphone").addEventListener("click",(function(e){e.preventDefault();const n=document.querySelector(".btn-microphone");if(n.classList.contains("btn-active"))I.stop(),n.classList.remove("btn-active"),document.querySelector(".input-search").value="";else{n.classList.add("btn-active");const e=JSON.parse(localStorage.getItem("myObj"));0===e.lang&&(I.lang="en-US"),e.lang>0&&(I.lang="ru"),I.onresult=C,I.start()}})),function e(){if(void 0!==window.myObj.map){const{map:e}=window.myObj,{marker:n}=window.myObj;e.on("click",t=>{!function(e,n,t){const a=e.lngLat.wrap(),r=Math.round(1e4*a.lng)/1e4,i=Math.round(1e4*a.lat)/1e4,o=[r.toString(),i.toString()];M(o),n.flyTo({center:o}),t.setLngLat(o)}(t,e,n)})}else setTimeout(e,500)}()}]);
//# sourceMappingURL=app.bundle.js.map