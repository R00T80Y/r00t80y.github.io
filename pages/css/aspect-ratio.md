~~~scss
.outer {
  position: relative;
  overflow: hidden;

  &:before {
    display: block;
    width: 100%;
    padding-top: calc(9 / 16 * 100%);
    content: "";
  }

  & > .inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &--center {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }

  & > img {
    width: 100%;
    height: auto;
  }
}
~~~
> {"src":"/demo/aspect-ratio-1.html","height":"700"}

### 1280x720
> {"src":"/demo/aspect-ratio-2.html","height":"700"}

### 547x720
> {"src":"/demo/aspect-ratio-3.html","height":"700"}

## Alistapart
~~~html
<div id="containingBlock">
  <div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/DcVhTCrKhDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
~~~
~~~scss

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

/* 16:9 */
/* https://alistapart.com/article/creating-intrinsic-ratios-for-video/ */
/* https://alistapart.github.io/code-samples/creating-intrinsic-ratios-for-video/example2.html */
.wrapper-with-intrinsic-ratio {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}
.element-to-stretch {
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -50%;
  width: 100%;
  height: auto;
  background: teal;
}

#containingBlock {
  width: 50%;
}

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
~~~
