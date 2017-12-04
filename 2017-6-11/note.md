[TOC]

# flex 布局

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>

<style>
  body {}
  .flex-container {font-size: 30px; background: #ddd;
    display: flex;
    /*flex-direction: row;*/ /* 默认 */
    /*flex-direction: row-reverse;*/
    /*flex-direction: column;*/
    /*flex-direction: column-reverse;*/

    /*flex-wrap: nowrap;*/ /*默认*/
    /*flex-wrap: wrap;*/
    /*flex-wrap: wrap-reverse;*/
    /*简单操作*/
    /*flex-flow: flex-direction flex-wrap */ /* 参数解读 */
    /*flex-flow: row-reverse wrap-reverse;*/

    /*justify-content: flex-start;*/ /* 默认 */
    /*justify-content: flex-end;*/
    /*justify-content: flex-end;*/
    /*justify-content: center;*/
    /*justify-content: space-between;*/
    /*justify-content: space-around;*/

     /*height: 300px; */
    /* align-items: stretch; */ /* 默认 - 拉伸 */
    /*align-items: flex-start;*/
    /*align-items: flex-end;*/
    /*align-items: center;*/
    /*align-items: baseline;*/

    /* align-content: stretch; */ /* 默认 */
    /*flex-wrap: wrap;*/
    /*align-content: space-between; */
    /*align-content: space-around; */
  }
  .flex-container .item {padding: 30px; background: orange; border: 1px solid #ccc; text-align: center;
    flex-grow: 1;
  }
  .flex-container .item-1 {}
  .flex-container .item-2 {}
  .flex-container .item-3 {}
  .flex-container .item-4 {}
  .flex-container .item-5 {}
</style>

<div class="flex-container">
  <div class="item item-1"><span>1</span></div>
  <div class="item item-2"><span>2</span></div>
  <div class="item item-3"><span>3</span></div>
  <div class="item item-4"><span>4</span></div>
  <div class="item item-5"><span>5</span></div>
</div>


</body>
</html>
```