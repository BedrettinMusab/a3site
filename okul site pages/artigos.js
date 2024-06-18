document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.getElementById('profileIcon');
    const profileDropdown = document.getElementById('profileDropdown');
    const menuIcon = document.getElementById('menuIcon');
    const menuDropdown = document.getElementById('menuDropdown');
    
    profileIcon.addEventListener('click', () => {
        profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
    });

    menuIcon.addEventListener('click', () => {
        menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', (event) => {
        if (!profileIcon.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.style.display = 'none';
        }
        if (!menuIcon.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.style.display = 'none';
        }
    });


    const articles = [
        {
            title: 'Artigo 1',
            content: '',
            link: '#'
        },
        {
            title: 'Artigo 2',
            content: '',
            link: '#'
        },
        {
            title: 'Artigo 3',
            content: '',
            link: '#'
        }
    ];

    let currentArticleIndex = 0;

    const articleTitle = document.querySelector('.artigo-nav article h2');
    const articleContent = document.querySelector('.artigo-nav article p');
    const articleLink = document.querySelector('.artigo-nav article a');

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function updateArticle(index) {
        articleTitle.textContent = articles[index].title;
        articleContent.textContent = articles[index].content;
        articleLink.href = articles[index].link;
    }

    prevButton.addEventListener('click', () => {
        if (currentArticleIndex > 0) {
            currentArticleIndex--;
            updateArticle(currentArticleIndex);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentArticleIndex < articles.length - 1) {
            currentArticleIndex++;
            updateArticle(currentArticleIndex);
        }
    });

    
    updateArticle(currentArticleIndex);
});
