function calc()
    {
      form=document.getElementById("form1");
      //var form = $("#form1");
      //sal=parseFloat(sal);
      //sal=form.sal.value;
      salary = $("#sal").val();
      form.da.value=Math.round(salary*46/100);
     
      form.hra.value=Math.round(salary*12/100);

      form.pf.value=Math.round(salary*8/100);
      form.pd.value=Math.round(salary*8/100);

      d=Math.round(parseFloat(form.da.value));
      h=Math.round(parseFloat(form.hra.value));
      p=Math.round(parseFloat(form.pf.value));
      $('#gsal').val(salary);
      //gs=d+h+p;
      //form.gsal.value=(parseFloat(gs));
      //$(gs).val(Math.round((sal+d+h+p),2));
      
      tx=(form.gsal.value-p)*20/100;
      form.tax.value=Math.round(tx);
      t=Math.round(parseFloat(form.tax.value));
      form.ns.value=Math.round(parseFloat(gs-(t+p)));
      }
  }