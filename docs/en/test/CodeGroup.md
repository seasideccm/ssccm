---
title: Test Chinese-English comparison
---



<CodeGroup>

  <CodeGroupItem title="English" active>

``

SUMMARY: Physical examination techniques have a reasonable negative predictive value to exclude single organ hypoperfusion but are nonspecific to detect it. Technical methods to indirectly measure myocardial perfusion include ECG and echocardiography. Contrast-enhanced ultrasound can quantify myocardial perfusion but has so far only been used to detect regional myocardial hypoperfusion. Near-infrared spectroscopy and transcranial Doppler sonography can be used to assess cerebral perfusion and determine autoregulation thresholds of the brain. Both Doppler and contrast-enhanced ultrasound techniques are novel methods to evaluate renal and visceral organ perfusion. A key limitation of most techniques is the inability to determine adequacy of organ blood flow to meet the organs' metabolic demands.
  </CodeGroupItem>

  <CodeGroupItem title="Chinese">

``

总结：体格检查技术排除单器官第灌注阴性预测价值较好，但诊断的特异性差。间接测量心肌灌注的技术方法包括心电图和超声心动图。超声造影可以量化心肌灌注，但迄今为止仅用于检测局部心肌灌注不足。近红外光谱和经颅多普勒可用于评估脑灌注和确定大脑的自动调节阈值。多普勒超声和造影增强超声技术都是评估肾脏和内脏器官灌注的新方法。大多数技术的主要缺点是无法确定器官血流是否足以满足器官的代谢需求。
  </CodeGroupItem>
</CodeGroup>

_Hello， {{ msg }}_

<RedDiv>

_Current count： {{ count}}_  A = {{ count + 1 +2 +3 +4}}

</RedDiv>

<button @click="count++">Click me！</button>

<script>
import { h, ref } from 'vue'

const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)

export default {
  components: {
    RedDiv,
  },

  setup() {
    const msg = 'Markdown can use Vue'
    const count = ref(0)

    return {
      msg,
      count,
    }
  }
}
</script>

<style>
.red-div {
  color: red;
}
</style>