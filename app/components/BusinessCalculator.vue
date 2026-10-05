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
      <p v-if="result.error" class="validation" role="status">
        {{ result.error }}
      </p>
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
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-lg);
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
  font-size: var(--typography-body-md-font-size);
  line-height: var(--typography-body-md-line-height);
  color: var(--color-on-surface-muted);
}
.validation {
  color: var(--color-error);
}
label {
  font-size: var(--typography-label-lg-font-size);
  font-weight: var(--typography-label-lg-font-weight);
}
input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  border: 1px solid var(--color-on-surface-muted);
  border-radius: var(--rounded-md);
  color: var(--color-on-surface);
  background: var(--color-surface-raised);
  font-size: var(--typography-lead-font-size);
}
.result {
  border-left: 1px solid var(--color-outline);
  background: var(--color-surface-tint);
}
strong {
  display: block;
  font-size: var(--typography-figure-lg-font-size);
  font-weight: var(--typography-figure-lg-font-weight);
  line-height: var(--typography-figure-lg-line-height);
  letter-spacing: var(--typography-figure-lg-letter-spacing);
  margin: 20px 0;
  overflow-wrap: anywhere;
}
@media (max-width: 760px) {
  .calculator {
    grid-template-columns: 1fr;
  }
  .result {
    border-left: 0;
    border-top: 1px solid var(--color-outline);
  }
}
</style>
