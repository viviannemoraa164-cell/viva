import React from 'react'

const Footer = () => {
  return (
    <div>
        <section class="row bg-dark  p-4 mt-5">
        {/* <!-- child 1  --> */}
        <div class="col-md-4">
            <h2 class=" text-center text-white">About Us</h2>
            <p class="text-white">We offer the best prices to our customers acrss the entire counrty.</p>
        </div>

        {/* <!-- child 2  --> */}
        <div class="col-md-4">
            <h2 class="text-center text-white">Contact Us</h2>
            <form action="">
                <input type="email" placeholder="Enter your email" class="form-control" /><br/><br/>
                <textarea name="" id="" class="form-control" placeholder="Leave a comment"></textarea><br />
                <input type="submit" value="Send Message" class="btn btn-outline-danger"/>
            </form>
        </div>

        {/* <!-- child 3  --> */}
        <div class="col-md-4">
            <h2 class="text-center text-white">Follow for more</h2>
            <a href="https://facebook.com">
                <img src="images/fb.png" alt="fb"/>
            </a>

            <a href="https://instagram.com">
                <img src="images/in.png" alt="ig"/>
            </a>

            <a href="https://twitter.com">
                <img src="images/x.png" alt="twitter"/>
            </a>

        
        </div>
    </section>
    </div>
  )
}

export default Footer