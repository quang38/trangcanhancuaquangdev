document.addEventListener('DOMContentLoaded', () => {
    const videoGallery = document.getElementById('videoGallery');
    const dataFile = './data.json'; // Đường dẫn tới tệp JSON

    fetch(dataFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Không thể tải dữ liệu từ tệp JSON');
            }
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data.videos) && data.videos.length > 0) {
                videoGallery.innerHTML = data.videos
                    .map(video => {
                        // Kiểm tra URL có hợp lệ không
                        if (video.url) {
                            return `
                                <div class="video-item">
                                    <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
                                </div>`;
                        } else {
                            return `<p>URL video không hợp lệ.</p>`;
                        }
                    })
                    .join('');
            } else {
                videoGallery.innerHTML = '<p>Không có video để hiển thị</p>';
            }
        })
        .catch(error => {
            console.error(error);
            videoGallery.innerHTML = '<p>Có lỗi xảy ra khi tải video</p>';
        });
});
