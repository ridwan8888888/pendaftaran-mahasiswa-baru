// script.js

document.getElementById("pendaftaranForm").addEventListener("submit", function(e) {
  e.preventDefault(); // cegah reload

  // Ambil semua data form
  const data = {
    nama: document.getElementById("nama").value,
    nik: document.getElementById("nik").value,
    tempat_lahir: document.getElementById("tempat_lahir").value,
    tanggal_lahir: document.getElementById("tanggal_lahir").value,
    jenis_kelamin: document.getElementById("jk").value,
    alamat: document.getElementById("alamat").value,
    hp: document.getElementById("hp").value,
    email: document.getElementById("email").value,
    ayah: document.getElementById("ayah").value,
    ibu: document.getElementById("ibu").value,
    pekerjaan: document.getElementById("pekerjaan").value,
    no_orang_tua: document.getElementById("noortu").value,
    sekolah: document.getElementById("sekolah").value,
    jurusan: document.getElementById("jurusan").value,
    tahun_lulus: document.getElementById("tahunlulus").value,
    fakultas: document.getElementById("fakultas").value,
    prodi: document.getElementById("prodi").value,
  };

  // Ambil file
  const fotoFile = document.getElementById("foto").files[0];
  const ijazahFile = document.getElementById("ijazah").files[0];

  // Fungsi baca file (base64)
  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(file);
    });
  };

  // Jika ada file, baca dulu baru simpan
  Promise.all([
    fotoFile ? readFile(fotoFile) : null,
    ijazahFile ? readFile(ijazahFile) : null
  ]).then(results => {
    data.foto = results[0];
    data.ijazah = results[1];

    // Simpan ke localStorage
    localStorage.setItem("pendaftaranData", JSON.stringify(data));

    // Pindah ke halaman konfirmasi
    window.location.href = "konfirmasi.html";
  });
});
