<template>
  <div>
    <v-layout column>
      <v-flex>
        <div class="white elevation-2 p-radius panel">
          <v-toolbar flat dense class=" h-radius" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <slot name="action" />
            </v-toolbar>

          <div class="pl-4 pr-4 pt-4 pb-2">
              <slot>
                  nod slot content defined.
              </slot>
            <div>
          </div>
        </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

export default {
  props: [
      'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error1 {
  color: red;
}
.p-radius {
  border-radius: 25px;
}
.h-radius {
  border-radius: 25px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.panel {
  width: 60%;
  position: relative;
  margin-left: 18%;
  margin-top: 3%;
}
</style>
