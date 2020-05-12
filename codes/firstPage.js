const prev = document.querySelector('.demo-prev');
const next = document.querySelector('.demo-next');
const today = document.querySelector('.demo-today');
const picked = document.querySelector('.demo-picked');
const last = document.querySelector('.demo-last');

function updateInfo() {
    if (this.today) {
        today.innerHTML = '';
        var li = document.createElement('li');
        li.innerHTML = this.today;
        today.appendChild(li);
    }

    if (this.lastSelectedDay) {

        picked.innerHTML = '';
        for (days of this.selectedDays) {
            var li = document.createElement('li');
            li.innerHTML = days;
            picked.appendChild(li);
        }

        last.innerHTML = '';
        var li = document.createElement('li');
        li.innerHTML = this.lastSelectedDay;
        last.appendChild(li);
    }
}

const myCalendar = new HelloWeek({
    selector: '.hello-week',
    lang: 'en',
    format: 'DD/MM/YYYY',
    monthShort: true,
    weekShort: true,
    disablePastDays: true,
    multiplePick: false,
    // minDate: 1520696057,
    // maxDate: 1522519829,
    onLoad: updateInfo,
    onChange: updateInfo,
    onSelect: updateInfo
});

prev.addEventListener('click', () => myCalendar.prev());
next.addEventListener('click', () => myCalendar.next());

$(document).ready(function(){
    document.querySelector('#main-selected').addEventListener('click',function(){
        document.querySelector('.rest-select').classList.add('d-block');
    })

    document.querySelectorAll('.rest-select span').forEach(element=>
        element.addEventListener('click',function(){
            document.querySelector('#choosed-rest-type').innerHTML = this.textContent;
            document.querySelector('.rest-select').classList.remove('d-block');
            let img = 'http://www.nicdarkthemes.com/themes/restaurant/wp/demo/restaurant/wp-content/uploads/sites/2/2019/02/restaurant-02.jpg';
            let img2 = 'http://www.nicdarkthemes.com/themes/restaurant/wp/demo/restaurant/wp-content/uploads/sites/2/2019/02/restaurant-01.jpg';
            if(this.textContent == 'Hill Restaurant'){
            document.querySelector('.hill-rest-img').setAttribute('src',img2);
            }
            else{
            document.querySelector('.hill-rest-img').setAttribute('src',img);
            }
        }))
        let counter = parseInt(document.querySelector('.number').innerHTML);
        document.querySelector('.plus').addEventListener('click',function(){
            counter++;
            document.querySelector('.number').innerHTML = counter;
        })
        document.querySelector('.minus').addEventListener('click',function(){
            counter--;
            if(counter===0){
                counter=1;
            }
            document.querySelector('.number').innerHTML = counter;
        })

        document.querySelector('.choosed-celebration-type').addEventListener('click',function(){
            document.querySelector('.type-of-celebrations').classList.remove('d-none');
        })
        document.querySelectorAll('.name-of-celeb').forEach(element=>
            element.addEventListener('click',function(){
                document.querySelector('.not-set').innerHTML = this.textContent;
                document.querySelector('.type-of-celebrations').classList.add('d-none');
                document.querySelectorAll('.name-of-celeb').forEach(element=>
                    element.classList.remove('for-black-bg'));
                this.classList.add('for-black-bg');
            }))
        document.querySelectorAll('.in-the-button').forEach(element=>
            element.addEventListener('click',function(){
                document.querySelectorAll('.in-the-button').forEach(element=>
                    element.classList.remove('buttons-bg'));
                this.classList.add('buttons-bg');
            }))
            updateInfo();
            console.log(picked);
})