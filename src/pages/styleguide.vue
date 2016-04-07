<template>
  <div class="inner-wrapper">
    <h1>Project Edwards - Style Guide</h1>

    <div class="row">
      <h1>01 Color Palettes</h1>
      <h2>Primary Colors</h2>
      <div class="col-md-12">
        <ul class="colorsStyleguide primary">
          <li class="primary1 col-md-1"><div class="color"></div><div class="colorHex"></div></li>
          <li class="primary2"><div class="color"></div><div class="colorHex"></div></li>
          <li class="primary3"><div class="color"></div><div class="colorHex"></div></li>
          <li class="primary4"><div class="color"></div><div class="colorHex"></div></li>
          <li class="primary5"><div class="color"></div><div class="colorHex"></div></li>
          <li class="primary6"><div class="color"></div><div class="colorHex"></div></li>
          <li class="primary7"><div class="color"></div><div class="colorHex"></div></li>
        </ul>
        <ul class="colorsStyleguide secondary">
          <li class="secondary1"><div class="color"></div><div class="colorHex"></div></li>
          <li class="secondary2"><div class="color"></div><div class="colorHex"></div></li>
          <li class="secondary3"><div class="color"></div><div class="colorHex"></div></li>
          <li class="secondary4"><div class="color"></div><div class="colorHex"></div></li>
          <li class="secondary5"><div class="color"></div><div class="colorHex"></div></li>
        </ul>
        <ul class="colorsStyleguide accents">
          <li class="accent1"><div class="color"></div><div class="colorHex"></div></li>
          <li class="accent2"><div class="color"></div><div class="colorHex"></div></li>
          <li class="accent3"><div class="color"></div><div class="colorHex"></div></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <h1>02 Typography </h1>
      <div class="col-md-3">
          <h2>Font Family & Styles:</h2>
          <h3>Roboto </h3>
          <h3>Roboto Light</h3>
          <h3>Roboto Medium </h3>
          <h3>Roboto Condensed</h3>
          <h3>Roboto Italic</h3>
          <h3>Roboto Bold</h3>
      </div>
      <div class="col-md-3">
        <h2>Body & Lists:</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed urna sed neque blandit gravida vitae bibendum dictum, nisl nisi.</p>

<span>Bold</span> <span>Italic</span> <a href"#">Hyperlink </a>
<ul>
	<li>Unordered list</li>
	<li>Unordered list</li>
</ul>
<ol>
	<li>Ordered list</li>
	<li>Ordered list</li>
</ol>
      </div>
      <div class="col-md-6">
        <h2>Headings</h2>

        <h1>h1. Bootstrap heading</h1>
        <h2>h1. Bootstrap heading</h2>
        <h3>h1. Bootstrap heading</h3>
        <h4>h1. Bootstrap heading</h4>
        <h5>h1. Bootstrap heading</h5>
        <h6>h1. Bootstrap heading</h6>
      </div>
    </div>

</div>

</template>

<style lang="scss">
  @import "../scss/_logic.scss";

  .colorsStyleguide{
    float: left;
    padding-right: 5px;
    box-sizing: border-box;
    & li{
      float: left;
    }
    &.primary{
      width: 46.67%;
      & li{
        width: 14.28%;
      }
    }
    &.secondary{
      width: 33.33%;
      & li{
        width: 20%;
      }
    }
    &.accents{
      width: 20%;
      & li{
        width: 33.33%;
      }
    }
  }


  @mixin colorsStyleguide(){
          @each $name, $color in $colors{
              .colorsStyleguide .#{$name}{
                & .color{
                  background: color($name, base);
                  padding: 40px;
                  width: 100%;
                  box-sizing: border-box;
                  &:hover{
                    background: color($name, dark);
                  }
                }
                & .colorHex{
                  background: #ffffff;
                  text-align: center;
                  padding: 10px 0;
                  &:after{
                    content: '' + color($name, base) + '';

                  }
                }


              }
          }
        }
   @include colorsStyleguide();

</style>
