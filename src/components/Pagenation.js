import React from "react";

class Pagenation extends React.Component{
    componentDidMount(){

    }
}

export default connect(
    mapStateToProps,
    { fetchStreamsWithPageNum }
  )(StreamList);
  