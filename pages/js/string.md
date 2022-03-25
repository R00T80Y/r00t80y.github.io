## htmlEntities
~~~js
// https://www.delftstack.com/howto/javascript/encode-html-entities-in-javascript/
export function htmlEntities(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
~~~

~~~js
htmlEntities('<code></code>'); // &lt;code&gt;&lt;/code&gt;
~~~

## translit
~~~js
export function translit(word) {
  const converter = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
    'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
    'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
    'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
    'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
    'э': 'e', 'ю': 'yu', 'я': 'ya'
  };

  word = word.toLowerCase();

  let answer = '';
  for (let i = 0; i < word.length; i += 1) {
    if (converter[word[i]] === undefined) {
      answer += word[i];
    } else {
      answer += converter[word[i]];
    }
  }

  answer = answer.replace(/[^-0-9a-z]/g, '-');
  answer = answer.replace(/[-]+/g, '-');
  answer = answer.replace(/^\-|-$/g, '');
  return answer;
}
~~~

~~~js
translit('Русские буквы'); // "russkie-bukvy"
~~~

~~~js
const abc = 'АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя';
translit(abc); // "aabbvvggddeeeezhzhzziiyykkllmmnnoopprrssttuuffhhccchchshshschschyyeeyuyuyaya"
~~~

~~~js
const abc = 'АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя';
abc.split('').map((item, index) => console.log(item + '-' + translit(item))); // ["А-a","а-a","Б-b","б-b","В-v","в-v","Г-g","г-g","Д-d","д-d","Е-e","е-e","Ё-e","ё-e","Ж-zh","ж-zh","З-z","з-z","И-i","и-i","Й-y","й-y","К-k","к-k","Л-l","л-l","М-m","м-m","Н-n","н-n","О-o","о-o","П-p","п-p","Р-r","р-r","С-s","с-s","Т-t","т-t","У-u","у-u","Ф-f","ф-f","Х-h","х-h","Ц-c","ц-c","Ч-ch","ч-ch","Ш-sh","ш-sh","Щ-sch","щ-sch","Ъ-","ъ-","Ы-y","ы-y","Ь-","ь-","Э-e","э-e","Ю-yu","ю-yu","Я-ya","я-ya"]
~~~

## Trim
~~~js
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}
~~~

## Replace
~~~js
let text = "It's not a bug; its an undocumented feature.";
~~~
~~~js
text = text.replace('its', "it's");
console.log(text); // It's not a bug; it's an undocumented feature. main.js:5:9
~~~
~~~js
text = text.split(';').join(',');
console.log(text); // It's not a bug, it's an undocumented feature.
~~~
~~~js
text = text.replace(/\s/g, '-');
console.log(text); // It's-not-a-bug,-it's-an-undocumented-feature.
~~~
~~~js
text = text.replace(new RegExp(/\-/, 'gi'), '$'); // It's$not$a$bug,$it's$an$undocumented$feature.
console.log(text);
~~~

