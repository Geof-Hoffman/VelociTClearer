$(function () {

    $('#name').keyup(function () {
        $('#greet').text('Hello,' + $('#name').val());
    })



    const input = document.querySelector('input');
    const log = document.getElementById('values');
    var optionsList = [{
        label: "Option 1",
        value: "option-1"
      },
      {
        label: "Option 2",
        value: "option-2"
      },
      {
        label: "Option 3",
        value: "option-3"
      }
    ];

   
    input.addEventListener('input', updateValue);

    function updateValue(e) {
        log.textContent = e.target.value;
    }

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
      
      //Add new todos
      $("input[type='text']").keypress(function(e) {
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
      });
});