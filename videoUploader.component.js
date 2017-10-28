angular.module('PSApp').component('videoUploader', {
	template:
		'<div>'+
			'<input id="fileupload" type="file" name="file" data-url="https://upload.wistia.com">'+
			'<span id="percent">0%</span>'+
			'<div id="progress">'+
  			'<div class="bar" style="width: 0%;"></div>'+
			'</div>'+
		'</div>',

	controller: function videoUploaderController() {
	  $('#fileupload').fileupload({
	      dataType: 'json',
	      formData: {
	      	api_password: '29b0b64ab2e6d803b45d132c933468ac49eb9b14f1e8b43ef8a46028ac2c1cf9'
	      },
	      add: function (e, data) {
	      	data.submit();
	      },
	      done: function (e, data) {
	      	data.context.text('Upload complete.');
	      },
	      progressall: function (e, data) {
	        var progress = parseInt(data.loaded / data.total * 100, 10);
	        $('#progress .bar').css(
	        	'width',
	        	progress + '%'
	        );
		    }
	  });
	}
})