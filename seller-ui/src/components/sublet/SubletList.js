import React,{Component} from 'react';
import {connect} from 'react-redux';

// importing selectors
import {
    selectSubletList,

} from '../../Redux/Sublet/Sublet.selectors';

class SubletList extends Component{

    render = ()=>{
        const {
            subletList,

        } = this.props;
        return (
            <div className="sublet-list">
                <h2>Sublets</h2>
                <div className="list">
                    {
                        subletList &&
                        subletList.map((sublet,i)=>{
                            return(
                                <div className="one-sublet" key={i}>
                                    <h4>{sublet.value}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        );
    }
}

const mapStateToProps = state =>({
    subletList : selectSubletList(state),
})

export default connect(
    mapStateToProps,

)(SubletList);