import { renderNavContent, loadPostPage, storeSelectedPostId, renderThreePosts, threeRecentPostsEl, footerDisplay } from "./index.js"

/**creates the nav element */
renderNavContent();

/**creates the footer */
footerDisplay();

/**loads the selected post on click */
threeRecentPostsEl.addEventListener('click', function(event){
    storeSelectedPostId(event);
    loadPostPage();
})

/**displays the three most recent posts */
renderThreePosts(0);
