import { Spinner, HStack, Heading } from 'native-base';

const LoadingScreen = ({ text = 'Loading' }) => {
    return (
        <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="md">
                {text}
            </Heading>
        </HStack>
    );
};

export default LoadingScreen;
