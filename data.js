export const postsArr = [
    {
        date: "June 06, 2024",
        title: "Quiting Coding Strike",
        content: "Today, I am breaking my coding strike. I've been on vacation, and when I came back it was hard to code. Today I will become passionate again. I am working on finishing a liking feature on my compliments project. I need it to sync with firebase. I am thinking of using the firebase keys for the compliment to associate them appropriately.",
        image: "/ilya-pavlov-monitor-with-code.jpg",
        alt: "A computer monitor with what looks like php code on it.",
        id: "1",
    },
    {
        date: "June 07, 2024",
        title: "Tired of Learning New Things",
        content: "Today I am feeling overwelmed but excited. I don't want to work, I want to code. I am joining a course that will review the modules (one per week). We are starting with module one today. I am overwelmed with the lack of desire I have to do the learning portion, and instead wanting to fix my broken projects. I want to fix my notes site, which is not displaying the content since I moved each section to separate html files and can't get them to show up on the main html file. I've been told it's not possible to place html files within eachother. I am thinking of using .innerhtml but I am sure it won't work. I also need to fix the lists app. I was creating a way to add numbers, and it would add them together, including negatives, but now that I'm separating the lists I am rethinking how I'll do that. I think I will have a separate input section for the numbers. I was unable to fix the liking feature on the compliments app. I could not get it to update on firebase. I also realized I could have merged the lists in firebase, so I might want to refactor the whole app. All and all I am pretty overwhelmed.",
        image: "/christin-hume-person-at-laptop.jpg",
        alt: "A woman in a gray shirt sitting at a table outside on a laptop.",
        id: "2",
    },
    {
        date: "June 21, 2024",
        title: "Uphill Battle",
        content: "Forgot to write these, but I finally remembered two weeks later! I keep going off and just building stuff with everything I'm learning. I think in the long run it will help cement the information I've learned. I just learned about forEach and I really wanna use it in some of the old code I have. I might. Not today though. Today I learn. I'm getting through the JS module five I think. It's been an uphill battle. When I finished the pumpkins purrrfect meme loader I went off on a little tangent and changed it to be a place I can put images of my pets then load a random picture of a pet based on which pet I select. You can check it out <a href='https://pet-pic-picker.netlify.app/'>at my netlify site 'Pet Pics'</a>. The issue I have run into is I don't know how to upload an image. Or, where to upload it too? I'm hoping react will cover this. I really don't feel ready for any back end learning, so I hope I don't have to go there to understand it. You can check the code out at <a href='https://github.com/Raehale/pet-pic-picker' target='_blank'>my Github</a>. Overall I'm doing good, got back up from a little not wanting to code struggle and feeling better then ever. Also, I would like the record to show, even though I didn't always do what I was supposed to, I did code every day even if I didn't write about it.",
        image: "/mitchell-orr-uphill.jpg",
        alt: "A woman hiking up a grassy hill.",
        id: "3",
    },
    {
        date: "July 16, 2024",
        title: "Back to it",
        content: "I have been coding I swear, I code so much. I'm so tired. At least I got back to this before it had been a whole month! Small wins! Now I will have a platform for this though. I am making a new site, it's called Learning Journal. I am supposed to have a bunch of posts on it, and since I want it to be unique, I will write the posts. Coding has been good. I got pretty depressed for a while there, but luckily my coding buddy, Fadumo, kept me in line and I coded every day. Every. Single. Day. Which is a good thing, but I won't lie, I miss my free time. That's ok, it was actually pretty fun coding last night. I was just learning but I finished a module and am ending it with this solo project. Things are looking up, go team!!",
        image: "/awmleer-I--person-at-laptop.jpg",
        alt: "A man sitting in the dark on a laptop.",
        id: "4",
    },
    {
        date: "July 18, 2024",
        title: "Grid is Hard",
        content: "Still working on the Learning Journal project. I am really struggling with getting the posts on the home page to display as a grid. Flex would be so much easier, but since the whole module was about grid I'm sure I am supposed to use grid. Plus it'll help me learn it if I use it. But it is driving me insane. I also think I'm gonna make the posts look a little different, add a background, maybe a border, and have them display like a collage. That's all for today",
        image: "/sarandy-westfall-photos.jpg",
        alt: "A man sitting in the dark on a laptop.",
        id: "5",
    },
    {
        date: "July 19, 2024",
        title: "I Have a Plan",
        content: "Today I am still working on the Learning Journal. I am making a page that loads the post information from the post the user clicked. I am hopeful I can do this fairly easily. We'll see though, knock on wood for me. I've also been working with my team (Guiseppe and Fadumo) to create the Best Bank app. I think we're collaborating really well! I feel like I'm coming out of the rut and getting back into coding as my passion, which is good because I really need this to work out. No pressure or anything! I am excited to move on from the Learning Journal though. There's this advanced javascript course I get to try out that I am super excited and equally nervous about doing. I'm also nervous about how short my posts are. I just don't have too much to say each day. I am not very chatty, and what I'm doing feels pretty straight forward... To complete todays task I am going to use the ids for each object within the array and put it on the element as a data attribute, than grab that data attribute. After I have that I'll find which object has the id and load the information from there. We'll see if that works! After I load all the correct information I have to be sure to load three recent posts that are not the post that I just loaded. I've also never made a site with multiple pages like this. I feel like it must be pretty straight forward but who knows. Anyways, here goes it!",
        image: "/kelly-sikkema-sticky-notes.jpg",
        alt: "A man sitting in the dark on a laptop.",
        id: "6",
    },
    {
        date: "July 20, 2024",
        title: "Javascript Reads Down",
        content: "The home page is broken for some reason and I don't know how to change the URLs for pages which feels like something I should know how to do by now! So today I will fix the home page, which seems to be an issue with a piece of code not running that shouldn't run on that page so I just have to stop it from running on that page. I'd also like to organize all the code by page, but that could create issues with the code that is used more than once. AFter I fix that, I want to find out how to give the pages better urls than index.html. I imagine that'll come in handy to know some day. Then I want to finish the about me page. The code that's breaking the home page is what I want to run on the about me page, but it runs before the page is loaded then when the page is loaded it disapears. I think it's because I have it running after someone clicks the link button. I think it'll fix both issues if I run the function within an if statement saying if an element that is on the about page exists, run this code. Then I will move on to the portfolio page. I'm going to go through my repos (Currently 21) and take screenshots and store all the information in an array. I want to link to their netlify sites too. I think it'll be pretty straight forward. If I have any time left I will submit my journal (I might wait until I don't have any placeholder info) and begin the advanced javascript course I said I'd test.",
        image: "/dylan-gillis-laptop-on-table.jpg",
        alt: "A laptop sitting on a octogonal wooden table in the dark with a cacti in front of it food and a cup to it's left and a bottle to it's right.",
        id: "7",
    },
    {
        date: "July 22, 2024",
        title: "Final Touches on the Learning Journal",
        content: "I forgot to log it but I totally coded yesterday. Today I am still working on the Learning Journal. I don't like the hover effect on the header so I'd like to change that. Maybe blur the image instead of make it black and white, and make the header slightly larger. Still workshopping that. I'd also like to make the hover on the posts slightly less subtle Just darker colors should work. For the About page I need to make sure the selected post doesn't show up in the recent posts. I am not sure why it isn't working, I have it set to if (postId !== selectedPostId) but it shows it anyways. I'll have to think about that one. I also want a little more space between the photo and header information. In the footer I'd like to add some contact information. On the portfolio, I almost kind of got the grid to work but it breaks the further down you scroll. It's trying to get the images to fit but I don't want it to destroy the image to make it fit. Grid is still not my forte so I'm not sure how to fix this. I want to style it too. I'm thinking jsut the images, no borders, with a title at the top and the tags at the bottom. Not sure what to do about getting the title to be viewable though. I need a background, but that looks cheap. I also want to center the last post when it's on tablet view. After that I'd say the project is done. I'd just need one more entry for it to look alright. Then I have to try to keep up posting here. If I get done with time to spare I will start the advanced Javascript.",
        image: "/muhammad-rahim-person-painting.jpg",
        alt: "A man sitting in the dark on a laptop.",
        id: "8",
    },
    {
        date: "July 23, 2024",
        title: "Cleaning Up",
        content: "I am done! Now all I need to do is clean up my mess. This project is so messy! I need to merge my data files into data.js, and update the references, be sure to import/export the portfolio array from data.js instead of projects.js. Then I need to separate the pages js files. I think I can do this by using the export/import feature to keep the data I need to transfer. That way I can get rid of all the if(this exists) run code nonesense. After that I need a good once over for my javascript. I think I did a good job but I'm sure there's lets that could be consts and other stuff that I'll be called out for on the review. Then I want to review the html files. I'm thinking I'll put the html that the JS puts in in the file, but comment it out, so it's easier to read, not sure yet though. Then I need to go over the css. This one needs a lot of work. I should go through and create classes that cover everything so I can combine them and keep DRYer code. I really don't want to but I also really don't want the reviewer to have to explain stuff I already know and just didn't do because of laziness. After that I can submit! I'll even have no more placeholder content as this is the last post I need to replace that! When I submit it, I will ask for a few things. First, I want to know how to make the pathname different than index.html. It can't be that complex right? Then I want to see if there's a better way to do my grid layout on my portfolio page. It's just not quite right. I also might change the background color on the pages, it looks weird with my portfolio images. Then I want to know if there's a way to make what I did with the hove effect on the portfolio items accessible, because I know it's not but :focus doesn't work. I have also just reaslised that portfolio is not mobile first. I will make it mobile first and work from there.",
        image: "/cdc-cleaning.jpg",
        alt: "A person mopping the floor of a house.",
        id: "9",
    },
    {
        date: "July 24, 2024",
        title: "Lots of Learning",
        content: "All I plan to do today is the advanced javascript course. I will say, it's really hard. Advanced is no joke it's brutal. I've learned about default exporting and name exporting. I learned about setInterval and setTimer and how to use them. I learned about the Javascript runtime environment and how it goes from the heap, to the call stack, if it requires time it enters the WebAPI which holds it until the time out out. Once the time is over it is sent to the bottom of the task queue. The task queue will then send the code to the call stack once the event loop says the call stack is ready. I also learned about the performance.now() thing that returns a really accurate timestamp. I also learned about ++Pre-increment and --Pre-decrement which are super cool and if you put ++ or -- at the front of an expression and it will increment or decrement the variables value before the result is gotten. I'm really excited for that one but I'm not sure why since I can't think of a time I've needed that. I will say if I do get to use it it's gonna feel so good to know about it. I learned more about constructors. The error constructor is cool and if you put the throw keyword before it it will stop all the code following from running. How cool is that! I have used the date constructor before, it's actually used on this site for the footer year. Then there are other constructors, String(), Number(), Array(), and Boolean() which is less useful than using the litteral. I'm excited to learn more!",
        image: "/corina-rainer-notes.jpg",
        alt: "An open notebook with notes in it and a notepad laying on top.",
        id: "10",
    },
    {
        date: "July 26, 2024",
        title: "Feeling Tired",
        content: "Not the most productive day, but I did create a new project! It's a stock ticker. It randomly creates an integer between 0 and 3 with two decimal places and places that in an object with a current timestamp. This is rendered within a function that has a setInterval set around it to reset every 1.5 seconds. It displays the name of the pretend company, it's symbol, the price (randomly generated number), and the current time. I had it all figured out so well but then I watched the video with the answer and his code looked DRYer so I coppied his method but it broke my code and now it's telling me if the price went up or down or stayed the same wrong. It seems random. It works most of the time. I want so badly to give up but I must succeed. So that's what I am working on. I also joined a really interesting course today where we learned about how to set up an AI Summarizor to summarize inputed text in a specific number of words. I didn't totally get it, actually I totally didn't get it. But I listened and learned and tried. I learned that AI works with the backend which is interesting. I am still really nervous when it comes to backend work. My goal is to be a full stack developer but it seems so completely out of touch. I have been doing some back end work at work these last couple days and they stress me out so much. I just don't comprehend the backend concept yet. I was pretty excited about the new ticker project though. It gave me an opportunity to use Object Destructuring which I have only learned about, never used. Pluse today I finished the first module of the advanced javascript course! ",
        image: "/cat-yawning.jpg",
        alt: "Grey cat laying on bed yawning.",
        id: "11",
    },
    {
        date: "July 27, 2024",
        title: "Making Changes",
        content: "Today I decided to start tackling the review I got on this Learning Journal. It was very critical, which is the best kind of review. I started by cleaning up my file structure. I put all the html files in a file labeled html, aside from the index file which I left in the root. I then place the images in an images folder with two folders within it. Then I made javascript files for each page, which I was thinking about doing before but I figured it would be a lot of work. I was right. Then I started thinking and I want to make a project page, like I have a post page. This is of course more difficult then I thought it would be. I also added the id to the end of each post page url. I would still like to rename the page all together, like have index.html be home. I also want to make the footer created within the javascript, like the header is. Mostly because I like making myself suffer for no good reason. I have barely scratched the surface of the review. I also need to redesign the portfolio page, then design the project pages. After that, I will look into Astro.build to see what their framework building is like and how it's used. The reviewer said it was much easier so I thought I'd try the other way first, to practice. I also need to fix some UI stuff. On the very narrow screen the home page header content is too long and goes up off the page. I need to turn the height into a min-height so it can grow if it needs to. That should be easy I might try to do that before I go to bed tonight. The reviewer also called out my hover effects for being too much and inaccessible, which I knew, I just really didn't want to get in to thinking about it anymore. I have a couple suggestions to look at though. He did mention something called vestibular disorders which I have never heard of. He offered some reading material I intened to get to once I have a minute. I'll add it to the ever growing list. Additionally, apparently theres this media query, prefers reduce motion and it seems so cool, I'm really excited to learn more about that. The reviewer also suggested I should separate the css files, which I will do, but I am not sure how to import/export on a css file, maybe I just have it access two? He want's more of a gap between my grid items as well, which I agree theere isn't a lot of breathing room there. Then adding a border, which I have mixed fealings about, but I'll give it a try. All and all I'm excited to make more of these changes!",
        image: "/bruce-mars-person-thinking.jpg",
        alt: "A man sitting on a chair looking at his laptop with bewilderment.",
        id: "12",
    },
    {
        date: "July 29, 2024",
        title: "Reviewed Changes",
        content: "I finished making the changes to the learning journal that the reviewer suggested. It was not easy and I am so tired. I created separate files for all the js and css for each page. I also made the footer get set up in the footer so I can change it in one place instead of many if I want to. I separated so much code. I also learned one html file can have multiple css files. I made the transitions less jarring as well, evren though it kinda bummed me out. I know he's right but it was so fun to make. I did make it mobile first too which made the transitioning to desktop pretty easy. All and all, it's done and so am I. Now I will move on to the advanced javascript course. ",
        image: "/chris-lawton-changing-leaves.jpg",
        alt: "Seven leaves on a string changing colors through a gradient starting at green and ending in red.",
        id: "13",
    },
    {
        date: "July 31, 2024",
        title: "Best Bank Spendings",
        content: "I took on a task in the best bank group project today. It wasn't too hard. All I had to do was tie the accouts to the spending, so when you clicked a different account, you would get it's associated spendings. I just created a new function, and made it run when someone clicked each account button. I logged the event and grabbed the data attribute I added to them. Then, If there are spendings, I updated the html placed in the spendings category. If there are no spendings, they get the text you have no categories. It was pretty baic. I am seeing now that I left a console log so I'll have to remove that real quick. I also updated the hover effect I put on the spendings to only exist when you're hoving over it. Pretty simple changes. After taking care of that, I went on to do some Advanced Javascript.",
        image: "/andre-taissin-piggy-bank.jpg",
        alt: "A pink piggy bank with white dots on the floor with it's snout leaning on some coins.",
        id: "14",
    },
    {
        date: "August 1, 2024",
        title: "The Map Method For Win",
        content: "I spent today doing some advanced javascript. It was brutal. I sort of finished the video portion of the second seciton, Methods and Loops. I learned about for of, and for in and the difference between the two, although now I am blanking on what that is so I think I'll try to go back and rewatch those videos. I learned about a lot of methods, foreach, includes, map, join, filter, and reduce. I learned about others too, but they were mostly array methods that are less common to use. My senior dev says the most common methods for us to use are map and join. We touched on the for loop break and continue, which seem super interesting. I would love to see them used in the real world. The I leanred about string replace and replace all and how to use replace all with regex to get specific parts of a string. I was also able to touch on my regex skills a bit more and take some solid notes on them. Although they did say most devs use AI or just google regex questions, but when I used AI for their question the answer was wrong for some reason. I would realy like to understand it a good bit more. I did learn some of the basics. Like how you can end it in g to do global, otherwise it'll find the first and move on, even if you use replace all. Now I am working on the super challange. It looks brutal. I'm making a search form that serarching for a contact. Could be cool, I'm excited to figure it out!",
        image: "/stephen-monroe-map.jpg",
        alt: "A close up picture of a paper map.",
        id: "15",
    },
    {
        date: "August 3, 2024",
        title: "Women In Computer Science",
        content: "I feel like I have gotten a bit of my spark back! My passion for coding! I have an idea to expand on a project I did for school. I haven't felt that passionate in a good while, since I edited twimba I think. I used to try to personalize every project, but I got tired. Reguardless, I am so excited! I was building this search field for class. Essencially, there's an array with a list of contacts. From the front end, it searches the array based off the users inputs. It's doing this by using loops and regex, which is actually kind of cool! I built a search engine! A tiny one but still, that's kinda cool. I made it to where if you type anything some responses show up. I am thinking of making those pop up in a little opaque drop down, maybe they can click and it'll auto fill? I don't know, lots of ideas! Bu tI am also changing the contacts to be women in computer science. I'm pretty sure there were like 52 or something that showed up on google. I don't know if that's just the max google will show or if it's the amount of women they think deserve to show up there, but I have decided I want to be one of them someday. Oh, and work at wikipedia, that's another new goal. But I am inputing a short summary of what they've done (thanks chatgpt), their name, birth/death day, and a link to their wikipedia. I also want to design it a little differently. I need to watch the refactoring video and refactor my code before I edit it though. I am kind of tired so I am going to call it a night tonight, but I am excited for tomorrows coding! I might let myself hop on early to code for fun. Oh also a sidenote, I turned the screenreader on today and had to run an update on it so I did. When I was uploading the update I noticed the bar made a noise, and when I closed the windows search it made a noise too. I think I want to see how to implement that, or if I even can, on the web. I think it's so cool!",
        image: "/christina-wocintechchat-woman-coding.jpg",
        alt: "Looking over a womans shoulder while she codes on her laptop and reaches for her phone.",
        id: "16",
    },
    // {
    //     date: "",
    //     title: "",
    //     content: "",
    //     image: "",
    //     alt: "",
    //     id: "",
    // },
]

export const projectsArr = [
    {
        name: "Rat Counter",
        github: "https://github.com/Raehale/rat-counter",
        link: "https://dazzling-taffy-b72679.netlify.app/",
        screenshot: "/rat-counter.jpg",
        description: "An app for a user to count how many rats they see each day.",
        id: 1,
        tags: ["CSS", "HTML", "Javascript", "App"],
        size: "wide",
        date: "May 5, 2024",
    },
    {
        name: "Business Card",
        github: "https://github.com/Raehale/business-card",
        link: "https://business-card-raehaley.netlify.app/",
        screenshot: "/business-card.jpg",
        description: "A small business card sized site displaying my information.",
        id: 11,
        tags: ["CSS", "HTML", "Website"],
        size: "wide",
        date: "May 6, 2024",
    },
    {
        name: "Happy Birthday Site",
        github: "https://github.com/Raehale/happy-birthday-site",
        link: "https://gentle-bienenstitch-a31d58.netlify.app/",
        screenshot: "/birthday-gifts.jpg",
        description: "A website displaying birthday GIFts for my rats.",
        id: 2,
        tags: ["CSS", "HTML", "Website"],
        size: "normal",
        date: "May 7, 2024",
    },
    {
        name: "Home Town",
        github: "https://github.com/Raehale/home-town",
        link: "https://aquamarine-empanada-f3f2ed.netlify.app/",
        screenshot: "/Visit-Missoula-MT-USA.jpg",
        description: "A website advertising my home town.",
        id: 3,
        tags: ["CSS", "HTML", "Website"],
        size: "wide",
        date: "May 9, 2024",
    },
    {
        name: "Score Board",
        github: "https://github.com/Raehale/score-board",
        link: "https://gilded-starship-91d8a9.netlify.app/",
        screenshot: "/Score-Board.jpg",
        description: "An app that tracks the scores of two teams.",
        id: 4,
        tags: ["CSS", "HTML", "Javascript", "App"],
        size: "box",
        date: "May 15, 2024",
    },
    {
        name: "Password Generator",
        github: "https://github.com/Raehale/password-generator",
        link: "https://moonlit-belekoy-587d28.netlify.app/",
        screenshot: "/Generate-a-Random-Password.jpg",
        description: "An app that randomly generates a password.",
        id: 13,
        tags: ["CSS", "HTML", "Javascript", "App"],
        size: "box",
        date: "May 19, 2024",
    },
    {
        name: "Tabs Tracker",
        github: "https://github.com/Raehale/tab-tracker",
        link: "chrome://extensions/?id=hombgpfeadgajodedjjgjjeihmgbokkk",
        screenshot: "/tab-saver.jpg",
        description: "A google extention that creates a list of sites you add to it to review later.",
        id: 14,
        tags: ["CSS", "HTML", "Javascript", "Extension"],
        size: "wide",
        date: "May 23, 2024",
    },
    {
        name: "Unit Conversion",
        github: "https://github.com/Raehale/unit-conversion",
        link: "https://fluffy-gumption-cfc0a9.netlify.app/",
        screenshot: "/unit-convertor.jpg",
        description: "An app that converts Metric and Imperial units.",
        id: 12,
        tags: ["CSS", "HTML", "Javascript", "App"],
        size: "wide",
        date: "May 24, 2024",
    },
    {
        name: "Notes Site",
        github: "https://github.com/Raehale/notes-site",
        link: "https://scrimba-code-notes.netlify.app/",
        screenshot: "/Study-Notes.jpg",
        description: "A website displaying all my notes.",
        id: 6,
        tags: ["CSS", "HTML", "Javascript", "Website"],
        size: "tall",
        date: "May 26, 2024",
    },
    {
        name: "Add To List",
        github: "https://github.com/Raehale/add-to-list",
        link: "https://add-to-list-raehaley.netlify.app/",
        screenshot: "/Add-to-List.jpg",
        description: "An app using firebase to create and manage a list. It will have multiple list options.",
        id: 7,
        tags: ["CSS", "HTML", "Javascript", "WIP", "App"],
        size: "tall",
        date: "June 1, 2024",
    },
    {
        name: "Endorsements",
        github: "https://github.com/Raehale/endorsements",
        link: "https://endorsements-raehaley.netlify.app/",
        screenshot: "/champions.png",
        description: "A firebase app where users can write an endorsement to another user.",
        id: 10,
        tags: ["CSS", "HTML", "Javascript", "App"],
        size: "box",
        date: "June 7, 2024",
    },
    {
        name: "Oldagram",
        github: "https://github.com/Raehale/oldagram",
        link: "https://lively-syrniki-b7d7af.netlify.app/",
        screenshot: "/Oldagram.jpg",
        description: "A site showing the old version of instagram.",
        id: 9,
        tags: ["CSS", "HTML", "Javascript", "WIP", "App"],
        size: "tall",
        date: "June 9, 2024",
    },
    {
        name: "Pet Pic Picker",
        github: "https://github.com/Raehale/pet-pic-picker",
        link: "https://pet-pic-picker.netlify.app/",
        screenshot: "/Pet-Pics.jpg",
        description: "An app you can upload images of your pets and it will randomly generate a pet from the one you selected.",
        id: 8,
        tags: ["CSS", "HTML", "Javascript", "WIP", "App"],
        size: "box",
        date: "June 19, 2024",
    },
    {
        name: "Twitter Copy",
        github: "https://github.com/Raehale/twitter-copy",
        link: "https://twitter-copy-rae.netlify.app/",
        screenshot: "/twitter-sux.jpg",
        description: "A copy of twitter with a login ability.",
        id: 5,
        tags: ["CSS", "HTML", "Javascript", "WIP", "App"],
        size: "normal",
        date: "June 22, 2024",
    },
    {
        name: "Mobile Restaurant Menu",
        github: "https://github.com/Raehale/mobile-restaurant-menu",
        link: "https://mobile-restaurant-menu-raehaley.netlify.app/",
        screenshot: "/restaurant-menu.jpg",
        description: "An app for ordering from a restaurant, paying, and leaving a review.",
        id: 16,
        tags: ["CSS", "HTML", "Javascript", "App"],
        size: "normal",
        date: "June 29, 2024",
    },
    {
        name: "Best Fictional Rat",
        github: "https://github.com/Raehale/best-fictional-rat",
        link: "https://best-fictional-rat.netlify.app/",
        screenshot: "/best-fictional-rat.jpg",
        description: "A website made mobile first giving an award for best fictional rat.",
        id: 15,
        tags: ["CSS", "HTML", "Website"],
        size: "normal",
        date: "July 13, 2024",
    },
    {
        name: "Ratify Me",
        github: "https://github.com/Raehale/ratify-me",
        link: "https://ratify-me.netlify.app/",
        screenshot: "/Ratify-Me.jpg",
        description: "It will work as a site that adds a random rat image to an image you upload.",
        id: 17,
        tags: ["CSS", "HTML", "WIP", "App"],
        size: "wide",
        date: "July 15, 2024",
    },
    {
        name: "Rat News",
        github: "https://github.com/Raehale/Rat-News",
        link: "https://rat-news.netlify.app/",
        screenshot: "/RatNews.jpg",
        description: "A website displaying fake articles about rats to display a grid layout.",
        id: 18,
        tags: ["CSS", "HTML", "Website"],
        size: "wide",
        date: "July 15, 2024",
    },
    {
        name: "Best bank",
        github: "https://github.com/Raehale/Best-Bank",
        link: "https://best-bank-group.netlify.app/",
        screenshot: "/Best-Bank.jpg",
        description: "This is a group project done with two others, Fadumo and Guiseppe, that displays a bank statement page.",
        id: 19,
        tags: ["CSS", "HTML", "Javascript", "Website", "WIP", "Group"],
        size: "wide",
        date: "July 15, 2024",
    },
    {
        name: "Learning Journal",
        github: "https://github.com/Raehale/Learning-Journal",
        link: "https://learning-journal-rh.netlify.app/",
        screenshot: "/My-Learning-Journal.jpg",
        description: "A simple website to show my journey as a front end developer.",
        id: 20,
        tags: ["CSS", "HTML", "Javascript", "Website"],
        size: "box",
        date: "July 19, 2024",
    },
    {
        name: "Stock Ticker",
        github: "https://github.com/Raehale/Stock-Ticker",
        link: "https://stock-ticker-rh.netlify.app/",
        screenshot: "/stock-ticker.png",
        description: "A simple app that randomly generates the price of a 'stock' than displays the new price, the exact time, and weather it's increased, decreased, or stayed the same, every 1.5 seconds.",
        id: 21,
        tags: ["Javascript", "App"],
        size: ["box"],
        date: "July 27, 2024",
    },
    // {
    //     name: "",
    //     github: "",
    //     link: "",
    //     screenshot: "",
    //     description: "",
    //     id: "",
    //     tags: [],
    //     size: ["normal"],
    //     date: "July 19, 2024",
    // },
]