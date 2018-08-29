<template>
    <div class="container-fluid footer">
        <div id="contact-form" class="row contact-us">
            <div class="form-section">
                <div class="title">
                    <h5>Contact Us</h5>
                    <p>Pay here from lorem ipsum dolor se amat</p>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form">
                            <div class="form-group">
                                <input
                                 type="text"
                                 class="form-control input"
                                  placeholder="Subject"
                                  :value="message.subject"
                                  @keyup="$store.commit('SET_MESSAGE', { key: 'subject', value: $event.target.value })">
                            </div>
                            <div class="form-group">
                                <textarea
                                 class="form-control input"
                                  rows="5"
                                  :value="message.message"
                                  @keyup="$store.commit('SET_MESSAGE', { key: 'message', value: $event.target.value })">
                                  </textarea>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form">
                            <div class="form-group">
                                <input
                                 type="text"
                                 class="form-control input"
                                 placeholder="Full Name"
                                 :value="message.name"
                                 @keyup="$store.commit('SET_MESSAGE', { key: 'name', value: $event.target.value })">
                            </div>
                            <div class="form-group">
                                <input
                                 type="text"
                                  class="form-control input"
                                  placeholder="Email"
                                  :value="message.email"
                                  @keyup="$store.commit('SET_MESSAGE', { key: 'email', value: $event.target.value })">
                            </div>
                            <div class="form-group">
                                <div id="recaptcha"></div>
                            </div>
                            <div class="form-group justify-content-md-start">
                                <div class="decor-button">
                                    <button
                                     type="submit"
                                     :loading="loaders.message"
                                     @click="contact()">
                                     Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="policies" class="row footer-menu">
            <div class="col-12">
                <div class="center-logo">
                    <div class="img">
                        <img src="../static/images/Bitmap@3x.png" alt="logo">
                    </div>
                    <p>SIGNATURE JEWELRY INC</p>
                    <div class="menu-list">
                        <ul class="center-menu">
                            <li class="nav-item">
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
                    </div>
                </div>
            </div>
        </div>
        <div class="row footer-end-section">
            <div class="col-lg-4 col-md-4 justify-content-md-end text-md-right">
                <div class="title">
                    <h5>POLIECIES</h5>
                    <p class="all-reserve">All rights reserved 2018.</p>
                </div>
            </div>
            <div class="col-lg-8 col-md-8 justify-content-md-start">
                <p class="footer-text">
                    Items purchased may be exchanged within three (3) days of purchase for equal or greater value. Purchase date is determined based on sales receipt. No returns will be processed without notifying Signature Jewelry during the 3 day period. Notification must be in the form of a signed written notice faxed to Signature Jewelry which includes invoice number, payment method, item to be returned, and reason for return. In addition, to ensure that everything is processed smoothly, the client must contact us personally, either by phone or in person so that proper arrangements can be made for a refund and any return issues can be addressed.
                    There are no exceptions
                </p>
            </div>
        </div>
    </div>
</template>

<script>
/* global grecaptcha */
import { mapState } from "vuex"
import $ from "jquery"

export default {
  data() {
    return {
      recaptcha: null
    }
  },
  computed: {
    ...mapState(["props", "message", "loaders"])
  },
  mounted() {
    this.recaptcha = grecaptcha.render("recaptcha", {
      sitekey: "6LcyuEkUAAAAAAeyxeeuqxTRk5lu3hR02sIIuSOF",
      callback: this.onRecaptchaResponse
    })
  },
  methods: {
    down: function(page) {
      $("html, body").animate(
        {
          scrollTop: $(page).offset().top - 75
        },
        1000
      )
    },
    onRecaptchaResponse: function(value) {
      this.$store.commit("SET_MESSAGE", { key: "grecaptcha", value })
    },
    contact: function() {
      this.$store.dispatch("contact")
      grecaptcha.reset(this.recaptcha)
    }
  }
}
</script>


