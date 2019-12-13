import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const ProductOverViewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);

    return (
        <FlatList 
            data={products} 
            keyExtractor={item => item.id} 
            renderItem={itemData => <Text>{itemData.item.title}</Text>}
        />
    );
};

ProductOverViewScreen.navigationOptions = {
    headerTitle: 'All Products'
};

export default ProductOverViewScreen;