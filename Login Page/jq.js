$(document).ready(function(){
	$("#fnerror").hide();
	let fnameerror=true;
	$("#fname").keyup(function(){
		validatefname();
	});
	function validatefname(){
		fnameerror=true;
		let name=$("#fname").val();
		if(name.length == ""){
			$("#fnerror").show();
			fnameerror=false;
			return false;
		}else{
			$("#fnerror").hide();
		}
	}

	$("#lnerror").hide();
	let lnameerror=true;
	$("#lname").keyup(function(){
		validatelname();
	});
	function validatelname(){
		lnameerror=true;
		let name=$("#lname").val();
		if(name.length == ""){
			$("#lnerror").show();
			lnameerror=false;
			return false;
		}else{
			$("#lnerror").hide();
		}
	}

	$("#pass").hide();
	let passerror=true;
	$("#password").keyup(function(){
		validatepass();
	});
	function validatepass(){
	 passerror=true;
		let password=$("#password").val();
		let regexupper= /[A-Z]+/;
		let regexlower=/[a-z]+/;
		let regexnumber=/[0-9]+/;
		let specialchar=/[\!\@\#\$\%\^\&\*\(\)\?\~\-]+/;
		if(password.length == ""){
			$("#pass").show();
			passerror= false;
			return false;
		}else if(password.length <8 || password.length >16){
			$("#pass").show();
			$("#pass").html("**Password length must be between 8 - 16 character");
			passerror= false;
			return false;
		}else if(!password.match(regexupper)){
			$("#pass").show();
			$("#pass").html("**must Contain uppercase character");
			passerror= false;
			return false;
		}else if(!password.match(regexlower)){
			$("#pass").show();
			$("#pass").html("**must contain lowercase character");
			passerror= false;
			return false;
		}else if(!password.match(regexnumber)){
			$("#pass").show();
			$("#pass").html("**must contain atleast one number 0-9");
			passerror= false;
			return false;
		}else if(!password.match(specialchar)){
			$("#pass").show();
			$("#pass").html("**must contain one special character !,@,#,$,%,^,&,*,(,),-");
			passerror= false;
			return false;
		}else{
			$("#pass").hide();
		}
	}
	$("#cnpass").hide();
	let cnpasserror= true;
	$("#Conpassword").keyup(function(){
		validateconpass();
	});
	function validateconpass(){
		cnpasserror= true;
		let password= $("#Conpassword").val();
		let passwd= $("#password").val();
		if(password.length == "" ){
			$("#cnpass").show();
			cnpasserror=false;
			return false;
		}else if(passwd != password){
			$("#cnpass").show();
			$("#cnpass").html("**Password and Confirm password must match");
		}else{
			$("#cnpass").hide();
		}
	}
	$("#phonerror").hide();
	let pherror=true;
	$("#phone").keyup(function(){
		validatephone();
	});
	function validatephone(){
		pherror=true;
		let phone=$("#phone").val();
		if(phone.length == ""){
			$("#phonerror").show();
			pherror=false;
			return false;
		}else if(phone.length < 10){
			$("#phonerror").show();
			$("#phonerror").html("Enter Valid phone number");
			pherror=false;
			return false;
		}else{
			$("#phonerror").hide();
		}
	}
   
	$("#subbutton").click(function(){
		validate();
	});
	 function validate(){
		 validatefname();
		validatelname();
		validatephone();
		validatepass();
		validateconpass();
		if(fnameerror==true && lnameerror==true && passerror==true && cnpasserror==true && pherror==true){
			location.href='grid.html';
			return true;
		}else{
			
			return false;
		}
	}
});