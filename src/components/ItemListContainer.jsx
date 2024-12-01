/* eslint-disable react/prop-types */
const ItemListContainer = ({ greeting }) => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>{greeting}</h2>
        </div>
    );
};

export default ItemListContainer;