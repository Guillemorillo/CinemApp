<template>
  <div class="modal fade" id="confirm" tabindex="-1" role="dialog" aria-labelledby="Confirmation" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirmación</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <span>Cambios Guardados</span>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close()">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close () {
      this.$router.push('/')
    }
  }
}
</script>
<style>
.modal {
  color: black;
}
</style>

