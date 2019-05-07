---
path: "/implement-stamp-edges-with-css"
date: "2019-05-05"
title: "background 프로퍼티를 이용한 우표 귀퉁이 구현"
---

30daysofCSSgirls의 9일차 활동인 우표 귀퉁이 구현에 대해서 설명해보고자한다.

알아보니 우표를 전지에서 떼어내기 쉽도록 우표와 우표사이에 뚫어놓은 구멍 부분을 천공이라고 부른다고 한다.  
이 천공을 CSS의 background 프로퍼티로 표현해내는 것이 가능하다.
알아야 할 것들을 정리해 놓았으니 알고 싶은 부분만 읽어도 충분할 것 같다.
먼저 예제를 살펴보도록 하겠다.

## codepen
https://codepen.io/ta2rim/pen/ywaWjv

예제를 보면 알 수 있듯이 `radial-gradient() notation`과 `background properties`가 이를 가능케 하는 주인공이다.

## radial-gradient 는 무엇인가?
문법적으로는 [functional notations](https://www.w3.org/TR/css-values-4/#functional-notation)에 속한다.
좀더 복잡하거나 특별한 처리가 필요한 값들을 컴포넌트화 해놓은 값이라고 할 수 있다.

![MDN radial-graident](https://mdn.mozillademos.org/files/3795/radial%20gradient.png)
표현적으로는 중심점, 중단 모양(ending shape), 2개 이상의 색상지점을 사용해 방사형 그라디언트를 나타낼 수 있다.
MDN 참조문서 한글번역판에 따르면 방사형의 여러 색의 점진적인 변화를 표현한다고 쓰여있다.

### 왜 radial-gradient noation은 background 프로퍼티의 값으로 들어갈 수 있을까?
w3c명세에 따르면 gradient notation은 `<image>` 에 속하고,
    `<image> = <url> | <image-list> | <element-reference>  | <gradient>`
`background-image` 프로퍼티는 `<image>`를 값으로 가질 수 있기 때문이다.

[CSS2.1 명세](https://www.w3.org/TR/2007/CR-CSS21-20070719/colors.html#background-properties)를 보면 `<uri>`를 값으로 갖는다고 작성되어 있는데, `<image>`는 `<uri>`를 대체 가능하다.

## radial-gradient로 원형 모양 만들기
radial-gradient는 색상 지점을 이용해 렌더링한다고 설명했는데, 각 색상지점들 사이에 생기는 빈 공간을 해당 두색상의 점진적 변화로 메꾸는 형태인 것이다.
만약에 두 색상차이에 공간 차이가 없다면 어떻게 될까? 다음 예제처럼 두 색상이 겹치는 지점에서 바로 색상 변화가 일어나면서 그라디언트가 차단된다.

https://codepen.io/ta2rim/pen/dEyryK

이 원리를 이용하면 radial-gradient를 이용해 원모양을 표현할 수 있다.
이제 background의 속성들을 살펴볼 차례이다

## background properties로 도트 무늬 만들기
현재는 다양한 [background properties (CSS Backgrounds and Borders Module Level 3)](https://www.w3.org/TR/css-backgrounds-3/)들이 존재한다.
천공을 만들어내기 위해 사용할 속성은 `background-size`과 `background-repeat`이다.

background-repeat 의 값은 기본적으로 repeat이기 때문에 따로 설정해 줄 것은 없으며,
`radial-gradient(transparent, transparent 50%, blue 50%, blue)`의 형태로 딱 콘텐츠 기준 50%가 되는 원을 만들고 background-size를 변경하면 확인이 가능하다.

콘텐츠 사이즈를 100px 100px이라고 가정하고
100px 100px을 했을때는 원 1개, 50px 50px일 때는 원이 4개, 100px 50px일때는 가로가 긴 타원 2개가 나오는데
각 가로 세로 비율에 맞게 줄어든 것이 `background-repeat`속성 때문에 반복되어 나오니 
5x5도트 무늬를 만들때는 20px 20px로 설정하면 되는 것이다.


`콘텐츠 width / 도트갯수 = background-size width`  
`콘텐츠 height / 도트갯수 = background-size height`

## 둘을 조합하여 천공 만들기
만들어진 n줄 도트의 `backgrond-position`을 조정해주면 천공이 완성된다.
background-position을 `calc(-0.5 * n px)`의 형태로 만들어주면 된다.

0.5라는 상수는 원을 얼만큼 보여줄지를 결정한다 1을 곱하면 원의 전체, 0.5는 원의 절반 0.3 은 3/10 이다.

https://codepen.io/ta2rim/pen/ZNYWNW

이제 이렇게 된 상태에서 내부를 다양한 방법으로 채워주면 완성된다.

[css coding girls](https://css.codinggirls.sg/day-9-10--stamp/)의 경우에는 linear-gradient로 같은 background 프로퍼티에 안에 사각형을 만들었고, `::after` pseudo element를 이용하거나 한개의 element를 추가하는 방식도 생각해 볼 수 있을 것 같다.





## 참고 자료
https://developer.mozilla.org/ko/docs/Web/CSS/gradient
https://www.w3.org/TR/css3-images/#radial-gradients

