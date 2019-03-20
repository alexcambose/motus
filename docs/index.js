
const createFooter = function(hook) {
    var footer = `
            
            <footer class="footer-container">
            <div class="footer-expander">
            <div class="footer-expander-button" id="expand-page">
            <div class="footer-expander-button-content" title="Increase or decrease the page height to see the animations from start to finish">
            <span class="footer-expander-arrow"><i class="fas fa-arrow-down"></i></span>
            <span class="footer-expander-label">Expand page</span>
</div>
            
</div>
            
</div>
            <div class="footer-author"><i class="fas fa-code c-purple"></i> with <i class="fas fa-heart c-red"></i>  by <a href="https://github.com/alexcambose">alexcambose</a></div>

<div class="display-flex footer-buttons">
    <span><a class="github-button" href="https://github.com/alexcambose/motus" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star alexcambose/motus on GitHub">Star</a></span>
    <span>
<a class="github-button" href="https://github.com/alexcambose/motus/fork" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork alexcambose/motus on GitHub">Fork</a>
</span>
    <span>
<a class="github-button" href="https://github.com/alexcambose/motus/subscription" data-icon="octicon-eye" data-size="large" data-show-count="true" aria-label="Watch alexcambose/motus on GitHub">Watch</a></span>
    <span>
<a class="github-button" href="https://github.com/alexcambose" data-size="large" data-show-count="true" aria-label="Follow @alexcambose on GitHub">Follow @alexcambose</a></span>
    </div>
    <div class="mt-10">
    <a href="https://github.com/alexcambose/motus/issues/new" target="_blank" class="link-fade">Open new Issue</a>
</div>
</footer>`;

    hook.afterEach(function(html) {
        return html + footer;
    });
};
const runScripts = function (hook) {
    hook.beforeEach(function (content) {
        // timeout is needed to delay the script execution so that the page is fully loaded
        const thecontent = content;
        setTimeout(() => {
            const regex = /```js([\s\S]*?)```/gmu;
            var match = regex.exec(thecontent);

            while (match != null) {
                if(!/{ignore}/.test(match[1]))
                    eval(match[1]);
                match = regex.exec(thecontent);
            }
        }, 400);
        content = content.replace(/{ignore}/g, '');
        return content;
    });
};

const runImports = function (imports) {
    return function (hook) {
        hook.beforeEach(function (content) {
            //check for cache
            imports.forEach(e => {
                if(localStorage.getItem(e)) eval(localStorage.getItem(e));
                else fetch(e).then(res => res.text()).then(res => {
                    localStorage.setItem(e, res);
                    eval(res);
                })
            });
            return content;
        });
    }
};

const addExpanderContainer = (hook) => {
    hook.doneEach(function() {
        var $div = $("<div>").addClass('expander');
        $('.docsify-pagination-container').before($div);
        $(document).on('click', '#expand-page', () => {
            const $footerExpanderArrow = $('.footer-expander-arrow');
            const $footerExpanderLabel = $('.footer-expander-label');
            const display = () => {
                $div.text('Added ' + Math.floor($div.height()) + 'px');
            };
            if ($div.height() === 0) {

                $footerExpanderArrow.html(`<i class="fas fa-arrow-up"></i>`);
                $div.animate({height: window.innerHeight, opacity: 1}, {
                    step: display, complete: () => {
                        $footerExpanderLabel.text('Shrink page');
                    }
                });
            } else {
                $footerExpanderArrow.html(`<i class="fas fa-arrow-down"></i>`);
                $div.animate({height: 0, opacity: 0}, {
                    step: display, complete: () => {
                        $div.text('');
                        $footerExpanderLabel.text('Expand page');
                    }
                });
            }
        });
    });
};

window.$docsify = {
    name: 'motus',
    coverpage: true,
    onlyCover: true,
    loadSidebar: true,
    subMaxLevel: 2,
    repo: 'https://github.com/alexcambose/motus',
    homepage: 'overview.md',
    logo: '/_media/logo.png',
    copyCode: {
        buttonText: 'Copy',
        errorText: 'Error',
        successText: 'Copied'
    },
    themeColor: '#694873',
    auto2top: true,
    search: [
        '/',
    ],
    disqus: 'motusjs',
    executeScript: true,
    plugins: [
        addExpanderContainer,
        createFooter,
        EditOnGithubPlugin.create('https://github.com/alexcambose/motus/tree/master/docs/'),
        runScripts,
        runImports(['https://cors-anywhere.herokuapp.com/https://buttons.github.io/buttons.js']),

    ],
};

