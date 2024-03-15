$(document).ready(function(){
    var col_no=1;
    var td_id=1;
    var tr_id=1;
    const table= $('#table_data');
    const button= $('#delete_td');
    $('#tdata_struct').hide();
    $('#error').hide();
    $('#table_generation').click(function(){
        col_no=$('#head_col').val();
        var head_color=$('#head_color').val();
        var head_bg_color=$('#head_bg_color').val();
        var table_head="<td>col_head</td>";
        var table='<tr>';
        var w=(95/col_no);
        for(var i=1;i<=col_no;i++){
            table+='<th style="color:'+head_color+' ; background-color:'+head_bg_color+' ; width: '+w+'%; "> col'+i+'</th>';
        }
        table+='<th style="color:'+head_color+' ; background-color:'+head_bg_color+' ; width:5%;">Delete</th>';
        table+='</tr>';
       
        $('#tdata_struct').show();
        
        $('#thead_data').html(table);
        add_table_rows();
    });
    function add_table_rows(){
        var option='<label>No. of Columns: </label><select id="box_no"><option value="1">1</option>';
        for(var i=2;i<=col_no;i++){
            option+='<option value="'+i+'">'+i+'</option>';
        }
        option+='</select>';
        $('#cols_no').html(option);
        col_span();
    }
    function col_span(){
        var span=$('#box_no').val();
        $('#box_no').on('change', function(){
            var span=$('#box_no').val();
           
            var col_span='<input class="input_box col" id="row_d1">';
            for(var i=2;i<=span;i++){
            col_span+='<input class="input_box col" id="row_d'+i+'">';
            
            }
            $('#col_span').html(col_span);
        });
        
       
    }
    
    $('#delete').click(function(){
        $('#colour').val('#FFFFFF');
    });

    $('table').on('click','.check', function(){
        const td_i=$(this);
      
        var color_set=$('#colour').val();
        $(this).parent().css("background-color", color_set);
    });
    $('table').on('click','#del_row', function(){
        var tr_no=$(this).parent().parent().remove();
    })
    $('table').on('click','#clos', function(){
        var sum=0;
        var tr_no=$(this).parent().parent().attr('id');
        var td_del_col=parseInt($(this).parent().attr('colspan'));
        var td_no=$(this).parent().attr('id');
        const arr_s=td_no.split("_");
        var n=parseInt(arr_s[1]);
        $(this).parent().remove();
        var q=0;
        var prev=0;
        var next=td_id;
        $('.'+tr_no).each(function(){
            var td_class=$(this).attr('id');
            var p=parseInt((td_class.split('_'))[1]);
            if(p>n){
                q=p;
                if(next>q){
                    next=q;
                } 
            }
            if(prev<n && p<n){
                prev=p;
            }
            var td_col=$(this).attr('colspan');
            sum++;    
        });
        var flag=false;
       if(sum>0){

            var c1=parseInt($('#td_'+next).attr('colspan'));
            var c=parseInt($('#td_'+prev).attr('colspan'));
            
            if( $('#td_'+prev).length){
                $('#td_'+prev).attr('colspan',c+td_del_col);
                flag=true;
            }
           
            if(flag==false && $('#td_'+next).length && $('#td_'+next).attr('class')==tr_no){
                $('#td_'+next).attr('colspan',c1+td_del_col);
            }        
        
       }else{
            var t=parseInt(tr_no.split('_')[1]);
            $('#del_'+t).remove(); 
       }
        sum=0;
    });

    $('#table_row_generation').click(function(){
        var span=$('#box_no').val();
        var row_data=$('#table_rows').html();
        row_data+='<tr id=tr_'+tr_id+'>';
        let check=0;
        var flag=0;
        if(span==1){
            check=col_no;
            row_data+=' <td id="td_'+td_id+'"  class=tr_'+tr_id+' colspan="'+col_no+'">'+
            '<a type="checkbox" class="check"  id="check'+td_id+'" >O </a>'+
            'Hello:'+1+'<a id="clos">X</a></td>';
            flag=1;
            td_id++;
        }else{
            for(var i=1;i<=span;i++){
                var r=parseInt($('#row_d'+i+'').val());
                check+= parseInt(r);
                if(check>col_no || r==0 || r> col_no){
                    $('#error').show();
                    flag=0;
                    $('#table').hide();
                    row_data=$('#table_rows').html();
                }
                else{
                    $('#table').show();
                    $('#error').hide();
                    row_data+=' <td id="td_'+td_id+'" class=tr_'+tr_id+' colspan="'+r+'">'+
                    '<a type="checkbox" class="check "  id="check'+td_id+'" >O </a>'+
                    'Hello:'+i+'<a id="clos">X</a></td>';
                    td_id++;
                    flag=1;
                }
                
            }
        }
        if(flag==1){
            row_data+='<td id="del_'+tr_id+'" ><a id="del_row">Delete</a></td>';
        }
        row_data+='</tr>';
        tr_id++;
        if(check<col_no){
            $('#error').show();
            $('#table').hide();
            row_data=$('#table_rows').html();
        }
        
        $('#table_rows').html(row_data);
        
    })
})



