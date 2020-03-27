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
});