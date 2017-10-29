angular.
	module('PSApp').
	component('videoUploader', {
		template:
			'<div>' +
				'<input id="fileupload" type="file" name="files[]" data-url="https://upload.wistia.com">' +
				'<span id="percent">0%</span>' +
				'<div id="progressBar">' +
	  			'<div class="bar" style="width: 0%;"></div>' +
				'</div>' +
			'</div>',
		controller: function videoUploaderController() {
		  $('#fileupload').fileupload({
		      dataType: 'json',
		      formData: {
		      	api_password: '29b0b64ab2e6d803b45d132c933468ac49eb9b14f1e8b43ef8a46028ac2c1cf9',
		      	method: 'POST'
		      },
		      add: function (e, data) {
		      	console.log('Log before submit')
		      	data.submit();
		      	console.log('AFTER SUBMIT')
		      },
		      done: function (e, data) {
		      	data.context.text('Upload complete.');
		      	console.log('UPLOAD IS COMPLETE')
		      },
		      progressall: function (e, data) {
		        var progress = parseInt(data.loaded / data.total * 100, 10);
		        $('#progress .bar').css(
		        	'width',
		        	progress + '%'
		        );
		        $('#percent').text(progress + '%');
			    }
		  });
	  }
  })