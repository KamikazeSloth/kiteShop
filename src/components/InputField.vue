<template>
  <legend class="fieldContainer">
    <label class="" :for="id">{{ labelText }}</label>
    <input 
      @input="validate" 
      class="inputField" 
      :id="id" 
      v-model="value" 
      :maxlength="maxLength"
      :minlength="minLength"/>
    <div v-if="!isValid">felmeddelande</div>
    <div v-else>korrekt värde!</div>
  </legend>
</template>

<script>
export default {
  name: "InputField",
  props: {
    labelText: String,
    id: String,
    validation: RegExp,
    maxLength: Number,
    minLength: Number
  },
  data() {
    return {
      value: "",
      isValid: false,
    };
  },
  methods: {
    validate: function () {
      if (this.validation.test(this.value)) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fieldContainer {
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  @include mediaQueryDesktop {
    width: 200px;
  }
}

.inputField {
  border: 1px solid rgba(204, 197, 197, 0.616);
  border-radius: 8px;
  padding: 8px;
}
</style>
