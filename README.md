# markdown
Markdown library in TypeScript. You can use comiled js library which is in bin folder.

# How to use

- Add jQuery and this library
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="./githubClient.js"></script>
```

- create Client instance

```
var client = new github.Client();
```

- call toHTML methdo

```
  // #source is textarea
  var source = $('#source').val();
  client.toHTML(source, {
    success : function(html, limit) {
      $('#out').html(html);
      $('#limit').html('limit=' + limit);
    },
    error : function(status, body) {
      console.log('error status=' + status + ' body=' + body);
    }
  });
```

