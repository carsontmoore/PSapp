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
		      },
		      add: function (e, data) {
		      	data.context = $('<p/>').text('Uploading...').appendTo(document.body);
		      	data.submit();
		      },
		      done: function (e, data) {
		      	$('#progressBar .bar').css('width', "0px");
		      	$('#percent').text('0%');
		      	console.log("this is data argument: ", data);
		      	if(data.result.status === 'ready') {
		      		$('#videoEmbed').append('<div id="videoEmbed" class="wistia_embed wistia_async_"+data.result.hashed_id style="width:640px;height:360px;">&nbsp;</div>');
		      		data.context.text(data.result.name + 'has been successfully uploaded!');
		      	} else {
		      		data.context.text(data.result.name + ' uploaded successfully and is queued for Wistia encoding! Playback will occur when the video is ready.')
		      	}
		      },
		      progressall: function (e, data) {
		        var progress = parseInt(data.loaded / data.total * 100, 10);
		        $('#progressBar .bar').css(
		        	'width',
		        	progress + '%'
		        );
		        $('#percent').text(progress + '%');
			    },
		  });
		}
});