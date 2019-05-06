---
path: "/implement-stamp-edges-with-css"
date: "2019-05-05"
title: "[CSS] background 프로퍼티를 이용한 우표 귀퉁이 구현"
---

30daysofCSSgirls의 9일차 활동인 우표 귀퉁이 구현에 대해서 설명해보고자한다. (https://css.codinggirls.sg/day-9-10--stamp/)

알아보니 우표를 전지에서 떼어내기 쉽도록 우표와 우표사이에 뚫어놓은 구멍 부분을 천공이라고 부른다고 한다.
이 천공을 CSS의 background 프로퍼티로 표현해내는 것이 가능하다.
알아야 할 것들을 정리해 놓았으니 알고 싶은 부분만 읽어도 충분할 것 같다.
먼저 예제를 살펴보도록 하겠다.

## codepen
https://codepen.io/ta2rim/pen/ywaWjv

예제를 보면 알 수 있듯이 `radial-gradient() notation`과 `background properties`가 이를 가능케 하는 주인공이다.

## radial-gradient 는 무엇인가?
문법적으로는 [functional notations](https://www.w3.org/TR/css-values-4/#functional-notation)에 속한다.
좀더 복잡하거나 특별한 처리가 필요한 값들을 컴포넌트화 해놓은 값(value)라고 할 수 있다.

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

## background properties
현재는 다음과 같은 background properties들이 존재한다.
`background-color`, `background-image`, `background-repeat`, `background-attachment`, `background-position`
천공을 만들어내기 위해 사용할 속성은 `background-position`과 `background-repeat`이다.



## 참고 자료
https://developer.mozilla.org/ko/docs/Web/CSS/gradient
https://www.w3.org/TR/css3-images/#radial-gradients

