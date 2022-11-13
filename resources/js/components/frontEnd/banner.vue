<template>
    <div>
        <carousel :items="2" :loop="true" :margin="20" :nav="true" :navText="banner_nav_text">
            <img src="https://placeimg.com/200/200/any?1" alt="">
            <img src="https://placeimg.com/200/200/any?2" alt="">
            <img src="https://placeimg.com/200/200/any?3" alt="">
            <img src="https://placeimg.com/200/200/any?4" alt="">
        </carousel>
    </div>
</template>

<script>

import carousel from 'vue-owl-carousel2'

export default {
    components: { carousel },
    data:function(){
        return {
            banner_nav_text : [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>",
            ]
        }
    }
    
}
</script>

<style>
    .owl-theme .owl-nav{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .owl-theme .owl-nav .owl-next,
    .owl-theme .owl-nav .owl-prev {
        font-size: 55px;
        background: transparent;
        color:#ffff;
        background: #0000006b;
    }

    .owl-theme .owl-dots .owl-dot span{
        border: 3px solid #306cc7;
        height: 20px;
        width: 20px;
        background: transparent;
    }
</style>