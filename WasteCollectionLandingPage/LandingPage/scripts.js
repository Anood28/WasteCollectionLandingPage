// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    var teamMembers = document.querySelectorAll('.team-list li h3');

    teamMembers.forEach(function (member) {
        member.addEventListener('click', function () {
            alert('You clicked on ' + member.textContent);
        });
    });
});
