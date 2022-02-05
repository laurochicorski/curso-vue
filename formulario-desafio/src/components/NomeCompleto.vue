<template>
    <span>{{ nome }} {{ sobrenome }}</span>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            required: true
        },
        sobrenome: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>