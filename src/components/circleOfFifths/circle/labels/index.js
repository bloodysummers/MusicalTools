import React from 'react';
import { Text } from 'react-native-svg';

const Labels = ({ slices, fontSize }) => {
    return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
            <Text
                key={index}
                x={pieCentroid[0]}
                y={pieCentroid[1]}
                fill="white"
                textAnchor="middle"
                alignmentBaseline="middle"
                fontWeight="bold"
                fontSize={fontSize || 16}
                transform={`rotate(15, ${labelCentroid[0]}, ${labelCentroid[1]})`}
                onPress={data.svg.onPress}
            >
                {data.name}
            </Text>
        )
    });
};

export default Labels;