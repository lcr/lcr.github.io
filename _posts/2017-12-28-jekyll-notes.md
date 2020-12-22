---
title: Jekyll Notes
categories: Jekyll
description: About using Jekyll
---

## Install Jekyll on Windows7

- Install [Ruby+Devkit](https://rubyinstaller.org/downloads/){:target="_blank"}

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

Change Gemfile and _config.yml，  run

```
bundle install
```

<!-- more -->

Build your site

```
bundle exec jekyll build
```

Serve your site locally

```
bundle exec jekyll serve
```

Preview a draft post

```
jekyll s --drafts
```

## Browser

```
http://localhost:4000/
```