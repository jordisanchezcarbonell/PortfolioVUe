<template>
  <div>
    <h3>PERSONAL INFORMATION </h3>
    <h3 class="personal-header">Jordi Sánchez Carbonell</h3>
    <div class="info email"><strong>E-mail:</strong> jordigw@gmail.com</div>
    <div class="info"><strong>Skype:</strong> jordiSanchez</div>
    <div class="info"><strong>Phone Number:</strong> +34676564769 </div>
    <div class="info"><strong>City:</strong> Barcelona </div>
        <iframe src="https://tierlistgames.h5p.com/content/1291007162358909947/embed" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>

    <Social/>
  </div>
</template>

<script>
import Social from "./Social";

export default {
  name: "PersonalInfo",
  props: ["post", "userName"],
  components: {
    Social,
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.info {
  margin-bottom: 10px;
}

.email {
  color: map-get($colors, primary);

  strong {
    color: lighten($text-color, 30%);
  }
}
</style>
