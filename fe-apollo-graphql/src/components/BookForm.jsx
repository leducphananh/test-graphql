import { Button, Flex, Heading, Select, TextField } from '@radix-ui/themes';
import { Controller, useForm } from 'react-hook-form';

const BookForm = () => {
    const { control, register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('data', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Heading size="4" mb="3">
                Book Form
            </Heading>

            <Flex gap="3">
                <Flex direction="column" gap="3" style={{ flex: 1 }}>
                    <TextField.Root>
                        <TextField.Input
                            {...register('name')}
                            placeholder="Name"
                        />
                    </TextField.Root>

                    <TextField.Root>
                        <TextField.Input
                            {...register('genre')}
                            placeholder="Genre"
                        />
                    </TextField.Root>
                </Flex>
                <Controller
                    control={control}
                    name="authorId"
                    render={({ field }) => {
                        const { ref, ...restFields } = field;

                        return (
                            <Select.Root
                                onValueChange={field.onChange}
                                {...restFields}
                            >
                                <Select.Trigger placeholder="Select Author" />
                                <Select.Content>
                                    <Select.Group>
                                        <Select.Item value="orange">
                                            Orange
                                        </Select.Item>
                                        <Select.Item value="apple">
                                            Apple
                                        </Select.Item>
                                        <Select.Item value="grape">
                                            Grape
                                        </Select.Item>
                                    </Select.Group>
                                </Select.Content>
                            </Select.Root>
                        );
                    }}
                />
            </Flex>

            <Button mt="3" type="submit">
                Submit
            </Button>
        </form>
    );
};

export default BookForm;
