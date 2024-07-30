import { postsArr } from "./data.js";
import { renderNavContent, loadPostPage, storeSelectedPostId, renderThreePosts, threeRecentPostsEl, footerDisplay } from "./index.js"

const selectedPostContentEl = document.getElementById('selectedPostContent');

/**creates the nav element */
renderNavContent();

/**creates the footer */
footerDisplay();

//adds the unique id to the url for each post
const postId = localStorage.getItem('selectedPost');
const selectedPost = postsArr.find(post=>post.id==postId);

/**displays the stored selected posts content and renders the three most recent posts excluding the selected post */
renderSelectedPost(localStorage.getItem('selectedPost'));
renderThreePosts(localStorage.getItem('selectedPost'));

//Render the selected post html content
function renderSelectedPost(selectedPostId){
    postsArr.forEach(function(post){
        if (post.id === selectedPostId){
            selectedPostContentEl.innerHTML = `<div class="selected-post">
                                                    <a href="html/post.html?id=${post.id}" class="hero-title"></a>
                                                    <div class="selected-post-date">${post.date}</div>
                                                    <h2 class="selected-post-title title">${post.title}</h2>
                                                    <img src="/images/posts/${post.image}" alt="${post.alt}" class="selected-post-img" />
                                                    <p class="selected-post-content">${post.content}</p>
                                                </div>`;
        }
    })
}


/**loads the selected post on click */
threeRecentPostsEl.addEventListener('click', function(event){
    storeSelectedPostId(event);
    loadPostPage();
})

/**displays the three most recent posts */
renderThreePosts(localStorage.getItem('selectedPost'));
