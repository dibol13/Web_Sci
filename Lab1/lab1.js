$('#cdbutton').click(function(){

    var elem = document.getElementById('cdbutton');
    elem.parentNode.removeChild(elem);

    var tweets = [];
    var hashes = [];

    $.ajax({ 
    	type: 'GET',
    	async: false,
    	url: 'tweets.json', 
    	data: { get_param: 'value' }, 
    	dataType: 'json',
    	success: function (data) { 
        	$.each(data, function(index, element) {
        		tweets.push(element.text);
                $.each(this.entities, function() {
                    $.each(this, function() {
                        if(this.text){
                            hashes.push(this.text);
                        }
                    });
                });
       		});
	    }
    });
});