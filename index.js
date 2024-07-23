import { postsArr } from "./data.js";
import { projectsArr } from "./projects.js";

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

document.getElementById('mobileMenu').addEventListener('click', function(){
    displayMenu();
});

if (morePostsBtn){
    morePostsBtn.addEventListener('click', function(){
        displayAllPosts();
        morePostsBtn.style.display = 'none';
    })
}

if (heroHeaderEl){
    heroHeaderEl.addEventListener('click', function(event){
        storeSelectedPostId(event);
        loadPostPage();
    })
}

if(selectedPostContentEl){
    renderSelectedPost(localStorage.getItem('selectedPost'));
    renderThreePosts(localStorage.getItem('selectedPost'));
}

if(postsEl){
    postsEl.addEventListener('click', function(event){
        storeSelectedPostId(event);
        loadPostPage();
    })
}

if(threeRecentPostsEl){
    threeRecentPostsEl.addEventListener('click', function(event){
        storeSelectedPostId(event);
        loadPostPage();
    })
}

if (window.location.pathname == '/about.html' || window.location.pathname == '/portfolio.html'){
    renderThreePosts(0);
}

if (portfolioEl){
    renderPortfolio();
}
// Display the most recent post at the top header section
if (heroHeaderEl){
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
if (postsEl){
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
            // return selectedPost;
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
                                                    <h2 class="selected-post-title">${post.title}</h2>
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

//Renders the portfolio HTML and add it to the portfolio element
function renderPortfolio(){
    projectsArr.slice().reverse().forEach(function(project){
        let htmlTags = [];
        htmlTags = (project.tags).map(function(tag){
            return `<span class="${tag.toLowerCase()}-tag tag">${tag}</span>`
        })

        // htmlTags = (project.tags).map((tag) => return `<div class="`)
        portfolioEl.innerHTML += `<article class="portfolio-item ${project.size}" style="background-image=${project.screenshot}">
                                    <img src="${project.screenshot}" alt="${project.description}" class="portfolio-image" />
                                    <div class="portfolio-description">
                                        <div class="portfolio-header">
                                            <div class="post-date">${project.date}</div>
                                            <a href="${project.link}" target="_blank" alt="The ${project.name} Site" class="post-title">${project.name}</a>
                                        </div>
                                        <div class="portfolio-body">
                                            <p class="post-content">${project.description}</p>
                                            <a href="${project.github} target="_blank" alt="The github repository for ${project.name}" class="project-github">
                                                Github Repository for ${project.name}
                                            </a>
                                            <div class="project-tags">
                                                ${htmlTags.join('')}
                                            </div>
                                        </div>
                                    </div>
                                </article>`;
    })
}

//Show menu when hamburger menu is clicked
function displayMenu() {
    if (navMenuEl.style.display === 'flex'){
        navMenuEl.style.display = 'none';
    } else {
        navMenuEl.style.display = 'flex';
    }
}

//Gets the current year for the footer
currentYearEl.innerHTML = new Date().getFullYear();