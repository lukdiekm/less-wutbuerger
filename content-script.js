let filters = [
    {
        "url": "^https?://www.zeit.de",
        "selector": "#comments"
    },
    {
        "url": "^https?://www.nw.de",
        "selector": ".comments-outer"
    },
    {
        "url": "^https?://www.nw.de",
        "selector": ".article-comments"
    }
]

filters.forEach(f => {
    if (window.location.href.match(f.url)) {
        let e = document.querySelector(f.selector);
        if (e === null) {
            console.log('Wutbürgers not found :(');
        } else {
            e.remove();
            console.log('Wutbrüger removed!');
        }
    }
});