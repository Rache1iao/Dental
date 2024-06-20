document.addEventListener('DOMContentLoaded', function() {
    const pagesToLoad = [
        '01Scaling.html',
        '02OD.html',
        '03PF.html',
        '04Endo.html',
        '05Ext+SR.html',
        '06PerioOP.html',
        '07Perio.html',
        '08Crown.html',
        '09Prepare+TC.html',
        '10Post.html',
        '11Imp.html',
        '12TryC.html',
        '13Mix.html',
        '14Spares.html',
        '15Bur.html'
    ];

    let currentIndex = 0;

    function loadMainContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // 提取 <main> 内容
                const mainContent = new DOMParser().parseFromString(data, 'text/html').querySelector('main').innerHTML;
                // 创建一个 <section> 包装并插入到 mainContainer 中
                const section = document.createElement('section');
                section.innerHTML = mainContent;
                document.getElementById('mainContainer').appendChild(section);
                currentIndex++;

                // 加载下一个页面
                if (currentIndex < pagesToLoad.length) {
                    loadMainContent(pagesToLoad[currentIndex]);
                }
            })
            .catch(error => console.error('Error fetching content:', error));
    }

    // 开始加载第一个页面
    loadMainContent(pagesToLoad[currentIndex]);
});

document.querySelectorAll('aside a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Here is XMLHttpRequest 
// var xhr = new XMLHttpRequest();
// xhr.open('GET', '01Scaling.html', true);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//     // 提取 <main> 内容
//     const mainContent = new DOMParser().parseFromString(xhr.responseText, 'text/html').querySelector('main').innerHTML;
//     // 将内容插入到 scalingContent 容器中
//     document.getElementById('01Content').innerHTML = mainContent;
//   }
// };
// xhr.send();