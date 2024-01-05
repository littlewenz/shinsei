$(document).ready(function(){
    embedShinseiTwitter();
});


function embedShinseiTwitter() {
    var linksHeight = $("#shinsei_links").height();
    var twitterHeight = (window.innerHeight * 0.75) - linksHeight;
    var twitterContent = '<a class="twitter-timeline fa-fade" data-height="' +twitterHeight + '" data-dnt="true" data-theme="dark" href="https://twitter.com/ProjectShinsei" style="color: white; text-decoration: none;"><i class="fa-solid fa-spinner fa-spin"></i> Loading</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'

    $("#hq_announcements").css('height', twitterHeight + 20)
    $("#hq_announcements").html(twitterContent);
}