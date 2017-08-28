function handleKeyPress(e){
    var key = e.keyCode || e.which;
    
    if (key==13){
	for (i=0;i<10;i++){

	
	    var parentElementDiv = document.getElementById('searchContainerParent'+String(i));
	if (parentElementDiv != null){
	    $('#searchContainerParent'+String(i)).remove();
	}
	}    

	$('#testid').hide();
	document.getElementById('hits').style.display = "block";

	var getScore = document.getElementById('SearchQueryId').value;
	$.ajax({
  url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=jsonfm&search=gun&limit=10',
	    data: { action: 'opensearch', search: getScore, format: 'json', limit: '10'},
  dataType: 'jsonp',
  success: function (x) {
      for (i=0;i<10;i++){
	  var parentDiv = document.createElement('div');
	  var titleDiv = document.createElement('div');
	  var contentDiv = document.createElement('div');
	  var webpageUrl = x[3][i];
	  parentDiv.id = "searchContainerParent"+String(i);
	  titleDiv.id = 'searchContainerTitle'+String(i);
	  parentDiv.click( function(){ window.open(webpageUrl);})
	  var name = "#searchContainerTitle"+String(0);

	  titleDiv.innerHTML = x[1][i];
	  titleDiv.style.color = "#fc4a1a";
	  contentDiv.innerHTML = x[2][i];
	
	  parentDiv.style.marginTop = "10px";
	  parentDiv.style.borderRadius = "8px";
	  titleDiv.style.paddingTop = "10px";
	  titleDiv.style.paddingLeft = "10px";
	  titleDiv.style.paddingBottom = "10px";
	  titleDiv.style.fontFamily = "sans-serif";
	  titleDiv.style.fontSize = "20px";
	  titleDiv.style.fontWeight = "bold";
	  contentDiv.style.paddingBottom = "5px";
	  contentDiv.style.paddingLeft = "10px";	  
	  contentDiv.style.paddingRight = "10px";
	  contentDiv.style.fontFamily = "sans-serif";
	  
	  document.body.appendChild(parentDiv);
	  parentDiv.appendChild(titleDiv);
	  parentDiv.appendChild(contentDiv);
	  
      }
      
	  $('#searchContainerParent0').on("click", function(){
	      
	      window.open(x[3][0],"_blank");
	  });
            
	  $('#searchContainerParent1').on("click", function(){
	      
	      window.open(x[3][1],"_blank");
	  });
            
	  $('#searchContainerParent2').on("click", function(){
	      
	      window.open(x[3][2],"_blank");
	  });
            
	  $('#searchContainerParent3').on("click", function(){
	      
	      window.open(x[3][3],"_blank");
	  });
            
	  $('#searchContainerParent4').on("click", function(){
	      
	      window.open(x[3][4],"_blank");
	  });
            
	  $('#searchContainerParent5').on("click", function(){
	      
	      window.open(x[3][5],"_blank");
	  });
            
	  $('#searchContainerParent6').on("click", function(){
	      
	      window.open(x[3][6],"_blank");
	  });
            
	  $('#searchContainerParent7').on("click", function(){
	      
	      window.open(x[3][7],"_blank");
	  });
            
	  $('#searchContainerParent8').on("click", function(){
	      
	      window.open(x[3][8],"_blank");
	  });
            
	  $('#searchContainerTitle9').on("click", function(){
	      
	      window.open(x[3][9],"_blank");
	  });
  }
});


    }
}
