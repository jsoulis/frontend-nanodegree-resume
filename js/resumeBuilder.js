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
       "title": "Kimi no na wa",
       "dates": "2016",
       "description": "A fun new movie",
       "images": [
         "https://i.redditmedia.com/0ribEcoh7Jr0AMq9GuUg7ZNFvDARr_ltk2O25GFd_Go.jpg?w=320&s=5d8c72445606b2c115a115dd6947650d"
       ]
     }
   ]
 }
 var bio = {
	"name": "Taylor Soulis",
	"role": "CSE Graduate Student",
	"welcomeMessage": "Hello Greeting",
	"biopic": "images\\me.jpg",
	"contacts": {
		"mobile": "010-3182-7385",
		"email": "jtsoulis7@gmail.com",
		"github": "jsoulis",
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
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);



$("#header").append(formattedBioPic);
$("#header").append(formattedMessage);

if(bio.skills.length > 0)
{
  $("#header").append(HTMLskillsStart);
  var formattedSkills = [];
  for(var i = 0; i<bio.skills.length; i++)
  {
    formattedSkills[i] = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills[i]);
  }
}

for(job in work.jobs)
{
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
})

function logClicks(x,y)
{
  console.log(x+", "+y);
}

$("#main").append(internationalizeButton);
function inName(name)
{
  var names = name.split(" ");
  var internationalName = names[0] + " " + names[1].toUpperCase();
  return internationalName;
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length>0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

projects.display();
$("#mapDiv").append(googleMap);
