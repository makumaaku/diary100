<template>
  <v-row
    class="blue lighten-4"
    style="height: 100%;"
    justify="center"
    align-content="center"
  >
    <v-col v-for="n in 3" :key="n" cols="12" sm="10" md="8" lg="4" xl="3">
      <v-card color="blue" outlined tile height="200" elevation="2">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">
              OVERLINE
            </div>
            <v-list-item-title class="headline mb-1">
              Headline 5
            </v-list-item-title>
            <v-list-item-subtitle
              >Greyhound divisely hello coldly
              fonwderfully</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn outlined rounded text>
            Button
          </v-btn>
        </v-card-actions></v-card
      >
    </v-col>
  </v-row>
</template>
