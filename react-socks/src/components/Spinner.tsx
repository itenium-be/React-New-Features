import React from 'react';

// Memo should be used only as a performance optimization
// If you don't need, don't use it!


const Spinner = () => (
    <div className="spinner">
        <i className="fas fa-spinner fa-spin" />
    </div>
);

export default React.memo(Spinner);







// Full example:

function areEqual(prevProps: any, nextProps: any) {
    return true; // when prev/next props are considered equal
  }

const MyComponent = React.memo(function MyComponent(props) {
    return <div />;
}, areEqual);
