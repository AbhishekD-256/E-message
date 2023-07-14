/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webapp/./src/sass/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _assets_data_contacts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/data/contacts.json */ \"./src/assets/data/contacts.json\");\n\r\n\r\n\r\nconst themeToggleBtn = document.querySelector(\".js-theme-toggle\");\r\nconst chatList = document.querySelector(\".chat-list\");\r\nconst drawerCol = document.querySelector(\".drawer-column\");\r\n\r\nthemeToggleBtn.addEventListener(\"click\", function () {\r\n  this.classList.toggle(\"clicked\");\r\n  document.body.classList.toggle(\"darkmode\");\r\n});\r\n\r\nconst { contacts } = _assets_data_contacts_json__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\ncontacts.forEach((contact) => {\r\n  const html = `<li class= \"chat-list__item  clickable  fx  gap-sm  ${\r\n    contact.online ? \"online\" : \"\"\r\n  } ${contact.muted ? \"muted\" : \"\"} ${\r\n    contact.unread_messages > 0 ? \"unread\" : \"\"\r\n  }\">\r\n  <div class=\"chat-avatar\">\r\n      <figure class=\"avatar  avatar--lg  lh-0\">\r\n          <img class=\"fill-image\" src=\"${contact.image}\" alt=\"${\r\n    contact.name\r\n  } profile image\">\r\n      </figure>\r\n      <div class=\"indicator\"></div>\r\n  </div>\r\n  <div class=\"chat-info\">\r\n      <div class=\"fx-sb\">\r\n          <h3 class=\"chat-name  font-sm  fw-sb\">${contact.name}</h3>\r\n          <span class=\"last-message-time  font-xsm\">${\r\n            contact.last_message_time\r\n          }</span>\r\n      </div>\r\n      <div class=\"fx-sb\">\r\n          <p class=\"last-message  font-sm\">${contact.last_message}</p>\r\n          <div class=\"unread-msgs  font-xsm  ${\r\n            contact.unread_messages <= 0 ? \"hide\" : \"\"\r\n          }\">${contact.unread_messages}</div>\r\n      </div>\r\n  </div>\r\n</li>`;\r\n\r\n  chatList.insertAdjacentHTML(\"beforeend\", html);\r\n});\r\n\r\nfunction changeUserDetails(user) {\r\n  drawerCol.querySelector(\".user-img\").src = user.image;\r\n  drawerCol.querySelector(\".user-fullname\").textContent = user.name;\r\n  drawerCol.querySelector(\".user-name\").textContent = user.username;\r\n  drawerCol.querySelector(\".user-bio\").textContent = user.bio;\r\n}\r\n\r\nchatList.addEventListener(\"click\", function (e) {\r\n  const selectedContact = e.target.closest(\".chat-list__item\");\r\n  document\r\n    .querySelectorAll(\".chat-list__item\")\r\n    .forEach((item) => item.classList.remove(\"selected\"));\r\n\r\n  selectedContact.classList.add(\"selected\");\r\n\r\n  const userDetails = _assets_data_contacts_json__WEBPACK_IMPORTED_MODULE_1__.contacts.filter((contact) => {\r\n    return (\r\n      contact.name === selectedContact.querySelector(\".chat-name\").textContent\r\n    );\r\n  });\r\n  changeUserDetails(...userDetails);\r\n});\r\n\n\n//# sourceURL=webpack://webapp/./src/index.js?");

/***/ }),

/***/ "./src/assets/data/contacts.json":
/*!***************************************!*\
  !*** ./src/assets/data/contacts.json ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"contacts\":[{\"name\":\"John Doe\",\"username\":\"@johndoe\",\"bio\":\"I am a web developer, and I love coding.\",\"last_message\":\"Hey, how are you?\",\"image\":\"https://randomuser.me/api/portraits/men/4.jpg\",\"last_message_time\":\"10:30 AM\",\"online\":true,\"unread_messages\":0,\"muted\":false},{\"name\":\"Jane Smith\",\"username\":\"@janesmith\",\"bio\":\"Coffee enthusiast ☕️ | Nature lover 🌿\",\"last_message\":\"Are you free tonight?\",\"image\":\"https://randomuser.me/api/portraits/women/7.jpg\",\"last_message_time\":\"06:45 PM\",\"online\":false,\"unread_messages\":2,\"muted\":false},{\"name\":\"Mohamed Khan\",\"username\":\"@mohamedkhan\",\"bio\":\"Travel | Photography | Adventure\",\"last_message\":\"Let\\'s meet for lunch tomorrow.\",\"image\":\"https://randomuser.me/api/portraits/men/12.jpg\",\"last_message_time\":\"02:15 PM\",\"online\":true,\"unread_messages\":0,\"muted\":false},{\"name\":\"Maria Garcia\",\"username\":\"@mariagarcia\",\"bio\":\"Bookworm 📚 | Dog lover 🐶\",\"last_message\":\"Thanks for your help!\",\"image\":\"https://randomuser.me/api/portraits/women/9.jpg\",\"last_message_time\":\"08:20 AM\",\"online\":true,\"unread_messages\":25,\"muted\":false},{\"name\":\"Hiroshi Tanaka\",\"username\":\"@hiroshit\",\"bio\":\"Tech enthusiast | Anime lover\",\"last_message\":\"Can you pick up some groceries?\",\"image\":\"https://randomuser.me/api/portraits/men/18.jpg\",\"last_message_time\":\"Yesterday\",\"online\":false,\"unread_messages\":256,\"muted\":true},{\"name\":\"Luisa Rossi\",\"username\":\"@luisarossi\",\"bio\":\"Foodie | Traveler | Dreamer\",\"last_message\":\"I\\'m excited for the party tonight!\",\"image\":\"https://randomuser.me/api/portraits/women/14.jpg\",\"last_message_time\":\"Jul 8\",\"online\":true,\"unread_messages\":0,\"muted\":true},{\"name\":\"Antonio Sanchez\",\"username\":\"@antoniosanchez\",\"bio\":\"Music lover 🎵 | Fitness enthusiast 💪\",\"last_message\":\"Let\\'s go hiking this weekend.\",\"image\":\"https://randomuser.me/api/portraits/men/2.jpg\",\"last_message_time\":\"Jul 7\",\"online\":false,\"unread_messages\":0,\"muted\":false},{\"name\":\"Miyuki Nakamura\",\"username\":\"@miyukinakamura\",\"bio\":\"Coffee addict ☕️ | Travel | Art lover\",\"last_message\":\"Are you still interested in the job?\",\"image\":\"https://randomuser.me/api/portraits/women/1.jpg\",\"last_message_time\":\"Jul 6\",\"online\":false,\"unread_messages\":3,\"muted\":false},{\"name\":\"David Brown\",\"username\":\"@davidbrown\",\"bio\":\"Gamer 🎮 | Pizza lover 🍕 | Music enthusiast 🎧\",\"last_message\":\"What are you up to?\",\"image\":\"https://randomuser.me/api/portraits/men/6.jpg\",\"last_message_time\":\"Jun 30\",\"online\":true,\"unread_messages\":0,\"muted\":false},{\"name\":\"Sophie Davis\",\"username\":\"@sophiedavis\",\"bio\":\"Animal lover 🐾 | Yoga enthusiast 🧘‍♀️\",\"last_message\":\"Let\\'s catch up soon!\",\"image\":\"https://randomuser.me/api/portraits/women/5.jpg\",\"last_message_time\":\"Jun 28\",\"online\":true,\"unread_messages\":0,\"muted\":false},{\"name\":\"Samuel Johnson\",\"username\":\"@samueljohnson\",\"bio\":\"Nature photographer 📷 | Adventure seeker\",\"last_message\":\"Check out this amazing photo!\",\"image\":\"https://randomuser.me/api/portraits/men/9.jpg\",\"last_message_time\":\"Jun 25\",\"online\":false,\"unread_messages\":0,\"muted\":false},{\"name\":\"Emily Wilson\",\"username\":\"@emilywilson\",\"bio\":\"Art lover 🎨 | Creative mind\",\"last_message\":\"I need your help with something.\",\"image\":\"https://randomuser.me/api/portraits/women/15.jpg\",\"last_message_time\":\"Jun 20\",\"online\":false,\"unread_messages\":25,\"muted\":true},{\"name\":\"Leo Martin\",\"username\":\"@leomartin\",\"bio\":\"Fitness | Health | Food\",\"last_message\":\"Let\\'s plan a workout session!\",\"image\":\"https://randomuser.me/api/portraits/men/20.jpg\",\"last_message_time\":\"Jun 18\",\"online\":true,\"unread_messages\":0,\"muted\":false},{\"name\":\"Olivia Thompson\",\"username\":\"@oliviathompson\",\"bio\":\"Dog lover 🐶 | Coffee addict ☕️\",\"last_message\":\"Are you coming to the party?\",\"image\":\"https://randomuser.me/api/portraits/women/11.jpg\",\"last_message_time\":\"Jun 15\",\"online\":false,\"unread_messages\":0,\"muted\":false},{\"name\":\"Henry Lee\",\"username\":\"@henrylee\",\"bio\":\"Musician 🎸 | Traveler ✈️\",\"last_message\":\"Let\\'s plan a music jam session!\",\"image\":\"https://randomuser.me/api/portraits/men/16.jpg\",\"last_message_time\":\"Jun 12\",\"online\":true,\"unread_messages\":0,\"muted\":false},{\"name\":\"Sophia Clark\",\"username\":\"@sophiaclark\",\"bio\":\"Food lover 🍔 | Movie enthusiast 🎥\",\"last_message\":\"Have you watched the latest movie?\",\"image\":\"https://randomuser.me/api/portraits/women/19.jpg\",\"last_message_time\":\"Jun 10\",\"online\":true,\"unread_messages\":0,\"muted\":false},{\"name\":\"Ethan Wilson\",\"username\":\"@ethanwilson\",\"bio\":\"Gamer 🎮 | Coffee lover ☕️\",\"last_message\":\"Let\\'s play a game together!\",\"image\":\"https://randomuser.me/api/portraits/men/14.jpg\",\"last_message_time\":\"Jun 8\",\"online\":false,\"unread_messages\":0,\"muted\":false},{\"name\":\"Amelia Rodriguez\",\"username\":\"@ameliarodriguez\",\"bio\":\"Book lover 📚 | Travel enthusiast ✈️\",\"last_message\":\"Any book recommendations?\",\"image\":\"https://randomuser.me/api/portraits/women/17.jpg\",\"last_message_time\":\"Jun 5\",\"online\":true,\"unread_messages\":0,\"muted\":false},{\"name\":\"William White\",\"username\":\"@williamwhite\",\"bio\":\"Nature lover 🌿 | Photography enthusiast 📸\",\"last_message\":\"Check out this beautiful photo I took!\",\"image\":\"https://randomuser.me/api/portraits/men/19.jpg\",\"last_message_time\":\"Jun 2\",\"online\":false,\"unread_messages\":0,\"muted\":false},{\"name\":\"Ava Davis\",\"username\":\"@avadavis\",\"bio\":\"Fitness | Yoga | Meditation\",\"last_message\":\"Let\\'s plan a yoga session!\",\"image\":\"https://randomuser.me/api/portraits/women/13.jpg\",\"last_message_time\":\"May 30\",\"online\":true,\"unread_messages\":0,\"muted\":false},{\"name\":\"Daniel Anderson\",\"username\":\"@danielanderson\",\"bio\":\"Music lover 🎵 | Foodie 🍕\",\"last_message\":\"How was your day?\",\"image\":\"https://randomuser.me/api/portraits/men/13.jpg\",\"last_message_time\":\"May 28\",\"online\":true,\"unread_messages\":0,\"muted\":false},{\"name\":\"Olivia Moore\",\"username\":\"@oliviamoore\",\"bio\":\"Travel | Adventure | Nature\",\"last_message\":\"Let\\'s plan a hiking trip!\",\"image\":\"https://randomuser.me/api/portraits/women/16.jpg\",\"last_message_time\":\"May 25\",\"online\":false,\"unread_messages\":0,\"muted\":false}]}');\n\n//# sourceURL=webpack://webapp/./src/assets/data/contacts.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;