<template>
  <section class="audience wrap">
    <span>PARA QUEM FAZ<br />O NEGÓCIO ACONTECER</span>
    <div>Instaladores</div>
    <b>✳</b>
    <div>Prestadores de serviço</div>
    <b>✳</b>
    <div>Pequenos negócios</div>
    <b>✳</b>
    <div>Quem vende e instala</div>
  </section>
</template>

<style scoped>
.audience {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  border-top: 1px solid var(--color-outline);
  border-bottom: 1px solid var(--color-outline);
  padding-top: 28px;
  padding-bottom: 28px;
}

.audience > span {
  font-size: var(--typography-label-sm-font-size);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: 1.2px;
  color: var(--color-on-surface-muted);
}

.audience > div {
  font-size: var(--typography-body-lg-font-size);
  color: var(--color-on-surface-muted);
}

.audience > b {
  color: var(--color-tertiary);
  font-size: 15px;
  font-weight: 400;
}

@media (max-width: 1050px) {
  .audience {
    gap: 15px;
  }
}

@media (max-width: 1050px) {
  .audience > div {
    font-size: 12px;
  }
}

@media (max-width: 760px) {
  .audience {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding-top: 25px;
    padding-bottom: 25px;
  }
}

@media (max-width: 760px) {
  .audience > span {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 760px) {
  .audience > span br {
    display: none;
  }
}

@media (max-width: 760px) {
  .audience > b {
    display: none;
  }
}

@media (max-width: 760px) {
  .audience > div {
    font-size: 12px;
  }
}
</style>
