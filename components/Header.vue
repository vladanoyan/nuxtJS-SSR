<template>
    <div>
      <nav
         class="navbar navbar-expand-lg fixed-top"
        :data-scrolled="props.scrollTop > 10 ? true : false">
            <div class="nav-menu container">
                <a
                class="navbar-brand"
                href="#"
                @click.prevent="logoClick()">
                    SIGNATURE JEWELRY INC.
                </a>
                <button @click="openMobileNav()" v-bind:class="[mobileNavVisible ? 'change' : '']" class="navbar-toggler" type="button">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                </button>
                <div v-bind:class="[mobileNavVisible ? 'fadeInDown' : 'fadeInUp']" class=" navbar-collapse menu" id="navbarText">
                    <ul class="navbar-nav mr-auto center-menu">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" @click.prevent="logoClick()">home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click.prevent="down('#collections')">colections</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click.prevent="down('#price-list')">price list</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click.prevent="down('#contact-form')">contacts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click.prevent="down('#policies')">policeies</a>
                        </li>
                    </ul>
                    <div class="login-logout">
                        <ul>
                            <li><a :href="loginUrl">Login</a></li>

                            <li><a href="#" @click.prevent="down('#payFor')">Pay for Repair</a></li>
                        </ul>
                    </div>
                </div>
            </div>  
        </nav>
        <section id="header" class="flex-center justify-content">
            <div class="content-center">
                <div class="mainSection col-12">
                    <img src="../static/images/Bitmap@3x.png" alt="logo">
                </div>
                <div class="col-12 footerButtons">
                    <div class="col-lg-3 privateBlock">
                        <nuxt-link
                            to="/"
                            :data-active="$route.name === 'index'">
                                FOR PRIVATE CLIENTS
                        </nuxt-link>
                        <nuxt-link
                            to="/business"
                            :data-active="$route.name === 'business'">
                                For Business
                        </nuxt-link>
                    </div>
                    <div class="col-lg-6 center">
                        <div class="center-logo">
                            <span>SIGNATURE JEWELRY INC</span>
                            <p class="text">Specializing in invisible set diamond jewerly <br>
                                We have the answers to your problems</p>
                        </div>
                    </div>
                    <div class="col-lg-3"></div>
                </div>
            </div>
            <div class="contacts container">
                <div class="social">
                    <a href="#">
                        <no-ssr>
                            <icon :icon="['fab', 'facebook-f']"/>
                        </no-ssr>
                    </a>
                     <a href="#">
                        <no-ssr>
                            <icon :icon="['fab', 'instagram']"/>
                        </no-ssr>
                    </a>
                     <a href="#">
                        <no-ssr>
                            <icon :icon="['fab', 'youtube']"/>
                        </no-ssr>
                    </a>
                     <a href="#">
                        <no-ssr>
                            <icon :icon="['fab', 'twitter']"/>
                        </no-ssr>
                    </a>
                </div>
                <div class="button-down">
                    <button
                    class="down-button"
                     @click.prevent="down('#collections')">
                    </button>
                </div>
                <div class="contact-number">
                    <img src="../static/images/phone.png" alt="phone">
                    <span><a href="tel:8778397378">877.8.EXPERT  877.839.7378</a></span>
                </div>
                <div class="call-button">
                    <a href="tel:8778397378">
                        <no-ssr>
                            <icon :icon="['fas', 'phone']"/>
                        </no-ssr>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from "vuex"
import $ from "jquery"

export default {
  computed: {
    ...mapState(["props"])
  },
  data: function() {
    return {
      mobileNavVisible: false,
      loginUrl: ""
    }
  },
  mounted() {
    this.loginUrl = `${window.location.protocol}//${
      window.location.hostname
    }:4040`
  },
  methods: {
    logoClick: function() {
      if (this.$route.name === "index") {
        $("html, body").animate({ scrollTop: 0 }, 500)
        return
      }

      this.$router.push({ name: "index" })
    },
    down: function(page) {
      $("html, body").animate(
        {
          scrollTop: $(page).offset().top - 75
        },
        1000
      )
    },
    openMobileNav: function() {
      this.mobileNavVisible = !this.mobileNavVisible
      if (this.mobileNavVisible) {
        $("body").addClass("no-scroll")
      } else {
        $("body").removeClass("no-scroll")
      }
    }
  }
}
</script>


