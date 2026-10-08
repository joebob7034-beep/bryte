/* Shared header / footer chrome for guest + logged-in pages */

window.STTChrome = {
  active: "",

  avatarSvg(size = 28) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 5 5" class="identicon avatar rounded-full" role="img" aria-label="Profile picture" shape-rendering="crispEdges">
      <rect width="5" height="5" fill="hsl(61 30% 14%)"></rect>
      <rect x="0" y="0" width="1" height="1" fill="hsl(106 55% 46%)"></rect>
      <rect x="4" y="0" width="1" height="1" fill="hsl(106 55% 46%)"></rect>
      <rect x="0" y="1" width="1" height="1" fill="hsl(106 55% 46%)"></rect>
      <rect x="4" y="1" width="1" height="1" fill="hsl(106 55% 46%)"></rect>
      <rect x="0" y="2" width="1" height="1" fill="hsl(106 55% 46%)"></rect>
      <rect x="4" y="2" width="1" height="1" fill="hsl(106 55% 46%)"></rect>
      <rect x="1" y="1" width="1" height="1" fill="hsl(106 55% 46%)"></rect>
      <rect x="3" y="1" width="1" height="1" fill="hsl(106 55% 46%)"></rect>
      <rect x="1" y="2" width="1" height="1" fill="hsl(106 55% 46%)"></rect>
      <rect x="3" y="2" width="1" height="1" fill="hsl(106 55% 46%)"></rect>
      <rect x="1" y="4" width="1" height="1" fill="hsl(106 55% 46%)"></rect>
      <rect x="3" y="4" width="1" height="1" fill="hsl(106 55% 46%)"></rect>
      <rect x="2" y="2" width="1" height="1" fill="hsl(61 62% 58%)"></rect>
      <rect x="2" y="4" width="1" height="1" fill="hsl(61 62% 58%)"></rect>
    </svg>`;
  },

  navLink(href, label, key) {
    const active = this.active === key;
    const cls = active
      ? "rounded-lg border border-[#303030] bg-white/[0.06] px-3 py-1.5 text-sm text-white"
      : "rounded-lg px-3 py-1.5 text-sm text-white/90 hover:bg-white/[0.04]";
    return `<a href="${href}" class="${cls}"${active ? ' aria-current="page"' : ""}>${label}</a>`;
  },

  footer() {
    return `
    <footer class="mt-auto bg-[#0f0f0f] px-4 pb-5 pt-10 sm:px-6 lg:px-8">
      <div class="mx-auto flex max-w-[1360px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span class="text-sm text-[#9f9f9f]">www.safethetrade.com (C) 2026</span>
        <nav class="flex flex-wrap gap-x-2 gap-y-1 text-sm text-[#9f9f9f]" aria-label="Public pages">
          <a href="#" class="hover:text-white">Rate calculator</a><span>/</span>
          <a href="#" class="hover:text-white">System status</a><span>/</span>
          <a href="#" class="hover:text-white">Transparency</a><span>/</span>
          <a href="#" class="hover:text-white">Help</a><span>/</span>
          <a href="#" class="hover:text-white">API docs</a><span>/</span>
          <a href="#" class="hover:text-white">Fees</a><span>/</span>
          <a href="#" class="hover:text-white">FAQ</a><span>/</span>
          <a href="#" class="hover:text-white">Terms</a><span>/</span>
          <a href="#" class="hover:text-white">Privacy</a>
        </nav>
      </div>
    </footer>`;
  },

  guestHeader() {
    return `
    <header class="border-b border-transparent">
      <div class="mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" class="flex items-center gap-2.5 shrink-0">
          <img src="/assets/logo-icon.svg" alt="" width="27" height="24" class="h-6 w-[27px]" />
          <span class="text-[19px] font-extrabold tracking-tight text-white sm:text-[21px]">SafeTheTrade</span>
        </a>
        <nav class="hidden lg:flex absolute left-1/2 -translate-x-1/2">
          <a href="/" class="rounded-lg border border-[#303030] bg-white/[0.04] px-3.5 py-1.5 text-sm text-white">Offers</a>
        </nav>
        <div class="hidden lg:flex items-center gap-2">
          <a href="/login/" class="inline-flex items-center gap-1.5 rounded-lg border border-[#303030] bg-white/[0.05] px-2.5 py-1.5 text-sm text-[#fafafa]"><i class="fa-solid fa-link text-xs opacity-80"></i> Create offer</a>
          <a href="/login/" class="inline-flex items-center gap-1.5 rounded-lg border border-[#303030] bg-white/[0.05] px-2.5 py-1.5 text-sm text-[#fafafa]"><i class="fa-solid fa-link text-xs opacity-80"></i> Log in</a>
          <a href="/register/" class="inline-flex items-center gap-1.5 rounded-lg bg-[#e5e5e5] px-2.5 py-1.5 text-sm text-[#181818]"><i class="fa-solid fa-plus text-xs"></i> Sign up</a>
        </div>
        <button type="button" id="menu-toggle" class="lg:hidden inline-flex h-10 w-10 items-center justify-center text-white" aria-label="Menu" aria-expanded="false" aria-controls="site-menu">
          <i class="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
      <div id="site-menu" class="hidden flex-col gap-3 border-t border-[#303030] px-4 py-4 lg:!hidden">
        <a href="/" class="rounded-lg border border-[#303030] px-3 py-2.5 text-sm text-white">Offers</a>
        <a href="/login/" class="rounded-lg border border-[#303030] px-3 py-2.5 text-sm text-white"><i class="fa-solid fa-link text-xs mr-2"></i>Log in</a>
        <a href="/register/" class="rounded-lg bg-[#e5e5e5] px-3 py-2.5 text-center text-sm text-[#181818]"><i class="fa-solid fa-plus text-xs mr-2"></i>Sign up</a>
      </div>
    </header>`;
  },

  authHeader(session) {
    const bal = (session.balanceUsd ?? 0).toLocaleString("en-US", { style: "currency", currency: "USD" });
    const unread = session.unread || 0;
    return `
    <header class="border-b border-transparent relative">
      <div class="mx-auto flex max-w-[1360px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" class="flex items-center gap-2.5 shrink-0">
          <img src="/assets/logo-icon.svg" alt="" width="27" height="24" class="h-6 w-[27px]" />
          <span class="text-[19px] font-extrabold tracking-tight text-white sm:text-[21px]">SafeTheTrade</span>
        </a>

        <nav class="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          ${this.navLink("/my-offers/", "My offers", "offers")}
          ${this.navLink("/my-trades/", "My trades", "trades")}
          ${this.navLink("/support/", "Support", "support")}
          ${this.navLink("/wallet/", "Wallet", "wallet")}
        </nav>

        <div class="hidden lg:flex items-center gap-2">
          <button type="button" id="notif-btn" class="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#303030] text-white hover:bg-white/[0.04]" aria-label="Notifications, ${unread} unread">
            <i class="fa-regular fa-bell"></i>
            ${unread ? `<span class="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#3ebd69] px-1 text-[10px] font-semibold text-white">${unread}</span>` : ""}
          </button>
          <a href="/create-offer/" class="inline-flex items-center gap-1.5 rounded-lg bg-[#e5e5e5] px-3 py-1.5 text-sm text-[#181818] hover:bg-white">
            <i class="fa-solid fa-plus text-xs"></i> Create offer
          </a>
          <div class="relative">
            <button type="button" id="account-menu-btn" class="inline-flex items-center rounded-full border border-[#303030] p-0.5" aria-label="Account menu" aria-expanded="false">
              ${this.avatarSvg(32)}
            </button>
            <div id="account-menu" class="absolute right-0 z-50 mt-2 hidden w-52 overflow-hidden rounded-xl border border-[#303030] bg-[#161616] py-1 shadow-xl">
              <div class="border-b border-[#303030] px-3 py-2">
                <p class="truncate text-sm font-medium text-white">${session.username}</p>
                <a href="/wallet/" class="mt-1 flex items-center justify-between text-xs text-[#9f9f9f] hover:text-white">
                  <span>${bal}</span>
                  <i class="fa-regular fa-eye"></i>
                </a>
              </div>
              <a href="/profile/" class="block px-3 py-2 text-sm text-white hover:bg-white/[0.05]">My profile</a>
              <a href="/account/" class="block px-3 py-2 text-sm text-white hover:bg-white/[0.05]">Account</a>
              <button type="button" id="signout-btn" class="block w-full px-3 py-2 text-left text-sm text-[#f2635a] hover:bg-white/[0.05]">Sign out</button>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 lg:hidden">
          <a href="/wallet/" class="text-xs font-medium text-[#3ebd69]">${bal}</a>
          <button type="button" id="notif-btn-m" class="relative inline-flex h-9 w-9 items-center justify-center text-white" aria-label="Notifications">
            <i class="fa-regular fa-bell"></i>
            ${unread ? `<span class="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#3ebd69] px-1 text-[10px] text-white">${unread}</span>` : ""}
          </button>
          <button type="button" id="menu-toggle" class="inline-flex h-10 w-10 items-center justify-center text-white" aria-label="Menu" aria-expanded="false" aria-controls="site-menu">
            <i class="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      <div id="site-menu" class="hidden flex-col gap-2 border-t border-[#303030] px-4 py-4 lg:!hidden">
        <a href="/my-offers/" class="rounded-lg px-3 py-2.5 text-sm text-white hover:bg-white/[0.04]">My offers</a>
        <a href="/my-trades/" class="rounded-lg px-3 py-2.5 text-sm text-white hover:bg-white/[0.04]">My trades</a>
        <a href="/support/" class="rounded-lg px-3 py-2.5 text-sm text-white hover:bg-white/[0.04]">Support</a>
        <a href="/wallet/" class="rounded-lg px-3 py-2.5 text-sm text-white hover:bg-white/[0.04]">Wallet</a>
        <a href="/account/" class="rounded-lg px-3 py-2.5 text-sm text-white hover:bg-white/[0.04]">Account</a>
        <a href="/create-offer/" class="rounded-lg bg-[#e5e5e5] px-3 py-2.5 text-center text-sm text-[#181818]"><i class="fa-solid fa-plus text-xs mr-1"></i> Create offer</a>
        <a href="/profile/" class="rounded-lg px-3 py-2.5 text-sm text-white hover:bg-white/[0.04]">My profile</a>
        <button type="button" id="signout-btn-m" class="rounded-lg px-3 py-2.5 text-left text-sm text-[#f2635a]">Sign out</button>
      </div>

      <div id="notif-panel" class="absolute right-4 top-full z-50 mt-1 hidden w-[min(100vw-2rem,360px)] overflow-hidden rounded-xl border border-[#303030] bg-[#161616] shadow-xl sm:right-6 lg:right-8">
        <div class="border-b border-[#303030] px-4 py-3 text-sm font-semibold text-white">Notifications</div>
        <div class="max-h-72 overflow-y-auto divide-y divide-[#303030]">
          ${(window.STT?.notifications || []).length
            ? (window.STT.notifications).map(n => `
            <div class="px-4 py-3">
              <p class="text-sm font-medium text-white">${n.title}</p>
              <p class="mt-0.5 text-xs text-[#9f9f9f]">${n.body}</p>
              <p class="mt-1 text-[11px] text-[#6b6b6b]">${n.time}</p>
            </div>`).join("")
            : `<div class="px-4 py-10 text-center text-sm text-[#9f9f9f]">No notifications yet</div>`}
        </div>
      </div>
    </header>`;
  },

  mount({ active = "", requireAuth = false } = {}) {
    this.active = active;
    let session = window.STT?.getSession();

    if (requireAuth && !session) {
      location.href = "/login/";
      return null;
    }

    // Keep logged-in demo accounts looking fresh (empty activity)
    if (session && window.STT) {
      session = window.STT.updateSession({ balanceUsd: 0, unread: 0 }) || session;
    }

    const headerEl = document.getElementById("app-header");
    const footerEl = document.getElementById("app-footer");
    if (headerEl) {
      headerEl.innerHTML = session ? this.authHeader(session) : this.guestHeader();
    }
    if (footerEl) {
      footerEl.innerHTML = this.footer();
    }

    this.bind();
    return session;
  },

  bind() {
    const menuBtn = document.getElementById("menu-toggle");
    const menuPanel = document.getElementById("site-menu");
    if (menuBtn && menuPanel) {
      menuBtn.addEventListener("click", () => {
        const open = menuPanel.classList.toggle("hidden");
        menuPanel.classList.toggle("flex", !open);
        menuBtn.setAttribute("aria-expanded", open ? "false" : "true");
      });
    }

    const accountBtn = document.getElementById("account-menu-btn");
    const accountMenu = document.getElementById("account-menu");
    if (accountBtn && accountMenu) {
      accountBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = accountMenu.classList.toggle("hidden");
        accountBtn.setAttribute("aria-expanded", open ? "false" : "true");
      });
    }

    const notifPanel = document.getElementById("notif-panel");
    ["notif-btn", "notif-btn-m"].forEach((id) => {
      const btn = document.getElementById(id);
      if (btn && notifPanel) {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          notifPanel.classList.toggle("hidden");
        });
      }
    });

    document.addEventListener("click", () => {
      accountMenu?.classList.add("hidden");
      notifPanel?.classList.add("hidden");
    });

    const signOut = () => {
      window.STT.logout();
      location.href = "/";
    };
    document.getElementById("signout-btn")?.addEventListener("click", signOut);
    document.getElementById("signout-btn-m")?.addEventListener("click", signOut);
  },
};
