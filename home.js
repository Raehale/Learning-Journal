import { postsArr } from "./data.js";
import { renderNavContent, loadPostPage, storeSelectedPostId, footerDisplay } from "./index.js"

const heroHeaderEl = document.getElementById('heroHeader');
const postsEl = document.getElementById('posts');
const morePostsBtn = document.getElementById('morePostsBtn');

let mostRecentPost = '';
let limitedContent = '';

/**creates the nav element */
renderNavContent();

/**creates the header element */
renderHeroHeader();

/**creates the six most recent posts, excluding the most recent one */
renderSixRecentPosts();

/**creates the footer */
footerDisplay();

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

// Display the most recent post at the top header section
function renderHeroHeader(){
    Math.max.apply(Math, postsArr.map(function(post){
        heroHeaderEl.style.backgroundImage = `url(/images/posts/${post.image})`;
        heroHeaderEl.dataset.postid = post.id;
        if (post.content.length > 700){
            limitedContent = (post.content).slice(0, 700) + '...';
        } else {
            limitedContent = post.content;
        }
        heroHeaderEl.innerHTML = `<a href="/html/post.html?id=${post.id}" class="hero-post">
                                    <div class="hero-header-content" data-postid="${post.id}">
                                        <div class="hero-date" data-postid="${post.id}">${post.date}</div>
                                        <h2 class="hero-title" data-postid="${post.id}">${post.title}</h2>
                                        <p class="hero-content" data-postid="${post.id}">${limitedContent}</p>
                                    </div>
                                </a>`;

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
                postsEl.innerHTML += `<a href="/html/post.html?id=${post.id}" class="hero-post">
                                        <article class="post" data-postid="${post.id}">
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
            postsEl.innerHTML += `<a href="/html/post.html?id=${post.id}" class="hero-post">
                                    <article class="post" data-postid="${post.id}">
                                        <img src="/images/posts/${post.image}" alt="${post.alt}" class="post-img" data-postid="${post.id}" />
                                        <div class="post-date" data-postid="${post.id}">${post.date}</div>
                                        <h3 class="post-title" data-postid="${post.id}">${post.title}</h3>
                                        <p class="post-content" data-postid="${post.id}">${limitedContent}</p>
                                    </article>
                                </a>`;
        }
    })
}