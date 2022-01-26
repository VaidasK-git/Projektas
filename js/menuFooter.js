//Header sukurumas
function getHeader(header) {
    let template = '<div class="header-title"> <h1 class="header-title-h1 colorOne">laisvė kurios nusipelnei</h1> </div><nav class="header-nav"> <div class="header-nav-left"> <div class="header-nav-left-dir"> <a href="index.html" class="colorOne">Hostingas</a> </div></div><div class="header-nav-right"> <div class="header-nav-right-div"> <div class="hamburger"> <div class="bar1 colorOne-background"></div><div class="bar2 colorOne-background"></div><div class="bar3 colorOne-background"></div></div><ul class="header-nav-right-div-ul"> <li class="header-nav-right-div-ul-li"> <a href="partners.html" class="colorOne" translation-menu-partners>Partneriai</a> </li><li class="header-nav-right-div-ul-li"> <a href="feedback.html" class="colorOne" translation-menu-feedback>Atsiliepimai</a> </li><li class="header-nav-right-div-ul-li marked colorOne-background"> <a href="order.html" class="colorFour" translation-menu-order>Užsakyk!</a> </li></ul> <select name="language" id="languageChanger" class="colorOne colorThree-background language"> <option value="en">EN</option> <option value="lt">LT</option> </select> </div></div></nav>'
    header.innerHTML = template
}

//Mobilaus meniu sukurimas
function getMobileMenu(mobileMenu) {
    let template = '<ul class="mobile-nav-ul"> <li class="mobile-nav-ul-li"> <a href="index.html" class="colorOne">Hostingas</a> </li><li class="mobile-nav-ul-li"> <a href="partners.html" class="colorOne" translation-menu-partners>Partneriai</a> </li><li class="mobile-nav-ul-li colorOne"> <a href="feedback.html" class="colorOne" translation-menu-feedback>Atsiliepimai</a> </li><li class="mobile-nav-ul-li marked colorOne-background"> <a href="order.html" class="colorFour" translation-menu-order>Užsakyk!</a> </li></ul>'
    mobileMenu.innerHTML = template
}

//Footer sukurimas
function getFooter(footer) {
    let template = '<nav class="footer-nav"> <address translation-footer-contacts>Kontaktai: serveriai@serveriai.com</address> </nav>'
    footer.innerHTML = template
}

