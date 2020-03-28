if (self === top) {
  // Not in Iframe
  window.location.assign("https://ssrs-dev.usgboral.com/ReportServer/Pages/ReportViewer.aspx?/OpportunitySQLDW&BU=IN&OpportunityNumber=OPP-285261&rs:Command=Render");
  alert("This canvas app must be included within an iframe");
}

Sfdc.canvas(function() {
  // Save the token
  Sfdc.canvas.oauth.token(window.signedRequestJson.oauthToken);
  Sfdc.canvas.byId('username').innerHTML = window.signedRequestJson.context.user.fullName;
  Sfdc.canvas.byId('bu').innerHTML = window.signedRequestJson.context.environment.parameters.bucode;
  Sfdc.canvas.byId('oppNo').innerHTML = window.signedRequestJson.context.environment.parameters.oppNumber;
  Sfdc.canvas.byId('est').innerHTML = window.signedRequestJson.context.environment.parameters.estDate;
  Sfdc.canvas.byId('stageType').innerHTML = window.signedRequestJson.context.environment.parameters.stage;
  Sfdc.canvas.byId('rec').innerHTML = window.signedRequestJson.context.environment.parameters.rec;
  Sfdc.canvas.byId('ph4').innerHTML = window.signedRequestJson.context.environment.parameters.ph4flag;
  var buCode = window.signedRequestJson.context.environment.parameters.bucode;
  var OpportunityNumber = window.signedRequestJson.context.environment.parameters.oppNumber;
  //Forming the variable to return    
  var URL;
  URL="https://ssrs-dev.usgboral.com/ReportServer/Pages/ReportViewer.aspx?/OpportunitySQLDW&BU=";
  URL += buCode;
  URL += "&OpportunityNumber=";
  URL += OpportunityNumber;
  URL += "&rs:Command=Render";
  Sfdc.canvas.byId('urltocall').innerHTML = URL;
});