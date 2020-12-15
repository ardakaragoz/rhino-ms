
var saniye = 1000;
var dakika = saniye * 60;
var saat = dakika * 60;
var gün = saat * 24;
var hafta = gün * 7;
var yıl = gün * 365.25;

/*
*
* @amaç {Süre Çevirimi}
*/

function msçevir(str) {
  if (!isNaN(Number(str))){
    return Number(str)
  }
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milisaniye?|ms?|milisecond?|miliseconds|second?|seconds?|saniye?|sn?|sec?|san?|sa?|s|d?|min?|dk?|dakika?|minutes?|minute?|m?|dak|saat?|hours?|hour|gün?|gun?|g?|day?|days|hafta?|h?|ha?|weeks?|week|yıl?|years?|year?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms')
  switch (type) {
    case 'yıl':
    case 'y':
    case 'years':
    case 'year':
      return n * yıl;
    case 'hafta':
    case 'h':
    case 'ha':
    case 'week':
    case 'weeks':
      return n * hafta;
    case 'gün':
    case 'gun':
    case 'g':
    case 'day':
    case 'days':
      return n * gün;
    case 'saat':
    case 'hour':
    case 'hours':
      return n * saat;
    case 'd':
    case 'dak':
    case 'dk':
    case 'dakika':
    case 'minute':
    case 'minutes':
    case 'min':
      return n * dakika;
    case 'sec':
    case 'sa':
    case 'sn':
    case 's':
    case 'san':
    case 'seconds':
    case 'second':
    case 'saniye':
      return n * saniye;
    case 'milisecond':
    case 'miliseconds':
    case 'ms':
    case 'milisaniye':
      return n;
  }
}

function rhinoinc(çevrilecekdeğer, seçenekler) {
  if (seçenekler){
    if (seçenekler.birim){
      let birim = seçenekler.birim 
      if (birim === 'saniye'){
        return msçevir(çevrilecekdeğer) / 1000
      } else if(birim === 'dakika'){
        return msçevir(çevrilecekdeğer) / 60000
      } else if (birim === 'saat'){
        return msçevir(çevrilecekdeğer) / (60 * 1000 * 60)
      } else if (birim === 'gün'){
        return msçevir(çevrilecekdeğer) / (60 * 1000 * 60 * 24)
      } else if (birim === 'hafta') {
        return msçevir(çevrilecekdeğer) / (1000 * 60 * 60 * 24 * 7)
      } else if (birim === 'yıl') {
        return msçevir(çevrilecekdeğer) / (1000 * 60 * 60 * 24 * 365.25)
      } else {
        ('Geçersiz Çevirme Seçeneği Muhtemel Seçenekler: saniye, dakika, saat, gün, hafta, yıl (MS için seçenekler kullanmayınız.)')
      }
    } else {
      console.error('Doğru Kullanım ms("7 dakika", {\nbirim: "birim")')
    }
  } else {
  var type = typeof çevrilecekdeğer;
  if (type === 'string' && çevrilecekdeğer.length > 0) {
    return msçevir(çevrilecekdeğer);
  } else if (type === 'number') {
    return çevrilecekdeğer
  }
}
  console.error('Geçersiz Bir Değer Girdiniz')
}

/*
RHINO INC.
* @kullanım {<RHINO-MS>("10 dakika")}
*/


module.exports = rhinoinc
