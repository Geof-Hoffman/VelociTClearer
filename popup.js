$(function () {
  var storage = 0;
  var data = [];
  var issuesList = [];
  var defaultData = [
    {
      state: 'Attorney',
      issues: [
        {
          issue: `URT`,
          min: 5,
          max: 15,
          lo: `an unreleased mortgage was found and will need to be released by the prior lender before proceeding. `,
          mo: `an unreleased mortgage was found and will need to be released by the prior lender before proceeding. Please search your records for an unrecorded release, "paid in full" letter, or other document showing that the attached mortgage was paid in full. `,
          tpo: `The attached mortgage to your company was returned with the title search. Our records indicate that it was previously paid in full but we were unable to locate a release in land records. \n\nAttached is a copy of your unrleased mortgage, our commitment and the borrower's authorization. Please prepare a release, email a copy to me, then send it to the county to be recorded as soon as you are able.\n\n`,
          etic: `-A release has been received/ #recorded for the unreleased mortgage showing on title. /#Please record release at closing.`,
          ltic: `-A release has been receive for the unreleased mortgage showing on title. This requirment will not appear on the final policy.`,
          com: `-Check SOL sheet for statutory experiation\n`
        },
        {
          issue: `JUDGMENT`,
          min: 5,
          max: 10,
          lo: `A judgment was returned with the title search and will need to be paid and/or released prior prior to or at closing.`,
          mo: `the attached judgment was returned with the title search and will need to be paid and/or released prior prior to or at closing. IF this was previously resolved please forward proof of payment. If you hav an unrecorded satisfaction, we may be able to record it with this transaction. Please forward any pertinent documents or information concerning the judgment to me so that I can contact the judgment holder to resolve the judgment and rleease the lien.`,
          tpo: `Navy Federal Title Services is working on a refinance of the above property. The attached judgment lien was returned with the title searchand will need to be resolved. \n\n Attached is a copy of your judgment, our commitment and the borrower's authorization. Please provide a payoff or, if the judgment was prevously paid, prepare a release, email a copy to me, then send it to the county to be recorded as soon as you are able. \nPlease let me know if you have any questions or if I can be of any assitance. \n Thank you in advance for your help resolving this issue.\nSincerely,\n\n`,
          etic: `-A release has been received/ #recorded for the judgment showing on title. /#Please record release at closing. OR Attorney to collect for judgment payoff at closing.\n\n`,
          ltic: `A payoff has been recieved for the jdugment showing on title, to be paid and released in closing. OR A release was received for the judgment lien showing on title.`,
          com: `Judgment expriation comments here`
        }, {
          issue: `TAX LIEN`,
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
      state: 'Escrow',
      issues: [
        {
          issue: `URT`,
          min: 5,
          max: 15,
          lo: `an unreleased mortgage was found and will need to be released by the prior lender before proceeding. `,
          mo: `an unreleased mortgage was found and will need to be released by the prior lender before proceeding. Please search your records for an unrecorded release, "paid in full" letter, or other document showing that the attached mortgage was paid in full. `,
          tpo: `The attached mortgage to your company was returned with the title search. Our records indicate that it was previously paid in full but we were unable to locate a release in land records. \n\nAttached is a copy of your unrleased mortgage, our commitment and the borrower's authorization. Please prepare a release, email a copy to me, then send it to the county to be recorded as soon as you are able.\n\n`,
          etic: `-A release has been received/ #recorded for the unreleased mortgage showing on title. /#Please record release at closing.`,
          ltic: `-A release has been receive for the unreleased mortgage showing on title. This requirment will not appear on the final policy.`,
          com: `-Check SOL sheet for statutory experiation\n`
        },
        {
          issue: `JUDGMENT`,
          min: 5,
          max: 10,
          lo: `A judgment was returned with the title search and will need to be paid and/or released prior prior to or at closing.`,
          mo: `the attached judgment was returned with the title search and will need to be paid and/or released prior prior to or at closing. IF this was previously resolved please forward proof of payment. If you hav an unrecorded satisfaction, we may be able to record it with this transaction. Please forward any pertinent documents or information concerning the judgment to me so that I can contact the judgment holder to resolve the judgment and rleease the lien.`,
          tpo: `Navy Federal Title Services is working on a refinance of the above property. The attached judgment lien was returned with the title searchand will need to be resolved. \n\n Attached is a copy of your judgment, our commitment and the borrower's authorization. Please provide a payoff or, if the judgment was prevously paid, prepare a release, email a copy to me, then send it to the county to be recorded as soon as you are able. \nPlease let me know if you have any questions or if I can be of any assitance. \n Thank you in advance for your help resolving this issue.\nSincerely,\n\n`,
          etic: `-A release has been received/ #recorded for the judgment showing on title. /#Please record release at closing. OR Attorney to collect for judgment payoff at closing.\n\n`,
          ltic: `A payoff has been recieved for the jdugment showing on title, to be paid and released in closing. OR A release was received for the judgment lien showing on title.`,
          com: `Judgment expriation comments here`
        }, {
          issue: `TAX LIEN`,
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
  // data = defaultData;

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
  function updateState(stateName) {
    $("li").fadeOut(500, function () {
      $(this).remove();
      clearIssues();
    });
    var stateArray = find(data, number => number.state === stateName);
    issuesList = stateArray.issues; //array of objects containing all the selected state issues and statement values. 
    var options = '<option value=""><strong>issues</strong></option>';
    for (var i = 0; i < issuesList.length; i++) {
      options += '<option>' + issuesList[i].issue + '</option>';
    };
    document.getElementById('issue').innerHTML = options;
  };
  function upDateInfo() {
    chrome.storage.local.getBytesInUse((logbytes) => {
      console.log(logbytes);
      storage = logbytes;
      if (storage === 0) {
        console.log(storage);
        data = defaultData;
        console.log(data);
        chrome.storage.local.set({ "data": defaultData });
      } else {
        chrome.storage.local.get((storedData) => {
          data = storedData.data;
          console.log("data set from storage")
          console.log(data);
          displayDrops()
        });
      }
    });
  };
  upDateInfo();

  function displayDrops() {
    // displays states in dropdown
    var output = '<option value=""><strong>choose state</strong></option>';
    for (var i = 0; i < data.length; i++) {
      output += '<option>' + data[i].state + '</option>';
    }

    document.getElementById('state').innerHTML = output;
  };
  displayDrops();
  //puts selected state in variable stateName then outputs state issues to dropdown. 
  var stateName = '';
  var IssueList = [];
  var IssueObj = [];

  $(".state").change(function () {
    stateName = $(this).val();
    updateState(stateName);
  });
  $(".popout").on("click", function () {   

    var popupWindow = window.open(
      chrome.extension.getURL("popup.html"),
      "exampleName",
      "width=600,height=600",
    );
    window.close(); // close the Chrome extension pop-up
    console.log("popped out");
    $("#popout").val="New Button Text";
    
  });
  

  //toggles divs on and off
  $(document).ready(function () {
    $('input[type="checkbox"]').click(function () {
      var inputValue = $(this).attr("value");
      $("." + inputValue).toggle();
    });
  });

  var IssueList = [];
  var IssueObj = [];

  function addIssue(e) {
    IssueList.push(e)
    IssueObj.push(issuesList[issuesList.findIndex(data => data.issue === e)]);
    // console.log(stateName);
    // console.log(issuesList);
    // console.log(IssueObj);
    dialog();
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


  function dialog() {
    var LoanOpenDefault = '';


    // var expectedcleardate = today + 4;
    switch (IssueObj.length) {
      case 1:
        LoanOpenDefault = `${timeOfDay},

I am working on the title portion of this refinance. During the review of the title search, ${IssueObj[0].lo}\n
I will be reaching out to the necessary parties to resolve this issue and expect that title will be clear by TODAYS DATE PLUS MAX DATE. If you speak to the member, please let them know that we may be contacting them for additional information. As soon as title is clear, I will email you to advise.\n\n Please feel free to reach out to me directly with any questions or if I can be of any assistance.\n\nThank you,`
        MemberOpenDefault = `${timeOfDay},

I am working on the title portion of your refinance. During the review of the title to your property, ${IssueObj[0].mo}\n
I will be reaching out to the necessary parties to resolve this issue, and will contact you if additional information or your assitance is needed. As soon as title is clear, I will email you and your loan processor at NFCU to advise.\n\n Please feel free to reach out to me directly with any questions or if I can be of any assistance.\n\nThank you,`
        thirdPartyOpenDefault = `${timeOfDay},

Navy Federal title services is working on a refinance of the above property. ${IssueObj[0].tpo}\n
Please feel free to contact me with any questions or if I can be of any assistance. Thank you in advance for your help  resolving this issue.\n\nSincerely,\n\n`;

        CTSTICDefault = `- ${IssueObj[0].etic}`;

        ticLoanDefault = `- ${IssueObj[0].ltic}`;

        commentsDefault = `- ${IssueObj[0].com}`;

        break;
      case 2:
        LoanOpenDefault = `${timeOfDay},

I am working on the title portion of this refinance. During the review of the title search, ${IssueObj[0].lo}\n
Also, ${IssueObj[1].lo}\n
I will be reaching out to the necessary parties to resolve this issue and expect that title will be clear by ${expectedcleardate}. If you speak to the member, please let them know that we may be contacting them for additional information. As soon as title is clear, I will email you to advise.\n\n Please feel free to reach out to me directly with any questions or if I can be of any assistance.\n\nThank you,`
        MemberOpenDefault = `${timeOfDay},

I am working on the title portion of your refinance. During the review of the title to your property, ${IssueObj[0].mo}\n
Also, ${IssueObj[1].mo}\n
I will be reaching out to the necessary parties to resolve this issue, and will contact you if additional information or your assitance is needed. As soon as title is clear, I will email you and your loan processor at NFCU to advise.\n\n Please feel free to reach out to me directly with any questions or if I can be of any assistance.\n\nThank you,`
        thirdPartyOpenDefault = `${timeOfDay},

Navy Federal title services is working on a refinance of the above property. ${IssueObj[0].tpo}\n
Please feel free to contact me with any questions or if I can be of any assistance. Thank you in advance for your help resolving this issue.\n\nSincerely,\n\n`;

        CTSTICDefault = `- ${IssueObj[0].etic}\n\n- ${IssueObj[1].etic}`;

        ticLoanDefault = `- ${IssueObj[0].ltic}\n\n- ${IssueObj[1].ltic}`;

        commentsDefault = `- ${IssueObj[0].com}\n\n- ${IssueObj[1].com}`;

        break;

      case 3:
        LoanOpenDefault = `${timeOfDay},

I am working on the title portion of this refinance. During the review of the title search, ${IssueObj[0].lo}\n
Also, ${IssueObj[1].lo}\n
In addition,${IssueObj[2].lo}\n
I will be reaching out to the necessary parties to resolve this issue and expect that title will be clear by ${expectedcleardate}. If you speak to the member, please let them know that we may be contacting them for additional information. As soon as title is clear, I will email you to advise.\n\nPlease feel free to reach out to me directly with any questions or if I can be of any assistance.\n\nThank you,`
        MemberOpenDefault = `${timeOfDay},

I am working on the title portion of your refinance. During the review of the title to your property, ${IssueObj[0].mo}\n
Also, ${IssueObj[1].mo}\n
In addition, ${IssueObj[2].mo}\n
I will be reaching out to the necessary parties to resolve this issue, and will contact you if additional information or your assitance is needed. As soon as title is clear, I will email you and your loan processor at NFCU to advise.\n\n Please feel free to reach out to me directly with any questions or if I can be of any assistance.\n\nThank you,`
        thirdPartyOpenDefault = `${timeOfDay},

Navy Federal title services is working on a refinance of the above property. ${IssueObj[0].tpo}\n
Please feel free to contact me with any questions or if I can be of any assistance. Thank you in advance for your help resolving this issue.\n\nSincerely,\n\n`;

        CTSTICDefault = `- ${IssueObj[0].etic}\n\n- ${IssueObj[1].etic}\n\n- ${IssueObj[2].etic}`;

        ticLoanDefault = `- ${IssueObj[0].ltic}\n\n- ${IssueObj[1].ltic}\n\n- ${IssueObj[2].ltic}`;

        commentsDefault = `- ${IssueObj[0].com}\n\n- ${IssueObj[1].com}\n\n- ${IssueObj[2].com}`;
        break;
      case 4:
        LoanOpenDefault = `${timeOfDay},

I am working on the title portion of this refinance. During the review of the title search, ${IssueObj[0].lo}\n
Also, ${IssueObj[1].lo}\n
In addition,${IssueObj[2].lo}\n
Finally, ${IssueObj[3].lo}\n
I will be reaching out to the necessary parties to resolve this issue and expect that title will be clear by ${expectedcleardate}. If you speak to the member, please let them know that we may be contacting them for additional information. As soon as title is clear, I will email you to advise.\n\n Please feel free to reach out to me directly with any questions or if I can be of any assistance.\n\nThank you,`
        MemberOpenDefault = `${timeOfDay},

I am working on the title portion of your refinance. During the review of the title to your property, ${IssueObj[0].mo}\n
Also, ${IssueObj[1].mo}\n
In addition, ${IssueObj[2].mo}\n
Finally, ${IssueObj[3].mo}\n
I will be reaching out to the necessary parties to resolve this issue, and will contact you if additional information or your assitance is needed. As soon as title is clear, I will email you and your loan processor at NFCU to advise.\n\n Please feel free to reach out to me directly with any questions or if I can be of any assistance.\n\nThank you,`
        thirdPartyOpenDefault = `${timeOfDay},

Navy Federal title services is working on a refinance of the above property. ${IssueObj[0].tpo}\n
Please feel free to contact me with any questions or if I can be of any assistance. Thank you in advance for your help resolving this issue.\n\nSincerely,\n\n`;

        CTSTICDefault = `- ${IssueObj[0].etic}\n\n- ${IssueObj[1].etic}\n\n- ${IssueObj[2].etic}\n\n- ${IssueObj[3].etic}`;

        ticLoanDefault = `- ${IssueObj[0].ltic}\n\n- ${IssueObj[1].ltic}\n\n- ${IssueObj[2].ltic}\n\n- ${IssueObj[3].ltic}`;

        commentsDefault = `- ${IssueObj[0].com}\n\n- ${IssueObj[1].com}\n\n- ${IssueObj[2].com}\n\n- ${IssueObj[3].com}`;
        break;
      default:
        LoanOpenDefault = `Issues have exceeded 4. Please delete some. Thanks!`;
        MemberOpenDefault = `Issues have exceeded 4. Please delete some. Thanks!`;

        thirdPartyOpenDefault = `Issues have exceeded 4. Please delete some. Thanks!`;

        CTSTICDefault = `Issues have exceeded 4. Please delete some. Thanks!`;

        ticLoanDefault = `Issues have exceeded 4. Please delete some. Thanks!`;

        commentsDefault = `Issues have exceeded 4. Please delete some. Thanks!`;
      // code block
    }


    document.getElementById("copyLoanOpen").defaultValue = LoanOpenDefault;
    document.getElementById("copyMemberOpen").defaultValue = MemberOpenDefault;
    document.getElementById("copythirdPartyOpen").defaultValue = thirdPartyOpenDefault;
    document.getElementById("copyCTSTIC").defaultValue = CTSTICDefault;
    document.getElementById("copyticLoan").defaultValue = ticLoanDefault;
    document.getElementById("copycomments").defaultValue = commentsDefault;
  };

  var MemberOpenDefault = `have a nice day2`;

  var thirdPartyOpenDefault = `have a nice day3`;

  var CTSTICDefault = `have a nice day4`;

  var ticLoanDefault = `have a nice day5`;

  var commentsDefault = `have a nice day6`;


});





