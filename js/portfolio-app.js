const menuButton = document.querySelector('button')
const menuTitle = document.querySelector('#menu_title')
const portfolioItems = document.querySelector('#portfolio_items')
const categoryContent = document.querySelectorAll('.content')

const openMenu = document.querySelector('#menu-btn')
const closeMenu = document.querySelector('#menu-close')
const navList = document.querySelector('ul')

const categories = document.querySelectorAll('#portfolio_items div')
const portrait = document.querySelector('#portrait')
const landscape = document.querySelector('#landscape')
const headshot = document.querySelector('#headshot')
const birthday = document.querySelector('#birthday')
const graduation = document.querySelector('#graduation')
const travels = document.querySelector('#travels')
const collabs = document.querySelector('#collabs')

menuButton.addEventListener('click', function() {
    if (menuTitle.classList.contains('active')) {
        menuTitle.classList.remove('active')
        portfolioItems.classList.remove('active')
    } else {
        menuTitle.classList.add('active')
        portfolioItems.classList.add('active')
    }
} )

openMenu.addEventListener('click', function () {
    navList.classList.add('active')
    menuTitle.style.display = 'none'
})

closeMenu.addEventListener('click', function () {
    navList.classList.remove('active')
    menuTitle.style.display = 'initial'
})

categories.forEach(category => {
    category.addEventListener("click", event => {
        const currentlyActiveCategory = document.querySelector("#portfolio_items div.active");
        if( currentlyActiveCategory !== category) {
            currentlyActiveCategory.classList.remove("active");
            category.classList.add('active');
            menuTitle.classList.add('active')
            portfolioItems.classList.add('active')
        } else if (currentlyActiveCategory == category) {
            menuTitle.classList.add('active')
            portfolioItems.classList.add('active')
        }

        if (category.id.toLowerCase() == landscape.id) {
            landscape.classList.remove('active')
            portrait.classList.add('active')
            headshot.classList.add('active')
            birthday.classList.add('active')
            graduation.classList.add('active')
            travels.classList.add('active')
            collabs.classList.add('active')
        } else if (category.id.toLowerCase() == headshot.id) {
            headshot.classList.remove('active')
            portrait.classList.add('active')
            landscape.classList.add('active')
            birthday.classList.add('active')
            graduation.classList.add('active')
            travels.classList.add('active')
            collabs.classList.add('active')
        } else if (category.id.toLowerCase() == birthday.id) {
            birthday.classList.remove('active')
            portrait.classList.add('active')
            headshot.classList.add('active')
            landscape.classList.add('active')
            graduation.classList.add('active')
            travels.classList.add('active')
            collabs.classList.add('active')
        } else if (category.id.toLowerCase() == graduation.id) {
            graduation.classList.remove('active')
            portrait.classList.add('active')
            headshot.classList.add('active')
            birthday.classList.add('active')
            landscape.classList.add('active')
            travels.classList.add('active')
            collabs.classList.add('active')
        } else if (category.id.toLowerCase() == travels.id) {
            travels.classList.remove('active')
            portrait.classList.add('active')
            headshot.classList.add('active')
            birthday.classList.add('active')
            graduation.classList.add('active')
            landscape.classList.add('active')
            collabs.classList.add('active')
        } else if (category.id.toLowerCase() == collabs.id) {
            collabs.classList.remove('active')
            portrait.classList.add('active')
            headshot.classList.add('active')
            birthday.classList.add('active')
            graduation.classList.add('active')
            travels.classList.add('active')
            landscape.classList.add('active')
        } else if (category.id.toLowerCase() == portrait.id) {
            portrait.classList.remove('active')
            landscape.classList.add('active')
            headshot.classList.add('active')
            birthday.classList.add('active')
            graduation.classList.add('active')
            travels.classList.add('active')
            collabs.classList.add('active')
        } else {
            return
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


fetch("/js/portrait.json")
    .then(response => {
    if (!response.ok) {
        throw new Error('Error Fetching');
    }
    return response.json();
    })
    .then(portraits => {
        portraits.forEach(portrait => {
            let image = document.createElement('img')
            image.setAttribute('src', `/editedImages/${portrait}`)
            image.setAttribute('width', '100%')
            categoryContent[0].appendChild(image)
        });
    })
    .catch(error => {
    if (error instanceof TypeError && error.message.includes('API key')) {
        console.error('Invalid API key:', error);
    } else {
        console.error('There was a problem with the Fetch operation:', error);
    }
});


fetch("/js/landscape.json")
    .then(response => {
    if (!response.ok) {
        throw new Error('Error Fetching');
    }
    return response.json();
    })
    .then(landscapes => {
        landscapes.forEach(landscape => {
            let image = document.createElement('img')
            image.setAttribute('src', `/editedImages/${landscape}`)
            image.setAttribute('width', '100%')
            categoryContent[1].appendChild(image)
        });
    })
    .catch(error => {
    if (error instanceof TypeError && error.message.includes('API key')) {
        console.error('Invalid API key:', error);
    } else {
        console.error('There was a problem with the Fetch operation:', error);
    }
    });

fetch("/js/headshot.json")
    .then(response => {
    if (!response.ok) {
        throw new Error('Error Fetching');
    }
    return response.json();
    })
    .then(headshots => {
        headshots.forEach(headshot => {
            let image = document.createElement('img')
            image.setAttribute('src', `/editedImages/${headshot}`)
            image.setAttribute('width', '100%')
            categoryContent[2].appendChild(image)
        });
    })
    .catch(error => {
    if (error instanceof TypeError && error.message.includes('API key')) {
        console.error('Invalid API key:', error);
    } else {
        console.error('There was a problem with the Fetch operation:', error);
    }
    });


fetch("/js/birthday.json")
    .then(response => {
    if (!response.ok) {
        throw new Error('Error Fetching');
    }
    return response.json();
    })
    .then(birthdays => {
        birthdays.forEach(birthday => {
            let image = document.createElement('img')
            image.setAttribute('src', `/editedImages/${birthday}`)
            image.setAttribute('width', '100%')
            categoryContent[3].appendChild(image)
        });
    })
    .catch(error => {
    if (error instanceof TypeError && error.message.includes('API key')) {
        console.error('Invalid API key:', error);
    } else {
        console.error('There was a problem with the Fetch operation:', error);
    }
    });

fetch("/js/graduation.json")
    .then(response => {
    if (!response.ok) {
        throw new Error('Error Fetching');
    }
    return response.json();
    })
    .then(graduations => {
        graduations.forEach(graduation => {
            let image = document.createElement('img')
            image.setAttribute('src', `/editedImages/${graduation}`)
            image.setAttribute('width', '100%')
            categoryContent[4].appendChild(image)
        });
    })
    .catch(error => {
    if (error instanceof TypeError && error.message.includes('API key')) {
        console.error('Invalid API key:', error);
    } else {
        console.error('There was a problem with the Fetch operation:', error);
    }
    });


fetch("/js/travels.json")
    .then(response => {
    if (!response.ok) {
        throw new Error('Error Fetching');
    }
    return response.json();
    })
    .then(travels => {
        travels.forEach(travel => {
            let image = document.createElement('img')
            image.setAttribute('src', `/editedImages/${travel}`)
            image.setAttribute('width', '100%')
            categoryContent[5].appendChild(image)
        });
    })
    .catch(error => {
    if (error instanceof TypeError && error.message.includes('API key')) {
        console.error('Invalid API key:', error);
    } else {
        console.error('There was a problem with the Fetch operation:', error);
    }
    });


fetch("/js/collabs.json")
    .then(response => {
    if (!response.ok) {
        throw new Error('Error Fetching');
    }
    return response.json();
    })
    .then(collabs => {
        collabs.forEach(collab => {
            let image = document.createElement('img')
            image.setAttribute('src', `/editedImages/${collab}`)
            image.setAttribute('width', '100%')
            categoryContent[6].appendChild(image)
        });
    })
    .catch(error => {
    if (error instanceof TypeError && error.message.includes('API key')) {
        console.error('Invalid API key:', error);
    } else {
        console.error('There was a problem with the Fetch operation:', error);
    }
    });
