// ** получение всех ссылок со страницы (список доменов)
function getPageLinkDomains() {
  return console.log(
    Array.from(document.getElementsByTagName('a'))
      .map((link) =>
        link.href
          .replace('http://', '')
          .replace('https://', '')
          .replace('www.', '')
          .split('/')
          .shift()
      )
      .filter((link) => link.trim().length > 0)
      .reduce((uniqueDomains, domain) => {
        if (uniqueDomains.includes(domain)) return uniqueDomains;
        return [...uniqueDomains, domain];
      }, [])
  );
}

/*
результат запуска функции/в console, на странице данного видео-урока

['go.skillbox.ru', 'skillbox.ru', 'developer.mozilla.org', 'habr.com', 'zakirov.net', 'learn.javascript.ru', 'dposkillbox.ru']

0: "go.skillbox.ru"
1: "skillbox.ru"
2: "developer.mozilla.org"
3: "habr.com"
4: "zakirov.net"
5: "learn.javascript.ru"
6: "dposkillbox.ru"

length: 7
*/
