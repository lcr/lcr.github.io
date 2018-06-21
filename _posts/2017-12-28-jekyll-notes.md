---
title: Jekyll Notes
categories: Jekyll
description: About using Jekyll
---

## Install Jekyll on Windows7

- Install [Ruby+Devkit 2.5.1-1](https://rubyinstaller.org/downloads/){:target="_blank"}

- Install Jekyll and Bundler gems through RubyGems

```
gem install jekyll bundler
```  

## Command

Creates a new Jekyll site scaffold in PATH

```
jekyll new
```

Change into your new directory

```
cd new-site
```

change Gemfile and _config.yml，  run

```
bundle install
bundle
```

<!-- more -->

Build your site

```
jekyll build  
jekyll b
```

Serve your site locally

```
jekyll server
jekyll serve
lekyll s
```

Preview a draft post

```
jekyll s --drafts
```

## Browser

```
http://localhost:4000/
```