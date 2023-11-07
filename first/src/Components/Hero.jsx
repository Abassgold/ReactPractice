import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
 import 'bootstrap/dist/js/bootstrap.js';
import style from './Hero.module.css'


function Hero() {
    return <>
        {/* <!-- main image & intro text --> */}
        <section id="intro">
            <div class="container-lg">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-5 text-center text-md-start">
                        <h1>
                            <div class="display-2">Black-Belt</div>
                            <div class="display-5 text-muted">Your Coding skills</div>
                        </h1>
                        <p class="lead my-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis facilis tempore dolores, nam, eum, qui officia inventore unde sint temporibus commodi voluptates error mollitia at. Nostrum facilis cum suscipit totam.</p>
                        <a href="#pricing" class="btn btn-secondary btn-lg">Buy Now</a>
                    </div>
                    <div class="col-md-5 text-center d-none d-md-block">
                        <img src="./images/Netninja1.jpeg" alt="" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </section>


        {/* <!-- pricing plan --> */}
        <section id="pricing" class=" bg-light mt-5">
            <div class="container-lg">
                <div class="text-center">
                    <h2>Pricing Plans</h2>
                    <p class="lead text-muted">Choose a pricing plan to suit you</p>
                </div>

                <div class="row my-5 align-items-center justify-content-center g-0">
                    <div class="col-8 col-lg-4 col-xl-3">
                        <div class="card border-0">
                            <div class="card-body text-center py-4">
                                <h4 class="card-tittle ">Starter Edition</h4>
                                <p class="lead card-subtittle">eBook download only</p>
                                <p class="display-5 my-4 text-primary fw-bold">$12.99</p>
                                <p class="card-text mx-5 text-muted d-none d-lg-block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ducimus enim sequi. Iusto numquam quia quidem et tempore blanditiis esse pariatur natus iure magni laborum sint, doloremque quibusdam, nostrum inventore!</p>
                                <a href="" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                            </div>
                        </div>
                    </div>


                    <div class="col-9 col-lg-4 ">
                        <div class="card border-primary border-2">
                            <div class="card-header text-primary text-center py-4">
                                <h4 class="card-tittle ">Starter Edition</h4>
                                <p class="lead card-subtittle">eBook download only</p>
                                <p class="display-5 my-4 text-primary fw-bold">$12.99</p>
                                <p class="card-text mx-5 text-muted d-none d-lg-block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ducimus enim sequi. Iusto numquam quia quidem et tempore blanditiis esse pariatur natus iure magni laborum sint, doloremque quibusdam, nostrum inventore!</p>
                                <a href="" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-8 col-lg-4 col-xl-3">
                        <div class="card border-0">
                            <div class="card-body text-center py-4">
                                <h4 class="card-tittle ">Ultimate Edition</h4>
                                <p class="lead card-subtittle">Download Updates & extras</p>
                                <p class="display-5 my-4 text-primary fw-bold">$24.99</p>
                                <p class="card-text mx-5 text-muted d-none d-lg-block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ducimus enim sequi. Iusto numquam quia quidem et tempore blanditiis esse pariatur natus iure magni laborum sint, doloremque quibusdam, nostrum inventore!</p>
                                <a href="" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* <!-- topic at glance using accordion --> */}
        <section id="topics">
            <div class="container-md">
                <div class="text-center">
                    <h2>Inside the Book...</h2>
                    <p class="lead text-muted">A quick glance at the topics youll learn</p>
                </div>


                <div class="row my-5 g-5 justify-content-around align-items-center">
                    <div class="col-6 col-lg-4">
                        <span class="tt" data-bs-placement="top" ></span>
                        <img src="" alt="" className='img-fluid' />
                        {/* <img src="/Netninja-image/netninja2.jpeg" alt="ebook" class=" img-fluid"> */}
                    </div>

                    {/* <!-- accordion --> */}
                    <div class="col-lg-6">
                        <div class="accordion" id="chapters">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading-1">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Chapter 1 - your first Web page
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#chapters">
                                    <div class="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#chapters">
                                    <div class="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#chapters">
                                    <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


        {/* reviews list */}
        <section id="reviews" class="bg-light">
            <div class="container-lg">
                <div class="text-center">
                    <h2>
                        <i class="bi bi-stars"></i>
                        Book Reviews
                    </h2>
                    <p class="lead text-muted">What my sudents have said about the book...</p>
                </div>

                <div class="row justify-content-center my-5">
                    <div class="col-lg-8">
                        <div class="list-group">
                            <div class="list-group-item py-3">
                                <div class="pb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-half"></i>
                                </div>
                                <h5 class="mb-1">A must buy for every aspiring web dev</h5>
                                <p class="mb-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse ea quae officiis laboriosam odio nobis id amet? Impedit vero debitis asperiores. Error iusto quia laborum consequatur. Reprehenderit, voluptas consequuntur.
                                </p>
                                <small>Review by Mario</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <div class="list-group">
                            <div class="list-group-item py-3">
                                <div class="pb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-half"></i>
                                </div>
                                <h5 class="mb-1">A must buy for every aspiring web dev</h5>
                                <p class="mb-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse ea quae officiis laboriosam odio nobis id amet? Impedit vero debitis asperiores. Error iusto quia laborum consequatur. Reprehenderit, voluptas consequuntur.
                                </p>
                                <small>Review by Mario</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <div class="list-group">
                            <div class="list-group-item py-3">
                                <div class="pb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-half"></i>
                                </div>
                                <h5 class="mb-1">A must buy for every aspiring web dev</h5>
                                <p class="mb-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse ea quae officiis laboriosam odio nobis id amet? Impedit vero debitis asperiores. Error iusto quia laborum consequatur. Reprehenderit, voluptas consequuntur.
                                </p>
                                <small>Review by Mario</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <div class="list-group">
                            <div class="list-group-item py-3">
                                <div class="pb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-half"></i>
                                </div>
                                <h5 class="mb-1">A must buy for every aspiring web dev</h5>
                                <p class="mb-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse ea quae officiis laboriosam odio nobis id amet? Impedit vero debitis asperiores. Error iusto quia laborum consequatur. Reprehenderit, voluptas consequuntur.
                                </p>
                                <small>Review by Mario</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <div class="list-group">
                            <div class="list-group-item py-3">
                                <div class="pb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-half"></i>
                                </div>
                                <h5 class="mb-1">A must buy for every aspiring web dev</h5>
                                <p class="mb-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse ea quae officiis laboriosam odio nobis id amet? Impedit vero debitis asperiores. Error iusto quia laborum consequatur. Reprehenderit, voluptas consequuntur.
                                </p>
                                <small>Review by Mario</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* contact form  */}
        {/* form-control, form-label, form-select, form-input, input-group e.t.c  */}
        <section id="contact">
            <div class="container-lg">
                <div class="text-center">
                    <h2>Get in Touch</h2>
                    <p class="lead">Question to ask? Fill out the form to contact me directly</p>
                </div>


                <div class="row justify-content-center my-5">
                    <div class="col-lg-6">
                        <form>
                            <div class="py-2">
                                <label for="email" class="form-label">Email address:</label>
                                <div class="input-group mb-4">
                                    <span class="input-group-text">
                                        <i class="bi bi-envelope-fill"></i>
                                    </span>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="e.g. Abasskola10@yahoo.com" />
                                </div>

                                <label for="name" class="form -label">Name:</label>
                                <div class="input-group mb-4">
                                    <span class="input-group-text">
                                        <i class="bi bi-person-fill"></i>
                                    </span>
                                    <input type="text" class="form-control" id="name" placeholder="e.g. Abass" />
                                    <span class="input-group-text" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="custom-tooltip"
                                        data-bs-title="This top tooltip is themed via CSS variables.">
                                        <i class="bi bi-question-octagon"></i>
                                    </span>
                                </div>
                            </div>

                            <label for="subject" class="form-label">What is your question about?</label>
                            <div class="input-group mb-4">
                                <span class="input-group-text">
                                    <i class="bi bi-chat-left-dots-fill"></i>
                                </span>
                                <select name="" id="subject" class="form-select">
                                    <option value="pricing" selected>Pricing query</option>
                                    <option value="Content">Content query</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div class="form-floating mb-4 mt-5">
                                <textarea name="" id="query" class="form-control"></textarea>
                                <label for="query">Your query...</label>
                            </div>

                            <div class="mb-4 text-center placeholder-glow">
                                <button type="submit" class="btn btn-secondary btn-wave">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Hero