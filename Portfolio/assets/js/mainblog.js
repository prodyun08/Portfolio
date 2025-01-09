////////////////////////////////////////////////
const post1 = document.querySelector('.post');
let array = [];
async function searchblog(){
    
    let input = document.getElementById('searchBar').value
    const link = `https://proxy.techzbots1.workers.dev/?u=https://api.prodyun.me/search/${input}`;
        const link1 = await axios.get(link);
        const link2 = link1.data.data;
        console.log(link2);
        post1.innerHTML = "";

        
        link2.forEach(post1 => {
            post.innerHTML += `<div class="post-box tech">
            <img src="${post1.image}" alt="" class="post-img">
            <h2 class="category">${post1.type}</h2>
            <a href="/pages/post.html?id=${post1.id}" class="post-title">${post1.name}</a>
            <span class="post-date">${post1.date}</span>
            <p class="post-description">${post1.description}</p>
            <div class="profile">
                <img src="${post1.author.image}" alt="" class="profile-img">
                <span class="profile-name">${post1.author.name}</span>
            </div>
        </div>`
        });
}



// new mainblog js here -------------------------------------------------

// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});


const post = document.querySelector('.post');



(async()=>{
    try {
        const link = `https://proxy.techzbots1.workers.dev/?u=https://api.prodyun.me/recent`;
        const link1 = await axios.get(link);
        const link2 = link1.data;

        console.log(link2);
        f=`<div class="post-box tech">
            <img src="images/img1.jpg" alt="" class="post-img">
            <h2 class="category">Tech</h2>
            <a href="#" class="post-title">How to create the best UI with Figma</a>
            <span class="post-date">12 Feb 2022</span>
            <p class="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
            <div class="profile">
                <img src="images/profile.png" alt="" class="profile-img">
                <span class="profile-name">PRODYUN</span>
            </div>
        </div>`;
        
        if (array.length){
            array.forEach(post1 => {
                post.innerHTML += `<div class="post-box tech">
                <img src="${post1.image}" alt="" class="post-img">
                <h2 class="category">${post1.type}</h2>
                <a href="/pages/post.html?id=${post1.id}" class="post-title">${post1.name}</a>
                <span class="post-date">${post1.date}</span>
                <p class="post-description">${post1.description}</p>
                <div class="profile">
                    <img src="${post1.author.image}" alt="" class="profile-img">
                    <span class="profile-name">${post1.author.name}</span>
                </div>
            </div>`
            });
        }
        else{
            link2.data.forEach(post1 => {
                post.innerHTML += `<div class="post-box tech">
                <img src="${post1.image}" alt="" class="post-img">
                <h2 class="category">${post1.type}</h2>
                <a href="/pages/post.html?id=${post1.id}" class="post-title">${post1.name}</a>
                <span class="post-date">${post1.date}</span>
                <p class="post-description">${post1.description}</p>
                <div class="profile">
                    <img src="${post1.author.image}" alt="" class="profile-img">
                    <span class="profile-name">${post1.author.name}</span>
                </div>
            </div>`
            });
        }

    } catch (error) {
        console.log("errrrror");
    }
})();


let inputField = document.getElementById('searchBar'); // Ensure the ID matches
inputField.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchblog(); // Trigger the search function
    }
});




