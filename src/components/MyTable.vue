<template>
    {{ productos }}
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <td>Id</td>
                <td>Nombre</td>
            </tr>
        </thead>
        <tbody>
            
        <tr v-for="prod in productos" v-bind:key="prod.Id_prod">
            <td>{{ prod.Id_prod }}</td>
            <td>{{ prod.Nom_prod }}</td>
        </tr>
            
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';

export default {
  name: "MyTable",
  props: {},
  data() {
    return {
        productos: null
    }
  },
  async mounted(){
    await axios.get('http://localhost:3000/listarProd').then(response => (this.productos = response.data))
    console.log(this.productos)
  },
  computed: {},
  methods: {

  }
}
</script>
<style scoped>

</style>