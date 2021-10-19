import Notify from 'simple-notify'

const notification = {
    pushNotify: function(argStatus, argText) {
        new Notify({
          status: argStatus,
          title: '',
          text: argText,
          effect: 'fade',
          speed: 300,
          customClass: null,
          customIcon: null,
          showIcon: true,
          showCloseButton: true,
          autoclose: false,
          autotimeout: 3000,
          gap: 20,
          distance: 20,
          type: 1,
          position: 'right top'
        })
    }
}

export default notification