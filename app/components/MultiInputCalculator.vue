<script setup>
const props = defineProps({
  fields: { type: Array, required: true },
  calculate: { type: Function, required: true },
})
const values = ref(props.fields.map((field) => field.initial))
const result = computed(() =>
  props.calculate(
    ...values.value.map((value) => (value === '' ? NaN : Number(value))),
  ),
)
const format = (row) =>
  new Intl.NumberFormat(
    'pt-BR',
    row.format === 'money'
      ? { style: 'currency', currency: 'BRL' }
      : { maximumFractionDigits: 0 },
  ).format(row.value)
</script>
<template>
  <div class="calculator" data-nosnippet>
    <div class="inputs">
      <p>Valores iniciais ilustrativos. Substitua pelos seus.</p>
      <template v-for="(field, index) in fields" :key="field.id">
        <label :for="field.id">{{ field.label }}</label>
        <input
          :id="field.id"
          v-model="values[index]"
          type="number"
          min="0"
          :step="field.step || '0.01'"
          inputmode="decimal"
        />
      </template>
    </div>
    <div class="result" aria-live="polite" aria-atomic="true">
      <p v-if="result.error" class="validation" role="status">
        {{ result.error }}
      </p>
      <template v-else
        ><div v-for="(row, index) in result.rows" :key="row.label">
          <p>{{ row.label }}</p>
          <strong v-if="index === 0">{{ format(row) }}</strong>
          <p v-else class="value">{{ format(row) }}</p>
        </div></template
      >
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
.value {
  font-size: var(--typography-title-lg-font-size, 22px);
  margin: 12px 0 24px;
  color: var(--color-on-surface);
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
