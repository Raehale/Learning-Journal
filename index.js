import { postsArr } from "./data.js";

const navEl = document.getElementById('pageHeader')
export const threeRecentPostsEl = document.getElementById('threeRecentPosts');
const footerEl = document.getElementById('footer');


let limitedContent = '';

/****NAV */
renderNavContent();

/****MENU */
/**When hamburger menu is clicked menu display is toggled */
document.getElementById('mobileMenu').addEventListener('click', function(){
    menuDisplay();
});

/****NAV */
export function renderNavContent(){
    navEl.innerHTML = `<a href="../index.html" class="site-title">
                        <img src="/images/comment-solid.png" class="logo-img" alt="black comment bubble icon with a white curved line near the bottom right." />
                        <span class="logo-title">My learning journal</span>
                    </a>
                    <nav>
                        <ul class="menu-nav" id="navMenu">
                            <li><a href="../index.html" id="home">Home</a></li>
                            <li><a href="/html/about.html" id="about">About Me</a></li>
                            <li><a href="/html/portfolio.html" id="portfolio">Portfolio</a></li>
                        </ul>
                        <div id="mobileMenu" class="mobile-menu"><li class="fa-solid fa-bars"></i></div>
                    </nav>`;

    /**When hamburger menu is clicked menu display is toggled */
    document.getElementById('mobileMenu').addEventListener('click', function(){
        menuDisplay();
    });

}

/****MENU */
//Show menu when hamburger menu is clicked
export function menuDisplay() {
    const navMenuEl = document.getElementById('navMenu');
    if (navMenuEl.style.display === 'flex'){
        navMenuEl.style.display = 'none';
    } else {
        navMenuEl.style.display = 'flex';
    }
}

/****FOOTER */
//Gets the current year for the footer
export function footerDisplay(){
    const currentYear = new Date().getFullYear();
    footerEl.innerHTML = /*HTML*/`<h4>My Learning Journal</h4>
                                    Copyright © ${currentYear}
                                    <br /><a href="mailto:alyssarae98ha@gmail.com">alyssarae98ha@gmail.com</a>`
}


/****POSTS */
//Directs the user to the posts page
export function loadPostPage(){
    document.location.href = '/html/post.html';
}

//Stores the selected posts id
export function storeSelectedPostId(event){
    let selectedPostArr = [];
    let currentPostId = event.target.dataset.postid;
    return selectedPostArr = postsArr.map(function(selectedPost){
        if (selectedPost.id === currentPostId){
            localStorage.setItem('selectedPost', `${selectedPost.id}`)
        }
    })
}

//Renders the three most recent posts excluding the selected post
export function renderThreePosts(selectedPostId){
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
                threeRecentPostsEl.innerHTML += `<a href="/html/post.html?id=${post.id}" class="hero-post">
                                                    <article class="post recent-post" data-postid="${post.id}">
                                                        <img src="/images/posts/${post.image}" alt="${post.alt}" class="post-img" data-postid="${post.id}" />
                                                        <div class="post-date" data-postid="${post.id}">${post.date}</div>
                                                        <h3 class="post-title" data-postid="${post.id}">${post.title}</h3>
                                                        <p class="post-content" data-postid="${post.id}">${limitedContent}</p>
                                                    </article>
                                                </a>`;
            }
        }
    })
}