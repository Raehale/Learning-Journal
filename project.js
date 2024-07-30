import { projectsArr } from "./data.js";
import { renderNavContent, footerDisplay } from "./index.js"

const selectedPostContentEl = document.getElementById('selectedProjectContent');
const threeRecentProjectsEl = document.getElementById('threeRecentProjects');

let limitedContent = '';

/**creates the nav element */
renderNavContent();

/**creates footer content */
footerDisplay();

//adds the unique id to the url for each post
const postId = localStorage.getItem('selectedPost');
const selectedPost = projectsArr.find(post=>post.id==postId);

/**displays the stored selected posts content and renders the three most recent posts excluding the selected post */
renderSelectedPost(localStorage.getItem('selectedProject'));
renderThreeProjectPosts(localStorage.getItem('selectedProject'));

//Render the selected post html content
function renderSelectedPost(selectedPostId){
    projectsArr.forEach(function(post){
        if (post.id == selectedPostId){
            let htmlTags = [];
            htmlTags = (post.tags).map(function(tag){
                return `<span class="${tag.toLowerCase()}-tag tag">${tag}</span>`;
            });
            selectedPostContentEl.innerHTML = /*HTML*/`<div class="selected-post">
                                                            <a href="html/project.html?id=${post.id}" class="hero-title"></a>
                                                            <div class="selected-post-date">${post.date}</div>
                                                            <a href="${post.link}" target="_blank" alt="Site for ${post.name}">
                                                                <h2 class="selected-post-title title">${post.name}</h2>
                                                            </a>
                                                            <img src="/images/projects/${post.screenshot}" alt="${post.alt}" class="selected-project-img" />
                                                            <div class="portfolio-body">
                                                                <p class="post-content">${post.description}</p>
                                                                <a href="${post.github}" target="_blank" alt="The github repository for ${post.name}" class="project-github">
                                                                    Github Repository for ${post.name}
                                                                </a>
                                                                <div class="project-tags">
                                                                    ${htmlTags.join('')}
                                                                </div>
                                                            </div>
                                                        </div>`;
        }
    })
}

//Renders the three most recent posts excluding the selected post
export function renderThreeProjectPosts(selectedPostId){
    let postCount = 1;
    threeRecentProjectsEl.innerHTML = '';
    projectsArr.slice().reverse().forEach(function(post){
        if (post.id == selectedPostId) {
            return;
        } else {
            if (postCount > 3){
                return;
            }else{
                if (post.description.length > 500){
                    limitedContent = (post.description).slice(0, 500) + '...';
                } else {
                    limitedContent = post.description;
                }
                let htmlTags = [];
                htmlTags = (post.tags).map(function(tag){
                    return `<span class="${tag.toLowerCase()}-tag tag">${tag}</span>`;
                });
    
                postCount++;
                threeRecentProjectsEl.innerHTML += /*HTML*/`<a href="/html/project.html?id=${post.id}" class="hero-post">
                                                                <article class="post recent-project" data-projectid="${post.id}">
                                                                    <img src="/images/projects/${post.screenshot}" alt="${post.description}" class="post-img" data-projectid="${post.id}" />
                                                                    <div class="post-date" data-projectid="${post.id}">${post.date}</div>
                                                                    <h3 class="post-title" data-projectid="${post.id}">${post.name}</h3>
                                                                    <p class="post-content" data-projectid="${post.id}">${limitedContent}</p>
                                                                    <div class="project-tags">
                                                                        ${htmlTags.join('')}
                                                                    </div>
                                                                </article>
                                                            </a>`;
            }
        }
    })
}


/**loads the selected post on click */
threeRecentProjectsEl.addEventListener('click', function(event){
    storeSelectedProjectId(event);
    loadProjectPage();
})

//Directs the user to the posts page
export function loadProjectPage(){
    document.location.href = '/html/project.html';
}

//Stores the selected projects id
export function storeSelectedProjectId(event){
    let currentProjectId = event.target.dataset.projectid;
    localStorage.setItem('selectedProject', currentProjectId)
}

