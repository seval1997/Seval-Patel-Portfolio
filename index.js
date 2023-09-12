var sectionContentTracker = 0;
var academicCardTracker = 0;
var experienceCardTracker = 0;

$(".sidebarMenu" + sectionContentTracker).css("background-color", "grey");

$(".sidebarHeader").on("click", function () {
    $(".sidebar").toggleClass("sidebarClose");
    $(".sidebarIconName").toggleClass("sidebarIconNameInvisible");
});

$(".sidebarMenu").hover(function () {
    $(this).toggleClass("sidebarMenuHover");
})

$(".stickyBtnUp").on("click", function () {
    sectionContentTracker--;
    if(sectionContentTracker <= 0) {
        sectionContentTracker = 0;
    }
    showHide();
})

$(".stickyBtnDown").on("click", function () {
    sectionContentTracker++;
    if(sectionContentTracker >= 6) {
        sectionContentTracker = 6;
    }
    showHide();
})

$(".stickyBtnLeft").on("click", function () {
    $(".ac1").addClass("academicCardInvisible");
    setTimeout(function () {
        $(".ac0").removeClass("academicCardInvisible");
    }, 1000);
})

$(".stickyBtnRight").on("click", function () {
    $(".ac0").addClass("academicCardInvisible");
    setTimeout(function () {
        $(".ac1").removeClass("academicCardInvisible");
    }, 1000);
})

$(".experienceCard").on("click", function () {
    experienceCardTracker++;
    if (experienceCardTracker > 2) {
        experienceCardTracker = 0;
    }

    $(".experienceCard").addClass("experienceCardInvisible")
    $(".expCard" + experienceCardTracker).toggleClass("experienceCardInvisible");

})


function showHide() {
    if (sectionContentTracker === 0) {
        showCoverAndHideAll();
    } else if (sectionContentTracker === 1) {
        showSummaryAndHideAll();
    } else if (sectionContentTracker === 2) {
        showAcademicAndHideAll();
    } else if (sectionContentTracker === 3) {
        showExperienceAndHideAll();
    } else if (sectionContentTracker === 4) {
        showCertificateAndHideAll();
    } else if (sectionContentTracker === 5) {
        showInterestAndHideAll();
    } else if(sectionContentTracker === 6) {
        showContactAndHideAll();
    }
}

function showCoverAndHideAll() {
    $(".cover").removeClass("coverInvisible");
    $(".sectionSummary").addClass("sectionSummaryInvisible");
    $(".sectionAcademic").addClass("sectionAcademicInvisible");
    $(".sectionExperience").addClass("sectionExperienceInvisible");
    $(".sectionCertificate").addClass("sectionCertificateInvisible");
    $(".sectionInterest").addClass("sectionInterestInvisible");
    $(".sectionContact").addClass("sectionContactInvisible");
    $(".sidebarMenu").css("background-color", "transparent");
    $(".sidebarMenu" + sectionContentTracker).css("background-color", "grey");
}

function showSummaryAndHideAll() {
    $(".sectionSummary").removeClass("sectionSummaryInvisible");
    $(".cover").addClass("coverInvisible");
    $(".sectionAcademic").addClass("sectionAcademicInvisible");
    $(".sectionExperience").addClass("sectionExperienceInvisible");
    $(".sectionCertificate").addClass("sectionCertificateInvisible");
    $(".sectionInterest").addClass("sectionInterestInvisible");
    $(".sectionContact").addClass("sectionContactInvisible");
    $(".sidebarMenu").css("background-color", "transparent");
    $(".sidebarMenu" + sectionContentTracker).css("background-color", "grey");

}


function showAcademicAndHideAll() {
    $(".sectionAcademic").removeClass("sectionAcademicInvisible");
    $(".cover").addClass("coverInvisible");
    $(".sectionSummary").addClass("sectionSummaryInvisible");
    $(".sectionExperience").addClass("sectionExperienceInvisible");
    $(".sectionCertificate").addClass("sectionCertificateInvisible");
    $(".sectionInterest").addClass("sectionInterestInvisible");
    $(".sectionContact").addClass("sectionContactInvisible");
    $(".sidebarMenu").css("background-color", "transparent");
    $(".sidebarMenu" + sectionContentTracker).css("background-color", "grey");

}

function showExperienceAndHideAll() {
    $(".sectionExperience").removeClass("sectionExperienceInvisible");
    $(".sectionAcademic").addClass("sectionAcademicInvisible");
    $(".cover").addClass("coverInvisible");
    $(".sectionSummary").addClass("sectionSummaryInvisible");
    $(".sectionCertificate").addClass("sectionCertificateInvisible");
    $(".sectionInterest").addClass("sectionInterestInvisible");
    $(".sectionContact").addClass("sectionContactInvisible");
    $(".sidebarMenu").css("background-color", "transparent");
    $(".sidebarMenu" + sectionContentTracker).css("background-color", "grey");

}

function showCertificateAndHideAll() {
    $(".sectionCertificate").removeClass("sectionCertificateInvisible");
    $(".sectionExperience").addClass("sectionExperienceInvisible");
    $(".sectionAcademic").addClass("sectionAcademicInvisible");
    $(".cover").addClass("coverInvisible");
    $(".sectionSummary").addClass("sectionSummaryInvisible");
    $(".sectionInterest").addClass("sectionInterestInvisible");
    $(".sectionContact").addClass("sectionContactInvisible");
    $(".sidebarMenu").css("background-color", "transparent");
    $(".sidebarMenu" + sectionContentTracker).css("background-color", "grey");

}

function showInterestAndHideAll() {
    $(".sectionInterest").removeClass("sectionInterestInvisible");
    $(".sectionCertificate").addClass("sectionCertificateInvisible");
    $(".sectionExperience").addClass("sectionExperienceInvisible");
    $(".sectionAcademic").addClass("sectionAcademicInvisible");
    $(".cover").addClass("coverInvisible");
    $(".sectionSummary").addClass("sectionSummaryInvisible");
    $(".sectionContact").addClass("sectionContactInvisible");
    $(".sidebarMenu").css("background-color", "transparent");
    $(".sidebarMenu" + sectionContentTracker).css("background-color", "grey");
}

function showContactAndHideAll() {
    $(".sectionContact").removeClass("sectionContactInvisible");
    $(".sectionInterest").addClass("sectionInterestInvisible");
    $(".sectionCertificate").addClass("sectionCertificateInvisible");
    $(".sectionExperience").addClass("sectionExperienceInvisible");
    $(".sectionAcademic").addClass("sectionAcademicInvisible");
    $(".cover").addClass("coverInvisible");
    $(".sectionSummary").addClass("sectionSummaryInvisible");
    $(".sidebarMenu").css("background-color", "transparent");
    $(".sidebarMenu" + sectionContentTracker).css("background-color", "grey");

}
