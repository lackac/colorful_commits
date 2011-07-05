// ==UserScript==
// @name           Colorful Commits
// @namespace      http://icanscale.com
// @description    Color GitHub commits using the first six characters of the commit hash
// @include        *://github.com/*
// ==/UserScript==

// jQuery should already be loaded in the site so we don't need to do that

var ColorfulCommits = function($) {
  $('.commit .js-commit-link').each(function() {
    var color = $(this).text().substr(0, 6),
        rest = $(this).text().substr(6);
    $(this).closest('.machine').css('border-left', '1em solid #'+color);
    $(this).html('<u>'+color+'</u>'+rest);
  });
}

var script = document.createElement('script');
script.type = 'text/javascript';
script.textContent = '(' + ColorfulCommits.toString() + ')(jQuery);';
document.body.appendChild(script);
