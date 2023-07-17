// Membuat function serta menambahkan variabel ke masing masing input
function calculateBMI() {
  var gender = document.getElementById("gender").value;
  var usia = parseInt(document.getElementById("usia").value);
  var berat = parseInt(document.getElementById("berat").value);
  var tinggi = parseInt(document.getElementById("tinggi").value);

  // Memunculkan perintah jika data tidak benar
  if (gender === "" || isNaN(usia) || isNaN(berat) || isNaN(tinggi)) {
    document.getElementById("result").innerHTML = "Mohon isi data dengan benar.";
    return;
  }

  // Konversi tinggi badan dari cm menjadi meter
  tinggi = tinggi / 100;

  // Hitung BMI
  var bmi = berat / (tinggi * tinggi);

  // Tampilkan hasil BMI
  var result = "BMI Anda adalah <br>" + bmi.toFixed(2);

  // Tambahkan kategori BMI berdasarkan jenis kelamin
  if (gender === "laki-laki") {
    result += "<br>Kategori: ";
    if (usia >= 20) {
      if (bmi < 18.5) {
        result +=
          "Kurus <br> Jika BMI anda berada di kategori ini, disarankan untuk menambah berat badan hingga sesuai dengan tinggi badan anda. Anda dapat melakukan hal hal seperti makan makanan yang bergizi dan tinggi nutrisi serta rutin meminum susu setiap hari.  ";
      } else if (bmi < 25) {
        result += "Normal <br> Pertahankan berat badan anda di kategori ini. Tetap rutin berolahraga dan makan secara teratur dengan memperhatikan gizi sesuai kebutuhan";
      } else if (bmi < 30) {
        result += "Overweight <br> Jika BMI anda berada di kategori ini, anda dianjurkan untuk menurunkan berat badan hingga batas normal. Cara terbaik adalah mengatur kalori makan yang dikonsumsi dan rutin berolahraga";
      } else {
        result +=
          "Obesitas <br> Jika BMI anda berada di kategori ini, anda harus mulai memiliki pola makan sehat, lakukan diet berisi makanan seimbang, mengontrol kalori, dan juga melakukan aktivitas fisik untuk meningkatkan pembakaran energi dan cadangan energi.";
      }
    } else {
      result += "Minimal usia 15 tahun";
    }
  } else if (gender === "perempuan") {
    result += "<br>Kategori: ";
    if (usia >= 20) {
      if (bmi < 18.5) {
        result +=
          "Kurus <br> Jika BMI anda berada di kategori ini, disarankan untuk menambah berat badan hingga sesuai dengan tinggi badan anda. Anda dapat melakukan hal hal seperti makan makanan yang bergizi dan tinggi nutrisi serta rutin meminum susu setiap hari.";
      } else if (bmi < 24) {
        result += "Normal <br> Pertahankan berat badan anda di kategori ini. Tetap rutin berolahraga dan makan secara teratur dengan memperhatikan gizi sesuai kebutuhan";
      } else if (bmi < 29) {
        result += "Overweight";
      } else {
        result +=
          "Obesitas <br> Jika BMI anda berada di kategori ini, anda harus mulai memiliki pola makan sehat, lakukan diet berisi makanan seimbang, mengontrol kalori, dan juga melakukan aktivitas fisik untuk meningkatkan pembakaran energi dan cadangan energi.";
      }
    } else {
      result += "Minimal usia 15 tahun";
    }
  }

  document.getElementById("result").innerHTML = result;
}
// Fuction untuk mereset semua input
function resetBMI() {
  document.getElementById("gender").value = "";
  document.getElementById("usia").value = "";
  document.getElementById("berat").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("result").innerHTML = "";
}
