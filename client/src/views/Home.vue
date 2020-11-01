<template>
  <v-app>
    <div class="home">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(item,i) in 5"
          :key="i"
        >
          <v-expansion-panel-header>
            Item
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-app>
</template>

<script>
import Book from '../components/Book.component';
import SOAPHelper from '../plugins/SOAPHelper';

export default {
  name: "Home",
  components: {
    Book
  },
  computed: {
    
  }
};
</script>
