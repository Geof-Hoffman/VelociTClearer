$(function () {
  var selectedState = '';
  var issuesList = [];
  var data = [];
  var IssueObj = [];
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
  chrome.storage.sync.get(function (result) {
    data = result.storedData;
    // displays states in dropdown  
    var output = '<option value=""><strong>choose state</strong></option>';
    for (var i = 0; i < data.length; i++) {
      output += '<option>' + data[i].state + '</option>';
    }
    document.getElementById('updateState').innerHTML = output;
  });

  $(".updateState").change(function () {
    selectedState = $(this).val();
    console.log(selectedState);
    updateState(selectedState);
  });

  $(".updateIssue").change(function () {
    selectedIssue = $(this).val();
    IssueObj = [];
    IssueObj.push(issuesList[issuesList.findIndex(data => data.issue === selectedIssue)]);
    changeBoxesDisplay();
  });


  function updateState(statename) {

    //console.log(output);
    var stateArray = find(data, results => results.state == statename);
    console.log(stateArray);
    issuesList = stateArray.issues; //array of objects containing all the selected state issues and statement values. 
    console.log(issuesList);
    var options = '<option value=""><strong>issues</strong></option>';
    for (var i = 0; i < issuesList.length; i++) {
      options += '<option>' + issuesList[i].issue + '</option>';
    };
    // console.log(options);
    document.getElementById('updateIssue').innerHTML = options;
  };

  //update buttons
  var updateLoanOpenBtn = document.querySelector('.updateLoanOpenBtn');
  var updateMemberOpenBtn = document.querySelector('.updateMemberOpenBtn');
  var updatethirdPartyOpenBtn = document.querySelector('.updatethirdPartyOpenBtn');
  var updateCTSTICBtn = document.querySelector('.updateCTSTICBtn');
  var updateticLoanBtn = document.querySelector('.updateTicLoanBtn');
  var updateCommentsBtn = document.querySelector('.updateCommentsBtn');

  updateLoanOpenBtn.addEventListener('click', function (event) {
    var updateLoanOpen = document.getElementById("updateLoanOpen").value;
    alert(updateLoanOpen);
    chrome.storage.sync.get('storedData', function (results) {
      data = results.storedData;
      var stateIndex = data.findIndex(data => data.state === selectedState);
      var issuesArray = data[data.findIndex(data => data.state === selectedState)].issues;
      var issueIndex = issuesArray.findIndex(data => data.issue === selectedIssue);

      data[stateIndex]["issues"][issueIndex].lo = updateLoanOpen;
      chrome.storage.sync.set({ "storedData": data }, function () {

        loanOpenDefaultUpdate = updateLoanOpen;
      });
    });
  });
  updateMemberOpenBtn.addEventListener('click', function (event) {
    var updateMemberOpen = document.getElementById("updateMemberOpen").value;
    alert(updateMemberOpen);
    chrome.storage.sync.get('storedData', function (results) {
      data = results.storedData;
      var stateIndex = data.findIndex(data => data.state === selectedState);
      var issuesArray = data[data.findIndex(data => data.state === selectedState)].issues;
      var issueIndex = issuesArray.findIndex(data => data.issue === selectedIssue);

      data[stateIndex]["issues"][issueIndex].mo = updateMemberOpen;
      chrome.storage.sync.set({ "storedData": data }, function () {

        memberOpenDefaultUpdate = updateMemberOpen;
      });
    });
  });
  updatethirdPartyOpenBtn.addEventListener('click', function (event) {
    var updateThirdPartyOpen = document.getElementById("updateThirdPartyOpen").value;
    alert(updateThirdPartyOpen);
    chrome.storage.sync.get('storedData', function (results) {
      data = results.storedData;
      var stateIndex = data.findIndex(data => data.state === selectedState);
      var issuesArray = data[data.findIndex(data => data.state === selectedState)].issues;
      var issueIndex = issuesArray.findIndex(data => data.issue === selectedIssue);

      data[stateIndex]["issues"][issueIndex].tpo = updateThirdPartyOpen;
      chrome.storage.sync.set({ "storedData": data }, function () {

        thirdPartyOpenDefaultUpdate = updateThirdPartyOpen;
      });
    });
  });
  updateCTSTICBtn.addEventListener('click', function (event) {
    var updateCTSTIC = document.getElementById("updateCTSTIC").value;
    alert(updateCTSTIC);
    chrome.storage.sync.get('storedData', function (results) {
      data = results.storedData;
      var stateIndex = data.findIndex(data => data.state === selectedState);
      var issuesArray = data[data.findIndex(data => data.state === selectedState)].issues;
      var issueIndex = issuesArray.findIndex(data => data.issue === selectedIssue);

      data[stateIndex]["issues"][issueIndex].etic = updateCTSTIC;
      chrome.storage.sync.set({ "storedData": data }, function () {
        CTSTICDefaultUpdate = updateCTSTIC;
      });
    });
  });
  updateticLoanBtn.addEventListener('click', function (event) {
    var updateTicLoan = document.getElementById("updateTicLoan").value;
    alert(updateTicLoan);
    chrome.storage.sync.get('storedData', function (results) {
      data = results.storedData;
      var stateIndex = data.findIndex(data => data.state === selectedState);
      var issuesArray = data[data.findIndex(data => data.state === selectedState)].issues;
      var issueIndex = issuesArray.findIndex(data => data.issue === selectedIssue);

      data[stateIndex]["issues"][issueIndex].ltic = updateCTSTIC;
      chrome.storage.sync.set({ "storedData": data }, function () {
        ticLoanDefaultUpdate = updateTicLoan;
      });
    });
  });
  updateCommentsBtn.addEventListener('click', function (event) {
    var updateComments = document.getElementById("updateComments").value;
    alert(updateComments);
    chrome.storage.sync.get('storedData', function (results) {
      data = results.storedData;
      var stateIndex = data.findIndex(data => data.state === selectedState);
      var issuesArray = data[data.findIndex(data => data.state === selectedState)].issues;
      var issueIndex = issuesArray.findIndex(data => data.issue === selectedIssue);
      data[stateIndex]["issues"][issueIndex].com = updateComments;
      chrome.storage.sync.set({ "storedData": data }, function () {
        commentsDefaultUpdate = updateComments;
      });
    });
  });

  function changeBoxesDisplay() {
    console.log(IssueObj);
    console.log(selectedIssue);

    var loanOpenDefaultUpdate = `${IssueObj[0].lo}`;
    var memberOpenDefaultUpdate = `${IssueObj[0].mo}`;
    var thirdPartyOpenDefaultUpdate = `${IssueObj[0].tpo}`;
    var CTSTICDefaultUpdate = `${IssueObj[0].etic}`;
    var ticLoanDefaultUpdate = `${IssueObj[0].ltic}`;
    var commentsDefaultUpdate = `${IssueObj[0].com}`;


    document.getElementById("updateLoanOpen").defaultValue = loanOpenDefaultUpdate;
    document.getElementById("updateMemberOpen").defaultValue = memberOpenDefaultUpdate;
    document.getElementById("updateThirdPartyOpen").defaultValue = thirdPartyOpenDefaultUpdate;
    document.getElementById("updateCTSTIC").defaultValue = CTSTICDefaultUpdate;
    document.getElementById("updateTicLoan").defaultValue = ticLoanDefaultUpdate;
    document.getElementById("updateComments").defaultValue = commentsDefaultUpdate;


  };

});
