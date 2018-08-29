<template>
    <div>
        <section id="collections" class="private-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-6 left-section">
                        <div class="portfolio">
                            <div class="images-big">
                                <img src="../static/images/Group12@3x.png" alt="J E W E L R Y">
                            </div>
                            <div class="images-small">
                                <img src="../static/images/Group12Copy2@3x.png" alt="J E W E L R Y">
                                <img src="../static/images/Group12Copy3@3x.png" alt="J E W E L R Y">
                                <img src="../static/images/Group12Copy4@3x.png" alt="J E W E L R Y">
                                <img src="../static/images/Group12Copy5@3x.png" alt="J E W E L R Y">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 right-section">
                        <div class="about">
                            <h5>REPAIRED JEWELERY</h5>
                            <p>Specializing in invisible set diamond jewelry and lorem ipsum</p>
                            <p>dolor se amat amor sebun sena del a palabras</p>
                            <p>ib sana terasia</p>

                            <div class="view-all">
                                <a href="#">View All</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="price-list" class="row price-list">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 title text-center">
                                <h5>PRICE LIST</h5>
                                <p>For estimates on repair, please call for prices!</p>
                            </div>
                        </div>
                        <div class="row list-items">
                            <img class="backgrong-png" src="../static/images/Bitmap3@3x.png" alt="Diamond">
                            <div class="col-lg-2 col-md-4 col-sm-6 col-6 sections-price">
                                <div>
                                    <img src="../static/images/diamondimg.png" alt="diamond">
                                    <h6>Invisible Settings</h6>
                                    <p>$ 10</p>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6 col-6 sections-price">
                                <div>
                                    <img src="../static/images/diamondimg.png" alt="diamond">
                                    <h6>Bazel</h6>
                                    <p>$ 6</p>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6 col-6 sections-price">
                                <div>
                                    <img src="../static/images/diamondimg.png" alt="diamond">
                                    <h6>Pave</h6>
                                    <p>$ 10</p>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6 col-6 sections-price">
                                <div>
                                    <img src="../static/images/diamondimg.png" alt="diamond">
                                    <h6>Chanel Bgt.</h6>
                                    <p>$ 6</p>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6 col-6 sections-price">
                                <div>
                                    <img src="../static/images/diamondimg.png" alt="diamond">
                                    <h6>Chanel Round</h6>
                                    <p>$ 5</p>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6 col-6 sections-price">
                                <div>
                                    <img src="../static/images/diamondimg.png" alt="diamond">
                                    <h6>Center Stone</h6>
                                    <p>$ 50+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="payFor" class="row pay-repair">
                    <div class="form-section">
                        <div class="title">
                            <h5>Pay for Repairs</h5>
                            <p>Pay here from lorem ipsum dolor se amat</p>
                        </div>
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="POST">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control input"
                                    placeholder="Invoice"
                                    :value="$store.state.invoiceNumber"
                                    @keyup="$store.commit('SET', { key: 'invoiceNumber', value: $event.target.value })">

                                <input name="add" value="1" type="hidden">
                                <input name="cmd" value="_cart" type="hidden">
                                <input name="business" value="signaturejewelry@hotmail.com" type="hidden">
                                <input name="item_number" value="001" type="hidden">
                                <input name="no_shipping" value="0" type="hidden">
                                <input name="no_note" value="1" type="hidden">
                                <input name="currency_code" value="USD" type="hidden">
                                <input name="item_name" :value="`Pay For Repairs, invoice # ${$store.state.invoiceNumber}`" type="hidden"/>
                                <input name="lc" value="US" type="hidden">
                                <input name="bn" value="PP-ShopCartBF" type="hidden">
                                <input name="shopping_url" :value="$store.state.baseUrl" type="hidden">

                            </div>
                            <div class="form-group">
                                <input type="text" step="any" class="form-control input" placeholder="Amount">
                            </div>
                            <div class="form-group">
                                <div class="decor-button pay-rep">
                                    <button type="submit">Pay</button>
                                </div>
                            </div>
                        </form>
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

