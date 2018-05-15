```html
---
layout: page
title: About
permalink: /about/
---
<article class="page-about">
  <p>
    Hello there.<br> My name is Leslie Lai and I'm a front-end development engineer living in Guangzhou.
  </p>

  <p>
    I like to play roller skating and planting,and I have great swimming.
  </p>

  <h2>Find me on...</h2>

  <ul>
    <li>
      <a href="https://github.com/lcr/" title="github">{% include icon-github.svg %}</a>
    </li>

    <li>
      <a href="https://cn.linkedin.com/in/lcrccr/" title="linkedin">{% include icon-linkedin.svg %}</a>
    </li>

    <li>
      <a href="https://weibo.com/675911728/" title="weibo">{% include icon-weibo.svg %}</a>
    </li>

    <li>
      <a href="https://www.facebook.com/laicanrong/" title="facebook">{% include icon-facebook.svg %}</a>
    </li>
  </ul>
</article>
```

```scss
.page-about {
  color: $deep-grey-color;
  p {
    :not(:first-child) {
      margin-top: $spacing-unit;
    }
    border-bottom: 1px solid $grey-color;
    padding-bottom: $spacing-unit;
    @include relative-font-size(2);
    @include media-query($on-laptop) {
      @include relative-font-size(1.75);
    }
  }
  
  h2 {
    @include relative-font-size(2);
    @include media-query($on-laptop) {
      @include relative-font-size(1.75);
    }
  }
  
  ul {
    padding-bottom: $spacing-unit * 3;
    
    li {
      display: inline-block;
      &:not(:first-child) {
        margin-left: 8px;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid $deep-grey-color;
        border-radius: 100%;
        width: $spacing-unit * 2;
        height: $spacing-unit * 2;
        fill: $deep-grey-color;
        &:hover {
          background: $light-grey-color;
        }
      }
    }
  }
}
```