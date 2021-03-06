import React,{Component} from 'react';



class ContactForm extends Component{

    render=()=>{
        return(
            <form action="#" class="bg-white p-5 contact-form">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Name" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Email" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Subject" />
              </div>
              <div class="form-group">
                <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5" />
              </div>
            </form>
        );
    }
}

export default ContactForm;