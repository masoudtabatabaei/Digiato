// var fixMeTop1 = $("#swn1").offset().top;
// var fixMeTop2 = $("#swn2").offset().top;
//
// var fixMeTop_width1 = $(".right-side").width();
// var fixMeTop_width2 = $(".left-side").width();
//
// console.log("paginate top : " + $(".custom-paginate").offset().top);
//
// $(window).scroll(function () {
//     var currentScroll = $(window).scrollTop();
//
//     console.log(currentScroll);
//
//     if (currentScroll >= fixMeTop1 && currentScroll<= 3850) {
//
//         $("#swn1").css({
//             position: 'fixed',
//             top: '50px',
//             width: fixMeTop_width1,
//             border: '1px solid red',
//         });
//
//         // $(".scrolled-news").css({
//         //     overflow : "scroll"
//         // });
//
//     } else {
//         $("#swn1").css({
//             position: 'static',
//         });
//     }
//
//     if (currentScroll >= fixMeTop2 && currentScroll<= 3850) {
//         $("#swn2").css({
//             position: 'fixed',
//             top: '50px',
//             width: fixMeTop_width2,
//             border: '1px solid red',
//         });
//         console.log("height is : " + $("#swn1").height());
//     } else {
//         $("#swn2").css({
//             position: 'static',
//         });
//     }
// });