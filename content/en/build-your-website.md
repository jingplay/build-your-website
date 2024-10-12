---
title: "Build Your Website"
date: 2024-08-19T14:53:33+08:00
weight: 90
toc: true
comments: false
keywords:
description:
---

Are you looking to expand your business online, showcase your portfolio, or start a blog? A website is a gateway to reach out your wider audiences. In this article I will propose the process how to build your website with Hugo and `jingplay/build-your-website` theme, which is my open source project for building websites easily, I will talk about how to deploy your website as well, and also some related topics such as what you need, how much it would cost etc.

<!--more-->

{{< block flex="row" >}}
  {{< block width="300px" grow="1" >}}
    {{% nested %}}
## Overview
There are so many ways to build a website, the following are some basic steps.

**Steps to build your own website**
1. Select a platform
    * Third-party website platform
    * Wordpress
    * Static site generator such as Hugo, Jekyll, etc.
    * Build it from scratch
2. Setup your own website
    * Installations
    * Configurations
    * Write contents
3. Deploy your website
    * Register a domain name
    * Buy a web hosting
    * Upload your website
4. Make your website known internatially
    * Register your website on search engines
    * Broad your website on social medias
5. Keep updating your website
    {{% /nested %}}
  {{< /block >}}
  {{< block >}}
<a href="https://www.siteground.com/go/f1q6p50l85" target="_blank"><img border="0" src="https://siteground.com/static/affiliate/en/USD/general_EN_USD_general-hosting-half-page-light.jpg" alt="Ad - SiteGround Web Hosting - Crafted for easy site management. Amazing Speed; Powerful Tools; Top-rated support. Learn more."></a>
  {{< /block >}}
{{< /block >}}

I will not try to introduce all the platforms, I believe nowadays wordpress and static site generator should be the most popular ways to build a website.

Third-party platform, such as Wix, it is a strongly marketed (notably on YouTube) drag-and-drop website builder. It is friendly to users. But the builder is not my concern, I believe the clients should not worry about the web UI (User Interface) and they should focus on the website contents which are the most valuable things to the final users.

Wordpress is a powerful and flexible platform to serve thousands of websites, but its dynamic nature determines that it needs a more powerful backend server and database because all the pages are generated in real time when they are requested by the users.

A static site generator is a tool that generates a full static HTML website based on raw data and a set of templates. Essentially, a static site generator automates the task of coding individual HTML pages and gets those pages ready to serve to users ahead of time. Because these HTML pages are pre-built, they can load very quickly in users' browsers, and there is no database required.

**The way I prefer**

This website is build with Hugo, which is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again.

The problem of using a static site generator is that it is not easy to find a proper template or theme to serve your website. So, I developed a Hugo theme by myself, it is open-source and you can also use it free totally.

## Step 0. Before you get started

### Why do you need a website?

For some possible purpose:
- Just for fun
- Blogging knowledge, experiences, or anything else to share
- To make money by
  * Displaying ads
  * Selling products or services
  * Affiliate marketing
  * Sponsored content

### What do you need to have a website?

To build your website, no programming skills are required, but it would be a plus.

Some basic skills you need:
- Writing with Markdown  
  Easy to learn it in several minutes [Mardown Basics](/markdown-basics/)
- Knowing how to run command on Windows or Linux  
  Very few commands you need run to install Hugo and to generate your website
- Uploading files to remote web server  
  * Using FTP client (more easy and efficient way)
  * Or through web browsers

### How much does it cost to have a website?

Some costs need to cover (just minimal estimation):
| Item | Cost |
|:---- |:---- |
| Domain Name | $10-$20 / Year |
| Web Hosting | $5 / Month |

Now, have you come to a decision to build your own website? Just several steps to follow.

## Step 1. Installations

### Install Hugo

- For Windows users
  * Open https://github.com/gohugoio/hugo/releases/latest/
  * Download Hugo extended version for Windows, e.g.: [hugo_extended_0.133.0_windows-amd64.zip](https://github.com/gohugoio/hugo/releases/download/v0.132.2/hugo_extended_0.132.2_windows-amd64.zip) for x86 64-bit system
  * Unzip the archieve to a directory, e.g.: `c:\workspace\hugo_extended_0.132.2_windows-amd64\`
  * Add the directory to the `Path` environment variable
  * Open Command Prompt and run `hugo version` to verify the version installed
- For Linux (Ubuntu) users  
  * `sudo snap install hugo`
  * `hugo version`

Here is the official guide to install [Hugo](https://gohugo.io/installation/).

### Download my open-source theme

- Open my open-source project [jingplay/build-your-website](https://github.com/jingplay/build-your-website/) on GitHub
- Download the `Code` by `git clone` or `Download Zip`
- Unzip the archieve to a directory, e.g., `c:\workspace\` on Windows or `~/workspace/` on Linux, rename the extracted folder `master` to `website`.

### Run the website for preview

- `cd c:\workspace\website\` on Windows or `cd ~/workspace/website/` on Linux
- Run `hugo server -D` to launch the website
- Open the website `http://localhost:1313/` in your browser
- Press `Ctrl + C` to stop the website

## Step 2. Configurations

I tried to minimize the configurations, only several basic configurations need to set. Edit the configuration file `workspace/website/config.yaml` directly with any available text editor such as Notepad++. It is available on this [Downloads](https://github.com/notepad-plus-plus/notepad-plus-plus/releases/latest/) page, the current latest version is [npp.8.6.9.Installer.x64.exe](https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.6.9/npp.8.6.9.Installer.x64.exe), which would be also helpful for your website content writing later.

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
To include `h2` and `h3` headings in TOC as unordered list:
```yaml
markup:
  tableOfContents:
    startLevel: 2
    endLevel: 3
    ordered: false
```
- Disqus shortname [optional]  
```yaml
services:
  disqus:
    shortname: MyShortName
```
- Google Analytics ID [optional]  
```yaml
services:
 googleAnalytics:
    ID: G-Xxx
```

## Step 3. Add your contents

### Directory structure

Here is an example of content directory tree, and the menu bar of your website will have the similar structure with it.

```sh
content/
└── en
    ├── _index.md
    ├── build-your-website-in-minutes.md
    ├── hardware
    │   ├── _index.md
    │   ├── cpu
    │   │   ├── _index.md
    │   │   └── how-cpus-work.md
    │   ├── embedded
    │   │   ├── _index.md
    │   │   └── work-with-mcu.md
    │   └── gpu
    │       ├── _index.md
    │       └── talk-to-gpu-hardware.md
    └── programming
        ├── cpp
        │   ├── fmt-format-custom-data-structure.md
        │   ├── _index.md
        │   ├── multithreading-in-modern-cpp.md
        │   ├── upgrade-to-modern-cplusplus.md
        │   └── use-literal-string-as-tempalte-parameter.md
        ├── _index.md
        ├── linux
        │   ├── classic-books-recommendations.md
        │   └── _index.md
        ├── python
        │   ├── _index.md
        │   └── learn-python-in-10-minutes.md
        └── web
            └── get-started-with-tailwind-css
                ├── custom.css
                ├── glider.png
                └── index.md
```

- Root directory  
To support multilingual mode, we need to put the contents into the root directory of a language `"content/<language key>/"`, e.g., `"content/en/"` for `English`, `"content/zh/"` for `Chinese`. I'll talk about how to [add a language](#step-5-add-a-language-optional) for your website later.

- `_index.md`  
`_index.md` has a special role in Hugo. Each directory may have its own `_index.md`, we can set some attributes for this directory, such as `title`, enable `comments`, enable `Table Of Content`, and so on. `_index.md` in the root directory, it is the home page. I'll also discuss how to [customize your home page](#step-4-customize-your-home-page-optional) for your website later.

- Single page  
In any directory, including the root directory, you can add a new page `Xxx.md` with [Markdown](/markdown-basics/) format, it will be converted to `Xxx/index.html` with `HTML` format respectively.

- Page bundles  
To add a new page, you also can include some page-relative images and other resources, such as css, js files, packaged into `Page Bundles`.  
In the above example, the page content `index.md` and all page-relative resources (`custom.css` and `glider.png`) are put into a same directory `get-started-with-tailwind-css`. Note that you cannot have an `_index.md` file in `Page Bundles` because it is a page rather than a section that includes pages.

### Add a page

You can add a new page through `copy & modify` an existing page, or by running the command `hugo new content/en/a-new-page.md`.

Edit the content:
```md
---
title: "A New Page"
date: 2024-08-26T11:18:52+08:00
toc: false
comments: false
draft: true
keywords:
description:
---

## Overview

This a new page for my website.

<!--more-->

Just to list something:
1. Item #1
2. Item #2
3. Item #3

## Chapter 1

```

Use `<!--more-->` to speicify the end of the summary of the article, which will be shown in the article list.

The front matter delimited by `---` at the top of each content file is metadata that:
- Describes the content
- Augments the content
- Establishes relationships with other content
- Controls the published structure of your site
- etc.

| Name | Description |
| --- | --- |
| toc | Table Of Content, set it to `true` to show TOC at the header of the page |
| comments | To enable comments for this page or not. Disqus shortname must be configured first in config.yaml . |
| draft | By default a new page would be draft and would not be published |
| keywords | The comma delimited keywords of the page for SEO. Use the setting in config.yaml instead if not provided. |
| description | The description of the page for SEO. Use the setting in config.yaml instead if not provided. |
| weight | The order of the page shown in the list or menu. |
| linkTitle | The title of the page that is shown in the menu or navigation bar. Fall back to title if it is not available. |
| menuItem | false - Don't show it in the menu; true  - Show it in the menu (by default) |

### Add a directory

- Run the command `mkdir content/en/a-new-directory/` to create a new directory. Of course, you can also create a new one just by clicking `Right Button > New > Folder` on Windows.
- Run the codmmand `hugo new content/en/a-new-directory/_index.md` create a new `_index.md` with front matter that has been introduced in the previous section.

### Add a series

- Create a new file `content/en/series/_index.md`
- Edit the `title` of it, e.g., `title: Tutorials`
- Check the website menu items, you can see a new one `Tutorials`
- Modify the `weight` value to change the order shown in the menu
- Add `series: "Learning English"` and `sn: "01"` to an existing page
- Click the menu item `Tutorials`
- You can see the tutorial `Learning English` in the list
- Add another page to this tutorial with `sn: "02"`, and more pages

## Step 4. Customize your home page [Optional]

You can have a home page just same with other normal pages with Markdown format content.

Another option, you can custom your page to have hero image, multi-column section, etc. with shortcode `block` and `button`.

**Example-01: Simple hero image**
```html
{{</* block flex="col" align="center" text-align="center" */>}}
  <img src="hero.png" width="500px" height="400px">
  <h1>Build a beautiful ecommerce website</h1>
  <p>Browse BigWorld's fully customizable themes that speaks to your customers and showcases your products.</p>
  {{</* button fill-color="rgba(234, 88, 12, 1)" text-color="white" border-width="0" url="/start-online-business/" */>}}
    Start Online Business
  {{</* /button */>}}
{{</* /block */>}}
```

**Example-02: Two column text + image**
```html
{{</* block flex="row" align="center" */>}}
  {{</* block grow="1" width="400px" */>}}
    <h1>Build a beautiful ecommerce website</h1>
    <p>Browse BigWorld's fully customizable themes that speaks to your customers and showcases your products.</p>
  {{</* /block */>}}
  <img src="hero.png" width="500px" height="400px">
{{</* /block */>}}
```

**Example-03: Multi-column litsts**
```html
{{</* block padding="0 2.5rem" margin="2.5rem 0" flex="row" bg-color="rgb(249, 250, 251)" */>}}
  {{%/* block grow="1" */%}}
## List something
- Content focus
- Minimal configurations
- Clear design
  {{%/* /block */%}}
  {{%/* block grow="1" */%}}
## Build Your Website
- Installation
- Configuration
- Content
- Build
- Deploy
  {{%/* /block */%}}
  {{%/* block grow="1" */%}}
## Services
- Web development
- Embedded system
- Training
  {{%/* /block */%}}
{{</* /block */>}}
```

Note that `{{%/* block */%}}` rather then `{{</* block */>}}` should be used if you want to use Markdown inside the `block`, and there should not be any indent for Markdown content.

**Example-04: Full-width header image**
By default, all the content of a page is put into a container, which has adaptive width and is centered. To have a full-width page, set the parameter of the page in front matter `fullScreen: true` to enable it. Such that we can have a full-width header image, and then put other content of the page in to a `block` container with `container="yes"`.
```html
{{</* block bg-image="images/bg-sh.jpg" height="300px" */>}}
{{</* /block */>}}
{{</* block container="yes" */>}}
  {{%/* nested */%}}
## Markdown content here

Paragraph here ...

  {{%/* /nested */%}}
{{</* /block */>}}
```

## Step 5. Add a language [Optional]

The default language `defaultContentLanguage` is `en` (English United States) with its content in the directory `content/en/`.

To support a new language, such as French, add the following content to the configuration file `config.yaml`:
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

Here are the details:
- You need to find the language code by ISO 639 standard [here](https://www.andiamo.co.uk/resources/iso-language-codes/)
- Create a new directory for it `content/fr`
- Copy the contents in `content/en` to `content/fr` and translate them
- Add the configurations shown as above
- Change the `weight` parameter to set the order shown in the language list menu
- Translate `theme/docs/i18n/en.yaml` to a new file `theme/docs/i18n/fr.yaml`

## Step 6. Deploy your website

Now, it is an exciting moment to launch your website and make it accessible to the world!

### Generate the website

Running the following command to generate the website:
```sh
hugo -D --minify --baseURL=https://yourwebsite.com/
```

In the above command, the option `-D` is used to include all draft pages to be published, remove it and mark pages with `draft: false` in its front matter instead to publish the pages which are ready only. The option `--minify` is used to minimize the size of the generated files. Use `--baseURL` to specify the base address of your website.

After running the command, all files are available in the folder `public/`, and it is ready to upload them to your web server. It means that you need a domain name which is unique identify for your website, and web hosting which is a service that makes your website visible on the Internet.

### Register your domain name

You can register your domain name from domain name registrars, here are some popular ones:
- [GoDaddy](https://godaddy.com/)
- [namecheap](https://namecheap.com/)
- [DOMAIN.COM](https://domain.com/)

Usually you can get domain name cheaper for the first year, so the important thing you need notice is the price to renew it.

You also can get a free domain name when you buy web hosting, but also you need notice that it is free for first year only.

### Buy web hosting

There are two types of web hosting available for us, I think, managed and unmanaged. Managed web hosting means that it is managed by the provider, you can configure and update your website through some tools provided.

Instead, for unmanaged web hosting you need to set up all required for it, such as operating system, firewall, nginx web server, ssl certificate, etc., and you need more computer science skills, the benifit is that you have the whole control of the server, you can install whatever software you want on your machine (Virtual Machine usually).

Some popular web hosting provider:
- [Siteground](https://www.siteground.com/index.htm?afcode=8a33a341bd0f3c7e777991d7f009240d)
- [Hostgator](https://partners.hostgator.com/R5Jx7v)
- [Bluehost](https://www.bluehost.com/)
- [A2 Hosting](https://www.a2hosting.com/)

Some cloud computing service with which you can set up your virtual machine by yourself on it:
- [Digital Ocean](https://www.digitalocean.com/)
- [Linode](https://www.linode.com/lp/refer/?r=d61b64aa81b15f278fa7f4a0d214cb3e3838dcb7)

## Step 7. Make your website known internationally

To make your website well known to reach out to wider audiences, several things you can do for it:
- Submit your website to search engines, such as Google and Bing
- Make videos to introduce your services on Youtube
- Other social medias like X, Telegram, etc.

## Step 8. Keep updating your website

Finally, the very important thins is to update your website regularly to provide valuable contents for your audiences.
