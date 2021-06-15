// ==UserScript==
// @name         PenelopeSandboxTest
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disable Penelope v4 Options for External Stakeholders
// @author       Andres Agudelo
// @match        *://*.athena-au.com/*
// @include      *://*.athena-au.com/*
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_log
// @grant        window.onurlchange
// ==/UserScript==

(function() {
'use strict';
const interval=100;
//window.addEventListener('load', (event) => {
window.addEventListener('DOMContentLoaded', (event) => {
window.setInterval(() => {
//myIframe.contentWindow.document
//myIframe.contentDocument.body.style.backgroundColor="#ff0000";
var penelopeIframe=document.querySelector("#frm_content_id");
/******************************************************************************************/
/*GLOBAL MODIFICATIONS*/
//Hide Side bar Container
//hideElement(document.querySelector("#sideBarContainer"));
//Hide  #HandleContainer Messages Workflow Calendar side bar
hideElement(document.querySelector("#handleContainer"),"Messages\nWorkflow\nCalendar");
//REQ 5/6 Hide Delete/Edit navigation buttons at Service Event Level/Service File level
hideElement(document.querySelector("#navDelete"));
hideElement(document.querySelector("#navEdit"));
/* GLOBAL MODIFICATIONS END*/
/******************************************************************************************/
/*SERVICE FILE SCREEN*/
if(elementMatch(document.querySelector("#contentContainer > div:nth-child(1) > div.mainTab"),"Service File")){
//Disable Link in Service File in topTabOptions
hideElement(document.querySelector("#contentContainer > div:nth-child(1) > div.mainContent.withBottomTab > div.topTabOptions > h3 > a"),"","href");
hideElement(document.querySelector("#contentContainer > div:nth-child(1) > div.mainContent.withBottomTab > div.clearFloats.breadCrumbTrail > a"),"","href");
//Hide Participants box in Service File
hideElement(document.querySelector("#ajaxTab > div.conRight3 > div > div"));
//Hide Report tab in Service File
hideElement(document.querySelector("#ppReportBucket"));
hideElement(document.querySelector("#sideBarContainer > div > h2:nth-child(3)"),"Reports");
//Hide Collateral Contact in Service File
hideElement(document.querySelector("#servFileConCol"));
hideElement(document.querySelector("#sideBarContainer > div > h2:nth-child(7)"),"Collateral Contact");
//Hide Workflow Service File
hideElement(document.querySelector("#sideBarContainer > div > h2:nth-child(9)"),"Workflow");
//Hide Notes and Messages top tabs in Service File/Service Event
hideElement(document.querySelector("#tabNotes_li"),"Notes");
hideElement(document.querySelector("#tabConversation_li"),"Messages");
//REQ 2 Hide Referral Service File
hideElement(document.querySelector("#sideBarContainer > div > h2:nth-child(1)"),"Referral");
hideElement(document.querySelector("#referralServFile"));
//Hide Close service file link
hideElement(document.querySelector("#contentContainer > div:nth-child(1) > div.mainContent.withBottomTab > div.topTabOptions > h6 > div > a"));
//REQ 8 Hide Billing information at Service File and Service Event levels
//hide id:BillingBucket Service File
 hideElement(document.querySelector("#sideBarContainer > div > h2:nth-child(5)"),"Billing Information");
//REQ 9 Add presenting Issue in Service File
//Add Participant link in Participants box in Service File
hideElement(document.querySelector("#ajaxTab > div.conRight3 > div > div > h6 > div > a"));
//[Add Presenting Issue] link
hideElement(document.querySelector("#ajaxprogMemTable > table > tbody.presentingIssueRows > tr > td > a"));
} //SERVICE FILE SCREEN END
/******************************************************************************************/
/*SERVICE EVENT SCREEN*/
if(elementMatch(document.querySelector("#contentContainer > div:nth-child(1) > div.mainTab > h1"),"Service Event")){
 //Disable href - case top link in Service Event
 hideElement(document.querySelector("#contentContainer > div:nth-child(1) > div.mainContent.withBottomTab > div.clearFloats.breadCrumbTrail > a"),"","href");
 //Hide Workflow Service Event
 hideElement(document.querySelector("#sideBarContainer > div > h2:nth-child(11)"),"Workflow");
 //Hide upload and templates from the Attachments tab side bar(Right side) - Service Event
 hideElement(document.querySelector("#sbUpload_li"),"Upload");
 hideElement(document.querySelector("#sbTemplate_li"),"Template");
 //Hide Notes and Messages top tabs in Service File/Service Event
 //hideElement(document.querySelector("#tabNotes_li"),"Notes");
 hideElement(document.querySelector("#tabConversation_li"),"Messages");
 //REQ 1 Hide attendance & Reschedule in Service Event
 //Attendance link
 hideElement(document.querySelector("#contentContainer > div:nth-child(1) > div.mainContent.withBottomTab > div.topTabOptions.clearFloats > h6 > div:nth-child(2) > a"));
 //Reschedule link
 hideElement(document.querySelector("#contentContainer > div:nth-child(1) > div.mainContent.withBottomTab > div.topTabOptions.clearFloats > h6 > div:nth-child(1) > a"));
 //REQ 2 Hide Referral in Service Event
 hideElement(document.querySelector("#sideBarContainer > div > h2:nth-child(3)"),"Referral");
 hideElement(document.querySelector("#referralServEvent"));
 //REQ 8 Hide Billing information at Service File and Service Event levels //id BillingBucket Service Event
 hideElement(document.querySelector("#sideBarContainer > div > h2:nth-child(7)"),"Billing Information");
 //Hide Book New button in Service Event
 hideElement(document.querySelector("#prevNextBut_booknew"));
} /*SERVICE EVENT SCREEN END*/
/******************************************************************************************/
/*MY HOME SCREEN**/
if(elementMatch(document.querySelector("#contentContainer > div > div.mainTab > h1"),"My Home")){
   //Disable Add Icon hyperlinks in Table Case Load
    hideMultipleElements(document.querySelectorAll("table#caseLoadBox td.addIcon"),"onclick");
    //Disable Case hyperlinks in Table Case Load
    hideMultipleElements(document.querySelectorAll("#caseLoadBox > tbody > tr > td:nth-child(3) > a"),"href");
    //Hide "My Availability" in My Profile -My Home
    hideElement(document.querySelector("#myProfileBucket > ul > li:nth-child(11) > a"),"My Availability");
    //Hide "My Message Settings" in My Profile - My Home
   hideElement(document.querySelector("#myProfileBucket > ul > li:nth-child(12) > a"),"My Message Settings");
   //Hide Reports div tab in My Home
   hideElement(document.querySelector("#homeReportsBucket"));
    //Hide Links and Add Individual on Homepage
    hideElement(document.querySelector("#sideBarContainer > div > h2:nth-child(3)"),"Links");
    hideElement(document.querySelector("#homelinksBucket > ul > li > a"),"Add Individual");
  } /*MY HOME SCREEN END*/
/******************************************************************************************/
/*SERVICE EVENTS SCREEN TAB*/
if(elementMatch(document.querySelector("#contentContainer > div:nth-child(3) > div.mainTab > h1"),"Service Events")){
    //Hide Remove Icon for service Event
    hideElement(document.querySelector("#acttable > tbody > tr.eventRow > td:nth-child(11) > a"));
    //REQ 3 Hide 'Book New' in Service Event
   hideElement(document.querySelector("#contentContainer > div:nth-child(3) > div.mainContent > div.bottomTabOptions > h6 > div:nth-child(2)"));
   //REQ 4 Hide 'Remove Booked Event' in Service Event
   hideElement(document.querySelector("#contentContainer > div:nth-child(3) > div.mainContent > div.bottomTabOptions > h6 > div:nth-child(1) > a"));
} /*SERVICE EVENTS SCREEN TAB END*/
/******************************************************************************************/
/*SERVICE DETAILS SCREEN*/
if(elementMatch(document.querySelector("#contentContainer > div:nth-child(3) > div.mainTab > h1"),"Service Details")){
 //REQ 7 Hide 'Mark followup required' 'lock' 'Edit' links at Service Event -> Service details Level in Service Event -> Service Details
 //Hide Mark followup required
 hideElement(document.querySelector("#ajaxTab > div.bottomTabOptions > h6 > div:nth-child(1) > a"));
 //lock
 hideElement(document.querySelector("#ajaxTab > div.bottomTabOptions > h6 > div:nth-child(2) > a"));
 //edit
 hideElement(document.querySelector("#ajaxTab > div.bottomTabOptions > h6 > div:nth-child(3) > a"));
 //Delete three links
 //if(document.querySelector("#ajaxTab > div.bottomTabOptions > h6")){document.querySelector("#ajaxTab > div.bottomTabOptions > h6").style.display='none';}
 //if(document.querySelector("#ajaxTab > div.bottomTabOptions")){document.querySelector("#ajaxTab > div.bottomTabOptions").style.display='none';}
 /* waitForKeyElements (
            "#ajaxTab > div.bottomTabOptions", commentCallbackFunction,false,"#frm_content_id"
        );
        //--- Page-specific function to do what we want when the node is found.
        function commentCallbackFunction (jNode) {
            //jNode.style.display='none';
            document.querySelector("#ajaxTab > div.bottomTabOptions").style.display='none';        }*/
}/*SERVICE DETAILS SCREEN END*/
/******************************************************************************************/
/*WORKER PROFILE SCREEN*/
if(elementMatch(document.querySelector("#contentContainer > div > div.mainTab > h1"),"Worker Profile")){
 //Hide Clinical Tab in Worker Profile
 hideElement(document.querySelector("#tabCWorker_li"),"Clinical");
 //Hide Clinical Tab in Worker Profile
 hideElement(document.querySelector("#tabAvail_li"),"Availability");
 //hide Personal Message Settings in Worker Profile
 hideElement(document.querySelector("#ajaxTab > div.conRight > div:nth-child(2) > div"),"Personal Message Settings\nEdit\nEmail	\nSMS	");
 //hide Workflow in Worker Profile
 hideElement(document.querySelector("#sideBarContainer > div > h2:nth-child(5)"),"Workflow");
 //hideElement(document.querySelector("#workflowEnt2200_6725_Bucket")); //
 hideElement(getElement(document.querySelectorAll("#sideBarContainer > div.buckets > h2 + div"),"workflow"));
 //hide Reports in Worker profile
 hideElement(document.querySelector("#homeReportsBucket"));
} //WORKER PROFILE END
/******************************************************************************************/
/*INDIVIDUAL PROFILE SCREEN*/
if(elementMatch(document.querySelector("#contentContainer > div > div.mainTab > h1"),"Individual Profile")){
    //Hide Message settings in Individual Profile
    hideElement(document.querySelector("#tabSettings_li"),"Message Settings");
    //hide case info - Individual Profile
    hideElement(document.querySelector("#indCaseInfoBucket"));
    //hide Informal Series side bar item
    hideElement(document.querySelector("#indNCSeriesBucket"));
    //hide Report Tab side bar item in Individual Profile
    hideElement(document.querySelector("#indReportBucket"));
} //INDIVIDUAL PROFILE SCREEN END
/******************************************************************************************/
//$(document).ready(function(){
//});
    }, interval);//Polling interval
   });//DOMContentLoaded
})(); //SCRIPT END
/****************************************************************************************************************************************************************************************************/
/**
 * Functions that modify UI elements' CSS
 *
 **/
function hideElement(cssSelector,elemInnerText="",attributeToRemove=""){
     if(cssSelector){
       if (elemInnerText!=""){if(cssSelector.innerText==elemInnerText){cssSelector.style.display='none';}}
       if (attributeToRemove!=""){cssSelector.removeAttribute(attributeToRemove);}
       else{cssSelector.style.display='none';}
    }
}

function hideMultipleElements(cssSelectorAll,attributeToRemove=""){
//var elems = document.querySelectorAll("table#caseLoadBox td.addIcon");
    var index = 0, length = cssSelectorAll.length;
    //for ( ; index < length; index++) {cssSelectorAll[index].style.pointerEvents = "none";}
    if(attributeToRemove!=""){for ( ; index < length; index++) {cssSelectorAll[index].removeAttribute(attributeToRemove);}}
    else{for ( ; index < length; index++) {cssSelectorAll[index].style.display="none";}}
}

function elementMatch(cssSelector,elemInnerText){
    if(cssSelector)return cssSelector.innerText==elemInnerText;
}

function getElement(elements,IDstartsWithString){
    if (elements.length>0){
    //var divs=document.querySelectorAll("#sideBarContainer > div.buckets > h2 + div");
    for(var element of elements){if(element.id.toLowerCase().startsWith(IDstartsWithString)){return element;}}}} //element.style.display="none";}}
