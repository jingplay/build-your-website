---
title: "Home"
date: 2024-08-30T16:53:20+08:00
fullScreen: true
---

{{< block container="yes" >}}
  {{< block flex="row" >}}
    {{< block grow="1" >}}<img src="images/bridge.jpg" style="border-radius: 20px;">{{< /block >}}
    {{< block grow="1" width="400px" >}}
      {{% nested %}}
## A bridge across the sea

This is a bridge in Hang Zhou China connecting two cities across the sea.
      {{% /nested %}}
      {{< button url="https://jingplay.com/build-your-website/" >}}Build Your Website{{< /button >}}
    {{< /block >}}
  {{< /block >}}

  {{% nested %}}
## Instroduction
This is a demo for my open source project [jingplay/build-your-website](https://github.com/jingplay/build-your-website/) on Github, which makes building websites easy and fun again with Hugo. You write the contents with Markdown, it generates website for you automatically, that is it.
- Install Hugo
- Download the source codes of my project
- Configure your website
- Write contents with Markdown
- Generate your website and deploy it

See the detail guide to [Build Your Website](/build-your-website/) in minutes.
  {{% /nested %}}

  {{< list_pages title="Latest Updates" count="5" >}}
{{< /block >}}

{{< block tag="section" id="nav-section" padding="0 2.5rem" margin="40px 0" flex="row" bg-color="rgb(249, 250, 251)">}}
  {{% block grow="1" width="200px" %}}
## Build Your website

You can build you website in minutes as soon as you can write contents with [Markdown](/build-your-website/markdown-basis/), no programming skills required.
  {{% /block %}}
  {{% block grow="1" width="200px" %}}
## Deploy Your Website
- Register domain name
- Buy web hosting
- Upload your website

  {{% /block %}}
  {{% block grow="1" %}}
## Make Money with Your Website
- Displaying ads
- Selling products or services
- Affiliate marketing
- Sponsored content
  {{% /block %}}
{{< /block >}}
