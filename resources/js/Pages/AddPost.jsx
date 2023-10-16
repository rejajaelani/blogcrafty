import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextEditor from "@/Components/TextEditor";
import TextEditorV2 from "@/Components/TextEditorV2";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function AddPost({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        excerpt: "",
        content: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    AddPost
                </h2>
            }
        >
            <Head title="AddPost" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit}>
                                {/* Title start */}
                                <div>
                                    <InputLabel htmlFor="title" value="Title" />

                                    <TextInput
                                        id="title"
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        autoComplete="title"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>
                                {/* Title end */}

                                {/* Excerpt start */}
                                <div>
                                    <InputLabel
                                        htmlFor="excerpt"
                                        value="Excerpt"
                                    />

                                    <TextArea
                                        id="excerpt"
                                        name="excerpt"
                                        value={data.excerpt}
                                        className="mt-1 block w-full"
                                        cols={30}
                                        rows={5}
                                        autoComplete="excerpt"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("excerpt", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.excerpt}
                                        className="mt-2"
                                    />
                                </div>
                                {/* Excerpt end */}

                                <div>
                                    <InputLabel
                                        htmlFor="content"
                                        value="Content"
                                    />

                                    {/* <TextEditor
                                        id="content"
                                        name="content"
                                        value={data.content}
                                        className="mt-1 block w-full h-full"
                                        style={{
                                            background: "#111827",
                                            borderRadius: "10px",
                                        }}
                                        autoComplete="content"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("content", e.target.value)
                                        }
                                    /> */}

                                    <TextEditorV2 />

                                    <InputError
                                        message={errors.content}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton
                                        className="ml-4"
                                        disabled={processing}
                                    >
                                        Publish
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
