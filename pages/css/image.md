## Image Placeholder
~~~scss
.image-placeholder {
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #fefefe;
  outline: 1px solid #eee;
  outline-offset: -1px;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    animation-duration: 2.8s;
    animation-iteration-count: infinite;
    animation-name: imageplaceholder;
    animation-timing-function: ease-in-out;
    background-image: url("data:image/svg+xml,%3Csvg width='152' height='97' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)' fill='%23000'%3E%3Cpath d='M92.15 36.73 57.91 70.98 41.94 55.01 0 96.95h152.38L92.14 36.73ZM31.86 23.55a11.77 11.77 0 1 0 0-23.55 11.77 11.77 0 0 0 0 23.55Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h152v97H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 20%;
    content: "";
  }
}

@keyframes imageplaceholder {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.1;
  }

  100% {
    opacity: 0;
  }
}
~~~

## IE Background Size
~~~scss
.image {
  // position: relative;
  width: 300px;
  height: 300px;
  background-color: #fefefe;
  background-image: url("/images/elf-547x720.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  outline: 1px solid #eee;
  outline-offset: -1px;

  // https://github.com/louisremi/background-size-polyfill
  -ms-behavior: url("/backgroundsize.htc");

}
~~~
