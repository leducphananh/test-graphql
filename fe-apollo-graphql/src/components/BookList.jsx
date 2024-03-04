import { gql, useQuery } from '@apollo/client';
import { Badge, Button, Card, Grid, Separator, Text } from '@radix-ui/themes';
import '../App.css';

const GET_BOOKS = gql`
    query GetBooks {
        books {
            id
            name
            genre
        }
    }
`;

const BookList = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Grid columns="2" gap="6">
            <Grid columns="3" gap="3">
                {data.books.map((book) => (
                    <Button key={book.id}>{book.name}</Button>
                ))}
            </Grid>

            <Card>
                <Text as="div" size="2" weight="bold">
                    Tên tác phẩm
                </Text>
                <Text as="div" size="2">
                    Thể loại
                </Text>
                <Text as="div" size="2">
                    Tác giả - tuổi
                </Text>

                <Separator orientation="horizontal" size="4" mt="3" mb="3" />

                <Grid columns="4" gap="3">
                    <Badge size="2">Sách 1</Badge>
                    <Badge size="2">Sách 2</Badge>
                    <Badge size="2">Sách 3</Badge>
                    <Badge size="2">Sách 4</Badge>
                    <Badge size="2">Sách 5</Badge>
                </Grid>
            </Card>
        </Grid>
    );
};

export default BookList;
