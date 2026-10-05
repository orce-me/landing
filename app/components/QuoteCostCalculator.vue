<script setup>
import { estimateQuote } from '#shared/utils/quoteEstimate'

const materials = ref(250)
const hours = ref(2)
const hourlyCost = ref(60)
const expenses = ref(30)
const margin = ref(20)
const result = computed(() =>
  estimateQuote({
    materials: materials.value === '' ? NaN : Number(materials.value),
    hours: hours.value === '' ? NaN : Number(hours.value),
    hourlyCost: hourlyCost.value === '' ? NaN : Number(hourlyCost.value),
    expenses: expenses.value === '' ? NaN : Number(expenses.value),
    margin: margin.value === '' ? NaN : Number(margin.value),
  }),
)
const money = (value) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  )
</script>

<template>
  <div class="calculator">
    <form class="cost-inputs" @submit.prevent>
      <p class="input-note">
        Os valores iniciais são um exemplo. Substitua pelos custos do seu
        serviço.
      </p>
      <label for="materials"
        >Materiais e produtos (R$)<input
          id="materials"
          v-model.number="materials"
          type="number"
          min="0"
          step="0.01"
          required
          inputmode="decimal"
      /></label>
      <div class="labor-inputs">
        <label for="hours"
          >Horas de trabalho<input
            id="hours"
            v-model.number="hours"
            type="number"
            min="0"
            step="0.25"
            required
            inputmode="decimal" /></label
        ><label for="hourly-cost"
          >Custo por hora (R$)<input
            id="hourly-cost"
            v-model.number="hourlyCost"
            type="number"
            min="0"
            step="0.01"
            required
            inputmode="decimal"
        /></label>
      </div>
      <label for="expenses"
        >Outros custos (R$)<input
          id="expenses"
          v-model.number="expenses"
          type="number"
          min="0"
          step="0.01"
          required
          inputmode="decimal"
        /><small
          >Inclua despesas atribuídas a este serviço, como deslocamento.</small
        ></label
      >
      <label for="margin"
        >Margem sobre o preço final (%)<input
          id="margin"
          v-model.number="margin"
          type="number"
          min="0"
          max="99.99"
          step="0.01"
          required
          inputmode="decimal"
        /><small
          >Não é o mesmo que acrescentar essa porcentagem ao custo.</small
        ></label
      >
    </form>
    <div class="estimate" aria-live="polite" aria-atomic="true">
      <p v-if="result.error" class="validation">{{ result.error }}</p>
      <template v-else>
        <h2>Estimativa do orçamento</h2>
        <dl>
          <div>
            <dt>Mão de obra</dt>
            <dd>{{ money(result.labor) }}</dd>
          </div>
          <div>
            <dt>Custo total informado</dt>
            <dd>{{ money(result.cost) }}</dd>
          </div>
          <div>
            <dt>Diferença entre preço e custo</dt>
            <dd>{{ money(result.difference) }}</dd>
          </div>
        </dl>
        <p class="price">
          <span>Preço calculado</span><strong>{{ money(result.price) }}</strong>
        </p>
        <p class="estimate-note">
          Valores arredondados para exibição. A estimativa só inclui os custos
          informados e não define um preço de mercado.
        </p>
      </template>
    </div>
  </div>
</template>

<style scoped>
.calculator {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 32px;
  margin: 35px 0;
}
.cost-inputs {
  display: grid;
  gap: 22px;
  border: 1px solid var(--color-outline);
  padding: 24px;
  border-radius: var(--rounded-lg);
}
.input-note {
  font-size: var(--typography-body-md-font-size);
  line-height: var(--typography-body-md-line-height);
  color: var(--color-on-surface-muted);
  margin: 0;
}
label {
  display: flex;
  flex-direction: column;
  gap: 9px;
  font-size: var(--typography-label-lg-font-size);
  font-weight: var(--typography-label-lg-font-weight);
}
input {
  width: 100%;
  border: 1px solid var(--color-on-surface-muted);
  border-radius: var(--rounded-md);
  padding: 12px;
  background: var(--color-surface-raised);
  color: var(--color-on-surface);
  font-size: var(--typography-lead-font-size);
}
.labor-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
small {
  font-size: var(--typography-body-sm-font-size);
  line-height: var(--typography-body-sm-line-height);
  font-weight: var(--typography-body-sm-font-weight);
  color: var(--color-on-surface-muted);
}
.estimate {
  background: var(--color-surface-tint);
  border: 1px solid var(--color-outline);
  border-radius: var(--rounded-lg);
  padding: 24px;
  align-self: start;
}
.estimate h2 {
  font-size: var(--typography-title-lg-font-size);
  font-weight: var(--typography-title-lg-font-weight);
  margin: 0 0 25px;
}
dl {
  margin: 0;
}
dl > div {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  margin: 16px 0;
  font-size: var(--typography-body-sm-font-size);
  line-height: var(--typography-body-sm-line-height);
}
dd {
  margin: 0;
  white-space: nowrap;
  font-weight: 500;
}
.price {
  padding-top: 25px;
  margin: 24px 0 0;
  border-top: 1px solid var(--color-outline);
}
.price span {
  font-size: var(--typography-body-sm-font-size);
  color: var(--color-on-surface-muted);
}
.price strong {
  display: block;
  font-size: var(--typography-figure-lg-font-size);
  font-weight: var(--typography-figure-lg-font-weight);
  letter-spacing: var(--typography-figure-lg-letter-spacing);
  margin-top: 8px;
}
.estimate-note {
  font-size: var(--typography-body-sm-font-size);
  line-height: var(--typography-body-sm-line-height);
  color: var(--color-on-surface-muted);
  margin: 24px 0 0;
}
.validation {
  font-size: var(--typography-body-md-font-size);
  line-height: var(--typography-body-md-line-height);
  color: var(--color-error);
  margin: 0;
}
@media (max-width: 760px) {
  .calculator {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .cost-inputs,
  .estimate {
    padding: 22px;
  }
  .price strong {
    font-size: 34px;
  }
}
</style>
