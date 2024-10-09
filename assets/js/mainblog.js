// nav background
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
// $(document).ready(function () {
//     $(".filter-item").click(function () {
//         const value = $(this).attr("data-filter");
//         if (value == "all"){
//             $(".post-box").show("1000")
//         } else{
//             $(".post-box")
//                 .not("." + value)
//                 .hide(1000);
//             $(".post-box")
//             .filter("." + value)
//             .show("1000")
//         }
//     });
//     $(".filter-item").click(function () {
//         $(this).addClass("active-filter").siblings().removeClass("active-filter")
//     });
// });

// new filters


let link2



const fetchData = async()=>{
    try {
        const link = `https://proxy.techzbots1.workers.dev/?u=https://api.prodyun.me/recent`;
        const link1 = await axios.get(link);
        link2 = link1.data;
       


    } catch (error) {
        console.log("error");
    }
};
fetchData();


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



const all = document.getElementById('all');
const engineering = document.getElementById('engineering');
const travel = document.getElementById('travel');
const historical = document.getElementById('historical');
const news = document.getElementById('news');
let dataArray = [];
engineering.addEventListener('click', () => {
    dataArray = link2.data.filter((item)=> {
        if (item.type == 'engineering') {
            return item
        }
    })
    

if (dataArray.length) {    
    dataArray.forEach(post1 => {
        document.querySelector('.post').innerHTML += `<div class="post-box tech">
        <img src="${post1.image}" alt="" class="post-img">
        <h2 class="category">${post1.type}</h2>
        <a href="post.html?id=${post1.id}" class="post-title">${post1.name}</a>
        <span class="post-date">${post1.date}</span>
        <p class="post-description">${post1.description}</p>
        <div class="profile">
            <img src="${post1.author.image}" alt="" class="profile-img">
            <span class="profile-name">${post1.author.name}</span>
        </div>
    </div>`
    });
    }
    console.log (dataArray) 

    
})
travel.addEventListener('click', () => {
    dataArray = link2.data.filter((item)=> {
        if (item.type == 'travel') {
            return item
        }
    })
    

if (dataArray.length) {    
    dataArray.forEach(post1 => {
        document.querySelector('.post').innerHTML += `<div class="post-box tech">
        <img src="${post1.image}" alt="" class="post-img">
        <h2 class="category">${post1.type}</h2>
        <a href="post.html?id=${post1.id}" class="post-title">${post1.name}</a>
        <span class="post-date">${post1.date}</span>
        <p class="post-description">${post1.description}</p>
        <div class="profile">
            <img src="${post1.author.image}" alt="" class="profile-img">
            <span class="profile-name">${post1.author.name}</span>
        </div>
    </div>`
    });
    }
    console.log (dataArray)
    
})
historical.addEventListener('click', () => {
    dataArray = link2.data.filter((item)=> {
        if (item.type == 'historical') {
            return item
        }
    })
    

if (dataArray.length) {    
    dataArray.forEach(post1 => {
        document.querySelector('.post').innerHTML += `<div class="post-box tech">
        <img src="${post1.image}" alt="" class="post-img">
        <h2 class="category">${post1.type}</h2>
        <a href="post.html?id=${post1.id}" class="post-title">${post1.name}</a>
        <span class="post-date">${post1.date}</span>
        <p class="post-description">${post1.description}</p>
        <div class="profile">
            <img src="${post1.author.image}" alt="" class="profile-img">
            <span class="profile-name">${post1.author.name}</span>
        </div>
    </div>`
    });
    }
    console.log (dataArray)

    
})
news.addEventListener('click', () => {
    dataArray = link2.data.filter((item)=> {
    console.log (item.type)
        if (item.type == 'news') {
            return item
        }
    })
    

if (dataArray.length) {    
    dataArray.forEach(post1 => {
        document.querySelector('.post').innerHTML += `<div class="post-box tech">
        <img src="${post1.image}" alt="" class="post-img">
        <h2 class="category">${post1.type}</h2>
        <a href="post.html?id=${post1.id}" class="post-title">${post1.name}</a>
        <span class="post-date">${post1.date}</span>
        <p class="post-description">${post1.description}</p>
        <div class="profile">
            <img src="${post1.author.image}" alt="" class="profile-img">
            <span class="profile-name">${post1.author.name}</span>
        </div>
    </div>`
    });
    }
    console.log (dataArray)

    
})


all.addEventListener('click', () => {
    link2.data.filter((item)=> {})
    dataArray = link2.data;
    
if (dataArray.length) {    
dataArray.forEach(post1 => {
    document.querySelector('.post').innerHTML += `<div class="post-box tech">
    <img src="${post1.image}" alt="" class="post-img">
    <h2 class="category">${post1.type}</h2>
    <a href="post.html?id=${post1.id}" class="post-title">${post1.name}</a>
    <span class="post-date">${post1.date}</span>
    <p class="post-description">${post1.description}</p>
    <div class="profile">
        <img src="${post1.author.image}" alt="" class="profile-img">
        <span class="profile-name">${post1.author.name}</span>
    </div>
</div>`
});
}
console.log (dataArray[0].type)
})
