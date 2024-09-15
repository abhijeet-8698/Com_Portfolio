import React from "react";

const ServiceSection=()=>
{
return(
<section class="pt-0">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="overflow-hidden">
                <div class="fancy-tab">
                  <div class="fancy-bar justify-content-center">
                    <div class="fancy-bar-item active"><span class="fas fa-coffee"></span><span class="d-none mt-1 d-lg-block">Breakfast</span></div>
                    <div class="fancy-bar-item"><span class="fas fa-utensils"></span><span class="d-none mt-1 d-lg-block">Lunch</span></div>
                    <div class="fancy-bar-item"><span class="fas fa-drumstick-bite"></span><span class="d-none mt-1 d-lg-block">Dinner</span></div>
                    <div class="fancy-bar-item"><span class="fas fa-birthday-cake"></span><span class="d-none mt-1 d-lg-block">Desserts</span></div>
                    <div class="fancy-bar-item"><span class="fas fa-glass-cheers"></span><span class="d-none mt-1 d-lg-block">Drinks</span></div>
                  </div>
                  <div class="fancy-tab-contents bg-light rounded-soft">
                    <div class="fancy-tab-content active">
                      <div class="row no-gutters overflow-hidden" data-zanim-timeline="{&quot;delay&quot;:0}" data-zanim-trigger="scroll">
                        <div class="col"><img class="position-absolute r-0 rounded-soft" src="assets/img/food/egg.png" alt="" width="200" data-zanim-xs='{"from":{"x":50,"y":-50,"opacity":0},"to":{"x":0,"y":0,"opacity":1},"delay":0.4,"duration":2}' /><img class="position-absolute b-0 l-0 rounded-soft d-none d-md-block" src="assets/img/food/bread.png" alt="" width="400" data-zanim-xs='{"animation":"slide-right","delay":0.8,"duration":1}' />
                          <div class="row py-8 rounded-soft no-gutters">
                            <div class="col-lg-4 border-lg-right border-2x border-300 px-5" data-zanim-xs='{"animation":"","delay":0.4,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">Breakfast Bowl</h6>
                                    <p class="text-danger font-weight-bold mb-0">$8.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Black Bean Cake, Greens, Tomato &amp; Avocado Pico drizzled with Lime Cream (Add egg $1)</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">EGG SANDWICH</h6>
                                    <p class="text-danger font-weight-bold mb-0">$7.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST BURRITO</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, &amp; Lime Cream</p>
                              </a></div>
                            <div class="col-lg-4 border-lg-right border-2x border-300 px-5" data-zanim-xs='{"animation":"","delay":0.5,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">VEGGIE JAMMIE</h6>
                                    <p class="text-danger font-weight-bold mb-0">$5.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with our Homemade Tofu Herb Spread, Cucumber Tomato, Red Onion, &amp; Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BAGEL WITH CREAM CHEESE</h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.00</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Plain, Cranberry, or Everything</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST PASTRIES</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.00</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, &amp; Lime Cream</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">Fried egg</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Fried Eggs, house hot sauce, local cheddar mac, lettuce, pickle &amp; onion on a sesame roll</p>
                              </a></div>
                            <div class="col-lg-4 px-5" data-zanim-xs='{"animation":"","delay":0.6,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">SMOKED SALMON BAGEL </h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Smoked Salmon, Capers, House Pickled Red Onions, &amp; Cream Cheese served on a Toasted Bagel</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST JAMMIE </h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">AVOCADO TOAST</h6>
                                    <p class="text-danger font-weight-bold mb-0">$7.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Crushed Avocado topped with MV Sea Salt on Toasted Multigrain</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">AVOCADO TOAST</h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Crushed Avocado topped with MV Sea Salt on Toasted Multigrain</p>
                              </a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fancy-tab-content">
                      <div class="row no-gutters overflow-hidden" data-zanim-timeline="{&quot;delay&quot;:0}" data-zanim-trigger="scroll">
                        <div class="col"><img class="position-absolute r-0 rounded-soft" src="assets/img/food/egg.png" alt="" width="200" data-zanim-xs='{"from":{"x":50,"y":-50,"opacity":0},"to":{"x":0,"y":0,"opacity":1},"delay":0.4,"duration":2}' /><img class="position-absolute b-0 l-0 rounded-soft d-none d-md-block" src="assets/img/food/bread.png" alt="" width="400" data-zanim-xs='{"animation":"slide-right","delay":0.8,"duration":1}' />
                          <div class="row py-8 rounded-soft no-gutters">
                            <div class="col-lg-4 border-lg-right border-2x border-300 px-5" data-zanim-xs='{"animation":"","delay":0.4,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">Breakfast Bowl</h6>
                                    <p class="text-danger font-weight-bold mb-0">$8.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Black Bean Cake, Greens, Tomato &amp; Avocado Pico drizzled with Lime Cream (Add egg $1)</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">EGG SANDWICH</h6>
                                    <p class="text-danger font-weight-bold mb-0">$7.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST BURRITO</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, &amp; Lime Cream</p>
                              </a></div>
                            <div class="col-lg-4 border-lg-right border-2x border-300 px-5" data-zanim-xs='{"animation":"","delay":0.5,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">VEGGIE JAMMIE</h6>
                                    <p class="text-danger font-weight-bold mb-0">$5.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with our Homemade Tofu Herb Spread, Cucumber Tomato, Red Onion, &amp; Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BAGEL WITH CREAM CHEESE</h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.00</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Plain, Cranberry, or Everything</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST PASTRIES</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.00</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, &amp; Lime Cream</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">Fried egg</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Fried Eggs, house hot sauce, local cheddar mac, lettuce, pickle &amp; onion on a sesame roll</p>
                              </a></div>
                            <div class="col-lg-4 px-5" data-zanim-xs='{"animation":"","delay":0.6,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">SMOKED SALMON BAGEL </h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Smoked Salmon, Capers, House Pickled Red Onions, &amp; Cream Cheese served on a Toasted Bagel</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST JAMMIE </h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">AVOCADO TOAST</h6>
                                    <p class="text-danger font-weight-bold mb-0">$7.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Crushed Avocado topped with MV Sea Salt on Toasted Multigrain</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">AVOCADO TOAST</h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Crushed Avocado topped with MV Sea Salt on Toasted Multigrain</p>
                              </a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fancy-tab-content">
                      <div class="row no-gutters overflow-hidden" data-zanim-timeline="{&quot;delay&quot;:0}" data-zanim-trigger="scroll">
                        <div class="col"><img class="position-absolute r-0 rounded-soft" src="assets/img/food/egg.png" alt="" width="200" data-zanim-xs='{"from":{"x":50,"y":-50,"opacity":0},"to":{"x":0,"y":0,"opacity":1},"delay":0.4,"duration":2}' /><img class="position-absolute b-0 l-0 rounded-soft d-none d-md-block" src="assets/img/food/bread.png" alt="" width="400" data-zanim-xs='{"animation":"slide-right","delay":0.8,"duration":1}' />
                          <div class="row py-8 rounded-soft no-gutters">
                            <div class="col-lg-4 border-lg-right border-2x border-300 px-5" data-zanim-xs='{"animation":"","delay":0.4,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">Breakfast Bowl</h6>
                                    <p class="text-danger font-weight-bold mb-0">$8.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Black Bean Cake, Greens, Tomato &amp; Avocado Pico drizzled with Lime Cream (Add egg $1)</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">EGG SANDWICH</h6>
                                    <p class="text-danger font-weight-bold mb-0">$7.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST BURRITO</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, &amp; Lime Cream</p>
                              </a></div>
                            <div class="col-lg-4 border-lg-right border-2x border-300 px-5" data-zanim-xs='{"animation":"","delay":0.5,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">VEGGIE JAMMIE</h6>
                                    <p class="text-danger font-weight-bold mb-0">$5.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with our Homemade Tofu Herb Spread, Cucumber Tomato, Red Onion, &amp; Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BAGEL WITH CREAM CHEESE</h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.00</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Plain, Cranberry, or Everything</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST PASTRIES</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.00</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, &amp; Lime Cream</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">Fried egg</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Fried Eggs, house hot sauce, local cheddar mac, lettuce, pickle &amp; onion on a sesame roll</p>
                              </a></div>
                            <div class="col-lg-4 px-5" data-zanim-xs='{"animation":"","delay":0.6,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">SMOKED SALMON BAGEL </h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Smoked Salmon, Capers, House Pickled Red Onions, &amp; Cream Cheese served on a Toasted Bagel</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST JAMMIE </h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">AVOCADO TOAST</h6>
                                    <p class="text-danger font-weight-bold mb-0">$7.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Crushed Avocado topped with MV Sea Salt on Toasted Multigrain</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">AVOCADO TOAST</h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Crushed Avocado topped with MV Sea Salt on Toasted Multigrain</p>
                              </a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fancy-tab-content">
                      <div class="row no-gutters overflow-hidden" data-zanim-timeline="{&quot;delay&quot;:0}" data-zanim-trigger="scroll">
                        <div class="col"><img class="position-absolute r-0 rounded-soft" src="assets/img/food/egg.png" alt="" width="200" data-zanim-xs='{"from":{"x":50,"y":-50,"opacity":0},"to":{"x":0,"y":0,"opacity":1},"delay":0.4,"duration":2}' /><img class="position-absolute b-0 l-0 rounded-soft d-none d-md-block" src="assets/img/food/bread.png" alt="" width="400" data-zanim-xs='{"animation":"slide-right","delay":0.8,"duration":1}' />
                          <div class="row py-8 rounded-soft no-gutters">
                            <div class="col-lg-4 border-lg-right border-2x border-300 px-5" data-zanim-xs='{"animation":"","delay":0.4,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">Breakfast Bowl</h6>
                                    <p class="text-danger font-weight-bold mb-0">$8.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Black Bean Cake, Greens, Tomato &amp; Avocado Pico drizzled with Lime Cream (Add egg $1)</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">EGG SANDWICH</h6>
                                    <p class="text-danger font-weight-bold mb-0">$7.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST BURRITO</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, &amp; Lime Cream</p>
                              </a></div>
                            <div class="col-lg-4 border-lg-right border-2x border-300 px-5" data-zanim-xs='{"animation":"","delay":0.5,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">VEGGIE JAMMIE</h6>
                                    <p class="text-danger font-weight-bold mb-0">$5.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with our Homemade Tofu Herb Spread, Cucumber Tomato, Red Onion, &amp; Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BAGEL WITH CREAM CHEESE</h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.00</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Plain, Cranberry, or Everything</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST PASTRIES</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.00</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, &amp; Lime Cream</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">Fried egg</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Fried Eggs, house hot sauce, local cheddar mac, lettuce, pickle &amp; onion on a sesame roll</p>
                              </a></div>
                            <div class="col-lg-4 px-5" data-zanim-xs='{"animation":"","delay":0.6,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">SMOKED SALMON BAGEL </h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Smoked Salmon, Capers, House Pickled Red Onions, &amp; Cream Cheese served on a Toasted Bagel</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST JAMMIE </h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">AVOCADO TOAST</h6>
                                    <p class="text-danger font-weight-bold mb-0">$7.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Crushed Avocado topped with MV Sea Salt on Toasted Multigrain</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">AVOCADO TOAST</h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Crushed Avocado topped with MV Sea Salt on Toasted Multigrain</p>
                              </a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fancy-tab-content">
                      <div class="row no-gutters overflow-hidden" data-zanim-timeline="{&quot;delay&quot;:0}" data-zanim-trigger="scroll">
                        <div class="col"><img class="position-absolute r-0 rounded-soft" src="assets/img/food/egg.png" alt="" width="200" data-zanim-xs='{"from":{"x":50,"y":-50,"opacity":0},"to":{"x":0,"y":0,"opacity":1},"delay":0.4,"duration":2}' /><img class="position-absolute b-0 l-0 rounded-soft d-none d-md-block" src="assets/img/food/bread.png" alt="" width="400" data-zanim-xs='{"animation":"slide-right","delay":0.8,"duration":1}' />
                          <div class="row py-8 rounded-soft no-gutters">
                            <div class="col-lg-4 border-lg-right border-2x border-300 px-5" data-zanim-xs='{"animation":"","delay":0.4,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">Breakfast Bowl</h6>
                                    <p class="text-danger font-weight-bold mb-0">$8.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Black Bean Cake, Greens, Tomato &amp; Avocado Pico drizzled with Lime Cream (Add egg $1)</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">EGG SANDWICH</h6>
                                    <p class="text-danger font-weight-bold mb-0">$7.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST BURRITO</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, &amp; Lime Cream</p>
                              </a></div>
                            <div class="col-lg-4 border-lg-right border-2x border-300 px-5" data-zanim-xs='{"animation":"","delay":0.5,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">VEGGIE JAMMIE</h6>
                                    <p class="text-danger font-weight-bold mb-0">$5.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with our Homemade Tofu Herb Spread, Cucumber Tomato, Red Onion, &amp; Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BAGEL WITH CREAM CHEESE</h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.00</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Plain, Cranberry, or Everything</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST PASTRIES</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.00</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, &amp; Lime Cream</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">Fried egg</h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Three Fried Eggs, house hot sauce, local cheddar mac, lettuce, pickle &amp; onion on a sesame roll</p>
                              </a></div>
                            <div class="col-lg-4 px-5" data-zanim-xs='{"animation":"","delay":0.6,"duration":2}'><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">SMOKED SALMON BAGEL </h6>
                                    <p class="text-danger font-weight-bold mb-0">$9.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Smoked Salmon, Capers, House Pickled Red Onions, &amp; Cream Cheese served on a Toasted Bagel</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">BREAKFAST JAMMIE </h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">AVOCADO TOAST</h6>
                                    <p class="text-danger font-weight-bold mb-0">$7.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Crushed Avocado topped with MV Sea Salt on Toasted Multigrain</p>
                              </a><a class="text-decoration-none" href="#" data-toggle="modal" data-target="#foodItemModel">
                                <div class="row no-gutters">
                                  <div class="col d-flex justify-content-between">
                                    <h6 class="fs-0 font-weight-bold text-uppercase text-black mr-4">AVOCADO TOAST</h6>
                                    <p class="text-danger font-weight-bold mb-0">$6.50</p>
                                  </div>
                                </div>
                                <p class="w-xl-75 text-600 mb-4">Crushed Avocado topped with MV Sea Salt on Toasted Multigrain</p>
                              </a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
)
}


export default ServiceSection;