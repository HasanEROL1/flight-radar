# ✈️ Flight Radar Dashboard

Bu proje, uçuş verilerini hem interaktif bir harita üzerinde hem de detaylı bir tablo listesinde görüntülemenizi sağlayan modern bir React uygulamasıdır. Redux Toolkit ile state yönetimi yapılırken, Leaflet ile coğrafi veriler görselleştirilmiştir.

## 🚀 Özellikler

- **Canlı Harita Takibi:** Uçakların konumlarını, yönlerini (derece bazlı) ve rotalarını harita üzerinde anlık izleme.
- **Detaylı Listeleme:** Uçuşların ID, kuyruk kodu ve koordinat bilgilerini içeren tablo görünümü.
- **Sayfalama (Pagination):** Büyük veri setlerini 12'şerli gruplar halinde rahatça inceleme.
- **Rota Çizimi:** Seçili uçuşların izlediği rotayı harita üzerinde `Polyline` ile görüntüleme.
- **Responsive Tasarım:** Bootstrap ile her cihazda düzgün çalışan arayüz.

## 🛠️ Kullanılan Teknolojiler

* **React** & **Hooks**
* **Redux Toolkit** (Merkezi State Yönetimi)
* **React-Leaflet** (Harita Görselleştirme)
* **React-Paginate** (Sayfalama Kontrolü)
* **Bootstrap 5** (UI Bileşenleri)
* **Leaflet-RotatedMarker** (Dinamik Uçak İkonları)

## 📂 Önemli Bileşenler

### 1. List Bileşeni (Tablo Görünümü)
Uçuş verilerini sayfalama mantığıyla listeleyen bileşendir.
- `flights.slice(start, end)` metodu ile veriyi parçalara ayırır.
- `dispatch(open(id))` ile yan panelde uçuş detaylarını açar.
- `nullCheck` util fonksiyonu ile eksik verileri güvenli şekilde işler.

### 2. Map Bileşeni (Harita Görünümü)
Leaflet kütüphanesini kullanarak uçuşları görselleştirir.
- **Marker:** Uçakların konumunu temsil eder. `getIcon(deg)` fonksiyonu ile uçağın yönüne göre ikon döndürülür.
- **Polyline:** Seçilen uçağın geçmiş koordinatlarını takip ederek rota çizer.
- **Popup:** Uçağa tıklandığında kod bilgisini gösterir ve aksiyon butonlarını sunar.

## 💻 Kurulum

Projeyi yerel makinenizde çalıştırmak için:

1. Depoyu klonlayın:
   ```bash
   git clone [https://github.com/kullaniciadi/flight-radar.git](https://github.com/HasanEROL1/flight-radar)

2. Gerekli bağımlılıkları yükleyin:

Bash
npm install

3. Gerekli paketlerin yüklü olduğundan emin olun:

npm install react-redux @reduxjs/toolkit react-leaflet leaflet react-paginate bootstrap


4. Uygulamayı başlatın:
npm start

Aşağıda, paylaştığın List (Liste) ve Map (Harita) bileşenlerini içeren projen için profesyonel, GitHub uyumlu bir README.md dosyası hazırladım.

Tüm kod blokları ve açıklamalar GitHub'ın Markdown standartlarına (GFM) göre düzenlenmiştir.

Markdown
# ✈️ Flight Radar Dashboard

Bu proje, uçuş verilerini hem interaktif bir harita üzerinde hem de detaylı bir tablo listesinde görüntülemenizi sağlayan modern bir React uygulamasıdır. Redux Toolkit ile state yönetimi yapılırken, Leaflet ile coğrafi veriler görselleştirilmiştir.

## 🚀 Özellikler

- **Canlı Harita Takibi:** Uçakların konumlarını, yönlerini (derece bazlı) ve rotalarını harita üzerinde anlık izleme.
- **Detaylı Listeleme:** Uçuşların ID, kuyruk kodu ve koordinat bilgilerini içeren tablo görünümü.
- **Sayfalama (Pagination):** Büyük veri setlerini 12'şerli gruplar halinde rahatça inceleme.
- **Rota Çizimi:** Seçili uçuşların izlediği rotayı harita üzerinde `Polyline` ile görüntüleme.
- **Responsive Tasarım:** Bootstrap ile her cihazda düzgün çalışan arayüz.

## 🛠️ Kullanılan Teknolojiler

* **React** & **Hooks**
* **Redux Toolkit** (Merkezi State Yönetimi)
* **React-Leaflet** (Harita Görselleştirme)
* **React-Paginate** (Sayfalama Kontrolü)
* **Bootstrap 5** (UI Bileşenleri)
* **Leaflet-RotatedMarker** (Dinamik Uçak İkonları)

## 📂 Önemli Bileşenler

### 1. List Bileşeni (Tablo Görünümü)
Uçuş verilerini sayfalama mantığıyla listeleyen bileşendir.
- `flights.slice(start, end)` metodu ile veriyi parçalara ayırır.
- `dispatch(open(id))` ile yan panelde uçuş detaylarını açar.
- `nullCheck` util fonksiyonu ile eksik verileri güvenli şekilde işler.

### 2. Map Bileşeni (Harita Görünümü)
Leaflet kütüphanesini kullanarak uçuşları görselleştirir.
- **Marker:** Uçakların konumunu temsil eder. `getIcon(deg)` fonksiyonu ile uçağın yönüne göre ikon döndürülür.
- **Polyline:** Seçilen uçağın geçmiş koordinatlarını takip ederek rota çizer.
- **Popup:** Uçağa tıklandığında kod bilgisini gösterir ve aksiyon butonlarını sunar.

## 💻 Kurulum

Projeyi yerel makinenizde çalıştırmak için:

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/HasanEROL1/flight-radar
Gerekli bağımlılıkları yükleyin:

Bash
npm install
Gerekli paketlerin yüklü olduğundan emin olun:

Bash
npm install react-redux @reduxjs/toolkit react-leaflet leaflet react-paginate bootstrap
Uygulamayı başlatın:

Bash
npm start
⚙️ Redux State Yapısı
Proje iki ana slice üzerinden yönetilir:



flightSlice: API'den gelen ham uçuş verilerini, yükleme durumunu (isLoading) ve hataları (error) tutar.

detailSlice: Seçili uçağın detaylarını ve haritadaki rota (route) bilgilerini yönetir.

⭐ Bu proje bir eğitim çalışması olarak geliştirilmiştir.


![tanıtım](flight-radar.gif)
