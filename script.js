let getDate = new Date();
let getYear = getDate.getFullYear()
let getMonth = getDate.getMonth()+1
let getDay = getDate.getDate()

setInterval(waktu)
function waktu() {
    let date = new Date();
    let jam = date.getHours();
    let menit = date.getMinutes();
    let detik = date.getSeconds();

    function jamm() {
        if(jam < 10) {
            jamm = `0${jam}`
        } else {
            jamm = jam;
        }
        return jamm;
    }
    function menitt() {
        if(menit < 10) {
            menitt = `0${menit}`
        } else {
            menitt = menit;
        }
        return menitt;
    }
    function detikk() {
        if(detik < 10) {
            detikk = `0${detik}`
        } else {
            detikk = detik;
        }
        return detikk;
    }
    jamL = `${jamm()}:${menitt()}:${detikk()}`
    document.querySelector('.waktu').textContent = jamL;
}
waktu();


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