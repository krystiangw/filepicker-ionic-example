'use strict';
angular.module('starter.services', [])

.service('FilesService', function() {

	var files = [{
		id: 1,
		url: "https://www.filepicker.io/api/file/KIf6LZf4Q9KemVQHntul", 
		filename: "Npm_logo.png", 
		mimetype: "image/png", 
		size: 343, 
	},
	{
		id: 2,
		url: "https://www.filepicker.io/api/file/8RVUaFTkTni7344XdVuo", 
		filename: "filepicker_logo.png", 
		mimetype: "image/png", 
		size: 37913
	}
	];


	return {
		all: function() {
			return files;
		},
		add: function(data){
			console.log('adding... ', data);
			data.id = files[files.length-1].id + 1;
			files.push(data);
		},
		remove: function(chat) {
			files.splice(files.indexOf(chat), 1);
		},
		get: function(fileId) {
			return files.filter(function(item){
				return item.id === fileId;
			})[0];
		}
	};
});
