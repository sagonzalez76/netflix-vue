<template>
 <router-link to="/login" class="btn bg-button py-1 fw-bold text-white" aria-current="page">{{ msg }} <i class="bi bi-chevron-right"
                v-if="arrow == true"></i></router-link>
</template>

<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    },

    arrow: {
        type: Boolean,
        required: true
    },
    bold: {
        type: Boolean,
        required: true
    },


})
</script>

<style scoped>

.bg-button{


background-color: #e50914;


}


</style>