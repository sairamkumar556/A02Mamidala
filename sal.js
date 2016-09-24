function calc() 
{
    $name = $("#enterthename").val();
    
    //var name = document.forms["form1"]["enterthename"].value;
    var dob1 = document.forms["form1"]["dob"].value;
    var place1 = document.forms["form1"]["place"].value;
    var sal1 = document.forms["form1"]["sal"].value;
    if(sal1<0){
        alert("Salary should be greater than zero");
    }
    else{
    da1=sal1*46/100;
    $("#da").val(Math.round(da1));
    //document.getElementById("da").value = name;
    var hra1 = Math.round(sal1*12/100);
    document.getElementById("hra").value=hra1;
    var pf1 = Math.round(sal1*8/100);
    //document.getElementById("pf").value=pf1;
    $("#pf").val(pf1);
    var pd1 = Math.round(sal1*8/100);
    document.getElementById("pd").value=pd1;
    var gsal1=hra1+pd1+da1;
    $("#gsal").val(Math.round(gsal1));

    tax1=gsal1*20/100;
    $("#tax").val(Math.round(tax1));

    ns1=gsal1-(tax1+pf1);
    $("#ns").val(Math.round(ns1));
    }
}