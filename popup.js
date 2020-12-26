$(function () {
  var states = [
      {
          state: 'Attorney',
          issues: [
              {
                  issue: `URT`,
                  min: 1,
                  max: 1,
                  lo: ``,
                  mo: ``,
                  tpo: ``,
                  etic: ``,
                  ltic: ``,
                  com: ``
              },
              {
                  issue: `JUDGMENT`,
                  min: 1,
                  max: 1,
                  lo: ``,
                  mo: ``,
                  tpo: ``,
                  etic: ``,
                  ltic: ``,
                  com: ``
              }, {
                  issue: `tax lien`,
                  min: 1,
                  max: 1,
                  lo: ``,
                  mo: ``,
                  tpo: ``,
                  etic: ``,
                  ltic: ``,
                  com: ``
              }
          ]
      },{
          state: 'Florida',
          issues: [
              {
                  issue: `CMA`,
                  min: 1,
                  max: 1,
                  lo: ``,
                  mo: ``,
                  tpo: ``,
                  etic: ``,
                  ltic: ``,
                  com: ``
              },
              {
                  issue: `Survey`,
                  min: 1,
                  max: 1,
                  lo: ``,
                  mo: ``,
                  tpo: ``,
                  etic: ``,
                  ltic: ``,
                  com: ``
              },{
                  issue: `NOC`,
                  min: 1,
                  max: 1,
                  lo: ``,
                  mo: ``,
                  tpo: ``,
                  etic: ``,
                  ltic: ``,
                  com: ``
              }
          ]
      },{
          state: 'Virginia',
          issues: [
              {
                  issue: `POA`,
                  min: 1,
                  max: 1,
                  lo: ``,
                  mo: ``,
                  tpo: ``,
                  etic: ``,
                  ltic: ``,
                  com: ``
              },
              {
                  issue: `HOA`,
                  min: 1,
                  max: 1,
                  lo: ``,
                  mo: ``,
                  tpo: ``,
                  etic: ``,
                  ltic: ``,
                  com: ``
              }, {
                  issue: `UCC`,
                  min: 1,
                  max: 1,
                  lo: ``,
                  mo: ``,
                  tpo: ``,
                  etic: ``,
                  ltic: ``,
                  com: ``
              }
          ]
      }];
      
       // displays states in dropdown
      var output = '';
      for (var i = 0; i < states.length; i++) {
          output += '<option>' + states[i].state + '</option>';
      }
      document.getElementById('state').innerHTML = output;
      
  

 
  $(".state").change(function () {
    var stateName = $(this).val();
    
      console.log(stateName);

    var issuesList=[];
    var options = '<option value=""><strong>issues</strong></option>';
    $(states).each(function (index, value) {
      
        options += '<option value="' + value.issue + '">' + value.issue + '</option>';
      
    });

    $('.issue').html(options);
  });


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
    for (var i = 0; i < lists.length; i++) {
      $(lists[i]).html(i + 1 + ") ");
    }
  }
  

  //Click on X to delete Todo
  $("ul").on('click', "span", function (e) {
    e.stopPropagation();
    $(this).closest("li").fadeOut(500, function () {
      $(this).remove();
      updateNumbers();
    });
  });

  //Clear All
  $(".removeall").on('click', function (e) {
    $("li").fadeOut(500, function () {
      $(this).remove();
    });
  });
  $("#issue").mouseup(function (e) {
    //grab text
    var todoText = $(this).val();
    //append todotext to ul
    if ($(this).val() !== "") {
      $("ul").append("<li><span><i class='fa fa-trash'> </i></span>" + "<number></number>" + todoText + "</li>");

      updateNumbers();
      //clear text
      $(this).val("");
    }
  });
 
  //Copy butttons
  var copyLoanOpenBtn = document.querySelector('.copyLoanOpenBtn');
  var copyMemberOpenBtn = document.querySelector('.copyMemberOpenBtn');
  var copythirdPartyOpenBtn = document.querySelector('.copythirdPartyOpenBtn');
  var copyCTSTICBtn = document.querySelector('.copyCTSTICBtn');
  var copyticLoanBtn = document.querySelector('.copyticLoanBtn');
  //functions that copy textareas to clipboard
  copyLoanOpenBtn.addEventListener('click', function (event) {
    var copyTextarea = document.querySelector('.copyLoanOpen');
    copyTextarea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  });
  copyMemberOpenBtn.addEventListener('click', function (event) {
    var copyTextarea = document.querySelector('.copyMemberOpen');
    copyTextarea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  });
  copythirdPartyOpenBtn.addEventListener('click', function (event) {
    var copyTextarea = document.querySelector('.copythirdPartyOpen');
    copyTextarea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  });
  copyCTSTICBtn.addEventListener('click', function (event) {
    var copyTextarea = document.querySelector('.copyCTSTIC');
    copyTextarea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  });
  copyticLoanBtn.addEventListener('click', function (event) {
    var copyTextarea = document.querySelector('.copyticLoan');
    copyTextarea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  });

var today = new Date()
var curHr = today.getHours()
var timeOfDay = 'Hello';
if (curHr < 12) {
  timeOfDay = "Good morning";
} else if (curHr < 15) {
  timeOfDay = "Good afternoon";
} else {
  timeOfDay = 'Good evening';
}
  var LoanOpenDefault = 
`${timeOfDay},
I am working on the title portion of this refinance.  `;
  document.getElementById("copyLoanOpen").defaultValue = LoanOpenDefault;
  var MemberOpenDefault = `have a nice day2`;
  document.getElementById("copyMemberOpen").defaultValue = MemberOpenDefault;
  var thirdPartyOpenDefault = `have a nice day3`;
  document.getElementById("copythirdPartyOpen").defaultValue = thirdPartyOpenDefault;
  var CTSTICDefault = `have a nice day4`;
  document.getElementById("copyCTSTIC").defaultValue = CTSTICDefault;
  var ticLoanDefault = `have a nice day5`;
  document.getElementById("copyticLoan").defaultValue = ticLoanDefault;
  var commentsDefault = `have a nice day6`;
  document.getElementById("copycomments").defaultValue = commentsDefault;





});
