document.addEventListener('DOMContentLoaded', () => {
    // aos
    AOS.init();

    //loading page
    const loadPage = document.getElementById('loadingpage');
    window.onload = function () {
        loadPage.style.display = 'none';
    };

    // mouse cursor event
    let moveCursor = document.querySelector('.njp_cursor');
    let cursorMenu = document.querySelectorAll('.header_menu a');

    window.addEventListener('mousemove', cursor);

    function cursor(e) {
        moveCursor.style.left = e.pageX + 5 + 'px';
        moveCursor.style.top = e.pageY + 5 + 'px';
    };

    cursorMenu.forEach(link => {
        link.addEventListener('mouseover', () => {
            moveCursor.classList.add('cursor_over');
            link.classList.add('hovered_link');
        });
        link.addEventListener('mouseleave', () => {
            moveCursor.classList.remove('cursor_over');
            link.classList.remove('hovered_link');
        });
    });


    // main img click card 2
    document.querySelectorAll('.main_picCon_pic_flip').forEach((ii) => {
        ii.addEventListener('click', function () {
            if (ii.style.transform == 'rotateY(0deg)') {
                ii.style.transform = 'rotateY(180deg)'
            } else {
                ii.style.transform = 'rotateY(0deg)'
            };
        });
    });

    const fliporig = document.querySelectorAll('.main_picCon_pic_flip');
    document.getElementById("main_aria1").addEventListener('mouseover', () => {
        fliporig.forEach((aa) => {
            const flipInterval = setInterval(function () {
                aa.classList.add("main_picCon_pic_flip_ani");
                if (aa.style.transform == 'rotateY(180deg)') {
                    aa.classList.remove("main_picCon_pic_flip_ani");
                }
            }, 3 * 1000);

            setTimeout(() => {
                aa.classList.remove("main_picCon_pic_flip_ani");
            }, 10000);

            function screenSize() {
                let originSize = window.innerWidth;

                if (originSize < 770) {
                    clearInterval(flipInterval);
                }
            };

            screenSize();
        });
    });


    // 아카이브 clip-path
    window.addEventListener('scroll', function () {
        function archiveClip() {
            const clipBg = document.querySelector('.main_archive');
            const clipBgvideo = document.querySelector('.bg_archive');
            const archiveScroll = window.scrollY;
            const clipBgValue = Math.max(0, archiveScroll - 50);
            const clipBgValue2 = Math.max(0, $('.main_picCon_pic_flip:nth-child(8)').offset().top + 50);

            if (clipBgValue > clipBgValue2) {
                clipBg.classList.add('archive_active');
                clipBgvideo.classList.add('bg_archive_active');
            } else if (clipBgValue < clipBgValue2) {
                clipBg.classList.remove('archive_active');
                clipBgvideo.classList.remove('bg_archive_active');
            } else { }
        };

        window.addEventListener('scroll', archiveClip);
    });

});