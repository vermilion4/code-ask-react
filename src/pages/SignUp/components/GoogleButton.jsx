
function GoogleButton (props){
 const {classname,svgclassname, width, height, viewbox, fill, colorFill1,  colorFill2,  colorFill3,  colorFill4, text}= props
    return(
      
        <button className={classname}>
        <svg className={svgclassname} width={width} height={height} viewBox={viewbox}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5372 6.69436H14.0002V6.66669H8.00016V9.33336H11.7678C11.2182 10.8857 9.74116 12 8.00016 12C5.79116 12 4.00016 10.209 4.00016 8.00002C4.00016 5.79103 5.79116 4.00003 8.00016 4.00003C9.01983 4.00003 9.9475 4.38469 10.6538 5.01303L12.5395 3.12736C11.3488 2.01769 9.75616 1.33336 8.00016 1.33336C4.3185 1.33336 1.3335 4.31836 1.3335 8.00002C1.3335 11.6817 4.3185 14.6667 8.00016 14.6667C11.6818 14.6667 14.6668 11.6817 14.6668 8.00002C14.6668 7.55303 14.6208 7.11669 14.5372 6.69436Z"
            fill={colorFill1}
          /> 
          <path
            d="M2.10205 4.89703L4.29238 6.50336C4.88505 5.03603 6.32038 4.00003 8.00005 4.00003C9.01972 4.00003 9.94738 4.38469 10.6537 5.01303L12.5394 3.12736C11.3487 2.01769 9.75605 1.33336 8.00005 1.33336C5.43938 1.33336 3.21872 2.77903 2.10205 4.89703Z"
            fill={colorFill2}
          />
           <path
            d="M7.99994 14.6667C9.72194 14.6667 11.2866 14.0077 12.4696 12.936L10.4063 11.19C9.71446 11.7162 8.86909 12.0007 7.99994 12C6.26594 12 4.79361 10.8944 4.23894 9.35136L2.06494 11.0264C3.16827 13.1854 5.40894 14.6667 7.99994 14.6667Z"
            fill={colorFill3}
          /> 
          <path
            d="M14.537 6.69437H14V6.6667H8V9.33337H11.7677C11.5047 10.0722 11.0311 10.7178 10.4053 11.1904L10.4063 11.1897L12.4697 12.9357C12.3237 13.0684 14.6667 11.3334 14.6667 8.00004C14.6667 7.55304 14.6207 7.1167 14.537 6.69437Z"
            fill={colorFill4}
          /></svg
        >{text}
      </button>
     
    )
}

export default GoogleButton