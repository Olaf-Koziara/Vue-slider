<template>
    <div class="slides-wrapper" :class="{'loading':isLoading || !images.length}">
        <template v-if="images.length">

        <button class="btn btn-primary btn-lg btn-action slides-prev" :disabled="active==0" @click="changeSlide(-1)">
                <i class="icon icon-arrow-left"></i>
        </button>

        
            <Slide :url="activeUrl" />
        

        <button class="btn btn-primary btn-lg btn-action slides-next" :disabled="active==images.length-1" @click="changeSlide(1)">
                <i class="icon icon-arrow-right"></i>
        </button>
        <div class="text-center"><h2>{{active+1}} / {{images.length}}</h2></div>
        </template>


    </div>
</template>
<script>
import {preloadImage} from '../helpers/helpers';
import Slide from "./Slide";
export default {
    name:"Slideshow",
    props:{
        images:Array,
    },
    data(){
        return{
            active:0,
            isLoading:false,
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
            
            let index = this.active + value;
            let slide = this.images[index];
             this.isLoading=true;
            if(slide !== undefined)
            {
               
                
                preloadImage(slide.url)
                    .then( 
                        this.active=index,
                        this.isLoading=false
                        
                    )
            }
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