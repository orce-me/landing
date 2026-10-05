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
