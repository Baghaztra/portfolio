// Menampilkan about me
const about = document.getElementById("about");
const button = document.getElementById("toggleAbout");

function hideAbout() {
  about.classList.remove("show");
  button.innerHTML = `About Me`;
}

function showAbout() {
  about.classList.add("show");
  button.innerHTML = `Hide About`;
}

button.addEventListener("click", function () {
  if (about.classList.contains("show")) {
    hideAbout();
  } else {
    showAbout();
  }
});

// ganti bahasa
document.getElementById("toggleLang").addEventListener("click", function () {
  const textEn = document.getElementById("textEn");
  const textId = document.getElementById("textId");

  if (textEn.style.display === "none") {
    textEn.style.display = "block";
    textId.style.display = "none";
    this.innerHTML = `<i class='fa-solid fa-language'></i> Id`;
  } else {
    textEn.style.display = "none";
    textId.style.display = "block";
    this.innerHTML = `<i class='fa-solid fa-language'></i> En`;
  }
});

// Biar navbar nutup pas dipencet
function navbarCollapse() {
  document
    .getElementById("navbarToggle")
    .setAttribute("aria-expanded", "false");
  document.getElementById("navbarNav").classList.remove("show");
}
document.querySelectorAll(".nav-link").forEach((element) => {
  element.addEventListener("click", navbarCollapse);
});

// modal gambar
document.querySelectorAll(".card-img-top").forEach((img) => {
  img.addEventListener("click", function () {
    const images = JSON.parse(this.dataset.images);
    const title = this.dataset.title;

    // Ubah judul di modal
    document.getElementById('dynamicModalLabel').innerHTML = title;

    // Hapus slide lama
    const carouselInner = document.querySelector(
      "#carouselDynamic .carousel-inner"
    );
    carouselInner.innerHTML = "";

    const carouselIndicators = document.querySelector(
      "#carouselDynamic .carousel-indicators"
    );
    carouselIndicators.innerHTML = "";

    // Tambahkan slides ke carousel
    images.forEach((src, index) => {
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.setAttribute('data-bs-target', '#carouselDynamic');
        indicator.setAttribute('data-bs-slide-to', index);
        if (index === 0) {
            indicator.classList.add('active');
            indicator.setAttribute('aria-current', 'true');
        }
        indicator.setAttribute('aria-label', `Slide ${index + 1}`);
        carouselIndicators.appendChild(indicator);
        
        const slide = document.createElement("div");
        const isActive = index === 0 ? " active" : "";
        slide.className = `carousel-item${isActive}`;
        slide.innerHTML = `<img src="${src}" class="d-block w-100" alt="...">`;
        carouselInner.appendChild(slide);
    });

    const modal = new bootstrap.Modal(document.getElementById("dynamicModal"));
    modal.show();
  });
});
