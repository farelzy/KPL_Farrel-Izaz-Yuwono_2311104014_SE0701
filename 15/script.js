const users = [];

document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value;

  const msg = document.getElementById("message");
  msg.innerText = "";

  if (!/^[a-zA-Z]+$/.test(username)) {
    return (msg.innerText = "Username hanya boleh huruf alfabet.");
  }

  if (username.length < 4 || username.length > 20) {
    return (msg.innerText = "Username harus 4-20 karakter.");
  }

  if (password.length < 8 || password.length > 20) {
    return (msg.innerText = "Password harus 8-20 karakter.");
  }

  if (!/\d/.test(password)) {
    return (msg.innerText = "Password harus mengandung angka.");
  }

  if (!/[!@#$%^&*]/.test(password)) {
    return (msg.innerText = "Password harus mengandung karakter spesial (!@#$%^&*).");
  }

  if (password.toLowerCase().includes(username.toLowerCase())) {
    return (msg.innerText = "Password tidak boleh mengandung username.");
  }

  const hashedPassword = await hashPassword(password);

  users.push({ username, password: hashedPassword });
  downloadJSON(users);
  msg.innerText = "Registrasi berhasil! File user disimpan.";
});

document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;
  const hashedPassword = await hashPassword(password);

  const user = users.find(u => u.username === username && u.password === hashedPassword);
  const msg = document.getElementById("message");

  if (user) {
    msg.innerText = "Login berhasil!";
  } else {
    msg.innerText = "Login gagal! Username atau password salah.";
  }
});

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("");
}

function downloadJSON(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "users.json";
  a.click();
  URL.revokeObjectURL(url);
}