<template>
<div>
  <p id="temp">This will be the table of logs. Listed are the Id, date, and location</p>

    <table id="logTable">
  <tr>
    <th>Date</th>
    <th>Location</th>
    <th>LodID</th>
  </tr>
  <tr>
    <td>Temp</td>
    <td>Temp</td>
    <td>Temp</td>
  </tr>
  <tr>
    <td>Temp2</td>
    <td>Temp2</td>
    <td>Temp2</td>
  </tr>
</table>
  </div>
</template>

<script>
export default {
name:"log-list",
};
</script>

<style scoped>
#temp{
    color: white;
    margin-top: 25vh;
    margin-left: 15vw;
    font-size:  30px;
}
#logTable{
  margin-left: 20vw;
}
</style>