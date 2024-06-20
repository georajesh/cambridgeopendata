function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function showContent(contentId) {
    var content = document.getElementById('content');
    content.style.display = 'block';
    if (contentId === 'problem') {
        content.innerHTML = '<h2>Problem Identification</h2><p>Details about problem identification...</p>';
    } else if (contentId === 'methodology') {
        content.innerHTML = '<h2>Methodology</h2><p>Details about methodology...</p>';
    } else if (contentId === 'solution') {
        content.innerHTML = '<h2>Solution</h2><p>Details about the solution...</p>';
    }
    window.scrollTo(0, document.getElementById('content').offsetTop);
}