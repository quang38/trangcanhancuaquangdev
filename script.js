// script.js
function toggleLanguage() {
    // Get the current language state
    const languageToggleButton = document.getElementById('language-toggle');
    const isEnglish = languageToggleButton.innerText === 'EN';
    
    // Toggle language button text
    languageToggleButton.innerText = isEnglish ? 'VI' : 'EN';

    // Change text based on the selected language
    if (isEnglish) {
        // Switch to English
        document.getElementById('about-title').innerText = 'About Me';
        document.getElementById('about-description').innerText = 'Welcome to my personal page! 🎮 I am QUANG.DEV, a dedicated gamer 👾 and content creator 🎥 specializing in Naraka. Follow me for tips 💡, gameplay 🎮, and insights into the gaming world 🌍! 🚀';
        document.getElementById('social-title').innerText = 'Find Me Online';
        document.getElementById('stats-title').innerText = 'Currently playing game';
        document.getElementById('highlights-title').innerText = 'VIDEOS';
        document.getElementById('contact-title').innerText = 'DONATE ME';
        document.getElementById('footer-text').innerText = '&copy; 2024 QUANG.DEV. All rights reserved.';
    } else {
        // Switch to Vietnamese
        document.getElementById('about-title').innerText = 'Giới Thiệu';
        document.getElementById('about-description').innerText = 'Chào mừng bạn đến với trang cá nhân của tôi! 🎮 Tôi là QUANG.DEV, một game thủ tận tâm 👾 và người sáng tạo nội dung 🎥 chuyên về Naraka. Theo dõi tôi để nhận mẹo 💡, gameplay 🎮, và những cái nhìn về thế giới game 🌍! 🚀';
        document.getElementById('social-title').innerText = 'Tìm tôi trên mạng';
        document.getElementById('stats-title').innerText = 'Game đang chơi';
        document.getElementById('highlights-title').innerText = 'VIDEO';
        document.getElementById('contact-title').innerText = 'ỦNG HỘ TÔI';
        document.getElementById('footer-text').innerText = '&copy; 2024 QUANG.DEV. Mọi quyền được bảo lưu.';
    }
}
