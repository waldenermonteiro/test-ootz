import swal from 'sweetalert'
export default {
  methods: {
    $setNotifyDanger (errors) {
      const uniqueMessage = errors.message || errors
      if (Array.isArray(errors)) {
        this.setMultipleNotifyDanger(errors)
      } else {
        this.setUniqueNotifyDanger(uniqueMessage)
      }
    },
    setUniqueNotifyDanger (message) {
      swal({
        title: 'Something went wrong!',
        text: message,
        icon: 'error'
      })
    },
    setMultipleNotifyDanger (errors) {
      let messageComplete = ''
      errors.forEach(error => {
        messageComplete = `${messageComplete} \n - ${error.message}`
      })
      this.setUniqueNotifyDanger(messageComplete)
    },
    $setNotifySuccess (message) {
      swal({
        title: 'Good Job!',
        text: message,
        icon: 'success'
      })
    },

    $setNotifyInfo (message) {
      swal({
        title: 'Info!',
        text: message,
        icon: 'info'
      })
    },
    $setNotifyWarning (message) {
      swal({
        title: 'Warning!',
        text: message,
        icon: 'warning'
      })
    },
    $setDialogQuestion (obj) {
      swal({
        title: `${obj.title}`,
        text: `${obj.message}`,
        icon: 'warning',
        buttons: ['Cancel', 'Ok'],
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          obj.callback()
        }
      })
    }
  }
}
