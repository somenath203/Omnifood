// updating the year automatically present in the placeholder
const footer_year = document.querySelector('.year');

const currentYear = new Date().getFullYear();

footer_year.textContent = currentYear;

// mobile navigation functionality
const btnForNavigation = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

btnForNavigation.addEventListener('click', function() {
    header.classList.toggle('nav-open');
});

// smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {

        e.preventDefault();

        const href = link.getAttribute('href');

        // scroll back to the top functionality
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        if (href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth"});
        }

        // close mobile navigation on clicking any link
        if(link.classList.contains('main-nav-link')) {
            header.classList.toggle('nav-open');
        }

    })
})

// show sticky navigation only when we are done scrolling the whole hero section
const sectionHeroElement = document.querySelector('.section-hero');

const observer = new IntersectionObserver(function(entries){
    const ent = entries[0];
    if(ent.isIntersecting === false) {
        document.body.classList.add('sticky');
    }
    if(ent.isIntersecting === true) {
        document.body.classList.remove('sticky');
    }
}, {
    root: null,
    threshold: 0, /* we will have an event fired as soon as the zero-percent of the hero-section is inside the viewport */
    rootMargin: '-80px' // this margin is applied outside the root
});
observer.observe(sectionHeroElement);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();



