import { Button, Flex, Heading, TextField } from '@radix-ui/themes';

const AuthorForm = () => {
    return (
        <form>
            <Heading size="4" mb="3">
                Author Form
            </Heading>

            <Flex direction="column" gap="3">
                <TextField.Root>
                    <TextField.Input placeholder="Name" />
                </TextField.Root>
                <TextField.Root>
                    <TextField.Input placeholder="Age" />
                </TextField.Root>
            </Flex>

            <Button mt="3" type="submit">
                Submit
            </Button>
        </form>
    );
};

export default AuthorForm;
