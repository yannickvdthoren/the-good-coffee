<template>
  <NuxtLayout>
    <article>
      <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
        <JournalHeader :tags="data.tags" :image="data.image">
          <template v-slot:title>
            {{ data.title }}
          </template>
          <template v-slot:desc>
            {{ data.description }}
          </template>
          <template v-slot:date>
            {{ transformDate(data.date) }}
          </template>
        </JournalHeader>
      </ContentQuery>
      <section>
        <ContentDoc>
          <template #not-found>
            <p>No articles found.</p>
          </template>
        </ContentDoc>
        <AppNewsletter />
      </section>
      <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
        <JournalDetails
          v-if="data.place"
          :details="data.place"
          :title="data.title"
        />
      </ContentQuery>
    </article>
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
@media screen and (max-width: 650px) {
  article {
    margin: 32px 0;
  }
  aside {
    margin-top: 32px;
  }
}
@media screen and (min-width: 651px) {
  article {
    display: grid;
    grid-template-columns: 1fr minmax(50ch, 70ch) minmax(20ch, 40ch) 1fr;
    grid-template-areas: "header header header header" ". article aside .";
    align-items: flex-start;
    justify-content: center;
    gap: 32px 80px;
    margin: 80px 0;
  }
  header {
    grid-area: header;
  }
  section {
    grid-area: article;
  }
  aside {
    grid-area: aside;
  }
  aside {
    position: sticky;
    top: 134px;
  }
}
</style>
