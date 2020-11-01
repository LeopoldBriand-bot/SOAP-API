<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <p class="display-1 text--primary">
        {{name}}
      </p>
      <p>{{isbn}}</p>
    </v-card-text>
    <v-card-actions>
        <v-btn
            icon
            color="blue lighten-2"
        >
            <v-icon>mdi-wrench</v-icon>
        </v-btn>
        <v-btn
            icon
            color="blue lighten-2"
        >
            <v-icon>mdi-delete</v-icon>
        </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Book",
    props: {
        name: String,
        isbn: Number,
        publish: String,
        authorId: Number,
    }
}
</script>
