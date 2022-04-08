<template>
 <div class="fishLog">
    <!-- <router-link
      class="deck-link"
      :to="{ name: 'deck-details', params: { id: id } }"
    > -->
    
      <div class="FishLogs" v-for="fishLog in fishLogs" v-bind:key="fishLog.id">
        <p class="fishLogId">{{ fishLog.fishLogId }} :   logId</p>
        <p class="logDate">{{ fishLog.logDate }} :  Date</p>
         <p class="logLocation">{{  fishLog.logLocation }} :   Location</p>
        <p class="logDescription">{{  fishLog.logDescription }} :   log Description</p>
         <p class="imageURL">{{  fishLog.imageURL }} :  images  </p>
           <p class="bait">{{  fishLog.bait }} :   bait was</p>
        <p class="weather">{{  fishLog.weather }} :   weather</p>
         <p class="fishingTrip">{{  fishLog.fishingTrip }} :  fishingTrip  </p>
      </div>
    <!-- </router-link> -->
  </div>

</template>

<script>
export default {
  name: 'view-fishinggg-log',
  props: ['fishLogs'],
}
</script>

<style>
.fishLogs {
  background: white;
  border: solid 1px black;
  border-radius: 10px;
  padding: 30px;
  font-size: 18px;
  margin-bottom: 3vh;
}
.fishLogId {
  font-size: 3vh;
  font-weight: bold;
}
.logDate{
  font-size: 3vh;
  font-weight: bold;
}
.logLocation {
  font-size: 3vh;
  font-weight: bold;
}
.logDescription {
  font-size: 3vh;
  font-weight: bold;
}
.imageURL {
  font-size: 3vh;
  font-weight: bold;
}
.bait {
  font-size: 3vh;
  font-weight: bold;
}
.weather {
  font-size: 3vh;
  font-weight: bold;
}
.fishingTrip {
  font-size: 3vh;
  font-weight: bold;
}

</style>