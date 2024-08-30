<template>

    <MyTable :posts="paginatedPosts"/>
    <Pagination :postsPerPage="postsPerPage" :totalPosts="posts.length" v-on:paginate="fnpaginate"/>
    <br>
    <div>{{ myValue }}</div>
    <select @change="myValueSelect">
          <option value="1">Uno</option>
          <option value="2">Dos</option>
          <option value="3">Tres</option>
    </select>
  
  </template>
  
  <script>
  
  import MyTable from './components/MyTable.vue'
  import Pagination from './components/Pagination.vue'
  
  export default {
    name: 'User',
    components: {
      MyTable,
      Pagination,
    },
    data(){
      return{
        posts: [],
        currentPage: 1,
        postsPerPage: 2,
        indexOfLastPost: 0,
        indexOfFirstPost: 0,
        currentPosts: [],
        paginate: 0,
        myValue: 0,
      }
    },
    created(){
      this.getPosts()
    },
    methods:{
        async getPosts () { 
          await fetch('http://localhost:3000/listarProd', { method: "get"})
          .then(response => response.json())
          .then(data => {
            this.posts = data;
          })
        },
  
        fnpaginate (pageNumber){
          //alert(pageNumber)
          this.currentPage = pageNumber
        },
  
        async myValueSelect(e){
          // this.myValue = e.target.value
          // await console.log(e.target.value)
          this.myValue = e.target.value
        }
  
      },
      computed: {
        paginatedPosts: function(){
          this.indexOfLastPost = this.currentPage * this.postsPerPage; //1*10=10      
          this.indexOfFirstPost = this.indexOfLastPost - this.postsPerPage;//10-10=0      
          return this.posts.slice(this.indexOfFirstPost, this.indexOfLastPost);//paginas de 0 a 10
        }
      },
  
  }
  
  
  </script>
  
  
  
  <style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  </style>
  