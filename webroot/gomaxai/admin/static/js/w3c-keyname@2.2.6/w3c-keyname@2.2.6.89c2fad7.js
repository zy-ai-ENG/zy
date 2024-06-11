
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
for(var e={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},r={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},t="undefined"!=typeof navigator&&/Chrome\/(\d+)/.exec(navigator.userAgent),o="undefined"!=typeof navigator&&/Mac/.test(navigator.platform),n="undefined"!=typeof navigator&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),a=o||t&&+t[1]<57,i=0;i<10;i++)e[48+i]=e[96+i]=String(i);for(i=1;i<=24;i++)e[i+111]="F"+i;for(i=65;i<=90;i++)e[i]=String.fromCharCode(i+32),r[i]=String.fromCharCode(i);for(var f in e)r.hasOwnProperty(f)||(r[f]=e[f]);function d(t){var o=!(a&&(t.ctrlKey||t.altKey||t.metaKey)||n&&t.shiftKey&&t.key&&1==t.key.length||"Unidentified"==t.key)&&t.key||(t.shiftKey?r:e)[t.keyCode]||t.key||"Unidentified";return"Esc"==o&&(o="Escape"),"Del"==o&&(o="Delete"),"Left"==o&&(o="ArrowLeft"),"Up"==o&&(o="ArrowUp"),"Right"==o&&(o="ArrowRight"),"Down"==o&&(o="ArrowDown"),o}export{e as b,d as k,r as s};
