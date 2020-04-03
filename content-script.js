let filters = [
    {
        "url": "^https?://www.zeit.de",
        "elements": ["#comments", ".metadata__commentcount", ".zon-teaser-standard__commentcount", ".zon-teaser-lead__commentcount", ".zon-teaser-wide__commentcount"]
    },
    {
        "url": "^https?://www.nw.de",
        "elements": [".comments-outer", ".article-comments"]
    },
    {
        "url": "^https?://www.heise.de",
        "elements": [".comment-button", ".a-article-meta__icon--comments", "a[name=\"meldung.newsticker.header.kommentarelesen\"]"]
    },
    {
        "url": "^https?://t3n.de",
        "elements": [".tg-article-comments"]
    },
    {
        "url": "^https?://www.dwdl.de",
        "elements": ["#fb-connect-comments"]
    },
    {
        "url": "^https?://www.gruenderszene.de",
        "elements": [".comments"]
    },
    {
        "url": "^https?://www.t-online.de",
        "elements": ["#talk_community", "#Tnocomments"]
    },
    {
        "url": "^https?://www.spiegel.de",
        "elements": ["a[data-component=\"TalkActivator\"]"]
    },
    {
        "url": "^https?://www.welt.de",
        "elements": ["#Comments", ".o-teaser__comment-count"]
    },
    {
        "url": "^https?://www.focus.de",
        "elements": ["#commentForm", "#comments", ".comments"]
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
