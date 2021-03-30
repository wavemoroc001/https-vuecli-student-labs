<template>
  <button
    @click="buttonClick"
    class="btn"
    :class="hasEdit ? [editClass, txtcolor] : [bgcolor, txtcolor]"
  >
    <slot>{{ label }} </slot>
  </button>
</template>
<script>
export default {
  // props: ['bgcolor', 'txtcolor', 'label', 'isEdit'],
  props: {
    bgcolor: {
      type: String,
      required: true
    },
    txtcolor: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },

    isEdit: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['btn-click'],
  data() {
    return {
      hasEdit: this.isEdit
    }
  },
  methods: {
    buttonClick() {
      if (this.label === 'edit') this.hasEdit = !this.hasEdit
      this.$emit('btn-click', {
        label: this.label,
        isEdit: this.hasEdit
      })
    }
  },
  computed: {
    editClass() {
      return { 'bg-gray-400': this.hasEdit }
    }
  }
}
</script>
