import React from 'react'
import Decorative from './Decorative';
import Form from './Form';

const Content = () => {

  return (
    <section className="content">
      <div className="content__wrapper">
        {/* title */}
        <h1 className="content__title"><span>we're</span><br />coming soon</h1>
        {/* description */}
        <p className="content__description">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
        {/* Email form */}
        <Form />
        {/* decorative background image */}
        <Decorative />
      </div>
    </section>
  )
}

export default Content