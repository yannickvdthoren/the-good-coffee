<template>
  <ul>
    <li>
      <a href="https://www.instagram.com/thegoodcoffeedotcom/" rel="noreferrer">
        <IconsInstagram />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/company/thegoodcoffee/"
        rel="noreferrer"
      >
        <IconsLinkedin />
      </a>
    </li>
    <li>
      <a href="mailto:yannick@the-good-coffee.com" rel="noreferrer">
        <IconsEmail />
      </a>
    </li>
  </ul>
</template>
<style scoped>
ul {
  display: flex;
  gap: 8px;
}
a svg {
  width: 24px;
  height: 24px;
}
@media screen and (max-width: 650px) {
  ul {
    margin-top: auto;
    align-self: center;
    gap: 24px;
  }
}
</style>
