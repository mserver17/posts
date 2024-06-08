<template>
    <div v-if="show" class="modal-backdrop">
      <div class="modal">
        <div class="modal-content">
          <h4>{{ message }}</h4>
          <div class="modal-buttons">
            <button @click="confirm" class="btn btn-confirm">Подтвердить</button>
            <button @click="cancel" class="btn btn-cancel">Отмена</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'confirm-modal',
    props: {
      show: {
        type: Boolean,
        required: true
      },
      message: {
        type: String,
        default: 'Вы уверены, что хотите удалить этот пост?'
      }
    },
    methods: {
      confirm() {
        this.$emit('confirm');
      },
      cancel() {
        this.$emit('cancel');
      }
    }
  }
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-confirm {
    background-color: #4caf50;
    color: white;
  }
  
  .btn-cancel {
    background-color: #f44336;
    color: white;
  }
  </style>
  