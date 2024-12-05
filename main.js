document.addEventListener('DOMContentLoaded', function() {
    const click = document.getElementById('click');
    const nav = document.querySelector('nav');
    const mainicon = document.querySelector('.mainicon');

    // toggle the navigation menu when the checkboc is changed 
    click.addEventListener('change', function () {
        if (click.checked) {
            nav.style.left = '0'; // show the navigation menu
        } else {
            nav.style.left = '-100%'; // hide the navigation menu
        }
    });

    // close the menu when any navigation link is clicked (optional)
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            click.checked = false;
            nav.style.left = '-100%'; //hide the navigatio menu
        });
    });
});