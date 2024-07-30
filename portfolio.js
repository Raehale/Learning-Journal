import { projectsArr } from "./data.js";
import { renderNavContent, renderThreePosts, footerDisplay } from "./index.js"

const portfolioEl = document.getElementById('portfolioSection');
const selectedProjectContentEl = document.getElementById('selectedProjectContent');

/**creates the nav element */
renderNavContent();

/**creates the portfolio elements */
renderPortfolio();

/**creates the footer */
footerDisplay();

//Renders the portfolio HTML and add it to the portfolio element
function renderPortfolio(){
    projectsArr.slice().reverse().forEach(function(project){
        let htmlTags = [];
        htmlTags = (project.tags).map(function(tag){
            return `<span class="${tag.toLowerCase()}-tag tag">${tag}</span>`;
        });
        portfolioEl.innerHTML += /*HTML*/`<article class="portfolio-item ${project.size}" style="background-image=${project.screenshot}" data-projectid="${project.id}">
                                            <a href="../html/project.html?id=${project.id}" data-projectid="${project.id}">
                                                <img src="/images/projects/${project.screenshot}" alt="${project.description}" class="portfolio-image" data-projectid="${project.id}" />
                                                <div class="project-content">
                                                    <div class="project-title">${project.name}</div>
                                                    <div class="project-tags">${htmlTags.join('')}</div>
                                                </div>
                                            </a>
                                        </article>`;
    });
}


/**loads the selected post on click */
portfolioEl.addEventListener('click', function(event){
    storeSelectedProjectId(event);
    // console.log(localStorage.getItem(event))
    loadProjectPage();
})

/**displays the three most recent posts */
renderThreePosts(0);

//Directs the user to the posts page
export function loadProjectPage(){
    document.location.href = '/html/project.html';
}

//Stores the selected projects id
export function storeSelectedProjectId(event){
    let currentProjectId = event.target.dataset.projectid;
    console.log(event.target)
    localStorage.setItem('selectedProject', currentProjectId)
}
