<template>
  <div class="inner-wrapper">
    <h1>Project Edwards - Style Guide</h1>

    <div class="row">
      <h2>01 Color Palettes</h2>
      <hr >

      <div class="col-md-12">

        <ul class="colorsStyleguide primary">
          <h4>Primary Colors</h4>
          <li class="primary1"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
          <li class="primary2"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
          <li class="primary3"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
          <li class="primary4"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
          <li class="primary5"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
          <li class="primary6"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
          <li class="primary7"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
        </ul>
        <ul class="colorsStyleguide secondary">
          <h4>Secondary Colors</h4>
          <li class="secondary1"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
          <li class="secondary2"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
          <li class="secondary3"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
          <li class="secondary4"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
          <li class="secondary5"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
        </ul>
        <ul class="colorsStyleguide accents">
          <h4>Accent Colors</h4>
          <li class="accent1"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
          <li class="accent2"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
          <li class="accent3"><div class="colorName"></div><div class="color"></div><div class="colorHex"></div></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <h2>02 Typography </h2>
      <hr >
      <div class="col-md-3">
          <h4>Font Family & Styles:</h4>
          <hr >
          <div class="textEx">Roboto </div>
          <div class="textEx light">Roboto Light</div>
          <div class="textEx medium">Roboto Medium </div>
          <div class="textEx condensed">Roboto Condensed</div>
          <div class="textEx italic">Roboto Italic</div>
          <div class="textEx bold">Roboto Bold</div>
      </div>
      <div class="col-md-3">
        <h4>Body & Lists:</h4>
<hr >
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
        <h4>Headings</h4>
        <hr >
        <h1>h1. Bootstrap heading</h1>
        <h2>h2. Bootstrap heading</h2>
        <h3>h3. Bootstrap heading</h3>
        <h4>h4. Bootstrap heading</h4>
        <h5>h5. Bootstrap heading</h5>
        <h6>h6. Bootstrap heading</h6>
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
      margin: 10px 0;
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

  .textEx{
    font-size: 1.5em;
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
                & .colorName{
                  &:after{
                    content: '' + $name + '';
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
