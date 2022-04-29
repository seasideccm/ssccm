# 导航栏项目测试

不同目录

直接使用  `[]()` 链接到 MD 文件时，文件名不能有空格。

<hr>

练习 script

使用大胡子模板语法

这是 script 中的数据： {{ a }}


```md 
{{ a }}
```



---------

b + c = {{ b  + c }}

---------

script 定义变量常量 不用`;`，书写标点符号 return 部分是`,`。

<script>
export default {
  setup() {
    const a = "ok"
    const b = 10
    const c = 25
    return {
    a,
    b,
    c,
    }
  }


}


</script>

--------------

显示网站网页数据的方式

```
{{ $page }}

{{ $site }}
```



这是网页：{{ $page }}

这是网站： {{ $site }}

