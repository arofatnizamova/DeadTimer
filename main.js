const maxTime = Date.parse('2087-01-04');

const now = Date.parse(new Date());

const random = Math.floor(Math.random() * (maxTime - now) + now);

const getDeadTime = () => {
    const t = random - Date.parse(new Date());
    const years = Math.floor(t / (1000 * 60 * 60 * 24 * 30 * 12));
    const months = Math.floor(t / (1000 * 60 * 60 * 24 * 30) % 12);
    const days = Math.floor(t / (1000 * 60 * 60 * 24) % 30);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / (1000 * 60)) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'years': years,
        'months': months,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num
    }
}
const setDeadTime = () => {
    const timer = document.querySelector('.timer');
    const years = timer.querySelector('#years');
    const months = timer.querySelector('#months');
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours')
    const minutes = timer.querySelector('#minutes')
    const seconds = timer.querySelector('#seconds')
    const timeInterval = setInterval(updateClock, 1000)
    updateClock();

    function updateClock() {
        const t = getDeadTime();
        years.innerHTML = getZero(t.days);
        months.innerHTML = getZero(t.days);
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }


}

const btn = document.querySelector('.blob-btn');

btn.addEventListener('click', setDeadTime);