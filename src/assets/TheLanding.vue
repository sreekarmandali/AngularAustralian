<template>
<div class="container Alignleft">
        <div class="d-inline-flex justify-content-center text-white">
            <div class="FeautureBlock p-1"><a href="#/PFacilities"><img class="Imagesize img-thumbnail" :src="require('@/assets/ParentalFacilities.jpg')" /> </a><div class="Centered"><h3>Parental Facilities</h3></div></div>
            <div class="FeautureBlock  p-1"><img class="Imagesize img-thumbnail" :src="require('@/assets/restaurants.jpg')" /> <div class="Centered"><h3>Restaurants</h3></div></div>
            <div class="FeautureBlock  p-1"><img class="Imagesize img-thumbnail" :src="require('@/assets/stores.jpg')" /> <div class="Centered"><h3>Stores</h3></div></div>
        </div>
    </div>
   


</template>
<script>
  export default {
    name:"TheLanding",
    data() {
      return {
        
      }
        },
        methods: {
            

        }
  }



</script>
<style scoped>
    .FeautureBlock {
        position: relative;
        text-align: center;
        color: black;
    }

    .Imagesize:hover {
        opacity: 0.3
    }

    .Centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-shadow: 2px 2px 4px #000000;
    }

    .Alignleft {
        margin-right: 145px;
    }
    .Imagesize {
        width: 450px;
        height: 400px;
        opacity: 0.6;
    }
</style>
