class Website extends React.Component {
    state = {
        id : 1,
        full_name : '',
        short_name : '',
        foundation_date : '',
        tag_line : '',
        logo_url : '',
        address : '',
        contact_number : '',
        gmap_src : '',
        HeroImages : [],
        NormalImages : [],
        Url : `${window.location.protocol}//${window.location.hostname}:${window.location.port}`,
    }
    style = {
        website : {
            textAlign : 'left',
        },
        heading : {
            color : '#7DC95E',
        }
    }
    componentWillMount = ()=>{
        const {Url} = this.state;
        axios.get(`${Url}/api/brand/1/details/`)
            .then((response)=>{
                const {
                    full_name,
                    short_name,
                    foundation_date,
                    tag_line,
                    logo_url,
                    address,
                    contact_number,
                    gmap_src,

                } = response.data;
                this.setState({
                    full_name,
                    short_name,
                    foundation_date,
                    tag_line,
                    logo_url,
                    address,
                    contact_number,
                    gmap_src,
                })
            })
            .catch((response,error)=>{
                console.log(error);
                alert(response.message);
            })
    }

    render = ()=>{
      const {
          website,
          heading,
      } = this.style;
      const {
        full_name,
        short_name,
        foundation_date,
        tag_line,
        logo_url,
        address,
        contact_number,
        gmap_src,
        
      } = this.state;
      return(
        <div style={website} className='row'>
         
          <div className='col-md-6'>
                <input 
                    name='full_name' 
                    className='form-control' 
                    placeholder='Brand Full Name' 
                />
          </div>
          <div className='col-md-6'>

          </div>
        </div>
      );
    }
  }