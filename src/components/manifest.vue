<template>
  <div class="manifesto-page">
    <div class="manifesto">
      {{ here }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'osManifest',
  props: {
    msg: String
  },
  data: function() {
    return {
      here: 'Ну то есть это ИНФА: театральный кооператив такой то, миша и полина - абзац текста. Контакты. Форма для отправки сообщения. Плюс список кооператоров. Это самая минималистичная страница здесь главное подобрать фон и буквы.' 
    }
  },
  created: function() {
    
  }
}
</script>
<style lang="scss" scoped>
  .manifesto-page {
    min-height: 100vh;
    display: grid;
    grid-template-areas: '. . .' '. manifesto .' '. . .';
    grid-template-columns: 1fr 1fr 1fr;
  }
  .manifesto {
    grid-area: manifesto;
    align-self: center
  }
</style>
