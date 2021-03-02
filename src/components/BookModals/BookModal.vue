<template>
  <div class="wrap-modal" ref="modalWrapper">
    <div class="modal-books">
      <div class="header-modal">
        <span>{{titleModal}}</span>
        <i @click="closeModalBook"
           class="material-icons">
          close
        </i>
      </div>
      <div class="content-modal">
        <slot></slot>
      </div>
      <div class="footer-modal">
        <button @click="closeModalBook">Закрити</button>

        <button @click="addCartModal">{{btnModal}}</button>

      </div>
    </div>
  </div>

</template>

<script>
export default {
name: "BookModal",
  props:{
    titleModal:{
      type:String,
      default: 'Назва'
    },
    btnModal:{
      type: String,
      default: 'OK'
    }

  },
  mounted() {
     let vm = this
     document.addEventListener('click', (item)=>{
       if(item.target === vm.$refs['modalWrapper']){
         vm.closeModalBook()
       }
     })
  },


  methods:{
    closeModalBook(){
      this.$emit('closeModalBook')
    },
    addCartModal(){
      this.$emit('addCartModal')
    }
  }
}
</script>

<style scoped>
.wrap-modal{
  display: grid;
  background: rgba(64,64,64,0.4);
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

}
   .modal-books{
     display: grid;
     position: fixed;
     top: 50px;
     left: 500px;
     background-color:#e3f2fd;
     z-index:10 ;
     box-shadow: 0 0 17px 0 #e7e7e7;
     grid-template-columns: 1fr;
     width: 400px;

     border: 1px solid black;
   }
</style>