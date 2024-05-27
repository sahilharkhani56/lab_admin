
document.addEventListener("DOMContentLoaded", function() {
   
    // 헤더 푸터 컴포넌트
    fetch('./components/header.html')
        .then(response => response.text())
        .then(data => {
            const headerElement = document.getElementById('header');
            if (headerElement) {
                headerElement.innerHTML = data;

                document.querySelectorAll('.sitemap-btn').forEach(function(btn) {
                    btn.addEventListener('click', function() {
                        btn.classList.toggle('active');
                        document.querySelector('.sub-gnb-wrap').classList.toggle('sitemap');
                        document.querySelector('.sitemap-bg').classList.toggle('active');
                    });
                });

                document.querySelectorAll('.gnb-menu').forEach(function(menu) {
                    menu.addEventListener('click', function() {
                        document.querySelectorAll('.gnb-menu').forEach(function(menu) {
                            menu.classList.remove('active');
                        });
                        menu.classList.add('active');
                        document.querySelectorAll('.sub-gnb-wrap').forEach(function(subGnb) {
                            subGnb.classList.remove('active');
                        });
                        menu.nextElementSibling.classList.add('active');
                    });
                });

                document.querySelectorAll('.toggle-btn').forEach(function(btn) {
                    btn.addEventListener('click', function() {
                        document.documentElement.classList.add('fixed');
                        document.body.classList.add('fixed');
                        document.querySelector('.gnb-wrap').classList.add('active');
                        document.querySelector('.gnb-wrap-bg').classList.add('active');
                    });
                });

                document.querySelectorAll('.toggle-close-btn').forEach(function(btn) {
                    btn.addEventListener('click', function() {
                        document.documentElement.classList.remove('fixed');
                        document.body.classList.remove('fixed');
                        document.querySelector('.gnb-wrap').classList.remove('active');
                        document.querySelector('.gnb-wrap-bg').classList.remove('active');
                    });
                });

                    document.querySelectorAll('.gnb-item').forEach(function (item) {
                        item.addEventListener('click', function () {
                            item.classList.toggle('active');
                        });
                    });
                 }
        });



    fetch('./components/pagination.html')
        .then(response => response.text())
        .then(data => {
            const paginationElement = document.getElementById('pagination');
            if (paginationElement) {
                paginationElement.innerHTML = data;
            }
        });
   
    // .gnb-item 클릭 이벤트
    document.querySelectorAll('.gnb-item').forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.toggle('active');
        });
    });

});