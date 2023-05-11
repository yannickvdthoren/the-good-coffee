<template>
  <main>
    <!-- <h1>{{ $t("hello", { name: "vue-i18n" }) }}</h1> -->
    <form>
      <label for="locale-select">{{ $t("language") }}: </label>
      <select v-model="$i18n.locale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </form>
    <ContentDoc :path="'/' + $i18n.locale" />
    {{ $i18n.locale }}
    <ContentList :path="'/' + $i18n.locale + '/journal'">
      <template #default="{ list }">
        <div v-for="article in list" :key="article._path">
          <nuxt-link :to="article._path">
            <h2>{{ article.title }}</h2>
          </nuxt-link>
        </div>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </main>
</template>
