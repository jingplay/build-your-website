## Overview
This is a simple, clean, flexible Hugo theme for content-focused websites. Check the [Demo](https://jingplay.com/build-your-website-demo/), and the simple guide to [Build Your Website](https://jingplay.com/build-your-website/) in minutes.

BTW, here is the official website of [Hugo](https://gohugo.io/), which is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again.

## Features
- Simple, clean and content-focused design
- Zero configuration almost
- Search support with [Lunr.js](https://lunrjs.com/)
- Multilingual support
- Series taxonomy for online tutorials
- Customize your pages with `block` shortcode
- Comments support
- Google analysis support

## Build Your Website

### Installations
Follow the official [installation](https://gohugo.io/installation/) guide to install Hugo, or the following quick steps:

**For Windows users**
1. Download [Hugo extended](https://github.com/gohugoio/hugo/releases/latest/)
2. Extract the package
3. Add the path to the `Path` environment variable
4. Run `hugo version` to verify the version installed

**For Linux (Ubuntu) users**
```shell
sudo snap install hugo
hugo version
```

**Download the codes of this repository**

Download the codes of sthis repository to a new directory, e.g., `website/`.

**Run the website**

Run `hugo server -D --disableFastRender` to launch the web server and view it in the browser `http://localhost:1313/`.

### Configurations

### Basic configurations
- `title`: The website name shown in the navigation bar
- `params`
  * `siteLogo`: The logo image file name in `website/static/images/`
  * `description`: The description of the website for SEO
  * `keywords`: The keywords of the website for SEO
  * `author`: The author of the website, which will be shown in the footer copyright
- `menu`
  * `maxLevel`: The maximum depth of the content directory tree to show in the menu
  * `maxPages`: The maximum number of pages to show in the menu
  * `expandAll`: A flag to expand the all sub-menu items

### More configurations
- Table of content  
```yaml
markup:
  tableOfContents:
    startLevel: 2
    endLevel: 3
    ordered: false
```
- Series  
Set series name and the number in the front matter to mark a page as a part of a tutorial:  
```yaml
series: "Build Your Website with Hugo"
sn: "01"
```
- Disqus shortname  
```yaml
services:
  disqus:
    shortname: MyShortName
```
- Google Analytics ID  
```yaml
services:
 googleAnalytics:
    ID: G-Xxx
```
- Multilingual  
```yaml
languages:
  fr:
    contentDir: "content/fr"
    disabled: false
    languageCode: "fr"
    languageDirection: "ltr"
    languageName: "Français"
    weight: 2
```
- Disqus Comment System  
```yaml
services:
  disqus:
    shortname: MyShorname
```
- Google Analytics  
```yaml
services:
  googleAnalytics:
    ID: G-Xxx
```

## Development

### Tailwind CSS

The following command should be run in the root directory of the theme `docs/` to generate a new `app.css`.

```sh
npx tailwindcss -i ./assets/css/index.css -o ./static/css/app.css --minify
```

### Search With [Lunr.js](https://lunrjs.com/)

To reduce the downloading size of content, only the title and the summary are included in the index.
