var dateInput = document.querySelector('#dateInput');
var monthInput = document.querySelector('#monthInput');
var yearInput = document.querySelector('#yearInput');
var btn = document.querySelector('#calculateBtn');

btn.addEventListener('click', function() {
    document.querySelector('.box').style.transform = 'translate(-50%,-50%) scale(1)';
    var currentDate = new Date();

    var userDate = parseInt(dateInput.value);
    var userMonth = parseInt(monthInput.value) - 1; 
    var userYear = parseInt(yearInput.value);

    var userBirthDate = new Date(userYear, userMonth, userDate);

    var ageInMilliseconds = currentDate - userBirthDate;
    var ageInSeconds = ageInMilliseconds / 1000;
    var ageInMinutes = ageInSeconds / 60;
    var ageInHours = ageInMinutes / 60;
    var ageInDays = ageInHours / 24;
    var ageInWeeks = ageInDays / 7;
    var ageInMonths = ageInDays / 30.436875;
    var ageInYears = ageInDays / 365.25;

    document.querySelector('#para').textContent = Math.floor(ageInYears) + " years, " + Math.floor(ageInMonths) + " months, " + Math.floor(ageInWeeks) + " weeks, " + Math.floor(ageInDays) + " days, " + Math.floor(ageInHours) + " hours, " + Math.floor(ageInMinutes) + " minutes, and " + Math.floor(ageInSeconds) + " seconds.";
});
