import { postsArr, projectsArr } from "./data.js";

const navEl = document.getElementById('pageHeader')
const heroHeaderEl = document.getElementById('heroHeader');
const postsEl = document.getElementById('posts');
const navMenuEl = document.getElementById('navMenu');
const currentYearEl = document.getElementById('currentYear');
const morePostsBtn = document.getElementById('morePostsBtn');
const selectedPostContentEl = document.getElementById('selectedPostContent');
const threeRecentPostsEl = document.getElementById('threeRecentPosts');
const portfolioEl = document.getElementById('portfolioSection');

let limitedContent = '';
let mostRecentPost = '';

/****NAV */
renderNavContent();
/****MENU */
/**When hamburger menu is clicked menu display is toggled */
document.getElementById('mobileMenu').addEventListener('click', function(){
    menuDisplay();
});

/****HOME PAGE */
if (window.location.pathname != '/about.html' && window.location.pathname != '/portfolio.html' && window.location.pathname != '/post.html') {
    /**creates the header element */
    renderHeroHeader();

    /**creates the six most recent posts, excluding the most recent one */
    renderSixRecentPosts();

    /**When header element is clicked post id is stored and posts page is loaded */
    heroHeaderEl.addEventListener('click', function(event){
        storeSelectedPostId(event);
        loadPostPage();
    });

    /**When a post is clicked the post id is stored and the posts page is loaded */
    postsEl.addEventListener('click', function(event){
        storeSelectedPostId(event);
        loadPostPage();
    });

    /**When View More button is clicked all posts display and button is hidden */
    morePostsBtn.addEventListener('click', function(){
        displayAllPosts();
        morePostsBtn.style.display = 'none';
    });
}

/****POST PAGE */
if (window.location.pathname == '/post.html'){
    /**displays the stored selected posts content and renders the three most recent posts excluding the selected post */
    if(selectedPostContentEl){
        renderSelectedPost(localStorage.getItem('selectedPost'));
        renderThreePosts(localStorage.getItem('selectedPost'));
    }
}

/****PORTFOLIO PAGE */
if (window.location.pathname == '/portfolio.html'){
    /**creates the portfolio elements */
    renderPortfolio();
}

/**NOT HOME PAGE */
if (window.location.pathname == '/about.html' || window.location.pathname == '/portfolio.html' || window.location.pathname == '/post.html'){
    /**When a recent post is clicked it stores the selected posts id and loads the posts content */
    if(threeRecentPostsEl){
        threeRecentPostsEl.addEventListener('click', function(event){
            storeSelectedPostId(event);
            loadPostPage();
        })
    }

    /**displays the three most recent posts excluding the one selected, if one was selected */
    if (window.location.pathname == '/about.html' || window.location.pathname == '/portfolio.html'){
        renderThreePosts(0);
    }
}

/****NAV */
function renderNavContent(){
    navEl.innerHTML = `<a href="./index.html" class="site-title">
                        <img src="./images/comment-solid.png" class="logo-img" alt="black comment bubble icon with a white curved line near the bottom right." />
                        <span class="logo-title">My learning journal</span>
                    </a>
                    <nav>
                        <ul class="menu-nav" id="navMenu">
                            <li><a href="./index.html" id="home">Home</a></li>
                            <li><a href="./about.html" id="about">About Me</a></li>
                            <li><a href="./portfolio.html" id="portfolio">Portfolio</a></li>
                        </ul>
                        <div id="mobileMenu" class="mobile-menu"><li class="fa-solid fa-bars"></i></div>
                    </nav>`;
}

/****MENU */
//Show menu when hamburger menu is clicked
function menuDisplay() {
    if (navMenuEl.style.display === 'flex'){
        navMenuEl.style.display = 'none';
    } else {
        navMenuEl.style.display = 'flex';
    }
}

/****FOOTER */
//Gets the current year for the footer
currentYearEl.innerHTML = new Date().getFullYear();

/****HOME PAGE */
// Display the most recent post at the top header section
function renderHeroHeader(){
    Math.max.apply(Math, postsArr.map(function(post){
        heroHeaderEl.style.backgroundImage = `url(${post.image})`;
        heroHeaderEl.dataset.postid = post.id;
        if (post.content.length > 700){
            limitedContent = (post.content).slice(0, 700) + '...';
        } else {
            limitedContent = post.content;
        }
        heroHeaderEl.innerHTML = `<div class="hero-header-content" data-postid="${post.id}">
                                    <div class="hero-date" data-postid="${post.id}">${post.date}</div>
                                    <h2 class="hero-title" data-postid="${post.id}">${post.title}</h2>
                                    <p class="hero-content" data-postid="${post.id}">${limitedContent}</p>
                                </div>`;

        return mostRecentPost = post.id;
    }));
}

// Display all posts except the most recent from most to least recent
function renderSixRecentPosts(){
    let postCount = 1;
    postsArr.slice().reverse().forEach(function(post){
        if (postCount >= 7){
            return;
        }else{
            if (post.id != (postsArr.length)){
                if (post.content.length > 700){
                    limitedContent = (post.content).slice(0, 500) + '...';
                } else {
                    limitedContent = post.content;
                }
                postCount++;
                postsEl.innerHTML += `<article class="post" data-postid="${post.id}">
                                        <img src="${post.image}" alt="${post.alt}" class="post-img" data-postid="${post.id}" />
                                        <div class="post-date" data-postid="${post.id}">${post.date}</div>
                                        <h3 class="post-title" data-postid="${post.id}">${post.title}</h3>
                                        <p class="post-content" data-postid="${post.id}">${limitedContent}</p>
                                    </article>`;
            }
        }
    })
}

//Show all posts if view more button is clicked
function displayAllPosts(){
    postsEl.innerHTML = '';
    postsArr.slice().reverse().forEach(function(post){
        if (post.id != (postsArr.length)){
            if (post.content.length > 500){
                limitedContent = (post.content).slice(0, 500) + '...';
            } else {
                limitedContent = post.content;
            }
            postsEl.innerHTML += `<article class="post" data-postid="${post.id}">
                                    <img src="${post.image}" alt="${post.alt}" class="post-img" data-postid="${post.id}" />
                                    <div class="post-date" data-postid="${post.id}">${post.date}</div>
                                    <h3 class="post-title" data-postid="${post.id}">${post.title}</h3>
                                    <p class="post-content" data-postid="${post.id}">${limitedContent}</p>
                                </article>`;
        }
    })
}

/****POSTS PAGE */
//Directs the user to the posts page
function loadPostPage(){
    document.location.href = '/post.html';
}

//Stores the selected posts id
function storeSelectedPostId(event){
    let selectedPostArr = [];
    let currentPostId = event.target.dataset.postid;
    return selectedPostArr = postsArr.map(function(selectedPost){
        if (selectedPost.id === currentPostId){
            localStorage.setItem('selectedPost', `${selectedPost.id}`)
        }
    })
}

//Render the selected post html content
function renderSelectedPost(selectedPostId){
    postsArr.forEach(function(post){
        if (post.id === selectedPostId){
            selectedPostContentEl.innerHTML = `<div class="selected-post">
                                                    <div class="selected-post-date">${post.date}</div>
                                                    <h2 class="selected-post-title title">${post.title}</h2>
                                                    <img src="${post.image}" alt="${post.alt}" class="selected-post-img" />
                                                    <p class="selected-post-content">${post.content}</a>
                                                </div>`;
        }
    })
}

//Renders the three most recent posts excluding the selected post
function renderThreePosts(selectedPostId){
    let postCount = 1;
    threeRecentPostsEl.innerHTML = '';
    postsArr.slice().reverse().forEach(function(post){
        if (post.id === selectedPostId) {
            return;
        } else {
            if (postCount > 3){
                return;
            }else{
                if (post.content.length > 500){
                    limitedContent = (post.content).slice(0, 500) + '...';
                } else {
                    limitedContent = post.content;
                }
                postCount++;
                threeRecentPostsEl.innerHTML += `<article class="post recent-post" data-postid="${post.id}">
                                                    <img src="${post.image}" alt="${post.alt}" class="post-img" data-postid="${post.id}" />
                                                    <div class="post-date" data-postid="${post.id}">${post.date}</div>
                                                    <h3 class="post-title" data-postid="${post.id}">${post.title}</h3>
                                                    <p class="post-content" data-postid="${post.id}">${limitedContent}</p>
                                                </article>`;
            }
        }
    })
}

/****PORTFOLIO */
//Renders the portfolio HTML and add it to the portfolio element
function renderPortfolio(){
    projectsArr.slice().reverse().forEach(function(project){
        let htmlTags = [];
        htmlTags = (project.tags).map(function(tag){
            return `<span class="${tag.toLowerCase()}-tag tag">${tag}</span>`;
        });
        portfolioEl.innerHTML += `<article class="portfolio-item ${project.size}" style="background-image=${project.screenshot}">
                                    <img src="${project.screenshot}" alt="${project.description}" class="portfolio-image" />
                                    <div class="portfolio-description">
                                        <div class="portfolio-header">
                                            <div class="post-date">${project.date}</div>
                                            <a href="${project.link}" target="_blank" alt="The ${project.name} Site" class="post-title">${project.name}</a>
                                        </div>
                                        <div class="portfolio-body">
                                            <p class="post-content">${project.description}</p>
                                            <a href="${project.github}" target="_blank" alt="The github repository for ${project.name}" class="project-github">
                                                Github Repository for ${project.name}
                                            </a>
                                            <div class="project-tags">
                                                ${htmlTags.join('')}
                                            </div>
                                        </div>
                                    </div>
                                </article>`;
    });
}