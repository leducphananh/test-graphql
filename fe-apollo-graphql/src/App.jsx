import { Container, Flex, Grid, Heading } from '@radix-ui/themes';
import AuthorForm from './components/AuthorForm';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () => {
    return (
        <Container>
            <Flex direction="column" gap="5">
                <Heading color="cyan">Book List</Heading>

                <Grid columns="2" gap="6">
                    <BookForm />

                    <AuthorForm />
                </Grid>

                <BookList />
            </Flex>
        </Container>
    );
};

export default App;
