/* =================================
   ROYAL DIGITAL HUB
   SURPRISE WISH WEBSITES
================================= */

// IMPORTANT:
// Replace this with your WhatsApp number.
// Country code included, without + or spaces.
// Example: 919876543210

const WHATSAPP_NUMBER = "918220848715";


// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");
  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});


// CURRENT YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();


// DEMO INFORMATION

const demoData = {

  birthday: {
    icon: "🎂",
    title: "Birthday Surprise",
    text: "A beautiful birthday website with personalized wishes, photos, music and special animations."
  },

  marriage: {
    icon: "💍",
    title: "Marriage Surprise",
    text: "Celebrate a beautiful wedding journey with memories, couple photos and personalized messages."
  },

  anniversary: {
    icon: "❤️",
    title: "Anniversary Surprise",
    text: "Turn your love story into a special digital experience with romantic messages and memories."
  },

  proposal: {
    icon: "💌",
    title: "Love Proposal",
    text: "Express your feelings through a unique interactive love proposal website."
  },

  friendship: {
    icon: "🎁",
    title: "Friendship Surprise",
    text: "Gift your best friend a personalized website filled with unforgettable friendship memories."
  }

};


// MODAL

const modal = document.getElementById("demoModal");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll("[data-demo]").forEach(button => {

  button.addEventListener("click", () => {

    const type = button.dataset.demo;
    const data = demoData[type];

    if (!data) return;

    document.getElementById("modalIcon").textContent = data.icon;
    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalText").textContent = data.text;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");

  });

});


function hideModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", hideModal);

modal.addEventListener("click", event => {
  if (event.target === modal) hideModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") hideModal();
});

document.getElementById("modalOrder").addEventListener("click", hideModal);


// WHATSAPP ORDER

function openWhatsApp(message) {

  if (!/^91\d{10}$/.test(WHATSAPP_NUMBER)) {
    alert("Please configure the WhatsApp number in surprise-wishes.js first.");
    return;
  }

  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");

}


document.getElementById("orderButton").addEventListener("click", event => {

  event.preventDefault();

  const message =
`Hello ROYAL DIGITAL HUB! 👋

I would like to create a Surprise Wish Website.

Please share your designs, pricing and order details.

Thank you! ❤️`;

  openWhatsApp(message);

});


// ORDER FROM EACH SERVICE

document.querySelectorAll(".service-card .demo-btn").forEach(button => {

  if (button.dataset.demo) {
    button.addEventListener("dblclick", () => {
      // Demo card opens on single click.
      // No action required on double click.
    });
  }

});


// CUSTOM CARD ORDER
document.querySelector(".custom-card .demo-btn")
  .addEventListener("click", event => {

    event.preventDefault();

    openWhatsApp(
      "Hello ROYAL DIGITAL HUB! I want a customized surprise website. Please share the details. ❤️"
    );

  });


// ESCAPE KEY AND MODAL ACCESSIBILITY

modal.addEventListener("transitionend", () => {
  if (!modal.classList.contains("show")) {
    modal.setAttribute("aria-hidden", "true");
  }
});
