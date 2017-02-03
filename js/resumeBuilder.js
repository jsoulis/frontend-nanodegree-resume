/*
This is empty on purpose! Your code to build the resume will go here.
 */

var role = "Web Developer";
var name = "Taylor Soulis"
 var work = {
 	"jobs": [{
 		"title": "Tech Support Engineer",
 		"employer": "OSIsoft",
 		"dates": "Sep. 2014 - Jun. 2016",
 		"location": "San Leandro, CA",
 		"description": "Worked with customers to resolve troubleshooting related isues with PI System Software"
 	}]
 }
 var projects = {
   "projects": [
     {
       "title": "",
       "dates": "",
       "description": "",
       "images": [
         "Url to image", "another URL"
       ]
     }
   ]
 }
 var bio = {
	"name": "Taylor Soulis",
	"role": "CSE Graduate Student",
	"welcomeMessage": "Hello Greeting",
	"biopic": "C:\\Users\\Admin\\Udacity\\FrontEndWeb\\frontend-nanodegree-resume\\images\\taylor.jpg",
	"contacts": {
		"mobile": "010-3182-7385",
		"email": "jtsoulis7@gmail.com",
		"github": "jsoulis",
		"twitter": "",
		"location": "Seoul, South Korea"
	},
	"skills": ["CSS", "HTML5", "JavaScript", "C", "Java", "Python", "Korean Language"]
}
 var education = {
   "schools": [
     {
       "name": "Washington University in St. Louis",
       "location": "St. Louis, MO",
       "degree": "Bachelor's of Science",
       "dates": "Aug. 2010 - May. 2014",
       "url": "https://wustl.edu/",
       "majors":["Energy, Environmental and Chemical Engineering"]
     },
     {
       "name": "Seoul National University",
       "location": "Seoul, South Korea",
       "degree": "Master's of Science",
       "dates": "Sep. 2016 - Present",
       "url": "http://en.snu.ac.kr/",
       "majors":["Computer Science Engineering"]
     }
   ],
   "onlineCourses":[
     {
       "title": "Front-End Web Developer Nanodegree Program",
       "school": "Udacity",
       "dates": "Jan. 2017 - Mar. 2017",
       "url": "http://udacity.com/"
     },
     {
       "title": "C# Programming I: Fundamentals of C#",
       "school": "University of California San Diego",
       "dates": "Fall 2015",
       "url": "http://extension.ucsd.edu/programs/index.cfm?vAction=certDetail&vCertificateID=22"
     },
     {
       "title": "C# Programming II: Object-Oriented Programming",
       "school": "University of California San Diego",
       "dates": "Winter 2016",
       "url": "http://extension.ucsd.edu/programs/index.cfm?vAction=certDetail&vCertificateID=22"
     },
     {
       "title": "C++ Programming: Introduction",
       "school": "University of Washington",
       "dates": "Winter 2016",
       "url": "https://www.pce.uw.edu/courses/c-plus-plus-programming-introduction"
     }
   ]
 }

var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
//var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
//$("#topContacts").append(formattedBioPic);

for(job in work.jobs)
{
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);
}
