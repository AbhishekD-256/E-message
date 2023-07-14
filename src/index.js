import "./sass/main.scss";
import contactData from "./assets/data/contacts.json";

const themeToggleBtn = document.querySelector(".js-theme-toggle");
const chatList = document.querySelector(".chat-list");
const drawerCol = document.querySelector(".drawer-column");

themeToggleBtn.addEventListener("click", function () {
  this.classList.toggle("clicked");
  document.body.classList.toggle("darkmode");
});

const { contacts } = contactData;

contacts.forEach((contact) => {
  const html = `<li class= "chat-list__item  clickable  fx  gap-sm  ${
    contact.online ? "online" : ""
  } ${contact.muted ? "muted" : ""} ${
    contact.unread_messages > 0 ? "unread" : ""
  }">
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
          <h3 class="chat-name  font-sm  fw-sb">${contact.name}</h3>
          <span class="last-message-time  font-xsm">${
            contact.last_message_time
          }</span>
      </div>
      <div class="fx-sb">
          <p class="last-message  font-sm">${contact.last_message}</p>
          <div class="unread-msgs  font-xsm  ${
            contact.unread_messages <= 0 ? "hide" : ""
          }">${contact.unread_messages}</div>
      </div>
  </div>
</li>`;

  chatList.insertAdjacentHTML("beforeend", html);
});

chatList.addEventListener("click", function (e) {
  const selectedContact = e.target.closest(".chat-list__item");
  document
    .querySelectorAll(".chat-list__item")
    .forEach((item) => item.classList.remove("selected"));
  selectedContact.classList.add("selected");
});
