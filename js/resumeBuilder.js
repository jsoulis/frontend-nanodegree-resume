/*
This is empty on purpose! Your code to build the resume will go here.
 */
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
       "title": "CO2 Photoreduction Systems",
       "dates": "2014",
       "description": "A literary review of CO2 photoreduction systems. The photocatalytic reduction of CO2 into hydrocarbon fuels is a promising way to recycle CO2 as a fuel feedstock by taking advantage readily available solar energy.",
       "images": [
         "images\\paper.png", "images\\system.png"
       ]
     }
    ]
 }
 var bio = {
	"name": "Taylor Soulis",
	"role": "CSE Graduate Student",
	"welcomeMessage": "Hello, please feel free to contact me.",
	"biopic": "images\\me.jpg",
	"contacts": {
		"mobile": "010-3182-7385",
		"email": "jtsoulis7@gmail.com",
		"github": "jsoulis",
		"location": "Seoul, South Korea"
	},
	"skills": ["Real Time Systems", "Korean Language", "Troubleshooting"]
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

bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedBioPic);

  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
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
}
work.display = function() {
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

education.display = function () {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedName);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    for (major in education.schools[school].majors) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $(".education-entry:last").append(formattedMajor);
    }
  }

  //$("#education").append(HTMLschoolStart);
  $("#education").append(HTMLonlineClasses)

  for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    $(".education-entry:last").append(formattedTitle);

    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedDates);

    // var formattedUrl = HTMLonlineDates.replace("%data%", education.onlineCourses[course].url);
    // $(".education-entry:last").append(formattedUrl);

  }

}

bio.display();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);

/*Extra Stuff*/
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
  var internationalName = names[0] + " " + names[1].toUpperCase() + " (테일러)";
  return internationalName;
}
