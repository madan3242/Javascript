document.querySelector('h1').innerHTML;
// '<strong>Hello</strong>'
document.querySelector('h1').textContent;
// 'Hello'

document.querySelector('h1').innerHTML = '<em>Good Bye</em>';


//Manipulating attributes

document.querySelector('a');
//<a href=​"https:​/​/​www.google.com">​Google​</a>​

document.querySelector('a').attributes;
// NamedNodeMap {0: href, href: href, length: 1}

document.querySelector('a').getAttribute('href');
// 'https://www.google.com'

document.querySelector('a').setAttribute('href', 'https://www.bing.com');
