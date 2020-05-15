<template>
    <img :src="url" class="img-responsive">
</template>
<script>
export default {
    name:"Slide",
    props:{
        url:String
    }
}
</script>