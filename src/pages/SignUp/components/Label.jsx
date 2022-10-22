
function Label(props){

    const {name, text} = props;
    return  <label HTMLfor={name}>{text} <span>*</span></label>
}
export default Label