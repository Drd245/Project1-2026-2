// открытие/закрытие шторки
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}

// кнопка назад по истории
function goBack() {
    if (document.referrer && document.referrer.indexOf(location.hostname) !== -1) {
        history.back();
    } else {
        location.href = 'index.html';
    }
}

// шторка по Esc
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    }
});

// подсветка активного пункта меню
// текущий URL и подсвет сылку
document.addEventListener('DOMContentLoaded', function() {
    var current = location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.sidebar nav a');

    links.forEach(function(link) {
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
});