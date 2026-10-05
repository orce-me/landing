<script setup>
import { calculateBusinessTool } from '#shared/utils/businessTools'
const props = defineProps({
  kind: { type: String, required: true },
  labels: { type: Array, required: true },
  initial: { type: Array, required: true },
})
const a = ref(props.initial[0])
const b = ref(props.initial[1])
const result = computed(() =>
  calculateBusinessTool(
    props.kind,
    a.value === '' ? NaN : Number(a.value),
    b.value === '' ? NaN : Number(b.value),
  ),
)
const money = (value) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  )
const percent = (value) =>
  `${new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(value)}%`
</script>
<template>
  <div class="calculator" data-nosnippet>
    <div class="inputs">
      <p>Valores iniciais ilustrativos. Substitua pelos seus.</p>
      <label for="tool-a">{{ labels[0] }}</label>
      <input
        id="tool-a"
        v-model="a"
        type="number"
        min="0"
        step="0.01"
        inputmode="decimal"
      />
      <label for="tool-b">{{ labels[1] }}</label>
      <input
        id="tool-b"
        v-model="b"
        type="number"
        min="0"
        :max="kind === 'discount' ? 100 : undefined"
        step="0.01"
        inputmode="decimal"
      />
    </div>
    <div class="result" aria-live="polite" aria-atomic="true">
      <p v-if="result.error" role="status">{{ result.error }}</p>
      <template v-else>
        <p>
          {{
            kind === 'discount'
              ? 'Preço com desconto'
              : kind === 'hourly'
                ? 'Custo por hora faturável'
                : 'Margem sobre a venda'
          }}
        </p>
        <strong>{{
          kind === 'margin' ? percent(result.value) : money(result.value)
        }}</strong>
        <p v-if="kind === 'discount'">
          Desconto em reais: {{ money(result.detail) }}
        </p>
        <p v-if="kind === 'margin'">
          {{
            result.detail === undefined
              ? 'Markup percentual indefinido: o custo é zero.'
              : `Markup sobre o custo: ${percent(result.detail)}`
          }}
        </p>
        <p v-if="kind === 'margin' && result.value < 0">
          O preço informado está abaixo do custo.
        </p>
      </template>
    </div>
  </div>
</template>
<style scoped>
.calculator {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--line);
  border-radius: 12px;
  overflow: hidden;
  margin-top: 32px;
}
.inputs,
.result {
  padding: 30px;
}
.inputs {
  display: grid;
  gap: 12px;
}
p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--muted);
}
label {
  font-size: 14px;
}
input {
  width: 100%;
  box-sizing: border-box;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 6px;
  color: #16392d;
  background: #fff;
  font: inherit;
}
input:focus-visible {
  outline: 2px solid var(--green);
  outline-offset: 3px;
}
.result {
  border-left: 1px solid var(--line);
  background: rgba(100, 150, 90, 0.08);
}
strong {
  display: block;
  font-size: 38px;
  margin: 20px 0;
  overflow-wrap: anywhere;
}
[data-theme='dark'] input {
  background: #1a2b20;
  color: #e5ede0;
}
@media (max-width: 760px) {
  .calculator {
    grid-template-columns: 1fr;
  }
  .result {
    border-left: 0;
    border-top: 1px solid var(--line);
  }
}
</style>
