<!-- Esto es una vista que despues puede llegar a ser insertada en otra vista como un componente -->

<template>
  <div class="col-lg-12 mt-3">
    <div class="form-group">
      <div class="form-control">
        <label class="p-1">Usuario : </label>
        <input class="m-3" type="text" name="usuario">
    </div>
    </div>
    <div>
      <div class="form-control">
        <label class="p-1">Contraseña :</label>
        <input type="text" name="contrasena">
      </div>
    </div>
    <div class="form-control">
      <button class="btn btn-primary">Ingresar</button>
    </div>
  </div>
</template>


<script>
    export default {
        name: 'Login'
    }
</script>

<!-- Estas eqtiquetas son iopcionales <style> </style> donde va el CSS-->