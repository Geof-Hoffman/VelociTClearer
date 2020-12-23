$(function () {

    $(function(){
      $('#name').keyup(function(){
            $(".#greet").text()
        });
    });

    var issuesArray = [];

    

    var series = [
        {name: 'Attorney', issue: 'A1',
        lenderOpen: "AA1LO",
        LenderClear: "AA1LenderClear",
        TPO: "AA13PO",
        AtClear: "AA1AtClear",
        Comments:"AA1Comments"
    },
        {name: 'Florida', issue: 'survey',
        lenderOpen: "FLSLO",
        LenderClear: "FLSLenderClear",
        TPO: "FLS3PO",
        AtClear: "FLSAtClear",
        Comments:"FLSComments"
    },
        {name: 'Florida', issue: 'NOC',
        lenderOpen: "FLNOCLO",
        LenderClear: "FLNOCLenderClear",
        TPO: "FLNOC3PO",
        AtClear: "FLNOCAtClear",
        CommentNOC:"FLSComments"
    },
        {name: 'Florida', issue: 'Condo-NOC'},
        {name: 'Florida', issue: 'Marriage Cert'},

        {name: 'Florida', issue: 'PO-Signing Auth'},
        {name: 'state A', issue: 'A3'},
        {name: 'Virginia', issue: 'B1'},
        {name: 'state B', issue: 'B2'},
        {name: "All", issue: "Borrorer Authorization"},
        {name: "All", issue: "CMA	"},
        {name: "All", issue: "Corrective deed"},
        {name: "All", issue: "Deceased spouse/ death"},
        {name: "All", issue: "Deed To add"},
        {name: "All", issue: "deed to add"},
        {name: "All", issue: "Deed to delete"},
        {name: "All", issue: "Divorce decree"},
        {name: "All", issue: "Estate"},
        {name: "All", issue: "HOA information"},
        {name: "All", issue: "IRS Lien"},
        {name: "All", issue: "Judgment"},
        {name: "All", issue: "Judgment affidavit"},
        {name: "All", issue: "marriage cert"},
        {name: "All", issue: "name change"},
        {name: "All", issue: "No Financing affidavit"},
        {name: "All", issue: "OTP"},
        {name: "All", issue: "Possible judgment"},
        {name: "All", issue: "Power of attorney"},
        {name: "All", issue: "Prior owner POA aff"},
        {name: "All", issue: "Prior owner URT"},
        {name: "All", issue: "PSA"},
        {name: "All", issue: "Subordination"},
        {name: "All", issue: "Tax sale"},
        {name: "All", issue: "UCC"},
        {name: "All", issue: "URT"},
        {name: "All", issue: "wife remaining on title"},
        
        ];
   
    var statelist= document.getElementById("stateList");
    //var stateIssues= document.getElementById("stateIssues");


    // displays value of state dropdown to selectedState div
    $(".state").change(function(){
        var state = $(this).val();
        var options =  '<option value=""><strong>issues</strong></option>';
        $(series).each(function(index, value){
            if(value.name == state){
                options += '<option value="'+value.issue+'">'+value.issue+'</option>';
            }
        });
        
        $('.issue').html(options);
    });
$(function(){  
/*    wrapped in function so I can hide it...
//creates dropdown options for states from optionsList array, 
var optionsList = [{
    label: "Florida",
    value: "option-1"
  },
  {
    label: "Attorney",
    value: "option-2"
  },
  {
    label: "CTS",
    value: "option-3"
  },
  {
    label: "Virginia",
    value: "option-4"
  }
];

  optionsList.forEach(function(item, index, array) {
    var opt = document.createElement("option");
    opt.text = item.label;
    opt.value = item.value;
     statelist.add(opt);
    });
  issuesArray.forEach(function(item, index, array) {
    var opt = document.createElement("option");
    opt.text = item.label;
    opt.value = item.value;
   statelist.add(opt);
     
});
 */
});  

  //  input.addEventListener('#enterText', updateValue);

  //  function updateValue(e) {
      //  log.textContent = e.target.value;
  //  }
    //toggles divs on and off
    $(document).ready(function () {
        $('input[type="checkbox"]').click(function () {
            var inputValue = $(this).attr("value");
            $("." + inputValue).toggle();
        });
    });

    function updateNumbers() {
        //update variable
          var lists = document.querySelectorAll("number");
          //update number
          for(var i = 0; i < lists.length; i++) {
            $(lists[i]).html(i+1 + ") ");
          }
      }
      updateNumbers();
      //Check off Specific Todos By Clicking
      $("ul").on("click", "li", function () {
        $(this).toggleClass("completed");
      });
      
      //Click on X to delete Todo
      $("ul").on('click', "span", function (e) {
        e.stopPropagation();
        $(this).closest("li").fadeOut(500,function() {
         $(this).remove();
          updateNumbers();
        });
      });
      
      //Clear All
      $(".removeall").on('click', function (e) {
          $("li").fadeOut(500, function() {
            $(this).remove();
          });
      });
      $("#issue").mouseup(function(e) {        
          //grab text
          var todoText = $(this).val();
          //append todotext to ul
          if( $(this).val() !== "") {
          $("ul").append("<li><span><i class='fa fa-trash'> </i></span>" + "<number></number>" + todoText + "</li>");
                      
          updateNumbers();
          //clear text
          $(this).val("");
        }
      });



    /*  
      //Add new todos with keypress
      $("#issue").keypress(function(e) {
        if(e.which === 13) {
          //grab text
          var todoText = $(this).val();
          //append todotext to ul
          if( $(this).val() !== "") {
          $("ul").append("<li><span><i class='fa fa-trash'> </i></span>" + "<number></number>" + todoText + "</li>");
            }
          updateNumbers();
          //clear text
          $(this).val("");
        }
      });
      
      $(".add").click(function() {
        $("input[type='text']").fadeToggle(200);
      });*/
});