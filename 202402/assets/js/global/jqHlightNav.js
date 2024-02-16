// ---------------
// jqHlightNav.js
// highlight 所選頁面
// ---------------
var url = window.location.href;  
  // Navbar
$(".navbar-nav>li>a").each(function() { 
  if (url == (this.href)) { 
    $(this).closest("li").addClass("active");
    } 
  }); 
$(".navbar-nav>.dropdown-menu>li>a").each(function() { // dropdown
  if (url == (this.href)) { 
    $(this).closest("li").parent().parent().addClass("active"); 
    } 
  });
$(".navbar-nav>.dropdown-menu>.dropdown-menu>li>a").each(function() { // dropdown
  if (url == (this.href)) { 
    $(this).closest("li").parent().parent().parent().addClass("active"); 
    } 
  });


// --------------
// Sidebar
// --------------
$(".nav-stacked>li>a").each(function() { 
  if (url == (this.href)) { 
    $(this).closest("li").addClass("active");
    } 
  });

