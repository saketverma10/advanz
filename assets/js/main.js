var quizeNo=1;
var num=1;
  var num=1;
  
      
	  $(document).ready(function(){
			$('#anq').on('click', function() {
			$('#body').append('<div id="div'+quizeNo+'"> <label>'+quizeNo+'</label> &nbsp; <input class="form-control sub_field" type="text" name="question[]">&nbsp' + '\n' +
		'<select class="show-menu-arrow" onchange="mainquiz(this.value,this.id);" id="select'+quizeNo+'">' + '\n' + 
		'<option value="multiLine" >Multi-line Text</option> '+ '\n' +
		'<option value="singleChoice" selected>Single Choice</option> '+ '\n' +
		'<option value="multiChoice">Multiple Choice</option> </select>&nbsp;<p id="input_fields'+quizeNo+'"  class="inputs"><input type="text" class="form-control answer_field" name="answer'+quizeNo+'[]"/> <a id="subquiz'+quizeNo+'" onclick="addsub(this.id)"  class="sub_question">Add Sub Question</a> </p></div>');
		quizeNo++;	
			});
		});
	  
		$(document).ready(function(){
			$('#adnewque').on('click', function() {
				 $(this).closest('form').find("input[type=text], textarea").val("");
			});
		});
		
		$(document).ready(function(){
			$('#cancel').on('click', function() {
				 location.reload();
			});
		});
	  
	  function subans(val,boxid){
	   var contid = boxid.match(/\d+/);
	   var  fNo = boxid.substr(6);
	   
		if(val == 'multiLine'){
		$('#input_fields'+fNo).html('<textarea name="answer'+contid+'[]" class="form-control answer_field" /> </textarea>'); 
		}else if(val == 'singleChoice'){
			$('#input_fields'+fNo).html('<input type="text" class="form-control answer_field" name="answer'+contid+'[]"/><a  id="staticm'+num+'" onclick="addsub(this.id)"  class="sub_question">Add Sub Question</a>'); //add input box
       }else{
			$('#input_fields'+fNo).html('<input type="text" class="form-control answer_field" name="answer'+contid+'[]"/><a  id="staticm'+num+'" onclick="addsub(this.id)"  class="sub_question">Add Sub Question</a> <br/> <input type="text" class="form-control answer_field" style="margin-top: 5px;" name="answer'+quizeNo+'[]"/><a id="f'+contid+'_2_'+num+'" onclick="addTsub(this.id)"  class="sub_question">Add Sub Question</a> <br/> <input type="text" class="form-control answer_field" style="margin-top: 5px;" name="answer'+quizeNo+'[]"/><a id="f'+contid+'_3_'+num+'" onclick="addTsub(this.id)"  class="sub_question">Add Sub Question</a> <br/> <input type="text" class="form-control answer_field" style="margin-top: 5px;" name="answer'+quizeNo+'[]"/><a id="f'+contid+'_4_'+num+'" onclick="addTsub(this.id)"  class="sub_question">Add Sub Question</a> <br/> <input type="text" class="form-control answer_field" style="margin-top: 5px;" name="answer'+quizeNo+'[]"/><a id="f'+contid+'_5_'+num+'" onclick="addTsub(this.id)"  class="sub_question">Add Sub Question</a>');
      	}
	  }
	  
	  
	  function mainquiz(val,boxid){
	   var qNum = boxid.match(/\d+/);
			if(val == 'multiLine'){
		   $('#input_fields'+qNum).html('<textarea name="answer0[]" class="form-control answer_field" /> </textarea>'); //add input box
		   }else if(val == 'singleChoice'){
				$('#input_fields'+qNum).html('<input type="text" class="form-control answer_field" name="answer'+qNum+'[]"/> <a id="statica'+num+'" onclick="addsub(this.id)"  class="sub_question">Add Sub Question</a>'); //add input box
		   }else{
				$('#input_fields'+qNum).html('<input type="text" class="form-control answer_field" name="answer'+qNum+'[]"/><a  id="staticm'+qNum+'" onclick="addsub(this.id)"  class="sub_question">Add Sub Question</a> <br/> <input type="text" class="form-control answer_field" style="margin-top: 5px;" name="answer'+qNum+'[]"/><a id="f'+qNum+'_2_'+num+'" onclick="addTsub(this.id)"  class="sub_question">Add Sub Question</a> <br/> <input type="text" class="form-control answer_field" style="margin-top: 5px;" name="answer'+qNum+'[]"/><a id="f'+qNum+'_3_'+num+'" onclick="addTsub(this.id)"  class="sub_question">Add Sub Question</a> <br/> <input type="text" class="form-control answer_field" style="margin-top: 5px;" name="answer'+qNum+'[]"/><a id="f'+qNum+'_4_'+num+'" onclick="addTsub(this.id)"  class="sub_question">Add Sub Question</a> <br/> <input type="text" class="form-control answer_field" style="margin-top: 5px;" name="answer'+qNum+'[]"/><a id="f'+qNum+'_5_'+num+'" onclick="addTsub(this.id)"  class="sub_question">Add Sub Question</a>');
			}
	  }
	  
	  
	  
	  function addsub(id){
	  $('#'+id).hide();
	  var divid=$('#'+id).parents("div").attr('id');
	  var val= divid+'_1';
	  var  boxNo = val.substr(3);
	  var lbl= val.replace(/\_/g, '.');
	  var  lblNo = lbl.substr(3);
	  var myString =val.split(".");// divid.substr(divid.indexOf(".") + 1)
		$('#'+divid).append('<div id="'+val+'"> <label>'+lblNo+'</label> &nbsp; <input class="form-control sub_field" type="text" name="question[]">&nbsp' + '\n' +
		'<select class="show-menu-arrow" onchange="subans(this.value,this.id);" id="subque'+boxNo+'">' + '\n' + 
		'<option value="multiLine" >Multi-line Text</option> '+ '\n' +
		'<option value="singleChoice">Single Choice</option> '+ '\n' +
		'<option value="multiChoice">Multiple Choice</option> </select>&nbsp;<p id="input_fields'+boxNo+'"  class="inputs"><input type="text" class="form-control answer_field" name="answer'+num+'[]"/> <a id="statica'+num+'" onclick="addsub(this.id)"  class="sub_question">Add Sub Question</a> </p> </div>');
		num++;
	  }
	function addTsub(id){
		$('#'+id).hide();
		var res=id.split("_");
      var divid=$('#'+id).parents("div").attr('id');
	  var val= divid+'_'+res[1];
	  var  boxNo = val.substr(3);
	  var lbl= val.replace(/\_/g, '.');
	  var  lblNo = lbl.substr(3);
	  var myString =val.split(".");
		$('#'+divid).append('<div id="'+val+'"> <label>'+lblNo+'</label> &nbsp; <input class="form-control sub_field" type="text" name="question[]">&nbsp' + '\n' +
		'<select class="show-menu-arrow" onchange="subans(this.value,this.id);" id="subque'+boxNo+'">' + '\n' + 
		'<option value="multiLine" >Multi-line Text</option> '+ '\n' +
		'<option value="singleChoice">Single Choice</option> '+ '\n' +
		'<option value="multiChoice">Multiple Choice</option> </select>&nbsp;<p id="input_fields'+boxNo+'"  class="inputs"><input type="text" class="form-control answer_field" name="answer'+num+'[]"/> <a id="statica'+num+'" onclick="addsub(this.id)"  class="sub_question">Add Sub Question</a> </p> </div>');
		num++;
      }
  
      $('#save').on('click', function() {
		  
	  var message="request deny";
      var question = document.getElementsByName('question[]');
      var sendInfo=[];
	  var x=0;
	  var j=0;
	  
      for (var i = 0; i <question.length; i++) {
	  j=i+1;
	  var answers = document.getElementsByName('answer'+j+'[]');
	  var ansString='';
	  for(x=0; x<answers.length; x++){
	    message="request send";
			if(answers[x] && answers[x].value !=''){
					ansString = ansString + answers[x].value;
				}
		}
      var que=question[i];
      var obj = {
                 Question: que.value,
                 Answer: ansString
             };
      sendInfo.push(obj);
      }
	  
      $.ajax({
         type: "POST",
         data: {sendInfo:sendInfo, message: message},
         url: "http://localhost/advanz/file//submit.php",
         success: function(msg){
				alert(msg);
			}
      });
      
      });