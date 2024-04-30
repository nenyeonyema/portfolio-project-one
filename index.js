window.addEventListener('DOMContentLoaded', () => {
    const mobileBar = document.getElementById('mobile-bar');
    const mobileClose = document.getElementById('mobile-close');
    const mobileBlockBar = document.getElementById('mobile-blockbar');
    const generalBar = document.querySelector('.toggle-bar2');
    const generalSideNav = document.querySelector('.general-sidebar');

    mobileBar.addEventListener('click', () => {
        mobileBar.style.display ="none";
        mobileClose.style.display ="inline-block";
        mobileBlockBar.style.display = "block";
    });
    mobileClose.addEventListener('click', () => {
        mobileBar.style.display ="inline-block";
        mobileClose.style.display ="none";
        mobileBlockBar.style.display = "none";
    });

    generalBar.addEventListener('click', () => {
        const viewportWidth = window.innerWidth;
        generalSideNav.style.display = "block";

        if (viewportWidth < 768) {
            generalSideNav.style.width = '300px';
        } else {
            generalSideNav.style.width = '290px';
        }
        const closingBar = document.querySelector('.closing-bar');
        closingBar.addEventListener('click', () => {
            
            if (viewportWidth < 768) {
                generalSideNav.style.width = '-300px';
            } else {
                generalSideNav.style.width = '-290px';
            }
            generalSideNav.style.width = '0';
        })      
    });
});


