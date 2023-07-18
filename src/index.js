import "./sass/main.scss";
import contactData from "./assets/data/contacts.json";

const themeToggleBtn = document.querySelector(".js-theme-toggle");
const chatList = document.querySelector(".chat-list");
const drawerCol = document.querySelector(".drawer-column");
const searchInput = document.getElementById("search-input");

const { contacts } = contactData;

//===================== Change Theme ======================//

themeToggleBtn.addEventListener("click", function () {
  this.classList.toggle("clicked");
  document.body.classList.toggle("darkmode");
});

//================ Render Contact-list ====================//

function renderContacts(contacts) {
  chatList.innerHTML = "";
  if (contacts.length === 0)
    chatList.innerHTML = '<i class= "pd-16"> Ayyoo!! no User</i>';
  contacts.forEach((contact) => {
    const html = `<li class= "chat-list__item  cur-pointer  fx  gap-sm  pd-hv ${
      contact.online ? "online" : ""
    } ${contact.muted ? "muted" : ""} ${
      contact.unread_messages > 0 ? "unread" : ""
    } ${contact.selected ? "selected" : ""}">
    <div class="chat-avatar">
        <figure class="avatar  avatar--lg  lh-0">
            <img class="fill-image" src="${contact.image}" alt="${
      contact.name
    } profile image">
        </figure>
        <div class="indicator"></div>
    </div>
    <div class="chat-info">
        <div class="fx-sb">
            <h3 class="chat-name  font-sm  fw-sb  text-truncate">${
              contact.name
            }</h3>
            <span class="sec-color  font-xsm">${
              contact.last_message_time
            }</span>
        </div>
        <div class="fx-sb">
            <p class="last-message  sec-color  font-sm  text-truncate">${
              contact.last_message
            }</p>
            <div class="unread-msgs  font-xsm  ${
              contact.unread_messages <= 0 ? "hide" : ""
            }">${contact.unread_messages}</div>
        </div>
        <button class="remove-list">
        X
       </button>
    </div>
  </li>`;

    chatList.insertAdjacentHTML("beforeend", html);
  });
}

//================= Change User-details ===================//

function changeUserDetails(user) {
  const userImages = document.querySelectorAll(".js-user-img");
  const userNames = document.querySelectorAll(".js-user-fullname");
  userImages.forEach((img) => {
    img.src = user.image;
  });
  userNames.forEach((n) => {
    n.textContent = user.name;
  });
  drawerCol.querySelector(".js-user-name").textContent = user.username;
  drawerCol.querySelector(".js-user-bio").textContent = user.bio;
}

function init() {
  contacts[0].selected = true;
  changeUserDetails(contacts[0]);
  renderContacts(contacts);
}
init();

//================ Select and Remove contact-list-items ================//

chatList.addEventListener("click", function (e) {
  const selectedContact = e.target.closest(".chat-list__item");

  if (!selectedContact) return;

  if (e.target.classList.contains("remove-list")) {
    const index = contacts.findIndex(
      (contact) =>
        contact.name === selectedContact.querySelector(".chat-name").textContent
    );
    contacts.splice(index, 1);
    init();
  } else {
    document
      .querySelectorAll(".chat-list__item")
      .forEach((item) => item.classList.remove("selected"));
    selectedContact.classList.add("selected");
    changeUserDetails(
      contacts.find(
        (contact) =>
          contact.name ===
          selectedContact?.querySelector(".chat-name").textContent
      )
    );
  }
});

//=============== Serach contact-list-items ===============//

searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase().trim();
  renderContacts(
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchValue)
    )
  );
});
