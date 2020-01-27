<template>

<div class="d-flex" id="wrapper">
  <SideBar></SideBar>

  <!-- Page Content -->
  <div id="page-content-wrapper">

      <Header></Header>

      <div class="container-fluid">
      <router-view />
      </div>

</div>
</div>
  <!-- /#wrapper -->


</template>


<script >
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  name: "Admin",
  components: {
    Header,
    Footer,
    SideBar
  }
};
</script>

<style lang="scss">
</style>
