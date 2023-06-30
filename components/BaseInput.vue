<script setup>

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  v$: {
    type: Object
  }
})

</script>

<template>
  <!-- V for V$: {{ v$ }} -->
  <div class="space-y-2">
    <p class="text-sm font-semibold">{{ title }}</p>
    <input
      class="border w-full border-gray-400 px-4 py-3 bg-gray-100 border-none text-gray-500 placeholder:text-gray-400 placeholder:text-sm"
      :class="{
        'border-red-500 focus:border-red-500': v$.modelValue.$error,
        'border-gray-400': !v$.modelValue.$error
      }" :type="type" :placeholder="title" :value="modelValue" @change="v$.modelValue.$touch"
      @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>


<style scoped></style>