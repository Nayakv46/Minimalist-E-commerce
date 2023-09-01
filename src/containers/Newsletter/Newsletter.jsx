import React from 'react'
import './newsletter.css';

const Newsletter = () => {
  return (
    <section className="raouf__newsletter">
        <div className="raouf__newsletter-content">
            <h2>Newsletter</h2>

            <form>
                <input type="email" placeholder="your@email.com" />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>
  )
}

export default Newsletter