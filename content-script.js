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
