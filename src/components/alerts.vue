<template>
  <div v-if="info" class="info-msg">
    <i class="fa fa-info-circle"></i>
    {{ info }}
  </div>

  <div v-if="success" class="success-msg">
    <i class="fa fa-check"></i>
    {{ success }}
  </div>

  <div v-if="warning" class="warning-msg">
    <i class="fa fa-warning"></i>
    {{ warning }}
  </div>

  <div v-if="error" class="error-msg">
    <i class="fa fa-times-circle"></i>
    {{ error }}
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: String,
      default: "",
    },
    success: {
      type: String,
      default: "",
    },
    warning: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css");

.info-msg,
.success-msg,
.warning-msg,
.error-msg {
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
    Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
}

.info-msg {
  color: #059;
  background-color: #bef;
}

.success-msg {
  color: #270;
  background-color: #dff2bf;
}

.warning-msg {
  color: #9f6000;
  background-color: #feefb3;
}

.error-msg {
  color: #d8000c;
  background-color: #ffbaba;
}
</style>
