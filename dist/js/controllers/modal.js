Modal=function(){var a=function(){b()},b=function(){$(document).ready(c),$(document).ready(e),$(document).on("click tap","#attract",d),$(window).on("orientationchange",e),$(window).on("resize",e)},c=function(){$("#attract").removeClass("fade").addClass("in").css("z-index","3")},d=function(){$("#attract").addClass("fade").removeClass("in").css("z-index","0")},e=function(){window.innerHeight>window.innerWidth?($("#checkscreen").removeClass("fade").addClass("in"),$("#checkscreen").css("z-index","3")):($("#checkscreen").addClass("fade").removeClass("in"),$("#checkscreen").css("z-index","-2"))};return{init:a,showAttract:c,checkScreen:e}}();