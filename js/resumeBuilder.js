/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Taylor Soulis",
    "role": "CSE Graduate Student",
    "contacts": {
        "mobile": "010-3182-7385",
        "email": "jtsoulis7@gmail.com",
        "github": "jsoulis",
        "location": "Seoul, South Korea"
    },
    "welcomeMessage": "Hello, please feel free to contact me.",
    "skills": ["C++", "Real Time Systems", "Korean Language", "Troubleshooting"],
    "biopic": "images\\me.jpg"
};

var education = {
    "schools": [{
            "name": "Washington University in St. Louis",
            "location": "St. Louis, MO",
            "degree": "Bachelor's of Science",
            "dates": "Aug. 2010 - May. 2014",
            "url": "https://wustl.edu/",
            "majors": ["Energy, Environmental and Chemical Engineering"]
        },
        {
            "name": "Seoul National University",
            "location": "Seoul, South Korea",
            "degree": "Master's of Science",
            "dates": "Sep. 2016 - Present ",
            "url": "http://en.snu.ac.kr/",
            "majors": ["Computer Science Engineering"]
        }
    ],
    "onlineCourses": [{
            "title": "React Nanodegree Program",
            "school": "Udacity",
            "dates": "Feb. 2018 - Present",
            "url": "http://udacity.com/"
        },{
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
};

var work = {
    "jobs": [{
        "title": "Research Assistant",
        "employer": "Real-Time Ubiqutous Systems Laboratory",
        "dates": "Sep. 2016 - Present",
        "location": "Seoul, South Korea",
        "description": "Researching multi-core fluid scheduling and methods to minimize the peak density experienced by real-time task sets described by a generic DAG model. Currently implementing extension to our schedulablity test for real-time tasks run in multi-core environment. Extending test that works for task set described by a sequential DAG to also work for general DAG. Implementation is done in java. Prepared and administered course content for an embedded systems intro lecture series. We taught fundamentals of embedded systems programming, bare-metal programming, interrupt mechanism, OS, drivers, etc. Final project was to implement maze solving algorithm for robot car that we provided students. Helped design and implement user interface features for the GUI of our ECU real-time task simulator. Took advanced courses in computer architecture, distributed systems, real-time systems and databases.",
        "url": "https://rubis.snu.ac.kr/home"
    },{
        "title": "Tech Support Engineer",
        "employer": "OSIsoft",
        "dates": "Sep. 2014 - Jun. 2016",
        "location": "San Leandro, CA",
        "description": "Troubleshoot and resolve connection, configuration, and data corruption issues via remote session or email communication that customers might face when using PI Software products. Assist customers onsite or remotely with PI Server architecture implementation and design. Train customers onsite and help them solve organization specific business problems with PI Software products. Assist customers in developing simple applications that employ our proprietary AF SDK, PI SDK,PI Web API and other development technologies.",
        "url": "http://www.osisoft.com/"
    }]


};

var projects = {
    "projects": [{
        "title": "Multi-core Scheduling of Real-Time Tasks Modeled by Generic DAGs with Multiple Parallelization Options",
        "dates": "Jan 2018 - Present",
        "description": "Researching method to schedule set of real-time tasks in which each individual task can have computational units that are run in parallel. In other words, each task can be modeled as a generic direct acyclic graph (DAG). Our general approach is to minimize the peak task set density. The density is dependent on internal deadlines for each computational unit as well as by the parallelization option chosen for the unit (for example, whether 2 or 4 threads will be used for the unit in a 4 core system).",
        "images": [
            "images\\dag.png"
        ],
        "url": ""
    }, {
        "title": "My Reads",
        "dates": "Feb 2018 - Mar 2018",
        "description": "The version provided here is my take on implementing an interactive bookshelf using React. Books can be changed from CurrentlyReading, Read, and WantToRead sections. The frontend is connected to a server provided by Udacity that has a collection of books. The server accepts a given amount of search terms that users can use to return books to add to their bookshelf component.",
        "images": [
            "images\\myreads.png"
        ],
        "url": "https://github.com/jsoulis/reactnd-project-myreads-starter"
    }, {
      "title": "CO2 Photoreduction Systems",
      "dates": "Sep 2012 - Jul 2014",
      "description": "A literary review of CO2 photoreduction systems. The photocatalytic reduction of CO2 into hydrocarbon fuels is a promising way to recycle CO2 as a fuel feedstock by taking advantage of readily available solar energy.",
      "images": [
          "images\\paper.png", "images\\system.png"
      ],
      "url": "http://aaqr.org/VOL14_No2_March2014/8_AAQR-13-09-OA-0283_533-549.pdf"
    }]
};




var placesLived = {};
var interName = {};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);


    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    formattedBioPic = formattedBioPic.replace("#", "My profile picture");
    $("#header").append(formattedBioPic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkills = [];
        for (var i = 0; i < bio.skills.length; i++) {
            formattedSkills[i] = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills[i]);
        }
    }

};
work.display = function() {
    if (work.jobs.length > 0) {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            formattedEmployer = formattedEmployer.replace("#", job.url);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);


        });
    }
};


projects.display = function() {
    if (projects.projects.length > 0) {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            formattedTitle = formattedTitle.replace("#", project.url);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedDescription);

            if (project.images.length > 0) {
                project.images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedImage);
                });
            }
        });
    }
};

education.display = function() {
    if (education.schools.length > 0) {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", school.name);
            formattedName = formattedName.replace("#", school.url);
            $(".education-entry:last").append(formattedName);


            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedLocation);

            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedDegree);

            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedDates);


            school.majors.forEach(function(major) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedMajor);
            });
        });
    }

    //$("#education").append(HTMLschoolStart);
    $("#education").append(HTMLonlineClasses);
    if (education.onlineCourses.length > 0) {
        education.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
            formattedTitle = formattedTitle.replace("#", course.url);
            $(".education-entry:last").append(formattedTitle);

            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            $(".education-entry:last").append(formattedSchool);

            var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedDates);

            // var formattedUrl = HTMLonlineDates.replace("%data%", education.onlineCourses[course].url);
            // $(".education-entry:last").append(formattedUrl);

        });
    }

};

placesLived.display = function() {
    $("#mapDiv").append(googleMap);
};



bio.display();
work.display();
projects.display();
education.display();
placesLived.display();


/*Extra Stuff*/

//$("#main").append(internationalizeButton);

function inName(name) {
    var names = name.split(" ");
    var internationalName = names[0] + " " + names[1].toUpperCase() + " (테일러)";
    return internationalName;
}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function logClicks(x, y) {
    console.log(x + ", " + y);
}
