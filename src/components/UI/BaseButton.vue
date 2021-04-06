<template>
  <button class="rounded-lg shadow-lg py-2 px-3" @click="this.$emit('action')" :class="[txtcolor,bgcolor]">
    {{ label }}
  </button>
</template>
<script>
export default {
    props : {
        bgcolor : {
            //require : true,
            type : String,
            default: 'bg-grey-400'
        },
        txtcolor : {
            //require : true,
            type : String,
            default : 'text-red-600'
        },
        label : {
            //require : true,
            type : String,
            default : 'Cute Button' 
        }
    }
}
</script>
