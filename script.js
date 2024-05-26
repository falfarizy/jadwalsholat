const getDate = new Date();
const getYear = getDate.getFullYear()
const getMonth = getDate.getMonth()+1
const getDay = getDate.getDate()

function bulan() {
    if(getMonth < 10) {
        bulan = `0${getMonth}`
    } else {
        bulan = getMonth
    }
    return bulan;
}
function tanggal() {
    if(getDay < 10) {
        tanggal = `0${getDay}`
    } else {
        tanggal = getDay
    }
    return tanggal;
}

const tabuta = `${getYear}-${bulan()}-${tanggal()}`

const endpoint = "https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/lamongan/"+getYear+'/'+bulan+'.json'

function jadwal(tanggal) {
    fetch(endpoint) 
    .then(response => response.json())
    .then(data => {
        const tanggal = data.filter(item => item.tanggal === tabuta);
        console.log(tanggal);
        document.querySelector('.subuh').textContent = tanggal[0].shubuh;
        document.querySelector('.dhuhur').textContent = tanggal[0].dzuhur;
        document.querySelector('.ashar').textContent = tanggal[0].ashr;
        document.querySelector('.maghrib').textContent = tanggal[0].magrib;
        document.querySelector('.isya').textContent = tanggal[0].isya;
    })
    document.querySelector('.tempat').textContent = 'Lamongan, '+tabuta;
}
jadwal()