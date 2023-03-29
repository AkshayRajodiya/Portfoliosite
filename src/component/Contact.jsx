import { LocationRegular, MailRegular, PhoneRegular } from '@fluentui/react-icons'
import React from 'react'

import GithubIcon from './Icons/GithubIcon';
import LinkedinIcon from './Icons/LinkedinIcon'

const Contact = () => {
  return (
    <div>
<footer className="bg-dark text-center text-white">
<div className="container p-4">
<section className="mb-4">
<a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.linkedin.com/in/
akshay-rajodiya" role="button"
        ><LinkedinIcon /></a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/AkshayRajodiya" role="button"
        ><GithubIcon /></a>
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><LocationRegular fontSize={18} /> Mangrulpir, Dist Washim 444403</p>
          <p>
          <MailRegular fontSize={18} />
            akshayrajodiya.AR@gmail.com
          </p>
          <p><PhoneRegular fontSize={18} /> + 91 9561106706</p>
          <p><PhoneRegular fontSize={18} /> + 91 7743949495</p>
        </div>
</section>
</div>
</footer>
 </div>
 )
}

export default Contact