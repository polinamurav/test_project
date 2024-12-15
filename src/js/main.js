import 'bootstrap';
import '../scss/styles.scss'

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})