// Oyun fonksiyonu
function oyun(oyuncuSecim) {
  // Bilgisayar seçimi
  const bilgisayarSecim = Math.floor(Math.random() * 3);

  // Kazananı belirleme
  const kazanan = (oyuncuSecim - bilgisayarSecim + 3) % 3;

  // Sonuçları yazdırma
  alert(`**Oyuncu Seçimi:** ${secimStr(oyuncuSecim)}`);
  alert(`**Bilgisayar Seçimi:** ${secimStr(bilgisayarSecim)}`);

  if (kazanan === 0) {
    alert("**Berabere!**");
  } else if (kazanan === 1) {
    alert("**Tebrikler, kazandınız!**");
  } else {
    alert("**Maalesef, kaybettiniz!**");
  }

  return kazanan;
}

// Seçim stringi
function secimStr(secim) {
  switch (secim) {
    case 0:
      return "Taş";
    case 1:
      return "Kağıt";
    case 2:
      return "Makas";
  }
}

// Oyun başlangıcı
let oyuncuSkor = 0;
let bilgisayarSkor = 0;

// Menü
function menu() {
  alert("**Taş Kağıt Makas Oyununa Hoş Geldiniz!**");
  alert("Oyun kuralları:");
  alert("  * 0 = Taş");
  alert("  * 1 = Kağıt");
  alert("  * 2 = Makas");
  alert("  * Taş makası kırar.");
  alert("  * Kağıt taşı sarar.");
  alert("  * Makas kağıdı keser.");
}

menu();

for (let i = 0; i < 3; i++) {
  // Oyuncu seçimi
  let oyuncuSecim = -1;
  while (oyuncuSecim < 0 || oyuncuSecim > 2) {
    oyuncuSecim = parseInt(prompt("Seçiminizi giriniz (0=Taş, 1=Kağıt, 2=Makas): "));
  }

  // Oyun oynama
  const kazanan = oyun(oyuncuSecim);

  // Skor güncelleme
  if (kazanan === 1) {
    oyuncuSkor++;
  } else if (kazanan === 2) {
    bilgisayarSkor++;
  }
}


alert("**Oyuncu Skor:** " + oyuncuSkor);
alert("**Bilgisayar Skor:** " + bilgisayarSkor);

if (oyuncuSkor > bilgisayarSkor) {
  alert("**Tebrikler, oyunu kazandınız!**");
} else if (oyuncuSkor < bilgisayarSkor) {
  alert("**Maalesef, oyunu kaybettiniz!**");
} else {
  alert("**Oyun berabere!**");
}


let tekrarOyna = "";
while (tekrarOyna !== "E" && tekrarOyna !== "H") {
  tekrarOyna = prompt("Tekrar oynamak ister misiniz? (E/H): ").toUpperCase();
}

if (tekrarOyna === "E") {
  alert("**Tekrar oynuyorsunuz...**");
  location.reload();
} else {
  alert("**Teşekkürler, tekrar görüşmek üzere!**");
}
