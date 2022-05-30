function Right(props) {
  return (
    <div class="Right">
      <div class="img">
        <img src={props.image} className="new_img"></img>
      </div>
      <div class="title">
        <h3 className="title_new">{props.title}</h3>
      </div>
    </div>
  );
}

export default Right;
