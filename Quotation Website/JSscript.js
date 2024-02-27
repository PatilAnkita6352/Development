$(document).ready(function(){
	$('#final').text(0);
	$('#final').val(0);
	$('#pftotal').text(0);
	$('#trantotal').text(0);
	$('.maxGST').text(18.00);
	var maxi=18.00;
	$('#mytable').on('keyup','.qty, .rate, .mgst, .discount, .maxGST, #pf, #tc', function(){
		var row= $(this).closest('tr');
		var qty= row.find('.qty').val();
		var rate = row.find('.rate').val();
		var discount= row.find('.discount').val();
		var mgst= row.find('.mgst').val();
	    
		
	
		if(rate!=""){rate=parseFloat(rate);}
		else{rate=0;}
		if(qty!=""){qty=parseFloat(qty);}
		else{qty=0;}
		if(discount!=""){discount=parseFloat(discount);}
		else{discount=0;}
		if(mgst!=""){mgst=parseFloat(mgst);}
		else{mgst=0;}

		var amount=qty*rate;
		var disc= (amount*discount)/100;
		if(disc > 0)amount-=disc;
		var g=(amount*mgst)/100;
		row.find('.total').text(amount.toFixed(2));
		row.find('.total').val(amount.toFixed(2));
		row.find('.gst').text(g.toFixed(2));
		row.find('.gst').val(g.toFixed(2));
		calMaxmgst();
		calfTotal();
		
	});
    $('input').keypress(function(e){
		var charCode = (e.which) ? e.which : event.keyCode    
    
		if (String.fromCharCode(charCode).match(/[^0-9]/g))    

			return false; 
	});
	function calMaxmgst(){
		var gst=0.0;
		$('.mgst').each(function(){
			var maxi=$(this).val();
			var g=parseFloat(maxi);
			if(gst<g){
				gst=g;
			}
			$('.maxGST').text(gst);
			$('.maxGST').val(gst);
		});	
	}
	function calfTotal(){
		var total=0;
		$('.total').each(function(){
			var amt=$(this).val();
			if(amt>0){
				total+=parseFloat(amt);
			}
		});
		var pf=$('#pf').val();
		var tc=$('#tc').val();

		if(pf!=''){pf=parseFloat(pf);}
		else {pf=0;}
		if(tc!=''){tc=parseFloat(tc);}
		else {tc=0;}
        
		total+=pf+tc;

		var fgst=0;
		$('.gst').each(function(){
			var gs=$(this).val();
			if(gs!=''){fgst+=parseFloat(gs);}
			
		});

		console.log(total+"gs->"+fgst);
		var maxgst=$('.maxGST').val();
		var mgst=(pf*maxgst)/100;
		mgst+=(tc*maxgst)/100;
        fgst+=mgst;
		console.log(mgst+"mxx");

		$('#igst').text(fgst.toFixed(2));
		$('#igst').val(fgst.toFixed(2));
		
		total+=parseFloat(fgst);
		
		console.log(total);

		$('#final').text(total);
        $('#final').text(total);
		
		

	}

});
