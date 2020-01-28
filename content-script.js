let filters = [
    {
        "url": "^https?://www.zeit.de",
        "elements": ["#comments", ".metadata__commentcount", ".zon-teaser-standard__commentcount"]
    },
    {
        "url": "^https?://www.nw.de",
        "elements": [".comments-outer", ".article-comments"]
    }
]

filters.forEach(f => {
    if (window.location.href.match(f.url)) {
        f.elements.forEach(x => {
            let e = document.querySelectorAll(x);
            if (e.length > 0) {
                e.forEach(i => {
                    i.remove();
                    console.log('Wutbrüger removed!');
                });
            } else {
                console.log('Wutbürgers not found :(');
            }
        });
    }
});