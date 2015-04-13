/// <reference path="../Markdown.ts"/>
var $;
var github;
(function (github) {
    var Client = (function () {
        function Client() {
        }
        Client.prototype.toHTML = function (source, callback) {
            var params = {
                text: source,
                mode: 'markdown'
            };
            $.ajax({
                url: 'https://api.github.com/markdown',
                type: 'POST',
                dataType: 'html',
                scriptCharset: 'utf-8',
                processData: false,
                data: JSON.stringify(params)
            }).done(function (data_, status, data) {
                var headers = data.getAllResponseHeaders();
                callback.success(data.responseText, Number(data.getResponseHeader('X-RateLimit-Remaining')));
            }).fail(function (data) {
                callback.error(data.status, data.responseText);
            });
        };
        return Client;
    })();
    github.Client = Client;
})(github || (github = {}));
