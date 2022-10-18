function Input( props){

    const {classname,type, id, name,placeholder } = props
    return (
        <input className={classname}
              type={type}
              id={id}
              name={name}
              placeholder={placeholder}
              required
              onkeyUp=""
            />
    )
}

export default Input