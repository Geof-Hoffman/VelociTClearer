$(function () {
  var data = [
    {
      state: 'Attorney',
      issues: [
        {
          issue: `URT`,
          min: 1,
          max: 1,
          lo: `Attorney-URT-LO`,
          mo: `Attorney-URT-mo`,
          tpo: `Attorney-URT-tpo`,
          etic: `Attorney-URT-etic`,
          ltic: `Attorney-URT-ltic`,
          com: `Attorney-URT-com`
        },
        {
          issue: `JUDGMENT`,
          min: 1,
          max: 1,
          lo: `Attorney-JUDGMENT-lo`,
          mo: `Attorney-JUDGMENT-MO`,
          tpo: `Attorney-JUDGMENT-tpo`,
          etic: `Attorney-JUDGMENT-etic`,
          ltic: `Attorney-JUDGMENT-ltic`,
          com: `Attorney-JUDGMENT-com`
        }, {
          issue: `tax lien`,
          min: 1,
          max: 1,
          lo: `Attorney-Tax lien-tax lien`,
          mo: `Attorney-Tax lien-tax lien`,
          tpo: `Attorney-Tax lien-tax lien`,
          etic: `Attorney-Tax lien-tax lien`,
          ltic: `Attorney-Tax lien-tax lien`,
          com: `Attorney-Tax lien-tax lien`
        }
      ]
    }, {
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
        }, {
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
    }, {
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
  function find(array, criteriaFn) {
    let current = array
    let next = []
    while (current || current === 0) {
      if (criteriaFn(current)) {
        return current
      }
      if (Array.isArray(current)) {
        for (let i = 0; i < current.length; i++) {
          next.push(current[i])
        }
      }
      current = next.shift()
    }
    return null;
  }

  // displays states in dropdown
  var output = '<option value=""><strong>choose state</strong></option>';

  for (var i = 0; i < data.length; i++) {
    output += '<option>' + data[i].state + '</option>';
  }
  
  document.getElementById('state').innerHTML = output;

  //puts selected state in variable stateName then outputs state issues to dropdown. 
  var stateName = $(".state").change(function () {
    $("li").fadeOut(500, function () {
      $(this).remove();
      clearIssues();
    });
    var stateName = $(this).val();
    //console.log(stateName);
    var stateArray = find(data, number => number.state === stateName);
    // console.log(stateArray);
    var issuesList = stateArray.issues; //array of objects containing all the selected state issues and statement values. 
    //  console.log(issuesList);
    var options = '<option value=""><strong>issues</strong></option>';
    for (var i = 0; i < issuesList.length; i++) {
      options += '<option>' + issuesList[i].issue + '</option>';
    };
    document.getElementById('issue').innerHTML = options;
    return stateName, issuesList;
  });
  console.log(stateName)

  //toggles divs on and off
  $(document).ready(function () {
    $('input[type="checkbox"]').click(function () {
      var inputValue = $(this).attr("value");
      $("." + inputValue).toggle();
    });
  });

  var IssueList = [];

  function addIssue(e) {
    IssueList.push(e)
    //console.log(IssueList.length);
  };
  function clearIssues() {
    for (i = 0; i < IssueList.length; i++) {
      IssueList.pop(i);
    }
  };

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
      clearIssues();
    });
  });
  $("#issue").mouseup(function (e) {
    //grab text
    var todoText = $(this).val();
    //append todotext to ul

    if ($(this).val() !== "") {
      $("ul").append("<li><span><i class='fa fa-trash'> </i></span>" + "<number></number>" + todoText + "</li>");
      addIssue(todoText);

    
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
  var issueNumberIntro = IssueList.length <= 1 ? "one" : "more than 1";
  console.log(IssueList.length)

  //'An issue was discovered during the title search for this transaction.': 'Some issues were discovered during the title search for this transaction. First, '  ;
  var secondissueverbiage = '';
  var expectedcleardate = '';
  var Finalissueverbiage = '';



  var LoanOpenDefault =
    `${timeOfDay},

  I am the title-clearer working to clear title for this refinance. ${issueNumberIntro} `;
  /*I will be reaching out to the necessary parties to resolve these issues and expect that all issues will be addressed by ${expectedcleardate}. If you speak to the member, pelase let them know that we may be contacting them for additional information. Please do not ask that they reach out to any third parties to attempt to resolve these issues on there own, as requests from multiple parties can often times cause confusion or delays.
      
      As soon as title is clear, I will email you to advise. Please feel free to reach out to me directly with any questions or if I can be of any assistance. 
      
      Thank you,*/
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

/*

for each selected issued, data.state.issue[indexOfSelectedIssue].|*/



