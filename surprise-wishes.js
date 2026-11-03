// =====================================
// ROYAL DIGITAL HUB
// SURPRISE WISH WEBSITES
// =====================================

// WhatsApp number: Country code + mobile number
// No + symbol, spaces or hyphens.

const WHATSAPP_NUMBER = "918220848715";


// =====================================
// MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

  const isOpen = navMenu.classList.toggle("active");

  menuToggle.textContent = isOpen ? "✕" : "☰";

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

});

navMenu.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

    menuToggle.textContent = "☰";

    menuToggle.setAttribute("aria-expanded", "false");

  });

});


// =====================================
// CURRENT YEAR
// =====================================

document.getElementById("year").textContent =
  new Date().getFullYear();


// =====================================
// DEMO INFORMATION
// =====================================

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


// =====================================
// WHATSAPP FUNCTION
// =====================================

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

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

}


// =====================================
// DEMO MODAL
// =====================================

const modal = document.getElementById("demoModal");

const closeModal = document.getElementById("closeModal");

const modalOrder = document.getElementById("modalOrder");

let selectedService = "";

let previousFocus = null;


function showModal(type) {

  const data = demoData[type];

  if (!data) return;

  selectedService = data.title;

  previousFocus = document.activeElement;

  document.getElementById("modalIcon").textContent =
    data.icon;

  document.getElementById("modalTitle").textContent =
    data.title;

  document.getElementById("modalText").textContent =
    data.text;

  modal.classList.add("show");

  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  closeModal.focus();

}


function hideModal() {

  modal.classList.remove("show");

  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  if (previousFocus) {
    previousFocus.focus();
  }

}


// =====================================
// DEMO BUTTONS
// =====================================

document.querySelectorAll("[data-demo]").forEach(button => {

  button.addEventListener("click", () => {

    const type = button.dataset.demo;

    showModal(type);

  });

});


// =====================================
// CLOSE MODAL
// =====================================

closeModal.addEventListener("click", hideModal);


modal.addEventListener("click", event => {

  if (event.target === modal) {

    hideModal();

  }

});


document.addEventListener("keydown", event => {

  if (
    event.key === "Escape" &&
    modal.classList.contains("show")
  ) {

    hideModal();

  }

});


// =====================================
// ORDER FROM DEMO
// =====================================

modalOrder.addEventListener("click", () => {

  const message =
`Hello ROYAL DIGITAL HUB! 👋

I am interested in:

${selectedService}

Please share the pricing, available designs and order details.

Thank you! ❤️`;

  openWhatsApp(message);

});


// =====================================
// MAIN ORDER BUTTON
// =====================================

document.getElementById("orderButton")
  .addEventListener("click", () => {

    const message =
`Hello ROYAL DIGITAL HUB! 👋

I would like to create a Surprise Wish Website.

Please share your designs, pricing and order details.

Thank you! ❤️`;

    openWhatsApp(message);

  });


// =====================================
// CUSTOM SURPRISE
// =====================================

document.querySelector(".custom-btn")
  .addEventListener("click", () => {

    const message =
`Hello ROYAL DIGITAL HUB! 👋

I want a Customized Surprise Website.

Please share the available options and pricing.

Thank you! ❤️`;

    openWhatsApp(message);

  });


// =====================================
// END
// =====================================
