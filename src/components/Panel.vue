<template>
  <div>
    <v-layout column>
      <v-flex>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
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
</style>
