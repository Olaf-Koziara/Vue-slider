<template>
    <div class="slides-wrapper">

        <button class="btn btn-primary btn-lg btn-action slides-prev" :disabled="active==0" @click="changeSlide(-1)">
                <i class="icon icon-arrow-left"></i>
        </button>

        
            <Slide :url="activeUrl" />
        

        <button class="btn btn-primary btn-lg btn-action slides-next" :disabled="active==images.length-1" @click="changeSlide(1)">
                <i class="icon icon-arrow-right"></i>
        </button>
        <div class="text-center"><h2>{{active+1}} / {{images.length}}</h2></div>

    </div>
</template>
<script>
import Slide from "./Slide";
export default {
    name:"Slideshow",
    props:{
        images:Array,
    },
    data(){
        return{
            active:0,
        }
    },
    computed:{
        activeUrl()
        {
            return this.images[this.active].url
        }
    },
    methods:{
        changeSlide(value){
            this.active+=value;
        }
    },
    components:{
        Slide
    }
    
}
</script>
<style scoped>
 .slides-wrapper {
        min-height: 300px;
        position: relative;
    }
.slides-prev{
    position: absolute;
    top:50%;
}
.slides-next{
    position: absolute;
    top: 50%;
    right: 0;
}
</style>