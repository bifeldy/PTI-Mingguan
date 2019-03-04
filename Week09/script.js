
$(document).ready(function(){
	$( "#accordion" ).accordion({ 
		collapsible: true
	});

	let dialog = $('#dialog-form').dialog({
			autoOpen: false, 
			height: 400, 
			width: 350, 
			modal: true, 
			buttons: {
				"Order": function(){ 
				if($("#inputName").val()=="" || $("#inputDeposit").val()==""){
					alert("Data Incomplete");
				}
				else{
					let roomType;
					if($("#inputHarga").val()==200){
						roomType = "Single";
					}
					else if($("#inputHarga").val()==350){
						roomType = "Double";
					}
					else if($("#inputHarga").val()==600){
						roomType = "Duplex";
					}
					else if($("#inputHarga").val()==1000){
						roomType = "Cabana";
					}

					let rowBaru = "<tr> <td>" + $("#inputNama").val() + "</td> <td>" + roomType + "</td> <td>$"+$("#inputDeposit").val()+" </td> </tr>";
					
					$("tbody").append(rowBaru);

					dialog.dialog("close");
				}
			}, 
			Cancel: function() { 
				dialog.dialog( "close" );           
			} 
		}, 
		close: function() { 
			form[0].reset();     
		} 
	}); 


	$('.btnAddOrder').on('click',function(btn){
		let price = $(this).parent().attr("id");
		if(price=="single"){
			$("#inputHarga").val("200");
		}
		else if(price=="double"){
			$("#inputHarga").val("350");
		}
		else if(price=="duplex"){
			$("#inputHarga").val("600");
		}
		else if(price=="cabana"){
			$("#inputHarga").val("1000");
		}

		dialog.dialog('open'); 
	}); 

	let form = dialog.find('form');  	
});


