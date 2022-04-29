# 测试

测试文件夹
<div v-bind:id="dynamicId">动态ID</div>

```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```
导入代码段
@[code](../.vuepress/configs/index.ts)
@[code{3-10} ts{3-6}:no-line-numbers](../.vuepress/configs/sidebar/zh.ts)
<Badge text="图章组件Badge"  vertical="middle" type="warning"/>



[其他测试](./nav-show.md)





