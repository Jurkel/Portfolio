
window.onload = function() {
  Formio.createForm(document.getElementById('formio'), 'https://pmmamomjmqbcqdi.form.io/contactform').then(function(form) {
            // 3) Submit the form data
  form.on('submit', (submission) => {
      console.log('The form was just submitted!!!');
      console.log(submission);
      console.log(submission.data);
          });
          // 4) Catching errors
  form.on('error', (errors) => {
      this.console.log('We have errors!');
          });
    // 5) If a Thank You page is needed
  // form.on('submitDone', function(completed) {
  // window.location = './thanks.html';
  // })
   });
  };