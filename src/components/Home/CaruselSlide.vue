<template>
    <transition :name="dir">
        <div v-show="visible">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                index  : 0,
            }
        },
        computed : {
            visible() {
                return this.index === this.$parent.index;
            },
            dir() {
                console.log(this.$parent.slideDirection)
                return this.$parent.slideDirection;
            },
        }
    }
</script>

<style scoped>

    @keyframes slide-left-in{
        from  { transform: translateX(-100%);}
        to { transform: translateX(0);}
    }
    @keyframes slide-left-out{
        from  { transform: translateX(0%);}
        to { transform: translateX(100%);}
    }


    @keyframes slide-right-out{
        from  { transform: translateX(0%);}
        to { transform: translateX(-100%);}
    }
    @keyframes slide-right-in{
        from  { transform: translateX(100%);}
        to { transform: translateX(0);}
    }
</style>