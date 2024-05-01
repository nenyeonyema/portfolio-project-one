window.addEventListener('DOMContentLoaded', () => {
    const mobileBar = document.getElementById('mobile-bar');
    const mobileClose = document.getElementById('mobile-close');
    const mobileBlockBar = document.getElementById('mobile-blockbar');
    const generalBar = document.querySelector('.toggle-bar2');
    const generalSideNav = document.querySelector('.general-sidebar');

    mobileBar.addEventListener('click', () => {
        let viewportWidth = window.innerWidth;
        if (viewportWidth > 768) {
            mobileBlockBar.style.display = "none";
            mobileClose.style.display ="none";
        }
        mobileBar.style.display ="none";
        mobileClose.style.display ="inline-block";
        mobileBlockBar.style.display = "block";
        if (viewportWidth > 768) {
            mobileBlockBar.style.display = "none";
        }
    });
    mobileClose.addEventListener('click', () => {
        mobileBar.style.display ="inline-block";
        mobileClose.style.display ="none";
        mobileBlockBar.style.display = "none";
    });

    generalBar.addEventListener('click', () => {
        let viewportWidth = window.innerWidth;
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

    const tabLinks = document.getElementsByClassName('tab-links');
    const tabContents = document.getElementsByClassName('tab-contents');
    const activeLink = document.getElementById('active-link');

    for (let tablink of tabLinks) {
        tablink.addEventListener('click', (event) => {
            for (let tab of tabLinks) {
                tab.removeAttribute('id');
            }
            event.currentTarget.setAttribute('id', 'active-link');
            const index = Array.from(tabLinks).indexOf(event.currentTarget);
            for (let i = 0; tabContents.length; i++) {
                if (i === index) {
                    tabContents[i].style.display = "block";
                }
                else {
                    tabContents[i].style.display = "none";
                    
                }
            }
        });
        
    }

});


