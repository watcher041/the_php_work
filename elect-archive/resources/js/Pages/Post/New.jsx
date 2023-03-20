
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function New(props) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        body: '',
    });

    // useEffect(() => {
    //     return () => {
    //         reset('password', 'password_confirmation');
    //     };
    // }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('post.store'));
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <GuestLayout>
                <Head title="新規投稿" />

                <form onSubmit={submit}>
                    <div>
                        <InputLabel forInput="title" value="Title" />

                        <TextInput
                            type="text"
                            name="title"
                            value={data.title}
                            className="mt-1 block w-full"
                            autoComplete="title"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.title} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel forInput="body" value="Body" />

                        <TextInput
                            type="text"
                            name="body"
                            value={data.body}
                            className="mt-1 block w-full"
                            autoComplete="body"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.body} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ml-4" processing={processing}>
                            投稿
                        </PrimaryButton>
                    </div>

                </form>
            </GuestLayout>
        </AuthenticatedLayout>
    );
}
