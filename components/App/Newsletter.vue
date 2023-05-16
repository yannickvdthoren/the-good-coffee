<template>
  <div class="Newsletter" :class="{ full: !lite, lite: lite }">
    <h4 v-if="!lite">Newsletter</h4>
    <p v-if="!lite">
      Thanks for reading The Good Coffee Journal! Subscribe for free to receive
      new posts and support my work.
    </p>
    <form @submit.prevent="onSubmit">
      <div class="form_group">
        <label for="">
          Subscribe to our newsletter
          <input type="email" v-model="email" placeholder="email@exemple.com" />
        </label>
        <button type="submit">Subscribe</button>
      </div>
      <span class="error" v-if="error">{{ errorMsg }}</span>
      <span class="note">
        By clicking on subscribe I agree to receive your newsletters and accept
        the data privacy statement.
      </span>
    </form>
  </div>
</template>
<script setup>
const props = defineProps({
  lite: {
    type: Boolean,
    default: false,
  },
});

// Setup creation of new contact in Brevo
import { ref } from "vue";
const config = useRuntimeConfig();
const email = ref(null);
let error = false;
let errorMsg = "";

const url = "https://api.brevo.com/v3/contacts";
const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    "api-key": config.public.brevoKey,
  },
  body: {
    email: "elly@email.com",
    ext_id: "externalId",
    attributes: { FNAME: "Elly", LNAME: "Roger" },
    emailBlacklisted: false,
    smsBlacklisted: false,
    listIds: [36],
    updateEnabled: false,
    smtpBlacklistSender: ["user@example.com"],
  },
};

function onSubmit() {
  $fetch(url, options)
    .then((res) => console.log(res))
    .catch((err) => {
      error = false;
      errorMsg = "";
      console.log(err);
      //   if (err.statusCode == 400) {
      //     console.log(err);
      //     // err.response.data.errors.map((msg) => {
      //     //   error = true;
      //     //   errorMsg = msg.msg;
      //     // });
      //   }
    });
}
</script>
<style scoped>
.full {
  padding: 24px;
  background: var(--lightestPink);
}
h4 {
  margin-bottom: 16px;
  font-family: var(--font-serif);
  color: var(--darkPink);
}
p {
  font-size: var(--sm);
}
.form_group {
  display: flex;
  align-items: flex-end;
  gap: 16px;
}
label {
  flex: 2 1 20ch;
  display: flex;
  flex-direction: column;
  font-size: var(--sm);
  font-family: var(--font-serif);
  gap: 4px;
}
input {
  padding: 12px 16px;
  font-family: var(--font-sans);
  line-height: 1;
  color: currentColor;
  background: transparent;
  border-radius: var(--border-radius);
  border: 1px solid currentColor;
}
input::placeholder {
  color: currentColor;
  opacity: 0.8;
}
button {
  flex: 1 1 10ch;
  padding: 15.5px 16px 13.5px;
  line-height: 1;
  color: var(--white);
  background: var(--blue);
  border-radius: var(--border-radius);
  border: 1px solid var(--blue);
  transition: background var(--ease), color var(--ease);
}
.lite button {
  color: var(--blue);
  background: var(--white);
  border: 1px solid var(--white);
}
@media (hover: hover) {
  button:hover {
    color: var(--white);
    background: transparent;
  }
}
.note {
  display: block;
  font-size: var(--xs);
  margin-top: 16px;
}
</style>
