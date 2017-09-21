/*
This is empty on purpose! Your code to build the resume will go here.
 */
 

var work = {
	"jobs": [ 
		{
			"employer": "ICSGV", 
			"title": "After School Tutor", 
			"location": "Rowland Heights", 
			"dates": "Since 2011", 
			"description": "Teaching elementary and middle school children Arabic and Quran"
			
		},
		{
			"employer": "ICNA",
			"title": "volunteer",
			"location": "Anaheim",
			"dates": "2014",
			"description": "volunteering with ICNA and helping with organizing events and making sure guest have great experiences"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "End of School Year Carnival",
			"dates": "06-05-2016",
			"description": "Carnival with games, food, and entertainment for all ages",
			"images": [	"images/kitty.jpg", "images/beach.jpg" ]
		}
	]
}

var bio = {
	"name": "Maymoonah Mohammed",
	"role": "Web Developer",
	"welcomeMessage": "Hi, Welcome to Maymoonah's Resume!", 
	"biopic": "images/may.jpg",
	"contacts": {
		"mobile": "714-757-3945",
		"email": "maymoonah1991@hotmail.com",
		"github": "Maymoonah",
		"twitter": "@MaymoonahM",
		"location": "West Covina, CA"
	},
	"skills": ["HTML", "CSS", "JavaScript", "jQuery", "c++"]
	
}
	

var education = {
	"schools": [
		{
			"name": "Mt San Antonio College",
			"location": "Walnut, CA",
			"degree": "Associate of Science and Associate of Arts",
			"dates": "06-18-2017",
			"url": "http://www.mtsac.edu",
			"majors": ["AS Computer Programming", "AS Computer Database Management", "AA Liberal Arts - Emphasis in Math"]

		}
		],

		"onlineCourses": [
		{
			"title": "Intro to HTML & CSS",
			"school": "Udacity",
			"dates": "12-08-2016",
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title": "The Web Developer Bootcamp",
			"school": "Udemy",
			"dates": "5-01-2017",
			"url": "https://www.udemy.com/the-web-developer-bootcamp/"			
		}		
	],
	display: function() {
	for(ed in education.schools) {
	$("#education").append(HTMLschoolStart);

 		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[ed].name);
 		$(".education-entry:last").append(formattedSchoolName);
 		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[ed].location);
 		$(".location-text").append(formattedSchoolLocation);
 		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[ed].degree);
 		$(".education-entry:last").append(formattedDegree);
 		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[ed].dates);
 		$(".date-text").append(formattedSchoolDates);
 		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[ed].majors);
 		$(".education-entry:last").append(formattedMajors);
	
	 		
}	
	
	for(edu in education.onlineCourses){
		$("#education").append(HTMLonlineClasses);

 		var formattedOnlineName = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
 		$(".education-entry:last").append(formattedOnlineName);
 		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[edu].school);
 		$(".education-entry:last").append(formattedOnlineSchool);
 		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[edu].dates);
 		$(".date-text").append(formattedOnlineDates);
 		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[edu].url);
 		$(".education-entry:last").append(formattedOnlineURL);
	
	}
	
}
				
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedMessage);
$("#header").append(formattedPic);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);

}


var displayWork = function() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	
	}
}

displayWork();

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});



var inName = function(name) {
	var newName = "";
	if (name.length > 0) {
		var fullName = name.trim().split(" ");
		newName = fullName[0].slice(0, 1).toUpperCase() + fullName[0].slice(1).toLowerCase() + " " + fullName[1].toUpperCase();
	}
	return newName;
}

//console.log(inName("sebastian thrun"));

//$("#main").append(internationalizeButton);

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
}



//education information


projects.display();

education.display();



$("#mapDiv").append(googleMap);
