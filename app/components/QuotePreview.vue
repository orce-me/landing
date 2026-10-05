<script setup>
defineProps({ quantity: { type: Number, default: 1 } })
const dialog = useTemplateRef('dialog')
function open() {
  dialog.value?.showModal()
}
function close() {
  dialog.value?.close()
}
function print() {
  window.print()
}
defineExpose({ open })
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <dialog
        id="pdf-dialog"
        ref="dialog"
        aria-label="Prévia do orçamento"
        @click.self="close"
      >
        <div class="dialog-toolbar">
          <span>Prévia do orçamento · dados demonstrativos</span>
          <button type="button" @click="print">Imprimir / salvar PDF</button>
          <button type="button" aria-label="Fechar prévia" @click="close">
            ✕
          </button>
        </div>
        <div id="print-document"><QuoteDocument :quantity="quantity" /></div>
      </dialog>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
dialog {
  width: min(740px, 94vw);
  border: 1px solid #dce4d4;
  border-radius: 10px;
  padding: 0;
  color: #203d34;
}

dialog::backdrop {
  background: #132b2399;
  backdrop-filter: blur(5px);
}

.dialog-toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f1f5eb;
  padding: 15px;
  font-size: 10px;
}

.dialog-toolbar button {
  border: 0;
  border-radius: 4px;
  padding: 9px;
  background: #174c3c;
  color: white;
  font-size: 10px;
}

.dialog-toolbar button:first-of-type {
  margin-left: auto;
}

#print-document {
  padding: 25px;
}

#print-document :deep(.app-inner) {
  padding: 25px;
}

#print-document :deep(.table-row),
#print-document :deep(.table-row b) {
  font-size: 12px;
}

#print-document :deep(.table-row small) {
  font-size: 9px;
}

#print-document :deep(.quote-title h2) {
  font-size: 35px;
}

@media (max-width: 760px) {
  .dialog-toolbar {
    flex-wrap: wrap;
  }
}

@media (max-width: 760px) {
  .dialog-toolbar > span {
    width: 100%;
  }
}

@media (max-width: 760px) {
  .dialog-toolbar button:first-of-type {
    margin-left: 0;
  }
}

@media (max-width: 760px) {
  #print-document {
    padding: 0;
  }
}

@media (max-width: 760px) {
  #print-document :deep(.app-inner) {
    padding: 20px;
  }
}

@media print {
  dialog {
    display: block !important;
    position: static;
    border: 0;
    width: 100%;
    max-height: none;
    overflow: visible;
  }
}

@media print {
  .dialog-toolbar {
    display: none;
  }
}

@media print {
  dialog::backdrop {
    display: none;
  }
}

@media print {
  #print-document {
    padding: 0;
  }
}

[data-theme='dark'] dialog {
  background: #1b2b21;
  color: #e3eddb;
  border-color: #405536;
}

[data-theme='dark'] .dialog-toolbar {
  background: #293b29;
}

[data-theme='dark'] .dialog-toolbar button {
  background: #c1dca2;
  color: #163322;
}

@media print {
  [data-theme='dark'] #print-document {
    background: white;
    color: #203d34;
    --muted: #4e6053;
  }
}

@media print {
  [data-theme='dark'] #print-document :deep(.app-inner) {
    background: white;
    color: #203d34;
  }
}

@media print {
  [data-theme='dark'] #print-document :deep(.customer b),
  [data-theme='dark'] #print-document :deep(.total strong) {
    color: #203d34;
  }
}

@media print {
  [data-theme='dark'] #print-document :deep(.total) {
    background: #e9f0df;
  }
}

@media print {
  [data-theme='dark'] #print-document :deep(small),
  [data-theme='dark'] #print-document :deep(.customer > span),
  [data-theme='dark'] #print-document :deep(.table-head) {
    color: #596c4d;
  }
}
</style>
