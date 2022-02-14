<template>
  <div class="usuario-id">
      <h3>Usuário Editar</h3>
      <p><strong>Código:</strong> {{ id }} / {{ $route.params.id }} </p>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style>

</style>