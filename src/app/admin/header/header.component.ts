import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import * as $ from 'jquery';
import { faLock, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faLock = faLock;
  faBars = faBars;

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

  get isAdminLogIn() {
    return this.service.isAdminLogIn();
  }

  logout() {
    sessionStorage.clear();
    this.rout.navigate(['/']);
  }
}
