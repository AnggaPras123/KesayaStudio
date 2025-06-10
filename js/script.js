document.addEventListener('DOMContentLoaded', () => {
    // Floating Chat Button Logic
    const floatingChatButton = document.getElementById('floating-chat-button');
    const floatingContactContainer = document.querySelector('.floating-contact-container');

    if (floatingChatButton && floatingContactContainer) {
        floatingChatButton.addEventListener('click', () => {
            floatingContactContainer.classList.toggle('active');
        });
    }
    // Inisialisasi AOS
    AOS.init({
        once: true, // Animasi hanya berjalan sekali saat scroll ke elemen
        duration: 800, // Durasi animasi dalam ms
        easing: 'ease-out-cubic', // Efek easing
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }


    // Hero Image Fallback Logic
    const heroSection = document.getElementById('beranda');
    if (heroSection) {
        const intendedHeroImageUrl = 'images/DSC09397.jpg';
        const fallbackHeroImageUrl = 'images/fallback.jpg';

        const img = new Image();
        img.onload = function() {
            heroSection.style.backgroundImage = `url('${intendedHeroImageUrl}')`;
            console.log('Gambar hero (' + intendedHeroImageUrl + ') berhasil dimuat dan diterapkan oleh JS.');
        }
        img.onerror = function() {
            heroSection.style.backgroundImage = `url('${fallbackHeroImageUrl}')`;
            console.error('Error memuat gambar hero utama (' + intendedHeroImageUrl + ') via JS. Menggunakan gambar fallback.');
        }
        img.src = intendedHeroImageUrl;
    }


    // Data Paket
    const packages = [
        {
            id: 'wedding-1',
            name: "Paket Wedding 1 (Foto & Video)",
            price: "Rp 1.500.000",
            photoDetails: [
                "Album Wedding 2 Roll (10 Sheet, 90 Foto)",
                "Unlimited Shoot",
                "All File edit in Google Drive",
                "1 Foto+Frame (10R)",
                "Garansi File 1 Tahun"
            ],
            videoDetails: [
                "Video Highlight 1 Menit",
                "Video Cinematic 3 Menit"
            ],
            description: "Paket lengkap untuk mengabadikan momen pernikahan Anda. Kami akan menangkap setiap detail penting dari acara spesial Anda dengan kualitas terbaik.",
            faq: [
                { question: "Berapa lama proses editing?", answer: "Proses editing foto biasanya memakan waktu 7-14 hari kerja, sedangkan video 14-21 hari kerja." },
                { question: "Apakah ada biaya transport?", answer: "Biaya transport akan dikenakan jika lokasi acara di luar kota." }
            ]
        },
        {
            id: 'engagement-1',
            name: "Paket Engagement 1",
            price: "Rp 400.000",
            photoDetails: [
                "Album 1 Roll (5 Sheet, 40 Foto)",
                "Unlimited Shoot",
                "All File edit in Google Drive"
            ],
            videoDetails: null,
            description: "Sesi foto tunangan yang intim dan berkesan. Cocok untuk pasangan yang ingin mengabadikan momen spesial sebelum pernikahan."
        },
        {
            id: 'engagement-2',
            name: "Paket Engagement 2",
            price: "Rp 800.000",
            photoDetails: [
                "Album 1 Roll (5 Sheet, 40 Foto)",
                "Unlimited Shoot",
                "All File edit in Google Drive",
                "2 Foto+Frame (10R)"
            ],
            videoDetails: [
                "Video Cinematic 1-3 Menit"
            ],
            description: "Paket tunangan lengkap dengan video cinematic untuk cerita visual yang lebih mendalam."
        },
        {
            id: 'wisuda-1',
            name: "Paket Wisuda 1",
            price: "Rp 500.000",
            details: [
                "1 Fotografer",
                "1 jam sesi outdoor",
                "30+ edited photos",
                "Cetak 5 foto 4R",
                "Softcopy Google Drive"
            ],
            description: "Rayakan kelulusan Anda dengan sesi foto outdoor yang ceria dan penuh kenangan."
        },
        {
            id: 'wisuda-2',
            name: "Paket Wisuda 2",
            price: "Rp 850.000",
            details: [
                "1 Fotografer + properti",
                "2 jam sesi (indoor + outdoor)",
                "50+ edited photos",
                "Cetak 10 foto 4R + 1 foto 10R bingkai",
                "Softcopy + album mini"
            ],
            description: "Paket wisuda lengkap dengan sesi indoor dan outdoor, serta cetakan dan album fisik."
        },
        {
            id: 'event-1',
            name: "Paket Event 1",
            price: "Rp 1.000.000",
            details: [
                "1 Fotografer",
                "4 jam dokumentasi",
                "100+ edited photos",
                "File Google Drive",
                "1 hari pengerjaan"
            ],
            description: "Dokumentasi fotografi profesional untuk acara-acara kecil hingga menengah Anda."
        },
        {
            id: 'event-2',
            name: "Paket Event 2",
            price: "Rp 2.000.000",
            details: [
                "1 Fotografer & 1 Videografer",
                "6 jam dokumentasi",
                "Highlight video 2-3 menit",
                "150+ edited photos",
                "Flashdisk + link Google Drive"
            ],
            description: "Paket lengkap untuk mendokumentasikan acara besar Anda dengan foto dan video berkualitas sinematik."
        }
    ];

    // Fungsi untuk membuat kartu paket dan menambahkannya ke DOM
    function renderPackages() {
        const packageListDiv = document.getElementById('package-list');
        if (!packageListDiv) return;

        packageListDiv.innerHTML = ''; // Bersihkan konten sebelumnya

        packages.forEach(pkg => {
            let detailsHtml = '';
            if (pkg.photoDetails) {
                detailsHtml += `<div class="mb-2"><h4 class="font-semibold text-gray-700">Foto:</h4><ul class="list-disc list-inside text-gray-600 text-sm">${pkg.photoDetails.map(detail => `<li>${detail}</li>`).join('')}</ul></div>`;
            }
            if (pkg.videoDetails) {
                detailsHtml += `<div><h4 class="font-semibold text-gray-700">Video:</h4><ul class="list-disc list-inside text-gray-600 text-sm">${pkg.videoDetails.map(detail => `<li>${detail}</li>`).join('')}</ul></div>`;
            }
            if (pkg.details && !pkg.photoDetails && !pkg.videoDetails) {
                 detailsHtml += `<ul class="list-disc list-inside text-gray-600 text-sm">${pkg.details.map(detail => `<li>${detail}</li>`).join('')}</ul>`;
            }

            const packageCardHtml = `
                <div class="package-card border border-gray-200 rounded-lg p-6 bg-white hover:bg-amber-50 cursor-pointer" data-package-id="${pkg.id}" data-aos="zoom-in" data-aos-delay="200">
                    <h3 class="text-2xl font-semibold mb-3 text-amber-600">${pkg.name}</h3>
                    <p class="text-3xl font-bold mb-4">${pkg.price}</p>
                    ${detailsHtml}
                    <div class="mt-4 text-center">
                        <span class="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-amber-500 text-white">
                            Lihat Detail
                        </span>
                    </div>
                </div>
            `;
            packageListDiv.innerHTML += packageCardHtml;
        });

        // Tambahkan event listener setelah semua kartu dirender
        document.querySelectorAll('.package-card').forEach(card => {
            card.addEventListener('click', (event) => {
                const packageId = event.currentTarget.dataset.packageId;
                showPackageDetailsModal(packageId);
            });
        });
    }

    renderPackages(); // Panggil fungsi untuk merender paket saat halaman dimuat

    // Inisialisasi Swiper Portofolio
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
        on: {
            init: function() {
                this.slides.forEach(slide => {
                    const img = slide.querySelector('img');
                    if (img) {
                        img.parentElement.classList.add('loading');
                        img.onload = () => {
                            img.parentElement.classList.remove('loading');
                        };
                        if (img.complete) {
                            img.parentElement.classList.remove('loading');
                        }
                    }
                });
            },
            slideChange: function() {
                this.slides.forEach(slide => {
                    const img = slide.querySelector('img');
                    if (img) {
                        if (!img.complete) {
                            img.parentElement.classList.add('loading');
                        }
                        img.onload = () => {
                            img.parentElement.classList.remove('loading');
                        };
                        if (img.complete && img.parentElement.classList.contains('loading')) {
                            img.parentElement.classList.remove('loading');
                        }
                    }
                });
            }
        }
    });

    // Inisialisasi Swiper Testimoni
    var testimonialSwiper = new Swiper(".testimonialSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });


    // JavaScript untuk Filtering Portofolio
    const filterButtons = document.querySelectorAll('.filter-button');
    const portfolioGallery = document.getElementById('portfolio-gallery');
    const allSlides = Array.from(portfolioGallery.children);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            filterButtons.forEach(btn => btn.classList.remove('active', 'bg-amber-500', 'hover:bg-amber-600', 'text-white'));
            filterButtons.forEach(btn => btn.classList.add('bg-gray-200', 'hover:bg-gray-300', 'text-gray-800'));

            button.classList.add('active', 'bg-amber-500', 'hover:bg-amber-600', 'text-white');
            button.classList.remove('bg-gray-200', 'hover:bg-gray-300', 'text-gray-800');

            swiper.removeAllSlides();

            const filteredSlides = allSlides.filter(slide => {
                return category === 'all' || slide.dataset.category === category;
            });

            filteredSlides.forEach(slide => {
                const clonedSlide = slide.cloneNode(true);
                const img = clonedSlide.querySelector('img');
                if (img) {
                    if (img.complete) {
                        clonedSlide.classList.remove('loading');
                    } else {
                        clonedSlide.classList.add('loading');
                        img.onload = () => {
                            clonedSlide.classList.remove('loading');
                        };
                    }
                }
                swiper.appendSlide(clonedSlide.outerHTML);
            });

            swiper.update();
            swiper.slideTo(0);
        });
    });

    document.querySelector('.filter-button[data-category="all"]').click();


    // MODAL LOGIC FOR PACKAGE DETAILS
    const packageModalOverlay = document.getElementById('package-modal-overlay');
    const modalCloseButton = document.getElementById('modal-close-button');
    const modalPackageName = document.getElementById('modal-package-name');
    const modalPackagePrice = document.getElementById('modal-package-price');
    const modalPackageDetails = document.getElementById('modal-package-details');
    const modalWhatsappButton = document.getElementById('modal-whatsapp-button');
    const phoneNumber = "6285235541965";

    function showPackageDetailsModal(packageId) {
        const pkg = packages.find(p => p.id === packageId);

        if (pkg) {
            modalPackageName.textContent = pkg.name;
            modalPackagePrice.textContent = pkg.price;

            let detailsHtml = `<p class="mb-4">${pkg.description || 'Tidak ada deskripsi tambahan.'}</p>`;

            if (pkg.photoDetails) {
                detailsHtml += `<div class="mb-3"><h4 class="font-bold text-gray-900 mb-1">Detail Foto:</h4><ul class="list-disc list-inside text-gray-700 space-y-1">${pkg.photoDetails.map(detail => `<li>${detail}</li>`).join('')}</ul></div>`;
            }
            if (pkg.videoDetails) {
                detailsHtml += `<div class="mb-3"><h4 class="font-bold text-gray-900 mb-1">Detail Video:</h4><ul class="list-disc list-inside text-gray-700 space-y-1">${pkg.videoDetails.map(detail => `<li>${detail}</li>`).join('')}</ul></div>`;
            }
            if (pkg.details && !pkg.photoDetails && !pkg.videoDetails) {
                 detailsHtml += `<div class="mb-3"><h4 class="font-bold text-gray-900 mb-1">Rincian Paket:</h4><ul class="list-disc list-inside text-gray-700 space-y-1">${pkg.details.map(detail => `<li>${detail}</li>`).join('')}</ul></div>`;
            }

            if (pkg.faq && pkg.faq.length > 0) {
                detailsHtml += `<div class="mt-4"><h4 class="font-bold text-gray-900 mb-2">FAQ:</h4>`;
                pkg.faq.forEach(item => {
                    detailsHtml += `<p class="font-semibold">${item.question}</p>`;
                    detailsHtml += `<p class="text-gray-600 mb-2">${item.answer}</p>`;
                });
                detailsHtml += `</div>`;
            }

            modalPackageDetails.innerHTML = detailsHtml;

            const whatsappMessage = `Halo Kesaya Studio,\nSaya tertarik dengan detail paket berikut:\n\nNama Paket: ${pkg.name}\nHarga: ${pkg.price}\n\nMohon informasinya lebih lanjut. Terima kasih.`;
            modalWhatsappButton.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

            packageModalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closePackageDetailsModal() {
        packageModalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalCloseButton && packageModalOverlay) {
        modalCloseButton.addEventListener('click', closePackageDetailsModal);
        packageModalOverlay.addEventListener('click', (e) => {
            if (e.target === packageModalOverlay) {
                closePackageDetailsModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && packageModalOverlay && packageModalOverlay.classList.contains('active')) {
            closePackageDetailsModal();
        }
    });

    // TYPED.JS ANIMATION FOR HERO SECTION
    if (document.getElementById('typed-text')) {
        var typed = new Typed('#typed-text', {
            strings: [
                "Abadikan Momen Berhargamu Bersama Kami",
                "Fotografi Dan Videografi Profesional",
                "Ciptakan Kenangan Indah"
            ],
            typeSpeed: 40,
            backSpeed: 20,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        });
    }
});