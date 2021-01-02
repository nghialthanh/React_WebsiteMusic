import React,{useEffect, useState, useRef} from "react";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import Footer from "../HomePage/Footer/Footer";
import { 
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col, } from "reactstrap";
import dataAudio from "../HomePage/dataAudio";
import { useDispatch, useSelector } from "react-redux";
import { setMusictoAudio , setindexMusictoAudio, setshowAudioPlay} from '../../actions/ListMusic';

function NewMusic(props) {
  const [_colorI, _setColorI] = useState("far fa-heart");
  const [_Index,_setIndex] = useState(-1);
  const listmusic = useSelector(state => state.ListMusic.ListMusic);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const action = setMusictoAudio(dataAudio);
    dispatch(action);
    if(props.index!==-1)
      handleSetAudio(null,props.index);
  },[props.index],[dataAudio]);

  //////////////////// set wave Animation for IMg
  const handleSetAudio = (e,index) =>{
    document.getElementsByClassName('list-group-item')[index].classList.add('animation');
    if(_Index!==-1)
      document.getElementsByClassName('list-group-item')[_Index].classList.remove('animation');
    _setIndex(index); 
    if(e!==null){
        const action3 = setshowAudioPlay(false);
        const action = setMusictoAudio(e)
        const action2 = setindexMusictoAudio(index);
        dispatch(action);
        dispatch(action2);
        dispatch(action3)
        
    }
  }
  const handlesetEleI = () =>{
    if (_colorI === "far fa-heart")
      _setColorI("fas fa-heart red")
    else
      _setColorI("far fa-heart")
  }
  const renderList = () => {
    return listmusic.map((e,index) => {
      return(
            <ListGroupItem key={e.id}>
              <Row>
                <img src={e.image} onClick={() => handleSetAudio(dataAudio,index)}  alt="Music"/>
                <div className="img" onClick={() => handleSetAudio(dataAudio,index)}>
                  <i className="fas fa-play" ></i>
                </div>
                <div className='bars'>
                  <div className='bar'></div>
                  <div className='bar'></div>
                  <div className='bar'></div>
                  <div className='bar'></div>
                  <div className='bar'></div>
                  <div className='bar'></div>
                  <div className='bar'></div>
                  <div className='bar'></div>
                </div>
                <Col md="10">
                  <Row>
                    <span>{e.title}</span>
                  </Row>
                  <Row>
                    <span className="small">{e.artist}</span>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <i className={_colorI} onClick={() => handlesetEleI()}></i>
                    <i className="fas fa-ellipsis-h"></i>
                  </Row>
                </Col>
              </Row>
            </ListGroupItem>
      )
    })
  }
  return (
	<div className="wrapper" id="home">
		<MenuHorizontal/>
      <div className="ListNewMusic">
            <Container>
                <Row>
                <Col md="5">
                    <hr className="line-info" />
                    <h1>
                    Bài Hát Mới Phát Hành
                    <span className="text-danger" onClick={() => handleSetAudio(dataAudio,0)}>{'    '}<i className="fas fa-play-circle"></i></span>
                    </h1>
                </Col>
                </Row>
                <ListGroup>
                    {renderList()}
                </ListGroup>
                
            </Container>
      </div>
		<Footer/>
	</div>
  );
}

export default NewMusic;
