---
title: 本年倒计时
categories: JavaScript
customjs:
 - /assets/posts-js/leftthisyear.js
---

<style>
#leftThisYear {
  margin: 4rem 0;
  text-align: center;
  font-size: 4rem;
}

.left-this-year-small{
  font-size: 2rem;
}

@media only screen and (max-width: 600px) {
  #leftThisYear {
    font-size: 2rem;
  }
  
  .left-this-year-small{
    font-size: 1rem;
  }
}
</style>

<p id="leftThisYear"></p>

{% for js in page.customjs %}
<script src="{{ js }}"></script>
{% endfor %}