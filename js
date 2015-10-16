$(function () {	

	  var HomeLoanAmt,
          HomeLoanIntRate,
          HomeLoanTenure;
	
function EMIcalc(){
	
         HomeLoanAmt = $("#HomeLoanAmt").val(),
		 HomeLoanIntRate = $("#HomeLoanIntRate").val(),
		 HomeLoanTenure = $("#HomeLoanTenure").val();
   
    var p = HomeLoanAmt,
		r = (HomeLoanIntRate/12/100),
		n = (HomeLoanTenure * 12);
  
    var E = ((p * r) * ((Math.pow((1 + r),n)) / (Math.pow((1 + r),n) -1))),    
		TotalIntrestPayable =  Math.round(E * n) ; 
	//Globalize.format(Math.round(f), "n", "en-IN")
	
	
    $(".EMI").html("<h4>" + Math.round(E) + "</h4>");    
    $(".TotalIntrestPayable").html("<h4>" + (TotalIntrestPayable - p) + "</h4>");    
    $(".TotalPayment").html("<h4>" + TotalIntrestPayable + "</h4>");
	
	
        
        // Build the chart
        $('#container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Breakup of Total Amount'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: "Brands",
                colorByPoint: true,
                data: [
                    {
                    name: "Total Interest",
                    y: 41.7,
                    sliced: true,
                    selected: true
                   },
                    {
                    name: "Principle Loan Amount",
                    y: 58.3
                }]
            }]
        });
	
};
 	EMIcalc(); 
	
    $(document).on("click","#homeLoan",function(e){
		  e.preventDefault();
		  EMIcalc();		  
	});
	
	 $(document).on("change","input",function(e){ 
		  EMIcalc();
	});
	
    });
