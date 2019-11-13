class MainWidget extends React.Component{

    render = ()=>{
        return(
            <div className='main-widget'>
                <div class="search-box">
                    <button style="background-color:black;color:white;"><i class="fa fa-search" aria-hidden="true"></i></button>
                    <input type="text" placeholder="Search Product" id="serach_box" />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<MainWidget />,document.getElementById("main-widget-container"));