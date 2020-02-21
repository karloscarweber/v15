# KOWFM v15 - K

This is the fifteenth version of kowfm. Based, very very loosely, off of Casper.

![screenshot-desktop](/assets/screenshot-desktop.png)

# To Do

- [ ] Build Utopian typescale

## Building the CSS

So we're using Gulp start it by using Gulp. type `gulp default` into your console in the root after it's installed and you should be good for development.

**Next to Style:**

- [ ] `default.hbs` - The main template file
- [ ] `index.hbs` - Used for the home page
- [ ] `post.hbs` - Used for individual posts
- [ ] `page.hbs` - Used for individual pages
- [ ] `tag.hbs` - Used for tag archives
- [ ] `author.hbs` - Used for author archives
- [ ] `/swiftfoundations/lesson.hbs` - Used for swift foundations lesson pages
- [ ] `/swiftfoundations/index.hbs` - Used for swift foundations' index
- [ ] `/page-styleguide.hbs` - The styleguide of the whole damn thing

# Development

Casper styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need Node and Gulp installed globally. After that, from the theme's root directory:

```bash
$ npm install
$ gulp
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
$ gulp zip
```

# PostCSS Features Used

* Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
* Variables - Simple pure CSS variables
* [Color Function](https://github.com/postcss/postcss-color-function)

# SVG Icons

K uses inline SVG icons, included via Handlebars partials. You can find all icons inside `/partials/icons`. To use an icon just include the name of the relevant file, eg. To include the SVG icon in `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`. These are the remaining icons:

* `{{> "icons/ghost-logo"}}`
* `{{> "icons/rss"}}`
* `{{> "icons/twitter"}}`

# Copyright & License

Copyright (c) 2020 Karl Oscar Weber - Released under the [MIT license](LICENSE).
