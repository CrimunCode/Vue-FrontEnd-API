<template>
    <nav>
        <ul class='pagination mt-2'>
            <li v-for="number in getMyPagination" :key="number" class='page-item'>
                <a v-on:click="$emit('paginate', number)" href='#' class='page-link'>
                    {{ number }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Pagination',
        props: {
            postsPerPage: Number,
            totalPosts: Number,
            paginate: Function, 
        },
        data(){
            return{
                pageNumbers: [],
            }
        },
        computed: {
            getMyPagination(){
                let props = this;
                let paginas = [];
                for(let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++){
                    paginas.push(i);
                }
                return paginas;
            }
        }
    }
</script>

<style>
</style>