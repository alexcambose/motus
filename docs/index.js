$(document).ready(() => {
  // custom logo stuff
  const $coverLink = $('.cover-main h1 a');
  $coverLink.attr('href', '')
  const $coverTitle = $($coverLink).find('span')[0];
  if ($coverTitle) {
    $coverTitle.innerHTML = `
      <div class="title">
            <span class="fancy-letter-1">M</span>
            <span class="fancy-letter-2">o</span>
            <span class="fancy-letter-3">t</span>
            <span class="fancy-letter-4">u</span>
            <span class="fancy-letter-5">s</span>
            <span class="fancy-version">v2</span>
        </div>
    `;
  }
  const $sidebarImageLink = $(".app-name-link")[0];
  $sidebarImageLink.innerHTML = `<img class="sidebar-logo" src="https://i.imgur.com/GpeWN0B.png"/>`;
  $('#loading').fadeOut();
});

const createFooter = function(hook) {
    var footer = `
            
            <footer class="footer-container">
            <div class="footer-expander">
            <div class="footer-expander-button" id="expand-page">
            <div class="footer-expander-button-content">
            <span class="footer-expander-arrow"><i class="fas fa-arrow-down"></i></span>
            <span class="footer-expander-label">Expand page</span>
</div>
            
</div>
            
</div>
            <div class="footer-author"><i class="fas fa-code c-purple"></i> with <i class="fas fa-heart c-red"></i>  by <a href="https://github.com/alexcambose">alexcambose</a></div>

<div class="display-flex footer-buttons">
    <span><a class="github-button" href="https://github.com/alexcambose/motus" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star alexcambose/motus on GitHub">Star</a></span>
    <span><!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/alexcambose/motus/subscription" data-icon="octicon-eye" data-size="large" data-show-count="true" aria-label="Watch alexcambose/motus on GitHub">Watch</a></span>
    <span>
<a class="github-button" href="https://github.com/alexcambose" data-size="large" data-show-count="true" aria-label="Follow @alexcambose on GitHub">Follow @alexcambose</a></span>
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
    copyCode: {
        buttonText: 'Copy',
        errorText: 'Error',
        successText: 'Copied'
    },
    themeColor: '#694873',
    search: [
        '/',
    ],
    disqus: 'motusjs',
    executeScript: true,
    plugins: [
        addExpanderContainer,
        createFooter,
        // TODO replace with actual link
        EditOnGithubPlugin.create('aa', 'a', 'Edit on Github'),
        runScripts,
        runImports(['https://cors-anywhere.herokuapp.com/https://buttons.github.io/buttons.js']),

    ]
};

