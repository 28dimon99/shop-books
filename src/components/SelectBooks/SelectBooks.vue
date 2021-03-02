<template>
<div class="select">
  <p
      class="select-title"
      @click="areOptionsVisible = !areOptionsVisible"
  >
    {{selected}}
  </p>
  <div
      class="options"
      v-if="areOptionsVisible || isExpanded"
  >
    <p
     v-for="option in options"
     :key="option.name"
     @click="selectOption(option)"
    >
      {{option.name}}
    </p>
  </div>
</div>
</template>

<script>
export default {
name: "SelectBooks",
  props:{
     options:{
       type: Array,
       default(){
         return []
       }
     },
    selected:{
       type: String,
       default() {
         return ''
       }
    },
    isExpanded:{
       type: Boolean,
       default: false
    }
  },
  data(){
    return {
      areOptionsVisible: false
    }
  },
  methods:{
    selectOption(option){
      this.$emit('select', option)
      this.areOptionsVisible = false
    },
    hideSelect(){
      this.areOptionsVisible = false
    }
  },
  mounted() {
  document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
  document.removeEventListener('click', this.hideSelect)
  }

}
</script>

<style scoped>
.select{
  display: grid;
  grid-template-columns: 1fr;
  width: 150px;
  cursor: pointer;
}
.options{
  border: 1px solid black;
  cursor: pointer;
}
.options :hover{
  background: gray;
}
</style>