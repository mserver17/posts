<template>
    <select :value="modelValue" @change="changeOptions">
        <option disabled value="">Выберите из списка</option>
        <option 
            v-for="option in options"
            :key="option.value" 
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        }
    },
    methods: {
        changeOptions(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped lang="scss">
 @use '/src/assets/variables' as *;
 @use '/src/assets/mixins' as *;
select {
    width: 250px;
    height: 40px;
    font-family: "Arial", sans-serif;
    color: map-get($colors, $key:"navBarColor");
    padding: 5px;
    border: 1px solid #788cff;
    border-radius: 8px;
    outline: none;
    background-color: #fff;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:hover {
        border-color: #74a5ff;
    }
    &:focus {
        border-color: #74a7ff;
        box-shadow: 0 0 8px #74a5ff;
    }

    option {
        padding: 5px;
        font-family: "Arial", sans-serif;
    }
}
</style>

