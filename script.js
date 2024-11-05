document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn').addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định
        const aboutSection = document.getElementById('about'); // Lấy phần About
        aboutSection.scrollIntoView({
            behavior: 'smooth' // Hiệu ứng cuộn mượt
        });
    });

    document.getElementById('FACEBOOK').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = './nolink/nolink.html'; // Chuyển hướng đến Facebook
    });

    document.getElementById('PLAYDUO').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'https://playerduo.net/quangdev'; // Chuyển hướng đến PlayDuo
    });

    document.getElementById('DISCORD').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'https://discord.gg/YccapeYbmH'; // Chuyển hướng đến Discord
    });
    document.getElementById('TIKTOK').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'https://www.tiktok.com/@quangdev_quangdev'; // Chuyển hướng đến Facebook
    });
    document.getElementById('PROJECT').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = './PROJECT/project.html'; // Chuyển hướng đến Facebook
    });
});
