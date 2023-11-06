<template>
  <NuxtLayout>
    <GridArticle article="article">
      <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
        <JournalHeader
          :tags="data.tags ? data.tags : ''"
          :image="data.image ? data.image : ''"
          :date="data.date ? data.date : ''"
        >
          <template v-slot:title>
            {{ data.title }}
          </template>
        </JournalHeader>
      </ContentQuery>
      <section>
        <ContentDoc>
          <template #not-found>
            <p>No articles found.</p>
          </template>
        </ContentDoc>
      </section>
      <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
        <JournalDetails
          v-if="data.details"
          :details="data.details ? data.details : ''"
        />
      </ContentQuery>
    </GridArticle>
  </NuxtLayout>
</template>
<script>
export default {
  name: "Page ...slug",
  methods: {
    transformDate(date) {
      const months = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ];
      const theDate = new Date(date);
      const month = theDate.getMonth();
      const year = theDate.getFullYear();
      const day = theDate.getDate();

      return `${day} ${months[month]} ${year}`;
    },
  },
};
</script>
<style scoped>
article {
  position: relative;
}
article::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  margin-left: var(--full-bleed);
  background: white;
  z-index: 0;
}
header {
  grid-area: header;
  z-index: 1;
}
section {
  grid-area: article;
  z-index: 1;
}
aside {
  grid-area: aside;
  z-index: 1;
}
@media screen and (max-width: 650px) {
  article {
    grid-template-areas: "header header header header" "aside aside aside aside" "article article article article";
  }
}
@media screen and (min-width: 651px) {
  article {
    grid-template-areas: "header header header header" "article article article aside";
  }
  aside {
    position: sticky;
    top: 134px;
  }
  section {
    padding-right: 120px;
  }
}
</style>
