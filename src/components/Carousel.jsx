import React from 'react'

const Carousel = () => {
    return (
        <section class="row">
            <div class="col-md-12">
                {/* <!-- a division containing carousel content  --> */}
                <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
                    {/* <!-- division containing images  --> */}
                    <div class="carousel-inner">
                        {/* <!-- div with image 1  --> */}
                        <div class="carousel-item active">
                            <img src="images/carooo.jpg" alt="carooo" width={1400} style={{ height: "500px", objectFit: "cover" }} />
                        </div>

                        {/* <!-- div with image 2  --> */}
                        <div class="carousel-item ">
                            <img src="images/caro2.jpg" alt="caro 2" width={1400} style={{ height: "500px", objectFit: "cover" }} />
                        </div>

                        {/* <!-- div with image 3  --> */}
                        <div class="carousel-item ">
                            <img src="images/caro3.jpg" alt="caro 3" width={1400} style={{ height: "500px", objectFit:"cover" }} />
                        </div>

                        {/* <!-- div with image 4  --> */}
                        <div class="carousel-item">
                            <img src="images/iii.jpg" alt="iii" width={1400} style={{ height: "500px", objectFit:"fit" }} />
                        </div>

                        {/* <!-- previous control  --> */}
                        <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon bg-danger"></span>
                        </a>
                        {/* <!-- next control  --> */}
                        <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                            <span class="carousel-control-next-icon bg-warning"></span>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Carousel