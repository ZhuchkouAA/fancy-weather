!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){var a=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,n,t){"use strict";var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function s(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},a=[],r=0;r<e.length;r++){var i=e[r],c=n.base?i[0]+n.base:i[0],l=t[c]||0,u="".concat(c," ").concat(l);t[c]=l+1;var d=s(u),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(o[d].references++,o[d].updater(m)):o.push({identifier:u,updater:f(m,n),references:1}),a.push(u)}return a}function l(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=t.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function m(e,n,t,a){var r=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var i=document.createTextNode(r),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(i,o[n]):e.appendChild(i)}}function p(e,n,t){var a=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var h=null,g=0;function f(e,n){var t,a,r;if(n.singleton){var i=g++;t=h||(h=l(n)),a=m.bind(null,t,i,!1),r=m.bind(null,t,i,!0)}else t=l(n),a=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var r=s(t[a]);o[r].references--}for(var i=c(e,n),l=0;l<t.length;l++){var u=s(t[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}t=i}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"* {\n\tpadding: 0;\n\tmargin: 0;\n}\n\nbody {\n\tpadding: 0 50px;\n\tfont-family: 'Jura', sans-serif;\n\tcolor: white;\n\tfont-size: 15px;\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n}\n\nh2 {\n\tfont-size: 3em;\n}\n\nh3 {\n\tfont-size: 2.1em;\n}\n\nh4 {\n\tfont-size: 1.5em;\n}\n\n.degree-container {\n\tfont-size: 7.2em;\n\tmargin-right: 20px;\n}\n\n.degree-sign {\n\tfont-size: 0.4em;\n}\n\n.header {\n\tdisplay: flex;\n\tmargin: 20px 0 0 0;\n\tjustify-content: space-between;\n}\n\n.main {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 20px;\n}\n\n.info {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\t/* border: 1px solid; */\n\tflex-grow: 1;\n}\n\n.map {\n\tmin-width: 400px;\n\t/* border: 1px solid; */\n\tbox-sizing: border-box;\n\tpadding: 3.5em;\n}\n\n.latitude-container, .longitude-container {\n\ttext-align: end;\n}\n\n#map {\n\twidth: 300px;\n\theight: 300px;\n\tclip-path: polygon(0% 0%, 100% 0%, 100% 89%, 80% 89%, 75% 100%, 70% 89%, 0 88%);\n\tborder-radius: 10px;\n}\n\n.weatcher-discription {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.discription-icon {\n\twidth: 200px;\n}\n\n.discription-text {\n\tfont-size: 1.5em;\n}\n\n.weatcher-parameters {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.other span{\n\tfont-size: 1.5em;\n}\n\n.future-container {\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: space-around;\n}\n\n.future {\n\tborder: 1px solid white;\n\tmin-width: 28%;\n\tborder-radius: 10px;\n\tpadding: 5px;\n\ttext-align: center;\n}\n\n.future:nth-child(2) {\n\tmargin: 0 20px;\n}\n\n.future img {\n\twidth: 100px;\n}\n\n.date-future {\n\tfont-size: 1.32em;\n}\n\n.degree-future {\n\tfont-size: 3em;\n}\n\n.degree-sign-future {\n\tfont-size: 2em;\n}\n\n.btn, .input-search {\n\tbackground-color: transparent;\n\tpadding: 5px 10px;\n\tborder: 2px solid rgb(200,200,200);\n\toutline: none;\n\tcolor: white;\n\tborder-radius: 5px;\n\tfont-family: 'Jura', sans-serif;\n\tfont-size: 1.2em;\n}\n\n.btn {\n\tcursor: pointer;\n}\n\n.btn:hover {\n\tbackground: rgba(186,210,255,.6);\n    transition: .2s linear;\n}\n\n.background-switcher, .be-lang {\n\tmargin-right: 10px;\n}\n\n@media (max-width: 1000px) {\n  .main {\n\t\tflex-direction: column;\n\t}\n\n\t.map {\n\t\tdisplay: flex;\n\t\tpadding: 0;\n\t\tmargin-top: 15px;\n\t}\n\n\t.mapboxgl-map {\n\t\talign-self: end;\n\t\tmargin-top: 15px;\n\t}\n\n\t#map {\n\t\twidth: 500px;\n\t\tclip-path: polygon(0% 0%, 86% 0, 100% 0, 89% 10%, 89% 100%, 0 100%, 0% 75%);\n\t}\n}\n\n@media (max-width: 720px) {\n\t.header {\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t}\n\n\t.search {\n\t\tmargin-top: 10px;\n\t}\n\n\tbody {\n\t\tfont-size: 13px;\n\t}\n}\n\n@media (max-width: 520px) {\n\t.future-container {\n\t\tflex-direction: column;\n\t\tmargin-top: 10px;\n\t}\n\n\t.icon-future {\n\t\twidth: 70px;\n\t}\n\n\tbody {\n\t\tpadding: 0 20px;\n\t}\n\n\t.future {\n\t\tpadding: 0;\n\t}\n\n\t.future:nth-child(2) {\n    margin: 10px 0;\n\t}\n\n\t.map {\n\t\tflex-direction: column;\n\t\tmin-width: 200px;\n\t}\n\n\t#map {\n\t\twidth: 100%;\n\t\tclip-path: polygon(0% 0%, 100% 0%, 100% 89%, 49% 89%, 46% 100%, 42% 89%, 0 89%);\n\t}\n\n\t.longitude-container, .latitude-container {\n\t\ttext-align: center;\n\t}\n}\n\n@media (max-width: 420px) {\n\t.btn, .input-search {\n\t\tpadding: 5px;\n\t}\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var r=(o=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var o,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);a&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n){null===localStorage.getItem("myObj")&&localStorage.setItem("myObj",JSON.stringify({lang:0,degree:"celsium"})),window.myObj={apiKey:"trnsl.1.1.20200508T115458Z.f858c926c4aeb756.c6744a1ebf669f59c14f93c53ae668fc4fa6b239"}},function(e,n){function t(){fetch("https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=9GE8NqNemc4GOolDRCXao54HevWjR_CoaZ7vBPJMuMw").then(e=>e.json()).then(e=>{const n=e.urls.regular,t=document.querySelector("body"),{backgroundImage:a}=t.style,r=a.indexOf("http");t.style.backgroundImage=a.slice(0,r)+n})}t(),document.querySelector(".background-switcher").addEventListener("click",t)},function(e,n,t){"use strict";t.r(n);t(0),t(4);const a={0:["January","Января","Студзеня"],1:["February","Февраля","Лютага"],2:["March","Марта","Сакавіка"],3:["April","Апреля","Красавіка"],4:["May","Мая","Мая"],5:["June","Июня","Чэрвеня"],6:["July","Июля","Ліпеня"],7:["August","Августа","Жніўня"],8:["September","Сентября","Верасня"],9:["October","Октября","Кастрычніка"],10:["November","Ноября","Лістапада"],11:["December","Декабря","Снежня"]},r={0:["Sunday","Воскресенье","Нядзеля"],1:["Monday","Понедельник","Панядзелак"],2:["Tuesday","Вторник","Аўторак"],3:["Wednesday","Среда","Серада"],4:["Thursday","Четверг","Чацвер"],5:["Friday","Пятница","Пятніца"],6:["Saturday","Суббота","Субота"]},i={2:{200:"навальніца з невялікім дажджом",201:"навальніца з дажджом",202:"навальніца з моцным дажджом",210:"невялікая навальніца",211:"навальніца",212:"моцная навальніца",221:"навальніца",230:"навальніца з невялікай імглой",231:"навальніца з імглой",232:"навальніца з моцнай імглой",300:"невялікая імгла",301:"лёгкі дождж, імгла",302:"кароткачасовы дождж",310:"невялікая імгла з дажджом",311:"лёгкі дождж",312:"лёгкі інтэнсіўны дождж",313:"кароткачасовы дождж з імглой",314:"моцны кароткачасовы дождж з імглой",321:"кароткачасовая імгла",500:"лёгкі дождж",501:"умераны дождж",502:"моцны дождж",503:"вельмі моцны дождж",504:"лівень",511:"дождж з градам",520:"лёгкі кароткачасовы дождж",521:"кароткачасовы дождж",522:"моцны кароткачасовы дождж",531:"кароткачасовыя дажджы",600:"невялікі снег",601:"снег",602:"моцны снег",611:"мокры снег",612:"кароткачасовы мокры снег",615:"лёгкі снег з дажджом",616:"снег з дажджом",620:"лёгкі кароткачасовы снег",621:"кароткачасовы снег",622:"моцны кароткачасовы снег",701:"туман",711:"дым",721:"лёгкі туман",731:"віхор пяску і пылу",741:"туман",751:"пясок",761:"пыл",762:"вулканічны попел",771:"шквалы",781:"тарнада",800:"ясна",801:"невялікая воблачнасць",802:"воблачна",803:"пераменная воблачнасць",804:"пахмурна"},1:{200:"гроза с небольшим дождем",201:"гроза с дождем",202:"гроза с проливным дождем",210:"слабая гроза",211:"гроза",212:"сильная гроза",221:"гроза",230:"гроза со слабым туманом",231:"гроза с туманом",232:"гроза с сильным туманом",300:"слабый туман",301:"легкий дождь, туман",302:"кратковременный дождь",310:"легкий туман с дождем",311:"легкий дождь",312:"легкий сильный дождь",313:"кратковременный дождь с туманом",314:"сильный кратковременный дождь с туманом",321:"кратковременный туман",500:"легкий дождь",501:"умеренный дождь",502:"сильный дождь",503:"очень сильный дождь",504:"дождь",511:"дождь с градом",520:"легкий прерывистый дождь",521:"кратковременный дождь",522:"сильный прерывистый дождь",531:"кратковременные дожди",600:"легкий снег",601:"снег",602:"сильный снегопад",611:"мокрый снег",612:"кратковременный мокрый снег",615:"легкий снег с дождем",616:"снег с дождем",620:"кратковременный легкий снег",621:"кратковременный снег",622:"кратковременный сильный снегопад",701:"туман",711:"дым",721:"легкий туман",731:"вихрь песка и пыли",741:"туман",751:"песок",761:"пыль",762:"вулканический пепел",771:"шквалы",781:"торнадо",800:"ясно",801:"слегка облачно",802:"облачно",803:"переменная облачность",804:"пасмурно"},0:{200:"thunderstorm with light rain",201:"thunderstorm with rain",202:"thunderstorm with heavy rain",210:"light thunderstorm",211:"thunderstorm",212:"heavy thunderstorm",221:"ragged thunderstorm",230:"thunderstorm with light drizzle",231:"thunderstorm with drizzle",232:"thunderstorm with heavy drizzle",300:"light intensity drizzle",301:"drizzle",302:"heavy intensity drizzle",310:"light intensity drizzle rain",311:"drizzle rain",312:"heavy intensity drizzle rain",313:"shower rain and drizzle",314:"heavy shower rain and drizzle",321:"shower drizzle",500:"light rain",501:"moderate rain",502:"heavy intensity rain",503:"very heavy rain",504:"extreme rain",511:"freezing rain",520:"light intensity shower rain",521:"shower rain",522:"heavy intensity shower rain",531:"ragged shower rain",600:"light snow",601:"Snow",602:"Heavy snow",611:"Sleet",612:"Light shower sleet",615:"Light rain and snow",616:"Rain and snow",620:"Light shower snow",621:"Shower snow",622:"Heavy shower snow",701:"mist",711:"Smoke",721:"Haze",731:"sand/ dust whirls",741:"fog",751:"sand",761:"dust",762:"volcanic ash",771:"squalls",781:"tornado",800:"clear sky",801:"few clouds",802:"scattered clouds",803:"broken clouds",804:"overcast clouds"}},o={apparentTemp:["Apparent Temperature:","Кажущаяся температура","Уяўная тэмпература:"],wind:["Wind:","Скорость ветра:","Хуткасць ветру:"],humidity:["Humidity:","Влажность:","Вільготнасць:"],latitude:["Latitude: ","Широта: ","Шырата: "],longitude:["Longitude: ","Долгота: ","Даўгата: "],speed:["m/s","м/с","м/с"]},s={AB:"Abkhazia",AD:"Andorra",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",Alpha2:"На английском",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei Darussalam",BO:"Bolivia, plurinational state of",BQ:"Bonaire, Sint Eustatius and Saba",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos (Keeling) Islands",CD:"Congo, Democratic Republic of the",CF:"Central African Republic",CG:"Congo",CH:"Switzerland",CI:"Cote d'Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CU:"Cuba",CV:"Cape Verde",CW:"Curaçao",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands (Malvinas)",FM:"Micronesia, Federated States of",FO:"Faroe Islands",FR:"France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran, Islamic Republic of",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"Korea, Democratic People's republic of",KR:"Korea, Republic of",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Lao People's Democratic Republic",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libyan Arab Jamahiriya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin (French Part)",MG:"Madagascar",MH:"Marshall Islands",MK:"Macedonia, The Former Yugoslav Republic Of",ML:"Mali",MM:"Burma",MN:"Mongolia",MO:"Macao",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NR:"Nauru",NU:"Niue",NZ:"New Zealand",OM:"Oman",OS:"South Ossetia",PA:"Panama",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn",PR:"Puerto Rico",PS:"Palestinian Territory, Occupied",PT:"Portugal",PW:"Palau",PY:"Paraguay",QA:"Qatar",RE:"Reunion",RO:"Romania",RS:"Serbia",RU:"Russian Federation",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena, Ascension And Tristan Da Cunha",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",SS:"South Sudan",ST:"Sao Tome and Principe",SV:"El Salvador",SX:"Sint Maarten",SY:"Syrian Arab Republic",SZ:"Swaziland",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan, Province of China",TZ:"Tanzania, United Republic Of",UA:"Ukraine",UG:"Uganda",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Holy See (Vatican City State)",VC:"Saint Vincent and the Grenadines",VE:"Venezuela",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WS:"Samoa",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe"};mapboxgl.accessToken="pk.eyJ1Ijoiemh1Y2hrb3VhYSIsImEiOiJja2FzOXhnbnUwaG54MnRtc2RlaHZrZWpqIn0.i105rOdEz30VEGpxrvUtlA";var c=function(e){const n=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/dark-v10",center:e,zoom:10});(new mapboxgl.Marker).setLngLat(e).addTo(n)};function l(){let{lang:e}=JSON.parse(localStorage.getItem("myObj"));0===e&&(e="en"),1===e&&(e="ru"),2===e&&(e="be");const n=document.querySelector(".town"),t=document.querySelector(".country"),a=`${n.innerText}, ${t.innerText}`;fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${window.myObj.apiKey}&text=${a}&lang=${e}`).then(e=>e.json()).then(e=>{const a=e.text[0],r=a.indexOf(",");n.innerHTML=a.slice(0,r),t.innerHTML=a.slice(r+1)})}function u(){const{lang:e}=JSON.parse(localStorage.getItem("myObj"));document.querySelectorAll("[data-i18n]").forEach(n=>{const t=n,a=t.getAttribute("data-i18n");t.innerHTML=o[a][e]})}function d(){const{lang:e}=JSON.parse(localStorage.getItem("myObj"));[...document.querySelectorAll(".weather-text-future"),document.querySelector(".discription-text")].forEach(n=>{const t=n;t.innerHTML=i[e][+t.getAttribute("data-id")]})}function m(e){const n=JSON.parse(localStorage.getItem("myObj"));e.target.classList.contains("ru-lang")?(n.lang=1,localStorage.setItem("myObj",JSON.stringify(n))):e.target.classList.contains("en-lang")?(n.lang=0,localStorage.setItem("myObj",JSON.stringify(n))):e.target.classList.contains("be-lang")&&(n.lang=2,localStorage.setItem("myObj",JSON.stringify(n))),u(),d(),l()}function p(e){const n=[...document.querySelectorAll(".degree-future"),document.querySelector(".degree"),document.querySelector(".apparent-temperature")],t=document.querySelectorAll(".sign");"celsium"===e.degree?(n.forEach(e=>{const n=e;n.innerHTML=Math.round(5*(n.innerHTML-32)/9)}),t.forEach(e=>{e.innerHTML="°C"})):"fahrenheit"===e.degree&&(n.forEach(e=>{const n=e;n.innerHTML=Math.round(9*n.innerHTML/5+32)}),t.forEach(e=>{e.innerHTML="°F"}))}setInterval((function(){const{lang:e}=JSON.parse(localStorage.getItem("myObj")),n=new Date,t=n.getDay(),i=n.getMonth();document.querySelector(".date").innerHTML=`${r[t][e]} ${n.getDate()} ${a[i][e]}`;const o=document.querySelectorAll(".date-future");for(let t=1;t<=o.length;t+=1){let a=n.getTime();a+=864e5*t;const i=new Date(a),s=i.getDate()>9?i.getDate():"0"+i.getDate();o[t-1].innerHTML=`${r[i.getDay()][e]}, ${s}/${i.getMonth()}`}const s=n.getHours();let c=n.getMinutes(),l=n.getSeconds();l<10&&(l="0"+l),c<10&&(c="0"+c),document.querySelector(".time").innerHTML=`${s}:${c}:${l}`}),1e3),document.querySelector(".ru-lang").addEventListener("click",m),document.querySelector(".en-lang").addEventListener("click",m),document.querySelector(".be-lang").addEventListener("click",m);var h=p;function g(e){const n=JSON.parse(localStorage.getItem("myObj"));e.target.classList.contains("celsium")&&"celsium"!==n.degree?(n.degree="celsium",localStorage.setItem("myObj",JSON.stringify(n)),p(n)):e.target.classList.contains("fahrenheit")&&"fahrenheit"!==n.degree&&(n.degree="fahrenheit",localStorage.setItem("myObj",JSON.stringify(n)),p(n))}function f(e,n,t){u(),c(e),function(e,n){const t=s[n];document.querySelector(".town").innerHTML=e,document.querySelector(".country").innerHTML=t}(n,t),function(e){const n=`https://api.openweathermap.org/data/2.5/weather?lat=${e[1]}&lon=${e[0]}&appid=ebe0e24655e30a0e9f2df9f1b0888fa6`;fetch(n).then(e=>e.json()).then(e=>{const n=document.querySelector(".discription-text");n.innerHTML=e.weather[0].description,n.setAttribute("data-id",e.weather[0].id),document.querySelector(".discription-icon").src=`./assets/animated/${e.weather[0].icon}.svg`,document.querySelector(".degree").innerHTML=Math.round(e.main.temp-273.15),document.querySelector(".apparent-temperature").innerHTML=Math.round(e.main.feels_like-273.15),document.querySelector(".wind").innerHTML=e.wind.speed,document.querySelector(".humidity").innerHTML=e.main.humidity+"%"})}(e),function(e){const n=document.querySelectorAll(".future"),t=new Date;t.setHours(12),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0);const a=t.getTime(),r=[];for(let e=1;e<=n.length;e+=1)r.push(a+864e5*e);const i=`https://api.openweathermap.org/data/2.5/forecast?lat=${e[1]}&lon=${e[0]}&appid=ebe0e24655e30a0e9f2df9f1b0888fa6`;fetch(i).then(e=>e.json()).then(e=>{const t=[];e.list.forEach(e=>{-1!==r.indexOf(1e3*e.dt)&&(t[r.indexOf(1e3*e.dt)]={id:e.weather[0].id,description:e.weather[0].description,icon:e.weather[0].icon,temp:e.main.temp})}),n.forEach((e,n)=>{const a=e,r=a.querySelector(".weather-text-future");r.innerHTML=t[n].description,r.setAttribute("data-id",t[n].id),a.querySelector(".degree-future").innerHTML=Math.round(t[n].temp-273.15),a.querySelector(".icon-future").src=`./assets/animated/${t[n].icon}.svg`});const a=JSON.parse(localStorage.getItem("myObj"));"fahrenheit"===a.degree&&h(a),0!==a.lang&&(d(),l())})}(e),document.querySelector(".latitude").innerHTML=Math.round(1e4*e[1])/1e4,document.querySelector(".longitude").innerHTML=Math.round(1e4*e[0])/1e4}document.querySelector(".celsium").addEventListener("click",g),document.querySelector(".fahrenheit").addEventListener("click",g);var y=f;fetch("https://ipinfo.io/json?token=2efb72975069a4").then(e=>e.json()).then(e=>{f([e.loc.split(",")[1],e.loc.split(",")[0]],e.city,e.country)}).catch(e=>{console.dir(e)});t(5);document.querySelector(".form").addEventListener("submit",(function(e){let n;e.preventDefault();let t=document.querySelector(".input-search").value;const a=`https://api.opencagedata.com/geocode/v1/json?q=${t}&key=b902241786f449fbbda1493523d5e428&pretty=1&no_annotations=1`,r=`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${window.myObj.apiKey}&text=${t}&lang=en`;Promise.all([fetch(a),fetch(r)]).then(([e,t])=>(n=e.json(),t.json())).then(e=>(t=e.text[0],n)).then(e=>{const n=e.results[0].geometry.lat,a=[e.results[0].geometry.lng.toString(),n.toString()],r=e.results[0].components["ISO_3166-1_alpha-2"];console.log(a,t,r),y(a,t,r),document.querySelector(".input-search").value=""}).catch(e=>{console.dir(e)})}))}]);
//# sourceMappingURL=app.bundle.js.map