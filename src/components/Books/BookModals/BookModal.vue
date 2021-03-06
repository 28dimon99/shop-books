<template>
  <div class="wrap-modal" ref="modalWrapper">
    <div class="modal-books">
      <div class="header-modal">
        <span>{{titleModal}}</span>
        <div class="close-modal">
          <i @click="closeModalBook"
             class="material-icons">
            close
          </i>
        </div>

      </div>
      <div class="content-modal">
        <slot></slot>
      </div>
      <div class="footer-modal">
        <a class="waves-effect waves-light btn" @click="addCartModal">{{btnModal}}</a>
        <a class="waves-effect waves-light btn red" @click="closeModalBook">Закрити</a>

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
  width: 100%;
  cursor: pointer;
  padding: 10px;
  line-height: 100%;
  background: rgba(64,64,64,0.7);
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index:10;
  right: 0;
  left:0;
  top: 0;
  bottom: 0;

}
   .modal-books{
     display: grid;
     position: fixed;
     top: 100px;
     left: 450px;
     background-color:#e3f2fd;
     z-index:10;
     box-shadow: 0 0 17px 0 #e7e7e7;
     grid-template-columns: 1fr;
     width: 500px;
     border: 1px solid black;
   }
   .header-modal{
     padding-top: 20px;
     font-size: 2em;
   }
   .content-modal{
     display: grid;
     padding: 15px;

   }
   .close-modal{
     position: absolute;
     top:0;
     right: 0;
     background-color: red;
     color: white;
   }
   .footer-modal{
     display: grid;
     grid-template-columns: 1fr 1fr;
     justify-content: end;
   }
</style>