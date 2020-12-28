import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Drawer, DrawerItem, Text, IndexPath } from '@ui-kitten/components';

export const CustomDrawer = ({ navigation, descriptors, state }) => {
    return (
        <>
            <Text category="h4" style={styles.title}>MusicalTools</Text>
            <Drawer
                selectedIndex={new IndexPath(state.index)}
                onSelect={index => navigation.navigate(state.routeNames[index.row])}
            >
                {state.routes.map(item => (
                    <DrawerItem
                        key={item.key}
                        title={descriptors[item.key].options.title}
                        onPress={() => navigation.navigate(item.name)}
                    />
                ))}
            </Drawer>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        margin: 15,
        fontWeight: 'bold'
    }
});