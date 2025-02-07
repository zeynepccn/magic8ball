const answers = [
     // ✅ Olumlu Cevaplar
     { text: "Kesinlikle evet!", color: "#4CAF50" },     // Yeşil
     { text: "Bence evet!", color: "#388E3C" },            // Koyu Yeşil
     { text: "Kesinlikle öyle!", color: "#81C784" },       // Açık Yeşil
     { text: "Şüphesiz.", color: "#76FF03" },              // Canlı Yeşil
     { text: "Evet, kesinlikle.", color: "#2E7D32" },       // Orta Yeşil
     { text: "Buna güvenebilirsin.", color: "#66BB6A" },    // Canlı Yeşil
     { text: "Büyük ihtimalle.", color: "#4CAF50" },        // Yeşil
     { text: "Görünüşe göre iyi.", color: "#388E3C" },      // Koyu Yeşil
     { text: "İşaretler eveti gösteriyor.", color: "#1B5E20" }, // Koyu Yeşil
     { text: "Yıldızlar eveti gösteriyor.", color: "#4CAF50" }, // Yeşil
 
     // ❓ Belirsiz Cevaplar
     { text: "Şüpheli görünüyor...", color: "#FFC107" },    // Sarı
     { text: "Emin olamazsın.", color: "#FFEB3B" },         // Soluk Sarı
     { text: "Biraz daha düşün.", color: "#FF9800" },       // Turuncu
     { text: "Cevap belirsiz, tekrar dene.", color: "#FF5722" }, // Koyu Turuncu
     { text: "Daha sonra tekrar sor.", color: "#FF7043" },   // Orman Turuncusu
     { text: "Şimdi söylemesem daha iyi.", color: "#FF8A65" }, // Açık Turuncu
     { text: "Şu anda tahmin edemem.", color: "#FF6F00" },   // Turuncu Koyu
     { text: "Odaklan ve tekrar sor.", color: "#FF5722" },   // Koyu Turuncu
     { text: "Gelecek belirsiz, tekrar dene.", color: "#FFC107" }, // Sarı
     { text: "Bunu ben bile bilmiyorum.", color: "#FF9800" }, // Turuncu
 
     // ❌ Olumsuz Cevaplar
     { text: "Hayır, mümkün değil.", color: "#F44336" },     // Kırmızı
     { text: "Kesinlikle hayır!", color: "#D32F2F" },        // Koyu Kırmızı
     { text: "Buna güvenme.", color: "#C62828" },            // Koyu Kırmızı
     { text: "Cevabım hayır.", color: "#B71C1C" },           // Çürük Kırmızı
     { text: "Kaynaklarım hayır diyor.", color: "#FF1744" }, // Pembe Kırmızı
     { text: "Görünüşe göre pek iyi değil.", color: "#F44336" }, // Kırmızı
     { text: "Çok şüpheli.", color: "#D32F2F" },            // Koyu Kırmızı
     { text: "Pek mümkün değil.", color: "#C62828" },        // Koyu Kırmızı
     { text: "Buna bahse girmezdim.", color: "#B71C1C" },    // Çürük Kırmızı
     { text: "Bu iyi bir fikir olmayabilir.", color: "#FF4081" }, // Pembe
 
     // 🔮 Yeni Cevaplar
     { text: "Her şey yolunda görünüyor.", color: "#3F51B5" }, // Mavi
     { text: "Biraz daha bekleyin.", color: "#2196F3" },     // Açık Mavi
     { text: "Yolunuz açık!", color: "#1976D2" },             // Koyu Mavi
     { text: "Düşüncelerinizi tekrar gözden geçirin.", color: "#00BCD4" }, // Turkuaz
     { text: "Her şey yolunda, merak etmeyin.", color: "#0097A7" }, // Deniz Mavisi
     { text: "Hayır, bu şüpheli.", color: "#9C27B0" },        // Mor
     { text: "Belki başka bir zaman.", color: "#8E24AA" },     // Lila
     { text: "Kesinlikle hayır.", color: "#7B1FA2" },         // Mor
     { text: "Yıldızlar şu anda uzak.", color: "#9C27B0" },    // Mor
     { text: "Hedefe ulaşmak zor.", color: "#E91E63" }        // Pembe
 ];
 

document.getElementById("askButton").addEventListener("click", function() {
    const question = document.getElementById("question").value.trim();
    const responseDiv = document.getElementById("response");
    const magicBall = document.getElementById("magicBall");
    const askButton = document.getElementById("askButton"); // "Sor" butonu
    const backButton = document.getElementById("backButton"); // Geri Dön butonunu seç

    if (question === "") {
        responseDiv.textContent = "Önce bir soru sormalısın!";
        return;
    }

    // Magic 8 Ball animasyonu
    magicBall.style.transition = "transform 0.5s ease-in-out";
    magicBall.style.transform = "rotate(360deg)";
    setTimeout(() => {
        magicBall.style.transform = "rotate(0deg)";
        const randomIndex = Math.floor(Math.random() * answers.length);
        const answer = answers[randomIndex];
        
        responseDiv.textContent = answer.text;
        responseDiv.style.color = answer.color; // Cevabın rengini değiştiriyoruz
        
        // "Sor" butonunu gizle, "Geri Dön" butonunu göster
        askButton.style.display = "none";
        backButton.style.display = "block";
    }, 500);
});
// "Geri Dön" butonuna tıklanınca form sıfırlansın
document.getElementById("backButton").addEventListener("click", function() {
    document.getElementById("question").value = ""; // Soru girişini temizle
    document.getElementById("response").textContent = ""; // Cevabı temizle

    // "Sor" butonunu geri getir, "Geri Dön" butonunu gizle
    document.getElementById("askButton").style.display = "block";
    document.getElementById("backButton").style.display = "none";
});