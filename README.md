# Handlebars Layout

A fork of [handlebars-layouts](https://github.com/shannonmoeller/handlebars-layouts) enables partial by path (Node.js).

## Install

```sh
npm install handlebars-layout
```

## Partial by Path

**layout.hbs**

```handlebars
<html>
    <body>
        {{#block "header"}}
            <h1>Hello World</h1>
        {{/block}}
        {{#block "main"}}
            <p>Lorem ipsum.</p>
        {{/block}}
        {{#block "footer"}}
            <p>&copy; 1999</p>
        {{/block}}
    </body>
</html>
```

**page.hbs**

```handlebars
{{!-- reference a partial by path --}}
{{#extend "./layout"}}
    {{#content "header"}}
        <h1>Goodnight Moon</h1>
    {{/content}}
    {{#content "main" mode="append"}}
        <p>Dolor sit amet.</p>
    {{/content}}
    {{#content "footer" mode="prepend"}}
        <p>MIT License</p>
    {{/content}}
{{/extend}}
```

Check out [original repository](https://github.com/shannonmoeller/handlebars-layouts) for more usage.

## License

MIT License.

Created by [Shannon Moeller](https://github.com/shannonmoeller).  
This fork is maintained by [vilicvane](https://github.com/vilic).
