<template>
  <v-app>
    <div class="home">
      <v-card
        class="mx-auto"
      >
        <v-container fluid>
          <v-row dense>
            <v-col>
              <v-card>
                <v-img
                  src="https://www.mannvillelibrary.ab.ca/public/uploads/snippets/1593454196bannerimage/1595878765-1600w_595h_1593454196bannerimage.jpg"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title> Online Library </v-card-title>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-expansion-panels>
        <v-expansion-panel
          v-for="author in authors"
          :key="author.id"
        >
          <v-expansion-panel-header>
            <h4>{{author.firstName}} {{author.lastName}}</h4>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col cols="4" sm="2" md="3" 
              v-for="(book) in books"
              :key="book.id"
              >
                <book
                :name="book.name"
                :isbn="book.isbn"
                :authorId="book.authorId"
                :publish="book.publish"
                />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-app>
</template>

<script>
import Book from '../components/Book.component';
//import soapHelper from '../plugins/SOAPHelper';

export default {
  name: "Home",
  data() {
    return {
      //helper: new soapHelper()
    }
  },
  components: {
    Book
  },
  computed: {
    authors() {
      return [{id:1, firstName: "Toto", lastName: "Titi"}] //this.helper.authors
    },
    books() {
      return [{id:1, name: "Test", isbn:578978, authorId:5, publish: "2020-9-8"},
      {id:2, name: "Test2", isbn:5789278, authorId:6, publish: "2020-9-8"}]//this.helper.books
    }
  }
};
</script>
