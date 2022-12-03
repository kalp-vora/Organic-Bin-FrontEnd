import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { UserService } from '../service/user.service';
import { faLock, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service: UserService, private rout: Router) { }

  ngOnInit() {
    if ($(".mobile-nav__toggler").length) {
      $(".mobile-nav__toggler").on("click", function (e) {
        e.preventDefault();
        $(".mobile-nav__wrapper").toggleClass("expanded");
        $("body").toggleClass("locked");
      });
    }

    if ($(".search-toggler").length) {
      $(".search-toggler").on("click", function (e) {
        e.preventDefault();
        $(".search-popup").toggleClass("active");
        $(".mobile-nav__wrapper").removeClass("expanded");
        $("body").toggleClass("locked");
      });
    }

    if ($(".main-menu__list").length && $(".mobile-nav__container").length) {
      let navContent = $(".main-menu__list").prop("outerHTML");
      let mobileNavContainer = $(".mobile-nav__container");
      mobileNavContainer.append(function () {
        return navContent;
      });
    }
    if ($(".sticky-header__content").length) {
      let navContent = $(".main-menu").html();
      let mobileNavContainer = $(".sticky-header__content");
      mobileNavContainer.append(function () {
        return navContent;
      });
    }

    if ($(".mobile-nav__container .main-menu__list").length) {
      let dropdownAnchor = $(
        ".mobile-nav__container .main-menu__list .menu-item-has-children > a"
      );
      dropdownAnchor.each(function () {
        let self = $(this);
        let toggleBtn = document.createElement("BUTTON");
        toggleBtn.setAttribute("aria-label", "dropdown toggler");
        toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
        self.append(function () {
          return toggleBtn;
        });
        self.find("button").on("click", function (e) {
          e.preventDefault();
          let self = $(this);
          self.toggleClass("expanded");
          self.parent().toggleClass("expanded");
          self.parent().parent().children("ul").toggleClass("expanded");
        });
      });
    }
  }

  faLock = faLock;
  faBars = faBars;


  get isLoggedIn() {
    return this.service.isLoggedIn();
  }

  get isCompanyLoginIn() {
    return this.service.isCompanyLogIn();
  }

  logout() {
    sessionStorage.clear();
    this.rout.navigate(['/']);
  }

}
