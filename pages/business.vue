<template>
    <div>
        <section id="collections" class="business-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-6 left-section">
                        <div class="portfolio">
                            <div class="images-big">
                                <img src="../static/images/mac.png" alt="busines">
                            </div>
                        </div>
                        <div class="side-bar">
                            <nuxt-link
                                    to="/"
                                    :data-active="$route.name === 'index'">
                                FOR CLIENTS
                            </nuxt-link>
                            <nuxt-link
                                    to="/business"
                                    :data-active="$route.name === 'business'">
                                For Business
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 right-section">
                        <div class="about">
                            <h5>OUR PRODUCT</h5>
                            <p>Specializing in invisible set diamond jewelry and lorem ipsum</p>
                            <p>dolor se amat amor sebun sena del a palabras</p>
                            <p>ib sana terasia</p>

                            <div class="view-all">
                                <a href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="price-list" class="row invoice-list">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 title text-center">
                                <h5>Easy invoice creation</h5>
                            </div>
                        </div>
                        <div class="row list-items">
                            <img class="backgrong-png" src="../static/images/Bitmap3@3x.png" alt="Diamond">
                            <div class="col-md-6 col-lg-6 left-setion-text">
                                <h6>Create your invoice</h6>
                                <p>Lorem may be exchanged within three (3) days of purchase for equal or greater value. Purchase date is determined based on sales receipt. No returns will be processed without notifying Signature Jewelry during the 3 day period. Notification must be in the form of a signed written notice faxed to Signature Jewelry which includes invoice number, payment method, item to be returned, and reason for return. In addition, to ensure that everything.</p>
                            </div>
                            <div class="col-md-6 col-lg-6 justify-content-center align-items-center flex-center">
                                <img class="img-mac" src="../static/images/imac.png" alt="imac">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row plan">
                    <div class="row form-section">
                        <div class="center-logo">
                            <span>CHOOSE YOUR SUBSCRIPTION PLAN</span>
                        </div>
                        <div class="col-md-4 col-lg-4">
                            <div class="plan-section">
                                <div class="title-section">
                                    <h5>LITE</h5>
                                    <p>$29.00 / year</p>
                                </div>
                                <div class="plan-body">
                                    <ul>
                                        <li><a href="#">1 user</a></li>
                                        <li><a href="#">100 Invoice / Month</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4">
                            <div class="plan-section">
                                <div class="title-section">
                                    <h5>REGULAR</h5>
                                    <p>$99.00 / year</p>
                                </div>
                                <div class="plan-body">
                                     <ul>
                                        <li><a href="#">Up To 5 Users</a></li>
                                        <li><a href="#">Up to 1000 Clients Database</a></li>
                                        <li><a href="#">1000 Invoice / Month</a></li>
                                        <li><a href="#">Mobile Access</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4">
                            <div class="plan-section">
                                <div class="title-section">
                                    <h5>PREMIUM</h5>
                                    <p>$199.00 / year</p>
                                </div>
                                <div class="plan-body">
                                     <ul>
                                        <li><a href="#">Unlimited Users</a></li>
                                        <li><a href="#">Unlimited Clinents Database</a></li>
                                        <li><a href="#">Unlimited Invoice / Month</a></li>
                                        <li><a href="#">Automatic Backups</a></li>
                                        <li><a href="#">Excel Export Functionality</a></li>
                                        <li><a href="#">Custom Printable Invoice Design</a></li>
                                        <li><a href="#">Monthly Reports</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from "vuex"
// import $ from "jquery"

export default {
  computed: {
    ...mapState(["message"])
  }
}
</script>

