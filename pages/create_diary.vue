<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-text-field label="タイトル*" v-model="diary.name"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea label="内容*" v-model="diary.desc"> </v-textarea>
      </v-col>
    </v-row>
    <v-row no-gutters class="mb-6 mt-4" justify="center">
      <v-btn class="mr-4">キャンセル</v-btn>
      <v-btn @click="add">作成</v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diary: {
        name: "",
        desc: ""
      }
    };
  },
  created: function() {
    this.$store.dispatch("diary/init");
  },
  methods: {
    add() {
      //引数を３つにするとエラーになった
      this.$store.dispatch("diary/add", this.diary);
      this.diary.name = "";
      this.diary.desc = "";
    }
  }
  // computed: {
  //   diaries() {
  //     return this.$store.state.diaries.diaries;
  //   }
  // }
};
</script>
