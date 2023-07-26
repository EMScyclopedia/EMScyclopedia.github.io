function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    if (evt.target.value*10+parseInt(evt.key) > 999) return false;
    return true;
  }