<script setup>
defineProps({
  Id: String,
  Nombre: String,
  MyClass: String,
})
</script>

<template>
    <table class={{MyClass}}>
        <thead>
            <tr>
                <td>{{Id}}</td>
                <td>{{Nombre}}</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>

</style>