---
title: "Markdown Basics"
date: 2024-08-20T09:40:57+08:00
toc: true
comments: false
weight: 80
keywords: markdown,basics
description: Some markdown basics for writing
---

Create sophisticated formatting for your prose and code on web with simple syntax.

<!--more-->

## Headings

To create a heading, add one to six `#` symbols before your heading text. The number of `#` you use will determine the hierarchy level and typeface size of the heading.

```md
# h1 Heading

## h2 Heading

### h3 Heading
```

When you use headings, Hugo automatically generates a table of contents that you can access at the header of the page. Each heading title is listed in the table of contents and you can click a title to navigate to the selected section.

## Styling text

```md
**This is bold text**

*This text is italicized*

***This is bold italic text***

~~This was mistaken text~~
```

**This is bold text**

*This text is italicized*

***This is bold italic text***

~~This was mistaken text~~

## Quoting text

ou can quote text with a `>`.

```md
Text that is not a quote

> Text that is a quote
```

Quoted text is indented, with a different type color.

Text that is not a quote

> Text that is a quote

## Quoting code

You can call out code or a command within a sentence with single backticks.

```txt
Use `hugo new content/en/about.md` to create a new page.
```

Use `hugo new content/en/about.md` to create a new page.

To format code or text into its own distinct block, use triple backticks. Check the syntax highlight supported languages https://pygments.org/languages/.

```txt
To run hugo website:
` ` `shell
cd workspace/website/
hugo server -D

Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
` ` `
```

To run hugo website:
```shell
cd workspace/website/
hugo server -D

Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

## Lists

You can make an unordered list by preceding one or more lines of text with `-`, `*`, or `+`.
```md

- Create a list by starting a line with `-`, `*`, or `+`.
- Sub-lists are made by indenting 2 spaces:
  * Something listed here
  * Another things ...
- Very easy!
```

- Create a list by starting a line with `-`, `*`, or `+`.
- Sub-lists are made by indenting 2 spaces:
  * Something listed here
  * Another things ...
- Very easy!

Order your list, precede each line with a number.
```md
1. The first item
2. The second item
3. The third item
```

1. The first item
2. The second item
3. The third item

Start numbering with offset:
```md
100. foo
1. bar
```

100. foo
1. bar

## Links

You can create an inline link by wrapping link text in brackets `[]`, and then wrapping the URL in parentheses `()`, the title text is optional.
```md
[Jing Play](https://jingplay.com/ "Title text")
```

[Jing Play](https://jingplay.com/ "Title text")

A URL can be converted to a link automatically: https://jingplay.com/.

## Images

You can display an image by adding `!` and wrapping the alt text in `[]`. Alt text is a short text equivalent of the information in the image. Then, wrap the link for the image in parentheses `()`.

```md
![Logo](/images/logo.png "Logo")
```

![Logo](/images/logo.png "Logo")

## Tables

```md

| Item | Price |
| ------ | ----- |
| Apple  | 9.021 |
| Pear   | 15.001 |
| Banana | 101.105 |
```

| Item | Price |
| ------ | ----- |
| Apple  | 9.021 |
| Pear   | 15.001 |
| Banana | 101.105 |

Left or right aligned column with `:`.
```md
| Item | Price |
|:------ | -----:|
| Apple  | 9.021 |
| Pear   | 15.001 |
| Banana | 101.105 |
```

| Item | Price |
|:------ | -----:|
| Apple  | 9.021 |
| Pear   | 15.001 |
| Banana | 101.105 |
