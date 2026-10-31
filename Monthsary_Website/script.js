// ============================================================
// PERSONALIZE THESE SETTINGS BEFORE SHARING YOUR WEBSITE
// ============================================================
const websiteTitle = "Our Little Love Story";
const girlfriendName = "Jecery Zabate"; // Enter her exact full name here.
const monthsaryMessage = `My sweetest love,

Every month with you is another little chapter I never want to end. Thank you for your laughter, your kindness, your patience, and all the ordinary moments that become extraordinary because I get to share them with you.

You make my days softer and my world brighter. I hope you always feel how cherished you are. No matter how many months pass, I will keep choosing you, appreciating you, and finding new reasons to fall in love with you.

Happy monthsary, my love. Here's to all the memories we've made and all the beautiful ones still waiting for us.`;
const finalMessage = `Thank you for being my favorite hello, my safest place, and the person I want beside me through every season. I may not have the perfect words every day, but I will never run out of reasons to love you. Happy monthsary, sweetheart.`;
const lastSurpriseMessage = `If I could make one promise, it would be this: I will keep showing up, keep listening, keep laughing with you, and keep loving you in all the little ways that matter. You are my favorite part of this story, and I can't wait for the next page.`;
const expectedMonthsaryDate = ""; // Optional: YYYY-MM-DD. Leave blank to let her choose the date.

// ============================================================
// WEBSITE LOGIC — no need to edit below this line
// ============================================================
document.title = websiteTitle;
const pages = [...document.querySelectorAll(".page")];
const indicator = document.getElementById("stepIndicator");
let currentPage = 1;
let selectedPhotoUrl = "";

const stepLabels = {
  1: "A little surprise for you", 2: "A little surprise · 01 / 04",
  3: "Our special day · 02 / 04", 4: "A favorite memory · 03 / 04",
  5: "A letter from my heart · 04 / 04", 6: "Made with all my love"
};

function showPage(number) {
  currentPage = number;
  pages.forEach((page, index) => {
    page.classList.toggle("active", index === number - 1);
    page.setAttribute("aria-hidden", index === number - 1 ? "false" : "true");
  });
  indicator.textContent = stepLabels[number];
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showMessage(id, message) {
  document.getElementById(id).textContent = message;
}

document.getElementById("startBtn").addEventListener("click", () => showPage(2));

document.getElementById("nameForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredName = document.getElementById("fullName").value.trim();
  if (!enteredName) {
    showMessage("nameMessage", "Oops, sweetheart! Please enter your full name. ♡");
    return;
  }
  if (girlfriendName === "HER FULL NAME") {
    showMessage("nameMessage", "The website owner still needs to add your name in script.js. Ask them to personalize this surprise! ♡");
    return;
  }
  if (enteredName.localeCompare(girlfriendName.trim(), undefined, { sensitivity: "accent" }) !== 0) {
    showMessage("nameMessage", "Hmm, that's not quite it, my love. Try your complete name again. ♡");
    return;
  }
  showMessage("nameMessage", "");
  showPage(3);
});

const dateInput = document.getElementById("monthsaryDate");
const datePreview = document.getElementById("datePreview");
if (expectedMonthsaryDate) dateInput.value = expectedMonthsaryDate;

dateInput.addEventListener("change", () => {
  if (!dateInput.value) {
    datePreview.querySelector("strong").textContent = "Waiting for your date...";
    return;
  }
  const date = new Date(`${dateInput.value}T12:00:00`);
  datePreview.querySelector("strong").textContent = date.toLocaleDateString(undefined, {
    year: "numeric", month: "long", day: "numeric"
  });
});
document.getElementById("dateForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!dateInput.value) {
    showMessage("dateMessage", "Choose our special date first, love. ♡");
    dateInput.focus();
    return;
  }
  showMessage("dateMessage", "");
  showPage(4);
});

const photoUpload = document.getElementById("photoUpload");
photoUpload.addEventListener("change", () => {
  const file = photoUpload.files && photoUpload.files[0];
  showMessage("photoMessage", "");
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    photoUpload.value = "";
    showMessage("photoMessage", "Please choose an image file, sweetheart. ♡");
    return;
  }
  if (selectedPhotoUrl) URL.revokeObjectURL(selectedPhotoUrl);
  selectedPhotoUrl = URL.createObjectURL(file);
  document.getElementById("photoPreview").src = selectedPhotoUrl;
  document.getElementById("photoPreviewWrap").hidden = false;
});
document.getElementById("photoContinue").addEventListener("click", () => {
  if (!selectedPhotoUrl) {
    showMessage("photoMessage", "Pick a photo of us before we continue. ♡");
    return;
  }
  showMessage("photoMessage", "");
  document.getElementById("letterText").textContent = monthsaryMessage;
  showPage(5);
});

const envelopeButton = document.getElementById("envelopeButton");
envelopeButton.addEventListener("click", () => {
  if (envelopeButton.classList.contains("opened")) return;
  envelopeButton.classList.add("opened");
  envelopeButton.setAttribute("aria-expanded", "true");
  document.getElementById("tapHint").textContent = "A little piece of my heart, just for you ♡";
  document.getElementById("letterContinue").disabled = false;
});
document.getElementById("letterContinue").addEventListener("click", () => {
  if (!envelopeButton.classList.contains("opened")) return;
  const enteredName = document.getElementById("fullName").value.trim();
  const chosenDate = new Date(`${dateInput.value}T12:00:00`);
  document.getElementById("finalName").textContent = enteredName;
  document.getElementById("finalDate").textContent = chosenDate.toLocaleDateString(undefined, {
    year: "numeric", month: "long", day: "numeric"
  });
  document.getElementById("finalPhoto").src = selectedPhotoUrl;
  document.getElementById("finalMessage").textContent = finalMessage;
  document.getElementById("lastMessage").textContent = lastSurpriseMessage;
  showPage(6);
});

document.getElementById("lastSurpriseBtn").addEventListener("click", () => {
  const reveal = document.getElementById("lastReveal");
  reveal.hidden = false;
  document.getElementById("lastSurpriseBtn").hidden = true;
  burstHearts(18);
});
document.getElementById("restartBtn").addEventListener("click", () => {
  document.getElementById("nameForm").reset();
  document.getElementById("dateForm").reset();
  photoUpload.value = "";
  if (selectedPhotoUrl) URL.revokeObjectURL(selectedPhotoUrl);
  selectedPhotoUrl = "";
  document.getElementById("photoPreviewWrap").hidden = true;
  document.getElementById("lastReveal").hidden = true;
  document.getElementById("lastSurpriseBtn").hidden = false;
  document.getElementById("envelope").classList.remove("opened");
  envelopeButton.classList.remove("opened");
  envelopeButton.setAttribute("aria-expanded", "false");
  document.getElementById("letterContinue").disabled = true;
  document.getElementById("tapHint").textContent = "♡ tap to unfold my heart ♡";
  datePreview.querySelector("strong").textContent = "Waiting for your date...";
  showMessage("nameMessage", "");
  showMessage("dateMessage", "");
  showMessage("photoMessage", "");
  showPage(1);
});

document.querySelectorAll("[data-back]").forEach((button) => {
  button.addEventListener("click", () => showPage(Number(button.dataset.back)));
});

function makeFloaty() {
  const el = document.createElement("span");
  el.className = "floaty";
  el.textContent = Math.random() > .45 ? "♥" : "✿";
  el.style.left = `${Math.random() * 100}%`;
  el.style.fontSize = `${12 + Math.random() * 17}px`;
  el.style.animationDuration = `${9 + Math.random() * 8}s`;
  document.getElementById("ambient").appendChild(el);
  window.setTimeout(() => el.remove(), 18000);
}
for (let i = 0; i < 12; i++) window.setTimeout(makeFloaty, i * 450);
window.setInterval(makeFloaty, 1250);

function burstHearts(count) {
  const ambient = document.getElementById("ambient");
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "floaty";
    heart.textContent = "♥";
    heart.style.left = `${10 + Math.random() * 80}%`;
    heart.style.bottom = `${Math.random() * 20}px`;
    heart.style.fontSize = `${18 + Math.random() * 22}px`;
    heart.style.animationDuration = `${3 + Math.random() * 3}s`;
    heart.style.opacity = ".8";
    ambient.appendChild(heart);
    window.setTimeout(() => heart.remove(), 6500);
  }
}
