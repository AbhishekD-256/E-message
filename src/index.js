import "./sass/main.scss";
import contactData from "./assets/data/contacts.json";

const themeToggleBtn = document.getElementById("js-theme-toggle");
const chatList = document.getElementById("chat-list");
const drawerCol = document.getElementById("js-drawer-col");
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
    chatList.innerHTML = '<p class= "pd-hv"> Ayyoo!! no User</p>';
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

function renderProfile(user) {
  drawerCol.innerHTML = `<div class="sender-details  fx-sb  pd-b-16">
  <div class="fx-cc  gap-sm">
      <figure class="avatar  avatar--sm  lh-0">
          <img class="js-user-img  fill-image" alt="caesar profile photo"  src="${user.image}">
      </figure>
      <h3 class="js-user-fullname  font-lg  fw-sb">${user.name}</h3>
  </div>
  <button class="close-btn  lh-0">
      <img src="images/close-menu.png" alt="close menu png">
  </button>
</div>

<div class="font-sm  fx-col  gap-md  pd-v-16">
  <div class="fx-col  gap-sm">
      <h3 class="font-sm">Username</h3>
      <span class="js-user-name">${user.username}</span>
  </div>

  <div class="fx-col  gap-sm">
      <h3 class="font-sm">Bio</h3>
      <p class="js-user-bio">${user.name}</p>
  </div>
</div>

<div class="notification-control  fx-sb  pd-v-16">
  <span class="font-sm  fw-sb">Notifications</span>
  <div class="toggle  toggle--sm">
      <div class="slider"></div>
  </div>
</div>

<div class="pd-t-16  fx-col  gap-md">
  <a class="font-sm  action-link" href="javascript: void(0)">Block user</a>
  <a class="font-sm  action-link" href="javascript: void(0)">Clear history</a>
  <a class="font-sm  action-link" href="javascript: void(0)">Delete conversation</a>
</div>`;
  const userImages = [...document.getElementsByClassName("js-user-img")];
  const userNames = [...document.getElementsByClassName("js-user-fullname")];
  userImages.forEach((img) => {
    img.src = user.image;
  });
  userNames.forEach((n) => {
    n.textContent = user.name;
  });
}

//================= Initialize-rendering ==================//

function init(i = 0, contArr = contacts) {
  contArr.forEach((contact) => (contact.selected = false));
  contArr[i].selected = true;
  renderProfile(contArr[i]);
  renderContacts(contArr);
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
    if (selectedContact.classList.contains("selected")) {
      console.log(contacts);
      if (contacts.length === 0) {
        const msg = document.querySelector(".message-view");
        const chatStatus = document.getElementById("chat-status");
        msg.style.textAlign = "center";
        chatStatus.innerHTML = "";
        drawerCol.innerHTML = "";
        chatList.innerHTML = "<h3 class='pd-hv'>Welcome to E-message</h3>";
        msg.innerHTML = "<h1>No messages availabe :( </h1>";
        return;
      } else {
        init(index);
        return;
      }
    }
    init();
  } else {
    document
      .querySelectorAll(".chat-list__item")
      .forEach((item) => item.classList.remove("selected"));
    selectedContact.classList.add("selected");
    renderProfile(
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
  const searchArr = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue)
  );
  if (searchArr.length === 0) {
    renderContacts(searchArr);
  } else {
    init(undefined, searchArr);
  }
});

//=================== User profile Update ======================//

const myProfile = document.getElementById("my-profile");

myProfile.addEventListener("click", function () {
  drawerCol.innerHTML = `
  <div class="my-profile-details  fx-sb  pd-b-16">
  <div class="fx-cc  gap-sm">
      <figure class="avatar  avatar--sm  lh-0">
          <img class="js-user-img  fill-image" alt="caesar profile photo"  src="https://randomuser.me/api/portraits/women/55.jpg">
      </figure>
      <h3 id="my-fullname" class="js-user-fullname  font-lg  fw-sb">Caesar</h3>
  </div>
  <button class="close-btn  lh-0">
      <img src="images/close-menu.png" alt="close menu png">
  </button>
</div>

<div class="font-sm  fx-col  gap-md  pd-v-16">
  <div class="fx-col  gap-sm">
      <h3 class="font-sm">Username</h3>
      <input type="text" class="change-name" placeholder="Change name...">
      <span id="my-username" class="js-user-name">@Caesar</span>
  </div>

  <div class="fx-col  gap-sm">
      <h3 class="font-sm">Bio</h3>
      <textarea rows="1"  class="change-bio" placeholder="Change bio..."></textarea>
      <p id="my-bio" class="js-user-bio">I like talk shows</p>
  </div>
</div>
<button class="pd-16  change-save-btn"> SAVE </button>`;

  const myFullname = document.getElementById("my-fullname");
  const myUsername = document.getElementById("my-username");
  const myBio = document.getElementById("my-bio");
  const inputName = document.getElementsByClassName("change-name")[0];
  const inputBio = document.getElementsByClassName("change-bio")[0];
  const saveBtn = document.getElementsByClassName("change-save-btn")[0];

  let originalName = localStorage.getItem("name") || myFullname.textContent;
  let originalBio = localStorage.getItem("bio") || myBio.textContent;

  myFullname.textContent = originalName;
  let changedBio, changedName;

  function changeValues() {
    myUsername.textContent = `@${
      changedName?.toLowerCase() || originalName.toLowerCase()
    }`;
    myBio.textContent = changedBio || originalBio;
  }
  changeValues();

  inputName.addEventListener("input", function () {
    changedName = inputName.value.trim();
    myFullname.textContent = changedName || originalName;
    localStorage.setItem("name", changedName || originalName);
  });

  inputBio.addEventListener("input", function () {
    changedBio = inputBio.value;
    localStorage.setItem("bio", changedBio || originalBio);
  });

  saveBtn.addEventListener("click", function () {
    inputBio.value = "";
    inputName.value = "";
    changeValues();
  });
});
