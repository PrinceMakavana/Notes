# **<p align="center"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="drawing" style="width:50px;"/> CSS (cascading style sheets) <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="drawing" style="width:50px;"/></p>**

<br />

---

## UseFull Notes

---

<br />

> justify-content , align-items are only used in parent element
> mix-blend-mode: darken; -> remove background of image

[Prince Makavana](https://princemakavana61.me/)

<br />

---

## Box Model

---

<br />

<img src="./iamges/box_model.png"/>

<br />

---

## Selectors

---

<br />

- Types of Selectors
  - Universal (\*)
  - Element Type Selector (ul , li , a , b )
  - ID Selector (#)
  - Class Selector (.)
  - Descendent Combinatior (combine two or more selectors)
  - Child Combinatior (>)
  - General Sibling Combinatior (~)
  - Attribute Selector (input [type=”text”])

<br />

---

## Preprocessor

---

<br />

- A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax.

<br />

---

## Size Parameters

---

<br />

- px
- rem
- em
- vh
- vw
- %

<br />

---

## inline , inline-block , block

---

<br />

Block : always start with new line
inline : Inline elements don't start on a new line, they appear on the same line as the content and tags beside them.
inline Block : Inline-block elements are similar to inline elements, except they can have padding and margins and set height and width values.

<br />

---

## Pseudo elements and Pseudo classes

---

<br />

- Pseudo-elements

  - ::before
  - ::after
  - ::first-letter
  - ::first-line
  - ::selection

- Pseudo-classes
  - :link
  - :visited
  - :hover
  - :active
  - :focus

<br />

---

## Border Box , Content Box

---

<br />

- Content Box

  - content-box is the default value box-sizing property. The height and the width properties consist only of the content by excluding the border and padding (content width not collect with padding margin)

  - content width = content width

- Border Box :

  - he box-sizing for the div element is given as border-box. That means the height and width considered for the div content will also include the padding and border. This means that the actual height of the div content will be:

  - content width = content width + padding width + border width

<br />

---

## Float

---

<br />

- positioning the HTML elements horizontally either towards the left or right of the container

<br />

---

## z-index

---

<br />

- z-index is used for specifying the vertical stacking of the overlapping elements that occur at the time of its positioning. It specifies the vertical stack order of the elements positioned that helps to define how the display of elements should happen in cases of overlapping

<img src="./iamges/zIndex.png"/>

<br />

---

## Flex

---

<br />

- FlexBox is used for align element efficient way
- flexbox which is largely a 1-dimensional system.
- Properties
  - flex-direaction
  - flex-wrap
  - flex-flow
  - justify-content
  - align-items
  - alogn-content

<br />

---

## Position Property

---

<br />

- Absolute : To place an element exactly where you want to place it ,absolute position is actually set relative to the element's parent
- Relative : "Relative to itself". Setting position: relative; on an element and no other positioning attributes, it will no effect on its positioning
- Fixed
- Static
- Sticky

<br />

---

## Grid System

---

<br />

- Grid Layout is the most powerful layout system available in CSS. It is said to be a 2-dimensional system, meaning it can handle both columns and rows

<br />

---

## grid vs flexbox

---

<br />

- CSS Grid Layout is a two-dimensional system, meaning it can handle both columns and rows. Grid layout is intended for larger-scale layouts which aren’t linear in design.

- Flexbox is largely a one-dimensional system (either in a column or a row). Flexbox layout is most appropriate to the components of an application.

<br />

---

## :root

---

<br />
 
-  The :root selector allows you to target the highest-level “parent” element in the DOM, or document tree. It is defined in the CSS Selectors Level 3 specification.
