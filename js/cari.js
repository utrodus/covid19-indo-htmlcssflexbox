const searchBar = document.querySelector('#cari-berita');

const newsItem = document.querySelectorAll('.news-item');

searchBar.addEventListener('keyup', function (values) {
    const keyword = values.target.value.toLowerCase();
    newsItem.forEach(function (news) {
        let newsContent = news.firstElementChild.textContent.toLowerCase();
        if (newsContent.indexOf(keyword) != -1) {
            news.style.display = 'flex';
            news.style.flexGrow = '0';
        } else {
            news.style.display = 'none';
        }
    });
});

