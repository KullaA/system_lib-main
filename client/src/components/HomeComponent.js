import React,{Component} from 'react';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

render(){
    return(
        <div className="container mt-4 home text-center align-self-center">
        <br/><br/><br/>
        <div className='box_dark'>
            <div className="row mt-3 darkbg text-center justify-content-center">
            <h1 align="center">Library Management System</h1>
            </div>
            
            <div className="row darkbg">
            <h6>
            Quisque tristique eros odio, nec pharetra lacus lacinia eu. Phasellus in dictum est. Nam tortor tellus, venenatis eu tellus sit amet, luctus pretium ipsum. Aenean facilisis ligula vel pharetra porttitor. Quisque at luctus quam.
             Praesent ornare dapibus magna, eget mollis libero facilisis vitae. Sed tincidunt metus a porta scelerisque.x
            <br/><br/> </h6>z
            </div>
            <div className="row darkbg justify-content-center">

            <br/>
                </div>
            </div>
            </div>
        );
}

}

export default Home;