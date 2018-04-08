---
title: "Jekyll Guide"
---

## Install Jekyll on Windows7

- Install[Ruby+Devkit 2.5.1-1](https://rubyinstaller.org/downloads/)

- Install Jekyll and Bundler gems through RubyGems

```
gem install jekyll bundler
```  

## CMD

To start a new project

```
jekyll new new-site
```

Change into your new directory

```
cd new-site
```

change Gemfile and _config.yml，  run

```
bundle install
```

Build the site on the preview server

```
jekyll build
```

run

```
bundle exec jekyll serve
jekyll server
jekyll serve
lekyll s
```

## browse

```
http://localhost:4000/
```
