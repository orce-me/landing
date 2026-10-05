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
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding-top: 28px;
  padding-bottom: 28px;
}

.audience > span {
  font-size: 8px;
  letter-spacing: 1.2px;
  line-height: 1.8;
  color: #929c89;
}

.audience > div {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: #69775c;
}

.audience > b {
  color: #9daa8b;
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

.audience > span {
  color: #56674c;
}

.audience > div {
  color: #415738;
}

.audience > b {
  color: #647e4f;
}

[data-theme='dark'] .audience > span,
[data-theme='dark'] .audience > div {
  color: #b3c4a6;
}

[data-theme='dark'] .audience > b {
  color: #c0d79f;
}
</style>
