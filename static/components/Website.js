class Website extends React.Component {
    state = {
        brand : {},
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
               
                this.setState({
                    brand : response.data,
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
        brand,
        
      } = this.state;
      
      return(
        <div style={website} className='row'>
         
          <div className='col-md-4'>
            <BrandEditForm 
                brand={brand}
            />
          </div>
          <div className='col-md-4'>
              <HeroImageEdit 
                brand={brand}
              />
          </div>
          <div className='col-md-4'>

          </div>
        </div>
      );
    }
  }