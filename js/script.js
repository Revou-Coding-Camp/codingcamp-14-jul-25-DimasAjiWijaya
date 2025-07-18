let name = prompt("Masukkan nama kamu:");

  // Jika input tidak kosong
  if (name && name.trim() !== "") {
    document.getElementById("welcome-message").innerText =
      `Hello!! ${name.trim()}, Welcome To Website`;
  } else {
    document.getElementById("welcome-message").innerText =
      "Hello!! Guest, Welcome To Website";
  }

function validateForm() {
    const nama = document.getElementById("name").value.trim();
    const tanggal = document.getElementById("birthday").value;
    const pesan = document.getElementById("massage").value.trim();
    const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked');

    if (nama === "") {
        alert("Nama lengkap harus diisi!");
        return;
    }
    if (tanggal === "") {
        alert("Tanggal lahir harus diisi!");
        return;
    }
    if (!jenisKelamin) {
        alert("Pilih jenis kelamin!");
        return;
    }
    if (pesan === "") {
        alert("Pesan tidak boleh kosong!");
        return;
    }

    // Tampilkan output di samping
    document.getElementById("out-name").innerText = nama;
    document.getElementById("out-birthday").innerText = tanggal;
    document.getElementById("out-jk").innerText = jenisKelamin.value;
    document.getElementById("out-massage").innerText = pesan;
}
