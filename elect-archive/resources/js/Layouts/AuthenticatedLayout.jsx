
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/inertia-react';

export default function Authenticated({ auth, children }) {

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100"  style={{ backgroundColor: '#003333', color: 'white' }} >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/" >
                                    Elect Archive
                                </Link>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                { auth.user ? (
                                    <>  
                                        <NavLink href={route('post.index')} active={route().current('post.index')}>
                                            掲示板
                                        </NavLink>
                                        <NavLink href={route('post.new')} active={route().current('post.new')}>
                                            新規投稿
                                        </NavLink>
                                    </>
                                ) : (
                                    <>
                                        <NavLink href={route('login')}>
                                            ログイン
                                        </NavLink>
                                        <NavLink href={route('register')}>
                                            新規登録
                                        </NavLink>
                                    </>
                                )}
                            </div>
                        </div>

                        { auth.user ? (
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {auth.user.name}

                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                                マイページ
                                            </Dropdown.Link>
                                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                                アカウント設定
                                            </Dropdown.Link>
                                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                                ログアウト
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
