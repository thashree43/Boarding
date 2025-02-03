const mynew = (props) => {
    return <div>{props.message}</div>;
  };
  
  // Wrap component
  const mywrap = (Wrapcompo) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
      console.log("Component rendered with props", props);
      return <Wrapcompo {...props} />;
    };
  };
  
  export { mynew, mywrap };
  
  // Create the enhanced component
  export const Enhancedcompo = mywrap(mynew);
  