<template>
  <div class="modal-footer">
    <input size="10" type="text" placeholder="+380...">
    <div class="modal-close">
      <i @click="closeModalPhone"
         class="material-icons">
        close
      </i>

    </div>

  </div>
</template>

<script>
export default {
  name: "FooterModal",
  methods: {
    closeModalPhone() {
      this.$emit('closeModalPhone')
    }
  }
}
</script>

<style scoped>
.modal-footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 50px;
  cursor: pointer;

}
.modal-footer input{
  color: white;
}
.modal-close{
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>